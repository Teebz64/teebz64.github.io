import React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"

class InnerNav extends React.PureComponent {
    render() {
        return (
            <nav className="nav">
                <div className="container nav__container">
                    <div className="nav__left">
                        <Link to="/" className="nav__back">
                            < IoMdArrowBack className="nav__back-icon" />
                            Back <span>to All Projects</span>
                        </Link>
                    </div>
                    <div className="nav__center">{this.props.title}</div>
                    <div className="nav__right">&nbsp;</div>
                </div>
            </nav>
        )
    }
}

export default InnerNav