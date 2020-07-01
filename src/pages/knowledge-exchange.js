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
                <div className="deck deck--inner">
                    <h3 className="deck__heading deck__heading--inner">A social exchange for medical professionals</h3>
                    <p className="deck__text deck__text--inner">Working with Humana was a memorable experience. The agency I represented at the time put my work forward on the RFP. The success of our unlikely selection resulted me leading this project from a simple marketing site to a full blown application. I was involved the whole way&mdash;architecture, scoping, documenting, designing, and development.</p>
                </div>
                <div className="case-study__row knowledge-exchange__row">
                    <Picture
                        path='/images/knowledge-exchange/feed-in-laptop'
                        alt='The Knowledge Exchange Feed'
                        className='knowledge-exchange__laptop'
                    />
                </div>
                <div className="case-study__row knowledge-exchange__row">
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
                <div className="case-study__row knowledge-exchange__row">
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