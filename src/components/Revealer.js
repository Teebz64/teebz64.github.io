import React from "react"
import anime from 'animejs/lib/anime.es.js'
import classNames from 'classnames'

class Revealer extends React.PureComponent {

    figure = React.createRef()
    figureFill = React.createRef()
    image = React.createRef()

    onEnter = () => {
        anime({
            easing: 'easeOutExpo',
            targets: this.figure.current,
            scaleX: [0, 1],
            opacity: .99,
            duration: 750
        })

        anime({
            easing: 'easeInOutExpo',
            targets: this.figureFill.current,
            scaleX: [0, 1],
            duration: 750,
            delay: 250,
        })

        anime({
            easing: 'easeInOutExpo',
            targets: this.image,
            opacity: [0, 0],
            duration: 500,
            delay: 1250
        })

        console.log(this.image)
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.enter === false
            && this.props.enter === true
        ) {
            this.onEnter()
        }
    }

    render() {
        const {
            image,
            alt,
            styleBlock,
            modifier,
            span
        } = this.props

        return (
            <figure
                className={
                    classNames(
                        `
                            ${styleBlock}__figure
                            ${styleBlock}__figure--${modifier}
                            revealer__figure
                        `, {
                            [`revealer__figure--span-${span}`]: span
                        }
                    )
                }
                ref={this.figure}
            >
                <div
                    className={`
                        ${styleBlock}__figure-fill
                        ${styleBlock}__figure-fill--${modifier}
                        revealer__figure-fill
                    `}
                    ref={this.figureFill}
                />
                <div
                    ref={this.image}
                    className={`
                        ${styleBlock}__thumbnail
                        ${styleBlock}__thumbnail--${modifier}
                        revealer__thumbnail
                    `}
                >
                    <img
                        src={image}
                        alt={alt}
                        className={`
                            ${styleBlock}__image
                            ${styleBlock}__image--${modifier}
                            revealer__image`
                        }
                    />
                </div>
            </figure>
        )
    }
}

export default Revealer