<section className="section">
    <div className="section__indicator section__indicator--x-margin-bottom">
        02
    </div>
    <div className="case-study__row">
        <Tracker>
            <Revealer
                animate={false}
                image='/images/transcend/logo--recolor.svg'
                alt='Logo Recolor'
                styleBlock='transcend'
                modifier='first'
            />
        </Tracker>
        <ul className="callouts callouts--caption callouts--inline">
            <Caption
                heading="Lotus Mark"
                text={`The lotus flower is memetic for the wellness industry and near instantly communicates its meaning. Many of my marks rely on geometric interlocking symmetry–in this case the interwoven petals aim to communicate unity and wholeness.`}
            />
            <Caption
                heading="Text Mark"
                text={`I'm obsessed with the rotundly serifed and trendy cooper-black-like fonts. Recoletta has a natural vibe, ideal for a spiritual-but-still-business aesthetic.`}
            />
        </ul>
    </div>
    <div className="case-study__row">
        <Tracker>
            <Revealer
                animate={false}
                image='/images/transcend/pattern.svg'
                alt='Pattern from Logo'
                styleBlock='transcend'
                modifier='second'
            />
        </Tracker>
        <ul className="callouts callouts--caption">
            <Caption
                heading="Lotus Pattern"
                text="The rotational symmetry of the logomark lends itself to reptition; creating a pattern reminiscent of eastern textiles."
                shift="2"
            />
        </ul>
        <ReactBasicScroll config={this.sealConfig}>
            <img src="/images/transcend/seal.svg" alt="Alternate Brand Mark" className="transcend__floating-seal"/>
        </ReactBasicScroll>
    </div>
    <div className="case-study__row">
        <Tracker>
            <Revealer
                animate={false}
                image='/images/transcend/alt-mark.svg'
                alt='Alternate Mark'
                styleBlock='transcend'
                modifier='third'
            />
        </Tracker>
        <ul className="callouts callouts--caption">
            <Caption
                heading="Unused Mark"
                text="This is my favorite mark that came from this branding exercise, but ultimately, it was not selected."
            />
        </ul>
    </div>
</section>