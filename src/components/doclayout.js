/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Provider from "@react/react-spectrum/Provider"

import { Footer } from "@parliament/parliament-ui-components"
import "./layout.css"

const DocLayout = ({ children }) => {
  return (
    <Provider theme="lightest">
      <main>{children}</main>
      <Footer />
    </Provider>
  )
}

DocLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocLayout
