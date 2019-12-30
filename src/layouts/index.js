import React from "react"
import ContactButton from '../components/ContactButton'
import Grid from '../components/Grid'
import TransitionGrid from '../components/TransitionGrid'
import Icosohedron from '../components/Icosohedron'
import PageTransition from '../components/PageTransition'
import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'

import("../scss/index.scss")

// { location.pathname !== '/' && <NavBar /> }

const Layout = ({children, location}) => {
    return (
        <React.Fragment>
            <Grid />
            <ContactButton />
            <Icosohedron />
            <PageTransition location={location}>
                {children}
                <Footer />
            </PageTransition>
            <TransitionGrid />
        </React.Fragment>
    )
}

export default Layout