import React from "react"

class Picture extends React.PureComponent {
    render() {
        const { path, alt, className, svg } = this.props

        return svg ?
            (
                <img
                    src={svg}
                    alt={alt}
                    className={className}
                />
            ) : (
                <picture>
                    <source srcSet={`${path}.webp`} type="image/webp" />
                    <source srcSet={`${path}.png`} type="image/png"/>
                    <img
                        src={`${path}.png`}
                        alt={alt}
                        className={className}
                    />
                </picture>
            )
    }
}

export default Picture