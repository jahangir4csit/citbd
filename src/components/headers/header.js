import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Topbar from './topbar'
import MainNav from "./navbar"
import JoinSeminar from "../utils/joinSeminar"


const Header = ({ siteTitle }) => (
  <header id="header">
    <JoinSeminar/>
    <Topbar />
    <MainNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
