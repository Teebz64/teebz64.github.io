import React from "react"
import WorkListItem from '../components/WorkListItem'
import Masthead from '../components/Masthead'

const work = [
    {
        slug: 'transcend',
        thumbnail: '/images/logos/transcend-logo.svg',
        categories: ['Logo Design', 'Branding'],
        title: 'Transcend',
    },
    {
        slug: 'knowledge-exchange',
        thumbnail: '/images/knowledge-exchange/feed-in-laptop.png',
        categories: ['Architecture', 'Design'],
        title: 'Humana:',
        subtitle: 'Knowledge Exchange'
    },
    {
        slug: 'two-bards',
        thumbnail: '/images/two-bards/two-bards-seal--purple.svg',
        categories: ['Logo Design', 'Branding'],
        title: 'Two Bards',
    },
    {
        slug: 'ooh-icon-system',
        video: '/images/ooh-icon-system/output.export.mp4',
        categories: ['Development', 'Animation'],
        title: 'Oohology',
        subtitle: 'Icon System'
    },
    {
        slug: 'champion-windows',
        thumbnail: '/images/champion-windows/slider.png',
        categories: ['Design'],
        title: 'Champion',
        subtitle: 'Windows'
    }
]

const IndexPage = () => (
    <React.Fragment>
        <section className="section section--hero section--index">
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
                        St<em>e</em>v<em>e</em>n D<em>a</em>n<em>a</em>
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
            <div className="section__indicator">
                02
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