import React from "react"
import * as basicScroll from 'basicscroll'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"
import classnames from 'classNames'

class Masthead extends React.PureComponent {

    mastheadContainer = React.createRef()

    static defaultProps = {
        hasBackButton: true
    }

    scrollConfig = {
        from: '0px',
        to: '300px',
        timing: 'expoIn',
        direct: true,
        props: {
            '--masthead-opacity': {
                from: .99,
                to: 0
            },
            '--masthead-ty': {
                from: '0%',
                to: '20%'
            }
        }
    }

    componentDidMount() {
        this.basicScroll = basicScroll.create({
            elem: this.mastheadContainer.current,
            ...this.scrollConfig
        })

        this.basicScroll.start()
    }

    render() {
        const { heading, pill, text, block, subheading, hasBackButton,inner } = this.props

        return (
            <>
                <header className={classnames('masthead', { 'masthead--inner': inner })} ref={this.mastheadContainer}>
                    <div className="masthead__top">
                        <h1 className={
                            classnames('masthead__heading', {
                                'masthead__heading--inner': hasBackButton
                            })
                        }>{heading}</h1>
                        {subheading &&
                            <h2 className="masthead__sub-heading">{subheading}</h2>
                        }
                    </div>
                    <div className="masthead__bottom">
                        {text &&
                            <div className="masthead__text">
                                {text}
                            </div>
                        }
                    </div>
                </header>
                {pill &&
                    <div className="masthead__pill">
                        {pill}
                    </div>
                }
            </>
        )
    }
}

export default Masthead