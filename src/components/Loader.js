import React from "react"
import anime from 'animejs/lib/anime.es.js'


class Loader extends React.PureComponent {

    minTime = 2000
    grid = React.createRef()

    state = {
        loaded: false,
        minTimeReached: false,
        unlockedScroll: false
    }

    componentDidMount() {
        document.body.classList.add('scroll-lock')

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
        if (this.grid.current) {
            anime({
                easing: 'easeOutExpo',
                targets: this.grid.current.children,
                scaleX: [1, 0],
                duration: 1650,
                delay: anime.stagger(200),
                complete: () => {
                    this.setState({
                        unlockedScroll: true
                    })
                }
            })
        }

        setTimeout(() => {
            document.body.classList.remove('scroll-lock')
            document.body.dispatchEvent(new Event('calc-smiley'))
        }, 1500)
    }

    render() {
        const { unlockedScroll } = this.state

        return !unlockedScroll
            ? (
                <div
                    className="loader"
                >
                    <ul ref={this.grid} className="loader__grid">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            ) : (
                <React.Fragment />
            )
    }
}

export default Loader