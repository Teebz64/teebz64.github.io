import React from "react"
import { Link } from "gatsby"
import Masthead from '../components/Masthead'
import GoBackButton from '../components/GoBackButton'
import Picture from '../components/Picture'
import RippleBox from '../components/sketches/RippleBox'

class RippleCube extends React.PureComponent {

    render() {
        return (
            <main className="ripple-box">
                <GoBackButton />
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <Masthead
                        pill='Experiment'
                        heading='Ripple Cube'
                    />
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                    <div className="case-study__row ripple-cube__row">
                        <RippleBox />
                    </div>
                </section>
            </main>
        )
    }
}

export default RippleCube