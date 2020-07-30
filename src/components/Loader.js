import React from "react"
import anime from 'animejs/lib/anime.es.js'


class Loader extends React.PureComponent {

    minTime = 0
    grid = React.createRef()

    state = {
        loaded: false,
        minTimeReached: false,
        unlockedScroll: false
    }

    componentDidMount() {

        document.body
            .addEventListener('first-three-render', () => {
                this.setState({
                    loaded: true
                })
            })

        setTimeout(
            () => {
                this.setState({
                    minTimeReached: true
                })
            }, this.minTime
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const { unlockedScroll, loaded, minTimeReached } = this.state
        if (unlockedScroll) { return }

        if (loaded && minTimeReached) {
            this.onLoad()
        }
    }

    onLoad = () => {
        anime({
            easing: 'easeOutExpo',
            targets: '.icosohedron',
            opacity: [0, 0.8],
            delay: 1000,
            duration: 10000,
        })

        // anime({
        //     easing: 'easeOutExpo',
        //     targets: '.deck__heading, .deck__text',
        //     opacity: [0.01, 1],
        //     delay: anime.stagger(2500),
        //     duration: 5000,
        // })

        setTimeout(() => {
            document.body.dispatchEvent(new Event('calc-smiley'))
        }, 1500)
    }

    render() {
        return <React.Fragment />
    }
}

export default Loader