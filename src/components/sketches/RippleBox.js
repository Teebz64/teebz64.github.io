import React from "react"
import times from 'lodash/times'
import dat from 'dat.gui'
import * as THREE from 'three'

class RippleBox extends React.PureComponent {

    frameCount = 0
    bandIndex = 0
    config = {
        numBandsX: 20,
        numBandsZ: 20,
        bandSize: 7,
        bandSpacing: 0,
        yOffset: -20,
        xOffset: -50,
        aSpeed: .11,
        bandScaleFactor: 5,
        crestScaleFactor: 4,
        xyScaleMin: 1,
        frequencyModulation: .02,
        aspectRatio: 1.75
    }

    container = React.createRef()
    scene = new THREE.Scene()

    mapRange = (value, low1, high1, low2, high2) => {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
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
            alpha: true
        })
        this.setSize()
        this.camera.position.set( 80, 200, 80 )
        this.camera.lookAt( 0, 0, 0 )

        this.renderer.domElement.className = `ripple-cube__canvas`
        this.center = new THREE.Vector3(0,60,0)
        this.camera.lookAt(this.center)
        this.init()
    }

    init = () => {
        this.container.current.appendChild(
            this.renderer.domElement
        )
        this.bindEvents()
        this.buildMeshes()
        this.translateMeshes()
        this.buildLight()
        this.initGui()
        this.animate()
    }

    getSize = () => {
        const width = this.container.current.offsetWidth
        const height = width * this.config.aspectRatio
        console.log(width, height, this.container.current)
        return { width, height }
    }

    setSize = () => {
        const size = this.getSize()

        this.camera.aspect = size.width / size.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(
            size.width,
            size.height
        )
    }

    bindEvents = () => {
        // this.meshes.forEach(function(mesh) => {
        // })
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

    updateBandSpacing = val => {
        const { config } = this
        let bandId = 0
        times(config.numBandsX, (x) => {
            times(config.numBandsZ, (z) => {
                const band = this.scene.getObjectByName(`band-${bandId + 1}`)
                bandId++
                const xOff = ((config.bandSize + config.bandSpacing) * config.numBandsX * -0.5)
                const zOff = ((config.bandSize + config.bandSpacing) * config.numBandsZ * -0.5)
                band.position.set(
                    x * (config.bandSize + config.bandSpacing) + xOff,
                    0 * (config.bandSize + config.bandSpacing) + config.yOffset,
                    z * (config.bandSize + config.bandSpacing) + zOff,
                )
                band.geometry.parameters.width = config.bandSize
                band.geometry.parameters.height = config.bandSize
                band.geometry.parameters.depth = config.bandSize
            })
        })
    }

    buildLight = () => {
        this.light = new THREE.PointLight('#ffffff', 5)
        this.light.position.set(-20, 50, -20)
        //this.light.castShadow = true
        this.scene.add(this.light)
    }

    initGui = () => {
        this.gui = new dat.GUI({
            autoplace: false
        })
        this.gui.add(this.config, 'aSpeed', 0, .2)
        this.gui.add(this.config, 'bandScaleFactor', 0, 30)
        this.gui.add(this.config, 'frequencyModulation', 0, .2).step(.01)
        this.bandSpacer = this.gui.add(this.config, 'bandSpacing', -5, 0)
        this.bandSpacer.step(.1)
        this.bandSpacer.onChange(() => {
            this.updateBandSpacing()
        })
        // this.gui.add(this.config, 'xyScaleMin', -1, 1)
        this.container.current.appendChild(this.gui.domElement)
        this.gui.domElement.classList.add('ripple-cube__gui')
    }

    animate = () => {
        const { config } = this
        this.frameCount++
        times(this.bandIndex, (bandId) => {
            const band = this.scene.getObjectByName(`band-${bandId + 1}`)
            const dist = band.position.distanceTo(this.center)
            const aOffset = (((dist * config.aSpeed) * -1) + this.frameCount * .02)
            const a = this.frameCount * config.frequencyModulation + aOffset
            // const crest = (Math.sin(this.frameCount * .02) + 1) * config.crestScaleFactor
            const crest = 1.5
            const xyScale = this.mapRange(dist, 50, 120, 1, config.xyScaleMin)

            band.scale.set(
                xyScale,
                (Math.sin(a) * (config.bandScaleFactor - dist * .2)) + crest,
                xyScale
            )
        })
        this.renderer.render(
            this.scene,
            this.camera
        )

        requestAnimationFrame( this.animate )
    }

    translateMeshes = () => {
        const { config } = this
        times(this.bandIndex, (bandId) => {
            const band = this.scene.getObjectByName(`band-${bandId + 1}`)
            band.translateY(50)
            band.translateX((config.bandSize + config.bandSpacing) * config.numBandsX * -0.5)
            band.translateZ((config.bandSize + config.bandSpacing) * config.numBandsZ * -0.5)
        })
    }

    render = () => <figure ref={this.container} className="ripple-cube__container" />
}

export default RippleBox