import React from "react"
import ContactButton from '../components/ContactButton'
import Grid from '../components/Grid'
import Icosohedron from '../components/Icosohedron'
import PageTransition from '../components/PageTransition'

import("../scss/index.scss")

const Layout = ({children, location}) => (
    <React.Fragment>
        <Grid />
        <ContactButton />
        <Icosohedron />
        <PageTransition location={location}>
            {children}
        </PageTransition>
    </React.Fragment>
)

export default Layout