import React from "react"
import ContactButton from '../components/ContactButton'
import Grid from '../components/Grid'
import TransitionGrid from '../components/TransitionGrid'
import Icosohedron from '../components/Icosohedron'
import PageTransition from '../components/PageTransition'
import Footer from '../components/Footer'

import("../scss/index.scss")

const Layout = ({children, location}) => (
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

export default Layout