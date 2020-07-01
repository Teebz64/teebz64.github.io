import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import RippleBox from '../components/sketches/RippleBox'

class RippleCube extends React.PureComponent {

    render() {
        return (
            <CaseStudyLayout
                slug='ripple-box'
                heading='Ripple Cube'
                tags={['Experiment']}
            >
                <div className="deck deck--inner">
                    <h3 className="deck__heading deck__heading--inner">A simple expirement with sine waves</h3>
                    <p className="deck__text deck__text--inner">I expiremented using distance as a method to offset the angle values of a sine function. There's a little bit more going on here, but it's actually fairly simple. Whenever I do work like this I always get a lot of mileage about of p5.js's map() function.</p>
                </div>
                <RippleBox />
            </CaseStudyLayout>
        )
    }
}

export default RippleCube