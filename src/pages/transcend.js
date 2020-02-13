import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import Picture from '../components/Picture'

class Transcend extends React.PureComponent {

    render() {
        return (
            <CaseStudyLayout
                slug='transcend'
                heading='Transcend'
                tags={['Design • Branding']}
            >
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
            </CaseStudyLayout>
        )
    }
}

export default Transcend