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
        categories: ['threejs', 'Experiment'],
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
                <h2 className="deck__heading">Hi. I’m a <span className="underline">UX Engineer</span> &amp; <span className="underline">Product Designer</span></h2>
                <p className="deck__text">A creative developer that builds interfaces from architecture, design, and front-end development. When I’m not working on professional projects I’m exploring cellular automata, generative art, and lock-picking.</p>
            </div>
        </section>
        <section className="section">
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