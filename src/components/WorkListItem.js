import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Revealer from '../components/Revealer'

class WorkListItem extends React.PureComponent {

    state = { hasEntered: false }

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
        this.setState({ hasEntered: true })
    }

    render() {
        const { slug, thumbnail, video, categories, title, subtitle } = this.props
        const { hasEntered } = this.state

        return (
            <ReactBasicScroll config={this.figureScrollConfig}>
                <li data-trigger={slug}>
                    <Link
                        className="work__main"
                        to={`/${slug}/`}
                    >
                        { thumbnail &&
                            <Revealer
                                image={thumbnail}
                                alt={title}
                                enter={hasEntered}
                                styleBlock='work'
                                modifier={slug}
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
                        <div className="work__text">
                            <div className="work__category">
                                {categories.map((category, i) => i + 1 === categories.length
                                    ? category
                                    : `${category} • `
                                )}
                            </div>
                            <ReactBasicScroll config={this.titleScrollConfig}>
                                <button className="work__title">
                                    { title }
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