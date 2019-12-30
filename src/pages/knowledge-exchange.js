import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import Masthead from '../components/Masthead'
import Revealer from '../components/Revealer'
import RevealerWithoutAnimation from '../components/RevealerWithoutAnimation'
import Tracker from '../components/Tracker'
import Caption from '../components/Caption'
import GoBackButton from '../components/GoBackButton'

class KnowledgeExchange extends React.PureComponent {

    styleBlock = 'knowledge-exchange'

    render() {
        const { styleBlock } = this

        return (
            <main className="knowledge-exchange">
                <GoBackButton />
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <Masthead
                        heading='Humana'
                        subheading='Knowledge Exchange'
                        pill='Architecture • Design • Direction'
                    />
                    <ul className="callouts callouts--x-margin-bottom callouts--inline">
                        <Caption
                            heading="about"
                            text="Two Bards Brewery is a bar and brewery located in Bardstown, KY 🙄"
                        />
                        <Caption
                            heading="role"
                            text="Designer"
                        />
                    </ul>
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                    <div className="case-study__row">
                        <RevealerWithoutAnimation
                            image='/images/knowledge-exchange/feed-in-laptop.png'
                            //webp='/images/knowledge-exchange/feed-in-laptop.webp'
                            alt='Laptop Mockup'
                            modifier='first'
                            span="4"
                            noFill
                            styleBlock={styleBlock}
                        />
                        <ul className="callouts callouts--caption">
                            <Caption
                                text="The main newsfeed as it appears on the home screen."
                                shift="1"
                            />
                        </ul>
                    </div>
                    <div className="case-study__row case-study__row--underlap knowledge-exchange__row--second">
                        <RevealerWithoutAnimation
                            image='/images/knowledge-exchange/manage-topics.png'
                            webp='/images/knowledge-exchange/manage-topics.webp'
                            alt='Laptop Mockup'
                            modifier='second'
                            span="3"
                            noFill
                            styleBlock={styleBlock}
                        />
                        <ul className="callouts callouts--caption">
                            <Caption
                                text="The main newsfeed as it appears on the home screen."
                                shift="0"
                            />
                        </ul>
                    </div>
                    <div className="case-study__row case-study__row--overlap">
                        <RevealerWithoutAnimation
                            image='/images/knowledge-exchange/sign-up-topics.png'
                            webp='/images/knowledge-exchange/sign-up-topics.webp'
                            alt='Laptop Mockup'
                            modifier='second'
                            span="2"
                            shift="2"
                            styleBlock={styleBlock}
                            noFill
                        />
                        <ul className="callouts callouts--caption">
                            <Caption
                                text="The main newsfeed as it appears on the home screen."
                                shift="2"
                            />
                        </ul>
                    </div>
                    <div className="case-study__row knowledge-exchange__flex-row knowledge-exchange__flex-row--styles">
                        <div className="flex-left">
                            <ul className="stacked-tiles">
                                { ['linkedin', 'twitter', 'facebook'].map((item, i) =>
                                    <li key={i} data-content={item}>
                                        <picture>
                                            <source srcSet={`/images/knowledge-exchange/${item}-style.webp`} type="image/webp" />
                                            <source srcSet={`/images/knowledge-exchange/${item}-style.png`} type="image/png" />
                                            <img src={`/images/knowledge-exchange/${item}-style.png`} alt={`${item} style`} />
                                        </picture>
                                    </li>
                                )}
                            </ul>
                            <ul className="callouts callouts--caption">
                                <Caption
                                    text="Upon examining popular content aggregation sites I noticed that all 3 of the top contenders, Facebook, Twitter, and LinkedIn, all followed a similar grouping pattern. Notice how, even in dark mode, that the foreground elements are a hair lighter than their backing fields."
                                />
                            </ul>
                        </div>
                        <div className="flex-right">
                            <RevealerWithoutAnimation
                                image='/images/knowledge-exchange/style-example.png'
                                webp='/images/knowledge-exchange/style-example.webp'
                                alt='Laptop Mockup'
                                span={4}
                                styleBlock={styleBlock}
                                noFill
                            />
                        </div>
                    </div>
                    <div className="case-study__row">
                        <RevealerWithoutAnimation
                            image='/images/knowledge-exchange/profile.png'
                            webp='/images/knowledge-exchange/profile.webp'
                            alt='Laptop Mockup'
                            span="2"
                            styleBlock={styleBlock}
                            noFill
                        />
                        <ul className="span-2 knowledge-exchange__suggestion-tiles">
                            <li>
                                <picture>
                                    <source srcSet={`/images/knowledge-exchange/suggested-articles.webp`} type="image/webp" />
                                    <source srcSet={`/images/knowledge-exchange/suggested-articles.png`} type="image/png" />
                                    <img src={`/images/knowledge-exchange/suggested-articles.png`} alt={`Suggested articles component`} />
                                </picture>
                            </li>
                            <li>
                                <picture>
                                    <source srcSet={`/images/knowledge-exchange/suggested-experts.webp`} type="image/webp" />
                                    <source srcSet={`/images/knowledge-exchange/suggested-experts.png`} type="image/png" />
                                    <img src={`/images/knowledge-exchange/suggested-experts.png`} alt={`Suggested experts component`} />
                                </picture>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default KnowledgeExchange