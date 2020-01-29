import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Masthead from '../components/Masthead'
import GoBackButton from '../components/GoBackButton'
import Picture from '../components/Picture'

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
                        <div className="two-bards__logo-container">
                            <Picture
                                svg='/images/two-bards/two-bards-seal--red.svg'
                                alt='Two Bards Logo'
                                className='two-bards__logo'
                            />
                        </div>
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