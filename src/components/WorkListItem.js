import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import anime from 'animejs/lib/anime.es.js'

class WorkListItem extends React.Component {
    state = { hasEntered: false }
    figure = React.createRef()
    figureFill = React.createRef()

    titleScrollConfig = {
        from: 'top-bottom',
        to: 'top-middle',
        timing: 'expoOut',
        direct: true,
        inside: () => this.onEnter(),
        props: {
            [`--title-opacity`]: {
                from: 0,
                to: .99
            },
            [`--title-ty`]: {
                from: '-20px',
                to: '0px'
            },
            [`--title-accent-scale`]: {
                from: 0,
                to: 1
            },
            [`--title-accent-ty`]: {
                from: '20px',
                to: '0px'
            },
        }
    }

    figureScrollConfig = {
        from: 'top-bottom',
        to: 'bottom-top',
        timing: 'expoOut',
        direct: true,
        props: {
            [`--thumbnail-ty`]: {
                from: '150px',
                to: '-150px'
            },
        }
    }

    onEnter = () => {
        if (this.state.hasEntered) { return }

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
            delay: 0
        })

        this.setState({ hasEntered: true })
    }

    render() {
        const { slug, thumbnail, categories, title, subtitle } = this.props
        return (
            <ReactBasicScroll config={this.figureScrollConfig}>
                <li data-trigger={slug}>
                    <Link
                        className="work__main"
                        to={`/${slug}/`}
                    >
                            <figure className="work__figure" ref={this.figure}>
                                <div className="work__figure-fill" ref={this.figureFill}></div>
                                <div className="work__thumbnail">
                                    <img src={thumbnail} alt={title} width="500" height="500" />
                                </div>
                            </figure>
                        <div className="work__text">
                            <div className="work__category">
                                {categories.map((category, i) => i + 1 === categories.length
                                    ? category
                                    : `${category} • `
                                )}
                            </div>
                            <ReactBasicScroll config={this.titleScrollConfig}>
                                <button className="work__title">
                                    {title}
                                    { subtitle && <em>{subtitle}</em> }
                                </button>
                            </ReactBasicScroll>
                        </div>
                    </Link>
                </li>
            </ReactBasicScroll>
        )
    }
}

export default WorkListItem