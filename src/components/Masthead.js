import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
// import classNames from 'classnames'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"

const scrollConfig = {
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

const Masthead = ({ heading, pill, text, block, subheading, hasBackButton = true }) => (
    <ReactBasicScroll config={scrollConfig}>
        <header className="masthead">
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
    </ReactBasicScroll>
)

export default Masthead