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
                    <div className="case-study__row">
                        <RevealerWithoutAnimation
                            image='/images/two-bards/two-bards-seal--red.svg'
                            alt='Pattern from Logo'
                            styleBlock='two-bards'
                            modifier='first'
                            span="4"
                        />
                        <ul className="callouts callouts--caption">
                            <Caption
                                heading="Seal"
                                text="I chose to personify the bards literally, aiming for them to evolve their own personalities; perhaps even representing light and dark beers as the brand evolves."
                            />
                        </ul>
                    </div>
                    <div className="case-study__row">
                        <div className="two-bards__video two-bards__sketch-video video">
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
                        <ul className="callouts callouts--caption">
                            <Caption
                                heading="Concepting Sketch"
                                text="I used the symmetry feature of procreate to help get my ideas down quickly."
                                shift="1"
                            />
                        </ul>
                    </div>
                    <div className="case-study__row">
                        <div className="two-bards__video two-bards__refinement-video video shift-1">
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
                        <ul className="callouts callouts--caption">
                            <Caption
                                heading="Refining"
                                text="Each line of the face was agonized over, this was by far the most difficult and deliberate part of the process."
                                shift="1"
                            />
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default TwoBards