import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import RevealerWithoutAnimation from '../components/RevealerWithoutAnimation'
import Tracker from '../components/Tracker'
import Caption from '../components/Caption'
import GoBackButton from '../components/GoBackButton'
import Masthead from '../components/Masthead'
import Picture from '../components/Picture'

class Transcend extends React.PureComponent {

    sealConfig = {
        from: 'top-bottom',
        to: 'bottom-top',
        timing: 'expoIn',
        direct: true,
        props: {
            '--pat-ty': {
                from: '20%',
                to: '-20%'
            }
        }
    }

    render() {
        return (
            <main className="transcend">
                <GoBackButton />
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <Masthead
                        heading='Transcend'
                        pill='Design • Branding'
                    />
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                    <div className="case-study__row">
                        <Picture
                            svg='/images/transcend/seal.svg'
                            alt="Logo"
                            className="transcend__logo"
                        />
                    </div>
                    <div className="case-study__row">
                        <Picture
                            svg='/images/transcend/alt-mark.svg'
                            alt='Alternate Mark'
                            className="transcend__logo"
                        />
                    </div>
                </section>
            </main>
        )
    }
}

export default Transcend