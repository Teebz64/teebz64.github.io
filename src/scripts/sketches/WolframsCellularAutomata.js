import React, { PureComponent } from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import { getRandomInt } from '../helpers/mathUtils'
import { TweenLite, TimelineLite } from "gsap";
import * as helpers from '../helpers/WolframsCellularAutomata/helpers'
import dat from 'dat.gui'
import _ from 'lodash'

const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
const cellsPerRow = 40

export default class WolframsCellularAutomata extends PureComponent {
    constructor(props, context) {
        super(props)

        this.frameCount = 0
        this.generationIndex = 0
        this.cellIndex = 0

        this.cameraPosition = new THREE.Vector3(16, 5, 16)
       // this.gui = new dat.GUI()
        this.resetCount = 15

        this.cameraFocus = new THREE.Vector3(0,-5,0)
        this.ruleSet = this.generateRandomRuleset()

        // this.bufferGeometry = new THREE.BufferGeometry()
        // this.bufferGeometry.addAttribute( 'position', new THREE.BufferAttribute( boxVertices, 3 ) );


        this.config = {
            cellsPerRow: cellsPerRow,
            cellOffset: cellsPerRow / 8,
            incrementUntilRandomRules: 10,
            tweenDistance: 2,
            tweenSpeed: 1.5,
            autoGenRate: 32,
            towerRotationSpeed: .001,
            shownGenerations: 15,
            animationParams: (i) => ({
                ease: "easeInOutStrong",
                delay: i * .3,
            })
        }

        this.zxCoordinates = helpers.zxCoordinateHelper(this.config)

        this.cells = {
            byId: {},
            allIds: []
        }

        _.times(this.config.cellsPerRow, (i) => {
            this.cells.byId[i] = {
                id: i,
                value: getRandomInt(2),
                x: this.zxCoordinates[i].x - this.config.cellOffset,
                y: 0,
                z: this.zxCoordinates[i].z - this.config.cellOffset
            }
            this.cells.allIds.push(i)
            this.cellIndex++
        })

        this.generations = {
            byId: {
                [this.generationIndex]: {
                    id: this.generationIndex,
                    cells: this.cells.allIds
                }
            }
        }

        this._onAnimate = () => {
            this.frameCount++
            this.tower.rotation.y = this.tower.rotation.y + this.config.towerRotationSpeed
            this.tower.position.y = this.tower.position.y - 1/this.config.autoGenRate
            if (this.frameCount % this.config.autoGenRate === 0) {
                this.generate()
            }

            if (this.frameCount % 100 === 0) {
            }
        }
    }

    componentDidMount() {
        this.cameraFocus.x = .1
        this.camera.lookAt(this.cameraFocus)
        //this.initGui()
    }

    generateRandomRuleset = () => {
        const ruleset = [
            getRandomInt(2),
            getRandomInt(2),
            getRandomInt(2),
            getRandomInt(2),
            getRandomInt(2),
            getRandomInt(2),
            getRandomInt(2),
            getRandomInt(2)
        ]

        console.log(ruleset)

        return ruleset
    }

    initGui = () => {
        this.gui.add(this, 'generate')
    }

    tweenIn = (cell, i) => {
        const tl = new TimelineLite({
            loop: false
        })

        const { y } = cell.position

        cell.position.y = y + 3

        tl.to(cell.material, this.config.tweenSpeed, {
            ...this.config.animationParams(i),
            opacity: 1,
        }).to(cell.scale, this.config.tweenSpeed, {
            ...this.config.animationParams(i),
            x: 1,
            y: 1,
            z: 1,
        }, `{-=${this.config.tweenSpeed * .8}`
        ).to(cell.position, this.config.tweenSpeed, {
            ...this.config.animationParams(i),
            y: y
        }, `{-=${this.config.tweenSpeed * .2}`)
    }

    tweenX = (cell, i) => { this.tweenIn(cell, i) }

    tweenZ = (cell, i) => { this.tweenIn(cell, i) }

    tweenOut = (cell, i, callback) => {

        const tl = new TimelineLite({
            loop: false,
            onComplete: () => {callback()}
        })

        tl.to(cell.position, this.config.tweenSpeed * 4,
            {
                ...this.config.animationParams(i),
                y: cell.position.y - 5
            }
        ).to(cell.scale, this.config.tweenSpeed, {
            x: 0.01,
            y: 0.01,
            z: 0.01
        }, `-=${this.config.tweenSpeed * 2}`)
    }

    executeRules = (left, me, right) => {
        if (left === 1 && me === 1 && right === 1) { return this.ruleSet[0] }
        if (left === 1 && me === 1 && right === 0) { return this.ruleSet[1] }
        if (left === 1 && me === 0 && right === 1) { return this.ruleSet[2] }
        if (left === 1 && me === 0 && right === 0) { return this.ruleSet[3] }
        if (left === 0 && me === 1 && right === 1) { return this.ruleSet[4] }
        if (left === 0 && me === 1 && right === 0) { return this.ruleSet[5] }
        if (left === 0 && me === 0 && right === 1) { return this.ruleSet[6] }
        if (left === 0 && me === 0 && right === 0) { return this.ruleSet[7] }
        return 0
    }

    generate = () => {
        this.generationIndex++
        const prevGenIndex = this.generationIndex - 1
        const prevGen = this.generations.byId[prevGenIndex]
        const y = this.generationIndex

        this.generations = {
            byId: {
                ...this.generations.byId,
                [this.generationIndex]: {
                    id: this.generationIndex,
                    cells: []
                }
            },
            allIds: []
        }

        _.times(this.config.cellsPerRow, (i) => {
            this.cellIndex++
            const leftId = prevGen.cells[i-1]
            const meId = prevGen.cells[i]
            const rightId = prevGen.cells[i+1]

            const left  = leftId ? this.cells.byId[leftId].value : undefined
            const me    = this.cells.byId[meId].value
            const right = rightId ? this.cells.byId[rightId].value : undefined
            const id = this.cellIndex
            const value = this.executeRules(left, me, right)
            const x = this.zxCoordinates[i].x - this.config.cellOffset
            const z = this.zxCoordinates[i].z - this.config.cellOffset

            this.cells = {
                ...this.cells,
                byId: {
                    ...this.cells.byId,
                    [this.cellIndex]: {
                        id,
                        value,
                        x,
                        y,
                        z,
                    }
                },
                allIds: [...this.cells.allIds, this.cellIndex]
            }

            this.generations.byId[this.generationIndex].cells.push(this.cellIndex)

            if (value === 1) {

                const material = new THREE.MeshNormalMaterial({
                    transparent: true,
                    opacity: 0
                })
                const cell = new THREE.Mesh( geometry, material )
                cell.name = `${this.cellIndex}`
                this.tower.add(cell)
                cell.scale.set(0.01, 0.01, 0.01)
                cell.position.set(x, y, z)
                this.queueAnimation(cell, i)
            }
        })

        if (this.generationIndex % this.config.incrementUntilRandomRules === 0) {
            this.ruleSet = this.generateRandomRuleset()
        }

        if (this.generationIndex > this.config.shownGenerations) {
            this.cleanup(this.generations.byId[this.generationIndex - this.config.shownGenerations - 1])
        }
    }

    queueAnimation = (cell, i) => {
        this.tweenIn(cell, i)
    }

    cleanup = (generation) => {
        generation.cells.forEach((cellId, i) => {
            const cell = this.tower.getObjectByName(`${cellId}`)
            if (cell) {
                this.tweenOut(cell, i, () => {
                    this.tower.remove(cell)
                })
            }

            delete this.cells.byId[cellId]
        })

        this.cells.allIds = _.without(
            this.cells.allIds,
            ...generation.cells
        )

        delete this.generations.byId[generation.id]

        this.generations.allIds = _.without(
            this.generations.allIds,
            generation.id
        )
    }

    render() {
        const width = window.innerWidth
        const height = window.innerHeight

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
                        <group
                            position={
                                new THREE.Vector3(0, 10, 0)
                            }
                            ref={(group) => this.tower = group}
                        >
                        <pointLight position={new THREE.Vector3(0, 30, 0)} color={'blue'} intensity={32}/>
                        {
                            this.cells.allIds.map((cellId) => {
                                const cell = this.cells.byId[cellId]
                                if (cell.value) {
                                    return (
                                        <mesh
                                            name={`${cellId}`}
                                            key={cellId}
                                            position={new THREE.Vector3(cell.x, cell.y, cell.z)}
                                        >
                                            <boxGeometry
                                                width={1}
                                                height={1}
                                                depth={1}
                                            />
                                            <meshNormalMaterial
                                                transparent={true}
                                                opacity={0}
                                            />
                                        </mesh>
                                    )
                                }
                            })
                        }
                        </group>
                </scene>
            </React3>
        )
    }
}