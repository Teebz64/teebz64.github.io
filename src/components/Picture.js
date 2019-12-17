import React from "react"

class Picture extends React.PureComponent {
    render() {
        const { path, alt, className } = this.props

        return (
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