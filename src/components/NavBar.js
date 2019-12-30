import React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "gatsby"

class NavBar extends React.PureComponent {
    render() {
        return (
            <nav className="navBar">
                <div className="navBar__container">
                    <div className="navBar__left">
                        <div className="navBar__masthead">
                            <h2 className="navBar__heading">
                                Steven Dana – Selected Works
                            </h2>
                            <div className="navBar__japanese-text">ポートフォリオ</div>
                        </div>
                    </div>
                    <div className="navBar__right">
                        <Link
                            className="navBar__go-back"
                            to="/"
                        >
                            <IoMdArrowBack /> Back To All Projects
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar