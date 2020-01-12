import React from "react"
// import classNames from "classnames"
import anime from 'animejs/lib/anime.es.js'
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

class PageTransition extends React.PureComponent {

    componentDidMount = () => {
        this.tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 850,
            autoplay: false
        })

        this.tl
            .add({
                targets: '.transition__grid li',
                duration: 1,
                transformOrigin: '50% 0%'
            })
            .add({
                duration: 1000, 
                targets: '.transition__grid li',
                scaleY: [0, 1.3],
                delay: anime.stagger(115)
            })
            .add({
                targets: '.transition__grid li',
                duration: 1,
                transformOrigin: '50% 100%'
            }, '-=400')
            .add({
                duration: 1000, 
                targets: '.transition__grid li',
                scaleY: [1, 0],
                delay: anime.stagger(115),
            }, '-=400')
    }

    onExit = () => {
        this.tl.play()
    }

    render() {
        const { children, location } = this.props

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: 500,
                        exit: 500,
                    }}
                    onExit={this.onExit}
                    unmountOnExit={true}
                >
                    {status => {
                        return (
                            <div className={`transition transition--${status}`}>
                                {children}
                            </div>
                        )
                    }}
                </ReactTransition>
            </TransitionGroup>
        )
  }
}
export default PageTransition