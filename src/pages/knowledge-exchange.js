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
                tags={['Architecture • Design • UX Direction']}
            >
                <div className="deck deck--inner">
                    <h3 className="deck__heading deck__heading--inner">A networking application for healthcare professionals, writers, and students</h3>
                    <p className="deck__text deck__text--inner">Working with Humana was a memorable experience. The agency I represented at the time put my work forward on the RFP. Our selection resulted in me leading this project from a simple marketing site to a full blown application. I was involved the whole way&mdash;scoping, documenting, designing, and data architecture.</p>
                </div>
                <div className="deck deck--inner">
                    <h4 className="deck__heading deck__heading--subheading">Beginning an application</h4>
                    <p className="deck__text deck__text--body">Whenever an application hits my workload I like to begin with an exercise called <a href="https://alistapart.com/article/object-oriented-ux/" target="_blank">Object Oriented User Experience</a>. It's a great exercise to involve the whole team in&mdash;Project Managers, Designers, and Engineers. It enables the team to communicate deliberately with each other, helps define the scope of the project (useful for quoting and setting expectations), and heavily informs the wireframing/prototyping step. Plus it's fun to play with Post-It notes.</p>
                    <p className="deck__text deck__text--body">We heavily involved Humana at this stage in order to capture their goals for the project. Afterwards, we had a mock-data structure that the development team could run with to begin their architecture, and that the design team could use to start blocking out the UI.</p>
                    <p className="deck__text deck__text--body">We were aiming somewhere in the middle of the professional networking aspect of LinkedIn and the topic aggregation of Twitter, but with a bent towards academia and medical research.</p>
                </div>
                <div className="case-study__row knowledge-exchange__row">
                    <Picture
                        path='/images/knowledge-exchange/home'
                        alt='The Knowledge Exchange Feed'
                        className='knowledge-exchange__full'
                    />
                </div>
                <div className="deck deck--inner">
                    <h4 className="deck__heading deck__heading--subheading">Key features</h4>
                    <ul className="deck__list deck__list--inline deck__list--inline-by-3">
                        <li>
                            <h5 className="deck__heading--minor-heading">Professional networking</h5>
                            <p className="deck__text deck__text--body deck__text--caption">During signup, users self-select areas that they considered themselves experts in, and also areas which they wished to learn more. It was fairly rudimentary, but this would become a powerful piece of data the platform used to populate the <em>suggested experts</em> component.</p>
                        </li>
                        <li>
                            <h5 className="deck__heading--minor-heading">Academic research &amp; collaboration</h5>
                            <p className="deck__text deck__text--body deck__text--caption">The platform was designed with invite-only membership. Researchers could post articles they've written, and because the user-base was limited, Humana would be able to manually curate the topics and content. This would ensure correct taxonomy and reliable information.</p>
                        </li>
                        <li>
                            <h5 className="deck__heading--minor-heading">Current news &amp; articles</h5>
                            <p className="deck__text deck__text--body deck__text--caption">Posts did not always have to be sourced by the author; we also designed the platform to host external posts as well. In that case, we could facilitate the discussion about the post on our platform.</p>
                        </li>
                    </ul>
                </div>
                <div className="deck deck--inner">
                    <h4 className="deck__heading deck__heading--subheading">Competitor analysis</h4>
                    <p className="deck__text deck__text--body">I spent a lot of time analyzing (and shamelessly copying) successful products in this space: LinkedIn, Twitter, Facebook. Designing an application to be used intuitively means using <a href="https://lawsofux.com/jakobs-law.html" target="_blank">patterns that are already established</a>. Furthermore, the big social networks have been optimized by teams whose research capabilities far exceeded the resources available to our team. No matter how much practice I put in, I'd never be able to beat the '94 Chicago Bulls in a pickup game.</p>
                </div>

                <div className="deck deck--inner">
                    <h4 className="deck__heading deck__heading--subheading">Common Layout Conventions</h4>
                    <Picture
                        path='/images/knowledge-exchange/competitor-common-layout'
                        alt='Competitor analysis: common layout conventions'
                        className='deck__list-image knowledge-exchange__common-layouts'
                    />
                    <ul className="deck__list deck__list--inline deck__list--inline-by-4">
                        <li>
                            <Picture
                                path='/images/knowledge-exchange/linkedin-style'
                                alt='Competitor analysis: LinkedIn UI style'
                                className='deck__list-image'
                            />
                            <p className="deck__text deck__text--body deck__text--caption">LinkedIn style</p>
                        </li>
                        <li>
                            <Picture
                                path='/images/knowledge-exchange/facebook-style'
                                alt='Competitor analysis: Facebook UI style'
                                className='deck__list-image'
                            />
                            <p className="deck__text deck__text--body deck__text--caption">Facebook style</p>
                        </li>
                        <li>
                            <Picture
                                path='/images/knowledge-exchange/twitter-style'
                                alt='Competitor analysis: Twitter UI style'
                                className='deck__list-image'
                            />
                            <p className="deck__text deck__text--body deck__text--caption">Twitter style</p>
                        </li>
                        <li>
                            <Picture
                                path='/images/knowledge-exchange/knowledge-exchange-style'
                                alt='Competitor analytis result: UI style'
                                className='deck__list-image'
                            />
                            <p className="deck__text deck__text--body deck__text--caption">Knowledge Exchange style</p>
                        </li>
                    </ul>
                    <p className="deck__text deck__text--body">The most influential similarity between all the style swatches: using a neutral background color, paired with a lighter color to distinguish contentful areas. This serves to deliberately group blocks of similar information and controls, while drawing the user's focus to most important parts of the UI.</p>
                </div>
                <div className="deck deck--inner">
                    <h4 className="deck__heading deck__heading--subheading">About topic tags</h4>
                    <p className="deck__text deck__text--body">Humana wanted to control the topic system, which gave us an advantage over other topic aggregation systems in that we were dealing with a finite set. We could give each topic a unique color identifier.</p>
                    <Picture
                        path='/images/knowledge-exchange/subway-and-topics'
                        alt='Competitor analytis result: UI style'
                        className='deck__list-image knowledge-exchange__subway-image'
                    />
                    <ul className="deck__list deck__list--inline deck__list--inline-by-3">
                        <li>
                            <h5 className="deck__heading--minor-heading">Color contrast</h5>
                            <p className="deck__text deck__text--body deck__text--caption">The color indicator was a way to aid scanability of the UI. The challenge here was to find 11 distinct colors that worked with our greyscale. I looked at subway maps for inspiration. Maps are beautiful pieces of information architecture, they need to be quickly parseable and communicate a ton of information.</p>
                        </li>
                        <li>
                            <h5 className="deck__heading--minor-heading">Mitigating distraction</h5>
                            <p className="deck__text deck__text--body deck__text--caption">We opted to indicate the color as a dot. In order for the color to be helpful, and not distracting it had to be a very noticeable color, and filling the background of the tag with this color would draw the users focus away from the main feed.</p>
                        </li>
                        <li>
                            <h5 className="deck__heading--minor-heading">Hashtag convention</h5>
                            <p className="deck__text deck__text--body deck__text--caption">We preserved the hashtag naming convention, as it is widely accepted as a way to indicate a topic&mdash;more importantly, interacting with it can retrieve more posts under that topic.</p>
                        </li>
                    </ul>
                </div>
                <div className="case-study__row knowledge-exchange__row">
                    <Picture
                        path='/images/knowledge-exchange/manage-topics'
                        alt='The Knowledge Exchange Topic Management Screen'
                        className='knowledge-exchange__manage-topics'
                    />
                    <Picture
                        path='/images/knowledge-exchange/sign-up-4'
                        alt='The Knowledge Exchange Feed Subscribe to Topics at Sign Up'
                        className='knowledge-exchange__signup-topics'
                    />
                </div>
                <div className="deck deck--inner">
                    <h4 className="deck__heading deck__heading--subheading">Prototype user research</h4>
                    <p className="deck__text deck__text--body">Humana had access to a physician network willing to participate in user testing of the prototype. Despite largely positive feedback, due to internal company restructuring, this project was no longer a top priority for Humana. The new leadership decided not to undertake a large scale development project. Instead, the function of Knowledge Exchange was left to an existing set of interal tools that were already integrated with their Microsoft enterprise ecosystem.</p>
                </div>
            </CaseStudyLayout>
        )
    }
}

export default KnowledgeExchange