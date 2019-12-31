import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Masthead from '../components/Masthead'
import Revealer from '../components/Revealer'
import RevealerWithoutAnimation from '../components/RevealerWithoutAnimation'
import Tracker from '../components/Tracker'
import Caption from '../components/Caption'
import GoBackButton from '../components/GoBackButton'

class TwoBards extends React.PureComponent {

    render() {
        return (
            <main className="two-bards">
                <GoBackButton />
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <Masthead
                        pill='Logo Design • Branding'
                        heading='Two Bards'
                        subheading='Brewery'
                    />
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                    <div className="case-study__row">
                        <RevealerWithoutAnimation
                            image='/images/two-bards/two-bards-seal--red.svg'
                            alt='Pattern from Logo'
                            styleBlock='two-bards'
                            modifier='first'
                            span="4"
                        />
                    </div>
                    <div className="case-study__row">
                        <div className="two-bards__video two-bards__sketch-video video shift-half">
                            <video
                                className="video__video"
                                autoPlay={true}
                                loop
                                muted=""
                                width="480"
                                height="265"
                                src={"/images/two-bards/logo-sketch.mp4"}
                            />
                        </div>
                    </div>
                    <div className="case-study__row">
                        <div className="two-bards__video two-bards__refinement-video video shift-1-half">
                            <video
                                autoPlay={true}
                                loop
                                muted=""
                                width="480"
                                height="245"
                                src="/images/two-bards/logo-refinement.mp4"
                                className="video__video"
                            />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default TwoBards