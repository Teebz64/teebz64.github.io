import React from "react"
import * as THREE from 'three'
import * as basicScroll from 'basicscroll'

class Icosohedron extends React.PureComponent {

    scrollConfig = {
        from: '0px',
        to: '800px',
        direct: true,
        props: {
            '--icosohedron-ty': {
                from: '0px',
                to: '200px'
            }
        }
    }

    container = React.createRef()

    componentDidMount() {
            this.scene = new THREE.Scene()
            this.camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            )
            this.renderer = new THREE.WebGLRenderer({
                alpha: true
            })

            this.camera.position.set( 10,10,10 )
            this.camera.lookAt( 0, 0, 0 )

            this.renderer.setSize(
                window.innerWidth,
                window.innerHeight
            )

            this.renderer.domElement.className = `icosohedron__canvas`

            this.init()
            this.buildScene()
            this.animate()
    }

    init = () => {
        this.container.current.appendChild(
            this.renderer.domElement
        )

        const path = '/images/textures'
        const fileName = 'scramble.jpg'

        this.textureCube = THREE.ImageUtils.loadTextureCube([
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`
        ])

        this.reflectiveMaterial = new THREE.MeshBasicMaterial({
            color: 0x979797,
            envMap: this.textureCube,
            // wireframe: true
        })
    }

    buildScene = () => {
        this.buildSmallIcosahedron()
        this.buildLargeIcosahedron()
        this.buildLights()
        this.afterBuild()
    }

    afterBuild = () => {
        this.basicScroll = basicScroll.create({
            elem: document.querySelector('.icosohedron__canvas'),
            ...this.scrollConfig
        })

        this.basicScroll.start()
    }

    buildSmallIcosahedron = () => {
        const geometry = new THREE.IcosahedronGeometry( 3 )

        this.smallIcosahedron = new THREE.Mesh(
            geometry,
            this.reflectiveMaterial
        )

        this.scene.add( this.smallIcosahedron )
    }

    buildLargeIcosahedron = () => {
        const geometry = new THREE.IcosahedronGeometry( 200 )

        this.largeIcosahedron = new THREE.Mesh(
            geometry,
            this.reflectiveMaterial
        )

        this.largeIcosahedron.position.set( 0, -100, -400 )

        this.scene.add( this.largeIcosahedron )
    }

    buildLights = () => {
        this.light = new THREE.PointLight( 0xffffff, 1.5 )
        this.light.position.set( 30, 30, 30 )

        this.scene.add( this.light )
    }

    animate = () => {
        requestAnimationFrame( this.animate )
        this.shaderTime += 0.1;

        this.largeIcosahedron.rotation.y += .001
        this.smallIcosahedron.rotation.z += .003

        this.renderer.render(
            this.scene,
            this.camera
        )
    }

    render() {
        return (
            <div ref={this.container} className="icosohedron" />
        )
    }
}

export default Icosohedron