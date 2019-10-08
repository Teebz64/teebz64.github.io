import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Masthead from '../components/Masthead'
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
                    <Masthead
                        heading='Humana'
                        subheading='Knowledge Exchange'
                        pill='Architecture • Design • Direction'
                    />
                    <ul className="callouts callouts--x-margin-bottom callouts--inline">
                        <Caption
                            heading="about"
                            text="Two Bards Brewery is a bar and brewery located in Bardstown, KY 🙄"
                        />
                        <Caption
                            heading="role"
                            text="Designer"
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