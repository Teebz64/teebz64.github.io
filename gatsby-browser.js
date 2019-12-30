/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const transitionDelay = 500
const navigationEvent = new Event('navigate')

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => {
                window.scrollTo(...(savedPosition || [0, 0]))
                document.body.dispatchEvent(navigationEvent)
            },
            transitionDelay
        )
    }

    return false
}
