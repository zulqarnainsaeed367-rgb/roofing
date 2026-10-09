import { useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../data/navigation'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef(null)

  const renderLinks = () => navigationLinks.map(({ label, to }) => (
    <li key={to}>
      <NavLink
        to={to}
        end={to === '/'}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => [
          'rcs-nav-link',
          to === '/contact-us' && 'rcs-nav-contact',
          isActive && 'is-active',
        ].filter(Boolean).join(' ')}
      >
        {label}
        {to === '/contact-us' && (
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        )}
      </NavLink>
    </li>
  ))

  return (
    <header
      className="rcs-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <div className="rcs-navbar">
        <Link
          to="/"
          aria-label="RCS Construction Services home"
          onClick={() => setIsOpen(false)}
          className="rcs-brand"
        >
          <img
            src={logo}
            alt="RCS Construction Services — Rodney the Roofer"
            width="80"
            height="80"
            className="rcs-brand-logo"
          />
        </Link>

        <nav aria-label="Main navigation" className="rcs-desktop-nav">
          <ul className="rcs-nav-list">{renderLinks()}</ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
          className="rcs-menu-toggle"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={isOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="rcs-mobile-nav"
      >
        <ul className="rcs-nav-list">{renderLinks()}</ul>
      </nav>
    </header>
  )
}

export default Navbar
