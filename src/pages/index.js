import React from "react"
import WorkListItem from '../components/WorkListItem'
import Masthead from '../components/Masthead'
import SEO from "../components/seo"

const work = [
    {
        slug: 'knowledge-exchange',
        thumbnail: '/images/knowledge-exchange/feed-in-laptop.png',
        categories: ['Architecture', 'Design'],
        title: 'Humana:',
        subtitle: 'Knowledge Exchange'
    },
    {
        slug: 'champion-windows',
        thumbnail: '/images/champion-windows/slider.png',
        categories: ['Design'],
        title: 'Champion',
        subtitle: 'Windows'
    },
    {
        slug: 'ooh-icon-system',
        video: '/images/ooh-icon-system/output.export.mp4',
        categories: ['Development', 'Animation'],
        title: 'Oohology',
        subtitle: 'Icon System'
    },
    {
        slug: 'ripple-cube',
        video: '/images/ripple-cube/ripplebox.export.mp4',
        categories: ['threejs', 'experiment'],
        title: 'Ripple Cube',
    },
    // {
    //     slug: 'two-bards',
    //     thumbnail: '/images/two-bards/two-bards-seal--mark-only.svg',
    //     categories: ['Logo Design', 'Branding'],
    //     title: 'Two Bards',
    // },
    {
        slug: 'barton-malow',
        thumbnail: '/images/barton-malow/laptop-homepage.png',
        categories: ['Design', 'Development'],
        title: 'Barton Malow',
    },
    // {
    //     slug: 'transcend',
    //     thumbnail: '/images/transcend/alt-mark.svg',
    //     categories: ['Logo Design', 'Branding'],
    //     title: 'Transcend',
    // },
]

const IndexPage = () => (
    <React.Fragment>
        <SEO title="Portfolio" />
        <section className="section section--hero section--index">
            <div className="section__indicator section__indicator--x-margin-bottom">
                01
            </div>
            <Masthead
                heading={
                    <React.Fragment>
                       Steven Dana
                    </React.Fragment>
                }
                text={
                    <React.Fragment>
                        <div className="masthead__textline masthead__textline--large">Design & Development</div>
                        <div className="masthead__textline masthead__textline--medium">Selected Work</div>
                    </React.Fragment>
                }
                hasBackButton={false}
            />
        </section>
        <section className="section">
            <div className="deck">
                <h2 className="deck__heading">Hi. I’m a UX Engineer &amp; Product Designer</h2>
                <p className="deck__text">I make clever interfaces that are memorable and easy to use. When I’m not working on professional projects I’m exploring cellular automata, generative art, and lock-picking.</p>
            </div>
        </section>
        <section className="section">
            <div className="section__indicator">
                03
            </div>
            <ul className="work">
                {work.map((item, i) =>
                    <WorkListItem
                        {...item}
                        upNext={work[i > 0 ? i - 1 : work.length - 1]}
                        key={i}
                    />
                )}
            </ul>
        </section>
    </React.Fragment>
)

export default IndexPage