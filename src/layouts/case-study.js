import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Masthead from '../components/Masthead'
import GoBackButton from '../components/GoBackButton'
import NavBar from '../components/NavBar'

const CaseStudyLayout = ({children, location, slug, tags, heading, subheading, deck}) => {
    return (
        <main className={slug}>
            <GoBackButton />
            <section className="section section--hero">
                <div className="section__indicator section__indicator--x-margin-bottom">
                    01
                </div>
                <Masthead
                    pill={tags.map(
                        (tag, i) => i + 1 === tags.length
                            ? tag
                            : `${tag} • `
                        )
                    }
                    heading={heading}
                    subheading={subheading}
                />
                { deck && deck }
            </section>
            <section className="section">
                <div className="section__indicator section__indicator--x-margin-bottom">
                    02
                </div>
                { children }
            </section>
        </main>
    )
}

export default CaseStudyLayout