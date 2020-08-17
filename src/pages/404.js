import React from "react"
import Masthead from '../components/Masthead'
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <React.Fragment>
        <SEO title="Page not found" />
        <section className="section section--hero section--index">
            <Masthead
                heading={
                    <React.Fragment>
                       <span className="hover-cursor">Steven Dana</span>
                    </React.Fragment>
                }
                text={
                    <React.Fragment>
                        <div className="masthead__textline masthead__textline--large -fade-in">Selected Projects</div>
                    </React.Fragment>
                }
                hasBackButton={false}
            />
        </section>
        <section className="section">
            <div className="deck">
                <h2 className="deck__heading">Page not found</h2>
                <p className="deck__text">Go back to <Link to="/">/</Link></p>
            </div>
        </section>
    </React.Fragment>
)

export default NotFoundPage