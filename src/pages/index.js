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
        slug: 'knowledge-exchange',
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
            <Masthead
                pill={
                    <React.Fragment>
                        <div>ポートフォリオ</div>
                        <div className="masthead__timespan">'18–'19</div>
                    </React.Fragment>
                }
                heading={
                    <React.Fragment>
                        `St<em>e</em>v<em>e</em>n D<em>a</em>n<em>a</em>`
                    </React.Fragment>
                }
                text={
                    <React.Fragment>
                        <div className="masthead__textline masthead__textline--large">Design & Development</div>
                        <div className="masthead__textline masthead__textline--medium">Selected Work</div>
                    </React.Fragment>
                }
            />
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