import React from "react"
import * as basicScroll from 'basicscroll'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"

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
        const { heading, pill, text, block, subheading, hasBackButton } = this.props

        return (
            <header className="masthead" ref={this.mastheadContainer}>
                { hasBackButton &&
                    <Link to='/' className="masthead__back">
                        <IoMdArrowBack /> Back To All Projects
                    </Link>
                }
                <div>
                    <h1 className="masthead__heading">{heading}</h1>
                    {subheading &&
                        <h2 className="masthead__sub-heading">{subheading}</h2>
                    }
                </div>
                <div className="masthead__bottom">
                    {pill &&
                        <div className="masthead__pill">
                            {pill}
                        </div>
                    }
                    {text &&
                        <div className="masthead__text">
                            {text}
                        </div>
                    }
                </div>
            </header>
        )
    }
}

export default Masthead