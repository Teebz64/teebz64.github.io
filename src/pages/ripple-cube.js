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
                <RippleBox />
            </CaseStudyLayout>
        )
    }
}

export default RippleCube