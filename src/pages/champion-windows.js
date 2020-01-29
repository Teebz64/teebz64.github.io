import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import Picture from '../components/Picture'

class ChampionWindows extends React.PureComponent {
    render() {
        return (
            <CaseStudyLayout
                slug='champion-windows'
                heading='Champion'
                subheading='Windows'
                tags={['Design']}
            >
                <div className="case-study__row champ__row">
                    <Picture
                        path='/images/champion-windows/benefits-table'
                        alt='Benefits Table'
                        className='champ__laptop'
                    />
                </div>
                <div className="case-study__row champ__row champ__styles-row">
                    <Picture
                        path='/images/champion-windows/styles-by-price-desktop'
                        alt='Mobile Mockup'
                        className='champ__desktop-styles'
                    />
                    <Picture
                        path='/images/champion-windows/styles-by-price-mobile'
                        alt='Mobile Mockup'
                        className='champ__mobile-styles'
                    />
                </div>
                <div className="case-study__row champ__row champ__misc-row">
                    <Picture
                        path='/images/champion-windows/return-on-investment'
                        alt='Mobile Mockup'
                        className='champ__roi'
                    />
                    <Picture
                        path='/images/champion-windows/frame-construction'
                        alt='Mobile Mockup'
                        className='champ__frame-diagram'
                    />
                </div>
                <div className="case-study__row champ__row">
                    <Picture
                        path='/images/champion-windows/slider'
                        alt='Carousel Example'
                        className='champ__laptop'
                    />
                </div>
                <div className="case-study__row case-study__row--middle-align champ__row">
                    <Picture
                        path='/images/champion-windows/options-desktop'
                        alt='Mobile Mockup'
                        className="champ__options-desktop"
                    />
                    <Picture
                        path='/images/champion-windows/options-mobile'
                        alt='Mobile Mockup'
                        className="champ__options-mobile"
                    />
                </div>
            </CaseStudyLayout>
        )
    }
}

export default ChampionWindows