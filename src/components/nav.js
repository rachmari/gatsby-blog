import React from "react"
import { Link } from "gatsby"
import { FiGithub, FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"
import { FcLikePlaceholder } from "react-icons/fc"
import "./nav.css"

export default function Nav() {
  const NAV_ITEMS = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/blog",
      text: "Blog",
    },
  ]

  return (
    <div className="nav-container">
      <ul className="nav">
        <li className="nav-item social-item">
          <Link className="nav-text" to="https://github.com/rachmari">
            <FiGithub />
          </Link>
        </li>
        <li className="social-item nav-item">
          <Link className="nav-text" to="https://instagram.com/rachaellewes">
            <FiInstagram />
          </Link>
        </li>
        <li className="nav-item social-item">
          <Link className="nav-text" to="https://twitter.com/rachswell">
            <IoLogoTwitter />
          </Link>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item logo">
          <FcLikePlaceholder className="nav-text"></FcLikePlaceholder>
        </li>
      </ul>
      <ul className="nav page-items">
        {NAV_ITEMS.map(link => {
          return (
            <li className="nav-item page-item">
              <Link className="nav-text" to={link.href}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
