import React, { PureComponent } from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import _ from 'lodash'
import { mapRange } from '../helpers/mathUtils'
import dat from 'dat.gui'

export default class RippleBox extends PureComponent {
    constructor(props, context) {
        super(props, context)
        this.cameraPosition = new THREE.Vector3(80, 80, 80)
        this.frameCount = 0

        this.gui = new dat.GUI()

        this.config = {
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
            frequencyModulation: .02
        }

        this.colors = {
            teal: '0x7FE8C9',
            pink: '0xDA4BC9',
            purple: '0x254AC9'
        }

        this.bandIndex = 0
        this.center = new THREE.Vector3(0,-20,0)

        this._onAnimate = () => {
            const { config } = this
            this.frameCount++
            _.times(this.bandIndex, (bandId) => {
                const band = this.scene.getObjectByName(`band-${bandId + 1}`)
                const dist = band.position.distanceTo(this.center)
                const aOffset = (((dist * config.aSpeed) * -1) + this.frameCount * .02)
                const a = this.frameCount * config.frequencyModulation + aOffset
                const crest = (Math.sin(this.frameCount * .02) + 1) * config.crestScaleFactor
                const xyScale = mapRange(dist, 50, 120, 1, config.xyScaleMin)

                band.scale.set(
                    xyScale,
                    (Math.sin(a) * (config.bandScaleFactor - dist * .2)) + crest,
                    xyScale
                )
            })
        }
    }

    componentDidMount() {
        const { config } = this
        this.initGui()

        this.camera.lookAt(this.center)
        _.times(this.bandIndex, (bandId) => {
            const band = this.scene.getObjectByName(`band-${bandId + 1}`)
            band.lights = true
            band.castShadow = true
            band.receiveShadow = true
            band.translateX((config.bandSize + config.bandSpacing) * config.numBandsX * -0.5)
            band.translateZ((config.bandSize + config.bandSpacing) * config.numBandsZ * -0.5)
        })
        this.light.castShadow = true
    }

    initGui = () => {
        this.gui.add(this.config, 'aSpeed', 0, .2)
        this.gui.add(this.config, 'bandScaleFactor', 0, 30)
        this.gui.add(this.config, 'frequencyModulation', 0, .2).step(.01)
        this.bandSpacer = this.gui.add(this.config, 'bandSpacing', -5, 5)
        this.bandSpacer.step(.1)
        this.bandSpacer.onChange(() => {
            this.updateBandSpacing()
        })
        this.gui.add(this.config, 'xyScaleMin', -1, 1)
    }

    updateBandSpacing = (val) => {
        const { config } = this
        let bandId = 0
        _.times(config.numBandsX, (x) => {
            _.times(config.numBandsZ, (z) => {
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

    render() {
        const { config } = this
        const width = window.innerWidth
        const height = window.innerHeight
        let index

        return (
            <React3
                mainCamera="camera"
                width={width}
                height={height}
                onAnimate={this._onAnimate}
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
                        far={1000}
                        position={this.cameraPosition}
                    />
                    <pointLight
                        ref={(light) => this.light = light}
                        color={0xffffff}
                        intensity={5}
                        position={new THREE.Vector3(-20, 50, -20)}
                    />
                    {
                        _.times(config.numBandsX, (x) => {
                            return _.times(config.numBandsZ, (z) => {
                                this.bandIndex++
                                return (
                                    <mesh
                                        name={`band-${this.bandIndex}`}
                                        key={this.bandIndex}
                                        position={new THREE.Vector3(
                                            x * (config.bandSize + config.bandSpacing),
                                            0 * (config.bandSize + config.bandSpacing) + config.yOffset,
                                            z * (config.bandSize + config.bandSpacing),
                                        )}
                                    >
                                        <boxGeometry
                                            name='band'
                                            width={config.bandSize}
                                            height={config.bandSize}
                                            depth={config.bandSize}
                                        />
                                        <meshNormalMaterial
                                        />
                                    </mesh>
                                )
                            })
                        })
                    }
                </scene>
            </React3>
        )
    }
}