import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import RollText from '../RollText/RollText'
import logo from '../../assets/logo.png'
import './Navbar.css'

const links = [
  { label: 'Shop', href: '#shop' },
  { label: 'Why Lesgo', href: '#why-lesgo' },
  { label: 'Formulas', href: '#formulas' },
  { label: 'Contact Us', href: '#contact' },
]

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 3h2.6l2.3 11.2a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.1L21 7H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
    </svg>
  )
}

const menuList = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  closed: {},
}

const menuItem = {
  closed: { opacity: 0, y: 24 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <motion.header
        className="navbar"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="/" className="navbar__logo" aria-label="LESGO home">
          <img src={logo} alt="LESGO" width="101" height="23" />
        </a>

        <nav className="navbar__links" aria-label="Main">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link roll-trigger">
                  <RollText>{link.label}</RollText>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#cart" className="navbar__cart" aria-label="Cart">
          <CartIcon />
        </a>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.ul variants={menuList} initial="closed" animate="open">
              {links.map((link) => (
                <motion.li variants={menuItem} key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
