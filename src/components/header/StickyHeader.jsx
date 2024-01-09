import React from "react"
import { Icons } from "../Icons"
import "../../styles/header.css"

const StickyHeader = () => {
  return (
    <div className="sticky_header">
      <div className="header_left">
        <span className="section_heading">Payments</span>
        <a href="" className="help_link">
          <Icons.help />
          How it Works
        </a>
      </div>

      <div className="header_search">
        <Icons.search className="search_icon" />
        <input
          type="search"
          className="search_input"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      <div className="header_cta">
        <div className="header_btn">
          <Icons.speaker />
        </div>
        <div className="header_btn">
          <Icons.down />
        </div>
      </div>
    </div>
  )
}

export default StickyHeader
