import React from "react"
import anime from 'animejs/lib/anime.es.js'
import TextScramble from './TextScrambler'
import { ReactBasicScroll } from "react-basic-scroll"
import classNames from "classnames"

class Caption extends React.PureComponent {

    // state = {
    //     enter: false,
    //     hasEntered: false
    // }

    // scrollConfig = {
    //     from: 'bottom-bottom',
    //     to: 'top-top',
    //     timing: 'expoOut',
    //     direct: true,
    //     inside: () => this.onEnter(),
    //     outside: () => this.onExit(),
    //     // props: {
    //     //     [`--heading-opacity`]: {
    //     //         from: 0,
    //     //         to: .99
    //     //     },
    //     //     [`--accent-ty`]: {
    //     //         from: '-24px',
    //     //         to: '0px'
    //     //     },
    //     // }
    // }

    // heading = React.createRef()
    // fill = React.createRef()
    // accent = React.createRef()

    // componentDidMount = () => {
    //     this.scramble = new TextScramble(this.heading.current)
    // }

    // onEnter = () => {
    //     let enter = false
    //     let hasEntered = false

    //     if (!this.state.enter) {
    //         this.scramble.play()

    //         anime({
    //             easing: 'easeOutExpo',
    //             targets: this.accent.current,
    //             translateY: [-24, 0],
    //             opacity: [0, .99],
    //             duration: 750
    //         })

    //         anime({
    //             easing: 'easeOutExpo',
    //             targets: this.fill.current,
    //             scaleX: [0, 1],
    //             opacity: [0, .99],
    //             duration: 750
    //         })

    //         enter = true
    //     } else {
    //         return
    //     }

    //     this.setState({ enter, hasEntered })
    // }

    // onExit = () => {
    //     if (!this.state.enter) { return }
    //     this.scramble.play()

    //     anime({
    //         easing: 'easeOutExpo',
    //         targets: this.accent.current,
    //         translateY: [0, 24],
    //         opacity: [.99, 0],
    //         duration: 750
    //     })

    //     anime({
    //         easing: 'easeOutExpo',
    //         targets: this.fill.current,
    //         scaleX: [1, 0],
    //         opacity: [.99, 0],
    //         duration: 750
    //     })

    //     this.setState({ enter: false })
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (
    //         prevProps.enter === false
    //         && this.props.enter === true
    //     ) {
    //         this.onEnter()
    //     }
    // }

    render() {
        const { heading, text } = this.props

        return (
            <li
                className={classNames({
                    [`shift-${this.props.shift}`]: this.props.shift
                })}
            >
                <div className="callouts__heading-container">
                    { heading &&
                        <h6 className="callouts__heading" ref={this.heading}>
                            { heading }
                        </h6>
                    }
                    <div className="callouts__heading-fill" ref={this.fill} />
                    <div className="callouts__heading-accent" ref={this.accent} />
                    {/*<ReactBasicScroll config={this.scrollConfig}>*/}
                        <div className="callouts__heading-anchor" />
                    {/*</ReactBasicScroll>*/}
                </div>
                <p className="callouts__text">{ text }</p>
            </li>
        )
    }
}

export default Caption