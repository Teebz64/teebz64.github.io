import React from "react"
import times from "lodash/times"
import debounce from "lodash/debounce"
import dat from "dat.gui"
import * as THREE from "three"

class RippleBox extends React.PureComponent {
    device = undefined
    animating = true
    frameCount = 0
    bandIndex = 0
    config = {
        numBandsX: 20,
        numBandsZ: 20,
        bandSize: 7,
        bandSpacing: 0,
        yOffset: -20,
        xOffset: -50,
        aSpeed: 0.06,
        bandScaleFactor: 5,
        crestScaleFactor: 4,
        xyScaleMin: 1,
        frequencyModulation: 0,
        desktopAspectRatio: 0.75,
        mobileAspectRatio: 1.75,
    }

    container = React.createRef()
    scene = new THREE.Scene()

    mapRange = (value, low1, high1, low2, high2) => {
        return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
    }

    geometry = new THREE.BoxGeometry(
        this.config.bandSize,
        this.config.bandSize * 1.4,
        this.config.bandSize
    )

    material = new THREE.MeshNormalMaterial()

    componentDidMount() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
        })
        this.camera.position.set(80, 200, 80)
        this.camera.lookAt(0, 0, 0)
        this.renderer.domElement.className = `ripple-cube__canvas`
        this.center = new THREE.Vector3(0, 60, 0)
        this.camera.lookAt(this.center)
        this.device = this.checkDevice()
        this.debouncedResize = debounce(this.onResize, 150)
        this.init()
    }

    componentWillUnmount() {
        this.animating = false
    }

    init = () => {
        this.setSize()
        this.container.current.appendChild(this.renderer.domElement)
        this.bindEvents()
        this.buildMeshes()
        this.translateMeshes()
        this.buildLight()
        this.initGui()
        this.animate()
    }

    getSize = () => {
        const aspectRatio =
            this.device === "desktop"
                ? this.config.desktopAspectRatio
                : this.config.mobileAspectRatio
        const width = this.container.current
            ? this.container.current.offsetWidth
            : undefined
        const height = width * aspectRatio
        return { width, height }
    }

    setSize = () => {
        const size = this.getSize()
        this.camera.aspect = size.width / size.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(size.width, size.height)
    }

    bindEvents = () => {
        window.addEventListener("resize", this.debouncedResize)
    }

    onResize = () => {
        this.device = this.checkDevice()
        this.setSize()
    }

    buildMeshes = () => {
        const { geometry, material, config } = this
        this.meshes = []

        times(config.numBandsX, (x) => {
            times(config.numBandsZ, (z) => {
                this.bandIndex++
                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.set(
                    x * (config.bandSize + config.bandSpacing),
                    0 * (config.bandSize + config.bandSpacing) + config.yOffset,
                    z * (config.bandSize + config.bandSpacing)
                )
                mesh.name = `band-${this.bandIndex}`
                this.meshes.push(mesh)
                this.scene.add(mesh)
            })
        })
    }

    updateBandSpacing = (val) => {
        const { config } = this
        let bandId = 0
        times(config.numBandsX, (x) => {
            times(config.numBandsZ, (z) => {
                const band = this.scene.getObjectByName(`band-${bandId + 1}`)
                bandId++
                const xOff =
                    (config.bandSize + config.bandSpacing) *
                    config.numBandsX *
                    -0.5
                const zOff =
                    (config.bandSize + config.bandSpacing) *
                    config.numBandsZ *
                    -0.5
                band.position.set(
                    x * (config.bandSize + config.bandSpacing) + xOff,
                    0 * (config.bandSize + config.bandSpacing) + config.yOffset,
                    z * (config.bandSize + config.bandSpacing) + zOff
                )
                band.geometry.parameters.width = config.bandSize
                band.geometry.parameters.height = config.bandSize
                band.geometry.parameters.depth = config.bandSize
            })
        })
    }

    buildLight = () => {
        this.light = new THREE.PointLight("#ffffff", 5)
        this.light.position.set(-20, 50, -20)
        //this.light.castShadow = true
        this.scene.add(this.light)
    }

    initGui = () => {
        this.gui = new dat.GUI({
            autoplace: false,
        })
        this.gui.add(this.config, "aSpeed", 0, 0.2)
        this.gui.add(this.config, "bandScaleFactor", 0, 30)
        this.gui.add(this.config, "frequencyModulation", -0.1, 0.1).step(0.01)
        this.bandSpacer = this.gui.add(this.config, "bandSpacing", -5, 0)
        this.bandSpacer.step(0.1)
        this.bandSpacer.onChange(() => this.updateBandSpacing())
        this.container.current.appendChild(this.gui.domElement)
        this.gui.domElement.classList.add("ripple-cube__gui")
    }

    animate = () => {
        if (!this.animating) {
            // Abandon Animation Looping
            this.destroyScene()
            return
        }

        const { config, renderer, animate } = this
        requestAnimationFrame(animate)
        this.frameCount++

        times(this.bandIndex, (bandId) => {
            const band = this.scene.getObjectByName(`band-${bandId + 1}`)
            const dist = band.position.distanceTo(this.center)
            const aOffset = dist * config.aSpeed * -1 + this.frameCount * 0.02
            const a = this.frameCount * config.frequencyModulation + aOffset
            const crest = 1.5
            const xyScale = this.mapRange(dist, 50, 120, 1, config.xyScaleMin)

            band.scale.set(xyScale, Math.sin(a) * (dist * 0.2) + crest, xyScale)
        })
        renderer.render(this.scene, this.camera)
    }

    translateMeshes = () => {
        const { config } = this
        times(this.bandIndex, (bandId) => {
            const band = this.scene.getObjectByName(`band-${bandId + 1}`)
            band.translateY(50)
            band.translateX(
                (config.bandSize + config.bandSpacing) * config.numBandsX * -0.5
            )
            band.translateZ(
                (config.bandSize + config.bandSpacing) * config.numBandsZ * -0.5
            )
        })
    }

    destroyScene = () => {
        window.removeEventListener("resize", this.debouncedResize)
        this.animate = null
        this.gui = null
        this.scene = null
        this.renderer = null
        this.camera = null
    }

    checkDevice = () => window.matchMedia("(min-width: 840px)").matches
        ? "desktop"
        : "mobile"

    render = () => (
        <figure ref={this.container} className="ripple-cube__container" />
    )
}

export default RippleBox
