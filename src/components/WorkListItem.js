import React from "react"
import { Link } from "gatsby"
import anime from 'animejs/lib/anime.es.js'
import * as basicScroll from 'basicscroll'

class WorkListItem extends React.PureComponent {

    state = { hasEntered: false }
    shutters = React.createRef()
    thumbnail = React.createRef()
    figure = React.createRef()
    title = React.createRef()
    listItem = React.createRef()

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

    listItemScrollConfig = {
        from: 'top-bottom',
        to: 'bottom-top',
        timing: 'expoOut',
        direct: true,
        props: {
            [`--image-opacity`]: {
                from: 0,
                to: .99
            },
            [`--thumbnail-ty`]: {
                from: '60px',
                to: '-60px'
            }
        }
    }

    componentDidMount() {
        this.titleScroll = basicScroll.create({
            elem: this.title.current,
            ...this.titleScrollConfig
        })

        this.listItemScroll = basicScroll.create({
            elem: this.listItem.current,
            ...this.listItemScrollConfig
        })

        this.titleScroll.start()
        this.listItemScroll.start()
    }

    onEnter = () => {
        if (this.state.hasEntered) { return }
        this.setState({ hasEntered: true })

        anime({
            easing: 'easeOutExpo',
            targets: this.figure.current,
            translateY: [100, 0],
            duration: 2500,
        })

        anime({
            easing: 'easeOutExpo',
            targets: this.shutters.current.children,
            scaleY: [1, 0],
            duration: 750,
            delay: anime.stagger(100)
        })

        anime({
            easing: 'easeOutExpo',
            targets: this.thumbnail.current,
            opacity: [0.1, 1],
            duration: 0,
        })
    }

    render() {
        const { slug, thumbnail, video, categories, title, subtitle } = this.props
        const { hasEntered } = this.state

        return (
            <li data-trigger={slug} ref={this.listItem}>
                <Link
                    className="work__main"
                    to={`/${slug}/`}
                    ref={this.figure}
                >
                    <div className="work__thumbnail-container" ref={this.thumbnail}>
                        <div className="work__gradient"></div>
                        <ul className="work__shutters" ref={this.shutters}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        { thumbnail &&
                            <img
                                className={`
                                    work__thumbnail
                                    work__thumbnail--${slug}
                                `}
                                src={thumbnail}
                                alt={title}
                            />
                        }
                        { (video && !thumbnail) &&
                            <div className="video work__video">
                                <video
                                    className="video__video"
                                    autoPlay={true}
                                    loop
                                    muted={true}
                                    width="1176" 
                                    height=" 650"
                                    src={video}
                                />
                            </div>
                        }
                    </div>
                    <div className="work__text">
                        <div className="work__category">
                            {categories.map((category, i) => i + 1 === categories.length
                                ? category
                                : `${category} • `
                            )}
                        </div>
                        <button className="work__title" ref={this.title}>
                            { title }
                            { subtitle && <em>{subtitle}</em> }
                        </button>
                    </div>
                </Link>
            </li>
        )
    }
}

export default WorkListItem