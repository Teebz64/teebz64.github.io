import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Revealer from '../components/Revealer'
import Tracker from '../components/Tracker'
import Caption from '../components/Caption'
import GoBackButton from '../components/GoBackButton'

const scrollConfig = {
    from: '0px',
    to: '300px',
    timing: 'expoIn',
    direct: true,
    props: {
        '--masthead-opacity': {
            from: .99,
            to: 0
        },
        '--masthead-ty': {
            from: '0%',
            to: '20%'
        }
    }
}

class KnowledgeExchange extends React.PureComponent {

    render() {
        return (
            <main className="knowledge-exchange">
                <GoBackButton />
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <ReactBasicScroll config={scrollConfig}>
                        <header className="case-study__header masthead">
                            <h1 className="case-study__heading">Humana</h1>
                            <h2 className="case-study__sub-heading">Knowledge Exchange</h2>
                            <div className="masthead__bottom">
                                <div className="masthead__pill">
                                    Architecture • Design • Direction
                                </div>
                            </div>
                        </header>
                    </ReactBasicScroll>
                    <ul className="callouts callouts--x-margin-bottom callouts--inline">
                        <Caption
                            heading="about"
                            text="Transcend is a meditation specialist and motivational speaker. My goal in branding was to design a mark to reflect spiritual and mental wellness."
                        />
                        <Caption
                            heading="role"
                            text="Application Architect & Design Lead"
                        />
                    </ul>
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                </section>
            </main>
        )
    }
}

export default KnowledgeExchange