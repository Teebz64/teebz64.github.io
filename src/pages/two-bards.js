import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import Picture from '../components/Picture'

class TwoBards extends React.PureComponent {

    render() {
        return (
            <CaseStudyLayout
                slug='two-bards'
                heading='Two Bards'
                subheading='Brewery'
                tags={['Logo Design • Branding']}
            >
                <div className="case-study__row two-bards__row">
                    <div className="two-bards__logo-container">
                        <Picture
                            svg='/images/two-bards/two-bards-seal--red.svg'
                            alt='Two Bards Logo'
                            className='two-bards__logo'
                        />
                    </div>
                </div>
                <div className="case-study__row two-bards__row">
                    <div className="two-bards__video two-bards__sketch-video video shift-half">
                        <video
                            className="video__video"
                            autoPlay={true}
                            playsInline
                            loop
                            muted=""
                            width="480"
                            height="265"
                            src={"/images/two-bards/logo-sketch.mp4"}
                        />
                    </div>
                </div>
                <div className="case-study__row two-bards__row">
                    <div className="two-bards__video two-bards__refinement-video video shift-1-half">
                        <video
                            autoPlay={true}
                            playsInline
                            loop
                            muted=""
                            width="480"
                            height="245"
                            src="/images/two-bards/logo-refinement.mp4"
                            className="video__video"
                        />
                    </div>
                </div>
            </CaseStudyLayout>
        )
    }
}

export default TwoBards