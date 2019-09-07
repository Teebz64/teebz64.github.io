import React from "react"
import anime from 'animejs/lib/anime.es.js'
import TextScramble from './TextScrambler'
import { ReactBasicScroll } from "react-basic-scroll"

class Caption extends React.PureComponent {

    state = {
        enter: false,
        hasEntered: false
    }

    scrollConfig = {
        from: 'bottom-bottom',
        to: 'top-top',
        timing: 'expoOut',
        direct: true,
        inside: () => this.onEnter(),
        outside: () => this.onExit(),
    }

    heading = React.createRef()
    fill = React.createRef()
    accent = React.createRef()

    componentDidMount = () => {
        this.scramble = new TextScramble(this.heading.current)
    }

    onEnter = () => {
        let enter = false
        let hasEntered = false

        if (!this.state.enter) {
            this.scramble.play()
            enter = true
        } else {
            return
        }

        if (!this.state.hasEntered) {
            console.log(this.fill.current)
            anime({
                easing: 'easeOutExpo',
                targets: this.fill.current,
                scaleX: [0, 1],
                opacity: .99,
                duration: 750
            })
            hasEntered = true
        }

        this.setState({ enter, hasEntered })
    }

    onExit = () => {
        if (!this.state.enter) { return }
        this.scramble.play()
        this.setState({ enter: false })
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.enter === false
            && this.props.enter === true
        ) {
            this.onEnter()
        }
    }

    render() {
        const { heading, text } = this.props

        return (
            <ReactBasicScroll config={this.scrollConfig}>
                <li>
                    <h6 className="callouts__heading" ref={this.heading}>
                        { heading }
                        <div className="callouts__heading-fill" ref={this.fill} />
                        <div className="callouts__heading-accent" ref={this.accent} />
                    </h6>
                    <p className="callouts__text">{ text }</p>
                </li>
            </ReactBasicScroll>
        )
    }
}

export default Caption