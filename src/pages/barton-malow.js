import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import Picture from '../components/Picture'

class TwoBards extends React.PureComponent {

    render() {
        return (
            <CaseStudyLayout
                slug='barton-malow'
                heading='Barton Malow'
                tags={['Design • Development']}
            >
                <div className="case-study__row barton-malow__row">
                    <Picture
                        path='/images/barton-malow/laptop-homepage'
                        alt='Homepage in laptop graphic'
                        className='barton-malow__laptop-homepage'
                    />
                </div>
                <div className="case-study__row barton-malow__row">
                    <Picture
                        path='/images/barton-malow/homepage-section'
                        alt='Homepage Section'
                        className='barton-malow__homepage-section'
                    />
                    <Picture
                        path='/images/barton-malow/about-us'
                        alt='About Us Detail'
                        className='barton-malow__about-us'
                    />
                </div>
                <div className="case-study__row barton-malow__row">
                    <Picture
                        svg='/images/barton-malow/building-with-the-american-spirit.svg'
                        alt='Building with the american spirit graphic'
                        className='barton-malow__building-with-the-american-spirit'
                    />
                </div>
                <div className="case-study__row barton-malow__row">
                    <Picture
                        path='/images/barton-malow/case-study-1'
                        alt='Case Study Detail'
                        className='barton-malow__case-study-1'
                    />
                    <Picture
                        path='/images/barton-malow/case-study-2'
                        alt='Case Study Detail'
                        className='barton-malow__case-study-2'
                    />
                </div>
                <div className="case-study__row barton-malow__row">
                    <Picture
                        path='/images/barton-malow/timeline-laptop'
                        alt='Composable Timeilne'
                        className='barton-malow__timeline-laptop'
                    />
                </div>
            </CaseStudyLayout>
        )
    }
}

export default TwoBards