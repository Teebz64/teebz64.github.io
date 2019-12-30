import React from "react"
import classNames from 'classnames'

class Revealer extends React.PureComponent {

    static defaultProps = {
        span: 3
    }

    render() {
        const {
            image,
            webp,
            alt,
            styleBlock,
            modifier,
            span,
            noFill,
            shift
        } = this.props

        return (
            <figure
                className={
                    classNames('revealer__figure revealer--no-animation', {
                        [`${styleBlock}__figure`]: styleBlock,
                        [`${styleBlock}__figure--${modifier}`]: styleBlock && modifier,
                        [`revealer--span-${span}`]: span,
                        [`revealer--shift-${shift}`]: shift,
                        [`revealer--no-fill`]: noFill
                    })
                }
            >
                {
                    !noFill &&
                        <div
                            className={`
                                ${styleBlock}__figure-fill
                                ${styleBlock}__figure-fill--${modifier}
                                revealer__figure-fill
                            `}
                        />
                }
                <picture>
                    {webp && <source srcSet={webp} type="image/webp" />}
                    <source srcSet={image} />
                    <img
                        src={image}
                        alt={alt}
                        className={`
                            ${styleBlock}__image
                            ${styleBlock}__image--${modifier}
                            revealer__image`
                        }
                    />
                </picture>
            </figure>
        )
    }
}

export default Revealer