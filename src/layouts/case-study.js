import React from "react"
import Masthead from '../components/Masthead'
import InnerNav from '../components/InnerNav'
import SEO from '../components/Seo'

const CaseStudyLayout = ({children, location, slug, tags, heading, subheading, deck}) => {
    const getTitle = () => {
        return 
    }

    return (
        <main className={slug}>
            <SEO title={
                subheading
                    ? `${heading}: ${subheading}`
                    : heading
            } />
            <InnerNav title={subheading
                    ? `${heading}: ${subheading}`
                    : heading
            } />
            <section className="section section--hero">
                <Masthead
                    pill={
                        <div className="case-study__meta">
                            <div className="section__indicator">
                                Role
                            </div>
                            {tags.map(
                                (tag, i) => i + 1 === tags.length
                                    ? tag
                                    : `${tag} • `
                                )
                            }
                        </div>
                    }
                    heading={heading}
                    subheading={subheading}
                    inner
                />
                { deck && deck }
            </section>
            <section className="section">
                <div className="section__indicator section__indicator--x-margin-bottom">
                    About
                </div>
                { children }
            </section>
        </main>
    )
}

export default CaseStudyLayout