import React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"

class GoBackButton extends React.PureComponent {
    render() {
        return (
            <Link
                className="go-back"
                to="/"
            >
                <div className="go-back__icon-container">
                    <IoMdArrowBack />
                </div>
            </Link>
        )
    }
}

export default GoBackButton