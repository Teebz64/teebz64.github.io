import React from "react"
import Masthead from '../components/Masthead'
import GoBackButton from '../components/GoBackButton'
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
            <GoBackButton />
            <section className="section section--hero">
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