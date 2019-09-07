import React from "react"

import WorkListItem from '../components/WorkListItem'
import Masthead from '../components/Masthead'

const work = [
    {
        slug: 'transcend',
        thumbnail: '/images/logos/transcend-logo.svg',
        categories: ['logo design', 'branding'],
        title: 'Transcend',
    },
    {
        slug: 'transcend',
        thumbnail: '/images/logos/transcend-logo.svg',
        categories: ['Architecture', 'Design'],
        title: 'Humana:',
        subtitle: 'Knowledge Exchange'
    },
    {
        slug: 'transcend',
        thumbnail: '/images/logos/transcend-logo.svg',
        categories: ['logo design', 'branding'],
        title: 'Transcend',
    }
]

const IndexPage = () => (
    <React.Fragment>
        <section className="section section--hero">
            <div className="section__indicator section__indicator--x-margin-bottom">
                01
            </div>
            <Masthead />
        </section>
        <section className="section">
            <div className="section__indicator">
                02
            </div>
            <ul className="work">
                {work.map((item, i) => <WorkListItem {...item} key={i} />)}
            </ul>
        </section>
    </React.Fragment>
)

export default IndexPage