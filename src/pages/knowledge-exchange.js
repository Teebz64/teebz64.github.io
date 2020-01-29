import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import Picture from '../components/Picture'

class KnowledgeExchange extends React.PureComponent {
    render() {
        return (
            <CaseStudyLayout
                slug='knowledge-exchange'
                heading='Humana'
                subheading='Knowledge Exchange'
                tags={['Architecture • Design']}
            >
                <div className="case-study__row">
                    <Picture
                        path='/images/knowledge-exchange/feed-in-laptop'
                        alt='The Knowledge Exchange Feed'
                        className='knowledge-exchange__laptop'
                    />
                </div>
                <div className="case-study__row">
                    <Picture
                        path='/images/knowledge-exchange/manage-topics'
                        alt='The Knowledge Exchange Topic Management Screen'
                        className='knowledge-exchange__manage-topics'
                    />
                    <Picture
                        path='/images/knowledge-exchange/sign-up-topics'
                        alt='The Knowledge Exchange Feed Subscribe to Topics at Sign Up'
                        className='knowledge-exchange__signup-topics'
                    />
                </div>
                <div className="case-study__row">
                    <div className="knowledge-exchange__suggested-widgets">
                        <Picture
                            path='/images/knowledge-exchange/suggested-articles'
                            alt='The Knowledge Exchange Feed'
                            className='knowledge-exchange__suggested-articles'
                        />
                        <Picture
                            path='/images/knowledge-exchange/suggested-experts'
                            alt='The Knowledge Exchange Feed'
                            className='knowledge-exchange__suggested-experts'
                        />
                    </div>
                    <Picture
                        path='/images/knowledge-exchange/profile'
                        alt='The Knowledge Exchange Feed'
                        className='knowledge-exchange__profile'
                    />
                </div>
            </CaseStudyLayout>
        )
    }
}

export default KnowledgeExchange