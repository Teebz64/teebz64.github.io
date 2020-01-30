import React from "react"
// import classNames from "classnames"
import anime from 'animejs/lib/anime.es.js'
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

class PageTransition extends React.PureComponent {

    componentDidMount = () => {
        this.tl = anime.timeline({
            easing: 'easeOutExpo',
            //duration: 850,
            autoplay: false
        })

        this.tl
            .add({
                targets: '.transition__grid li',
                duration: 1,
                transformOrigin: '100% 0%'
            })
            .add({
                duration: 750, 
                targets: '.transition__grid li',
                scaleX: [0, 1.3],
                delay: anime.stagger(85),
            })
            .add({
                targets: '.transition__grid li',
                duration: 300,
                transformOrigin: '0% 100%'
            }, '-=400')
            .add({
                duration: 750, 
                targets: '.transition__grid li',
                scaleX: [1, 0],
                delay: anime.stagger(85),
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
                        enter: 530,
                        exit: 530,
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