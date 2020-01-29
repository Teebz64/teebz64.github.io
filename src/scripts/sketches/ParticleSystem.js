import React, { PureComponent } from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import OrbitControls from 'three-orbit-controls'
import _ from 'lodash'
import { mapRange, toRads, getRandomIntRange, clamp } from '../helpers/mathUtils'
import dat from 'dat.gui'

const pMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 3,
    transparent: true,
    opacity: .6,
});

const lMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    opacity: 1,
    transparent: true
})

export default class ParticleSystem extends PureComponent {
    constructor(props, context) {
        super(props, context)
        this.cameraPosition = new THREE.Vector3(1500, 500, 500)
        this.cameraFocus = new THREE.Vector3(0, 0, 0)
        this.frameCount = 0
        this.config = {
            particleCount: 30000,
            numRings: 60,
            radius: 1400,
            yVariance: 0,
            aSpeed: 1,
            linesBetweenRings: 40,
            lineOffsetMaximum: 2
        }
        this.epicenter = new THREE.Vector3()
        this.ringGroups = []
        this.lines = []
    }

    createParticleSystem = () => {
        this.perRing = this.config.particleCount / this.config.numRings
        this.orbitSpacing = this.config.radius / this.config.numRings
        this.particles = new THREE.Geometry()
        const rings = {}

        let ringIndex = 1
        let stack = []
        _.times(this.config.particleCount, (i) => {
            if (i % this.perRing == 0) {
                ringIndex++
            }

            const r = (ringIndex + 1) * this.orbitSpacing
            const p = toRads(getRandomIntRange(0, 360))
            const t = 0

            stack.push({r, p, t})
        })

        const sortedStack = _.sortBy(stack, ['r', 'p'])
        console.log(sortedStack)
        sortedStack.forEach((sphericalCoords, i) => {
            const spherical = new THREE.Spherical(
                sphericalCoords.r,
                sphericalCoords.p,
                sphericalCoords.t
            )
            const vertex = new THREE.Vector3(0, 0, 0)
            vertex.setFromSpherical(spherical)
            vertex.baseX = getRandomIntRange(this.config.yVariance * -1, this.config.yVariance)

            this.particles.vertices.push(vertex)
        })

        this.particleSystem = new THREE.ParticleSystem(
            this.particles,
            pMaterial
        )

        this.particleSystem.position.set(0,0,0)
        this.scene.add(this.particleSystem)
    }

    createLines = () => {
        // this.line = new THREE.Line(this.particles, lMaterial)
        // this.scene.add(this.line)

        // this.ringGroups.forEach((ringGroup, i) => {
        //     _.times(this.config.linesBetweenRings, (j) => {
        //         if (i < this.config.numRings - 2) {
        //             let innerIndex = getRandomIntRange(0, this.perRing)
        //             let outerIndex = getRandomIntRange(
        //                 innerIndex + this.config.lineOffsetMaximum * -0.5,
        //                 innerIndex + this.config.lineOffsetMaximum * 0.5
        //             )
        //             innerIndex = clamp(innerIndex, 0, this.perRing - 1)
        //             outerIndex = clamp(outerIndex, 0, this.perRing - 1)

        //             const geometry = new THREE.Geometry()
        //             geometry.vertices.push(
        //                 this.ringGroups[i][innerIndex],
        //                 this.ringGroups[i+1][outerIndex]
        //             )

        //             const line = new THREE.Line( geometry, lMaterial )
        //             this.lines.push(line)
        //             this.scene.add(line)
        //         }
        //     })
        // })
    }

    createFog = () => {
        this.fog = new THREE.Fog(
            '#000000', 1000, 1500
        )

        this.scene.fog = this.fog
    }

    groupRings = () => {
        const { vertices } = this.particleSystem.geometry
        this.ringGroups = _.chunk(vertices, this.perRing)
    }

    componentDidMount() {
        this.createParticleSystem()
        this.groupRings()
        this.createLines()
        this.createFog()
        //this.line.verticesNeedUpdate = true
        this.camera.lookAt(this.cameraFocus)
    }

    initGui = () => {

    }

    onAnimate = () => {
        this.frameCount++

        this.particleSystem.geometry.vertices.forEach((vertex, i) => {
            const dist = mapRange(this.epicenter.distanceTo(vertex), 0, this.config.radius, 0, 40)
            const distInv = mapRange(this.epicenter.distanceTo(vertex), 0, this.config.radius, 20, 0)
            const a = this.frameCount * .007

            vertex.setX(Math.sin(a + dist * .1) * (10 + distInv * 20) * dist * .33 + distInv * 5)
        })

        this.particles.verticesNeedUpdate = true
        // this.lines.forEach((line) => line.geometry.verticesNeedUpdate = true)
        // this.particleSystem.rotation.y += .001
        // this.line.rotation.y += .001
    }

    render() {
        const { config } = this
        const width = window.innerWidth
        const height = window.innerHeight

        return (
            <React3
                mainCamera="camera"
                width={width}
                height={height}
                onAnimate={this.onAnimate}
            >
                <scene
                    ref={(scene) => this.scene = scene}
                >
                    <perspectiveCamera
                        ref={(camera) => this.camera = camera}
                        name="camera"
                        fov={75}
                        aspect={width / height}
                        near={0.1}
                        far={99000}
                        position={this.cameraPosition}
                    />
                </scene>
            </React3>
        )
    }
}