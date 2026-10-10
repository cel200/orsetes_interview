
import { useState } from "react";
import { motion } from "framer-motion";
import RollText from "../RollText/RollText";
import logo from "../../assets/logo.png";
import "./Footer.css";

const footerLinks = [
  {
    title: "Shop",
    links: ["Daily Performance", "Gummies", "Accessories", "Bundles"],
  },
  {
    title: "Discover",
    links: ["Why LESGO", "Formula", "Contact Us"],
  },
  {
    title: "Policies",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Shipping Policy",
      "Returns & Refunds Policy",
      "Subscription Policy",
    ],
  },
];

const socialLinks = ["Instagram", "Facebook", "Youtube"];

function Newsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setJoined(true);
    setEmail("");
  };

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        aria-label="Email address"
        required
      />

      <button type="submit" className="newsletter__join roll-trigger">
        <RollText>Join</RollText>
      </button>

      {joined && <p>Thanks! You're in the loop.</p>}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">

        <motion.div
          className="footer__newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="footer__title">Get in the loop</h2>
          <Newsletter />
        </motion.div>

        <nav className="footer__columns" aria-label="Footer">
          {footerLinks.map((column) => (
            <div className="footer__column" key={column.title}>
              <h3>{column.title}</h3>

              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="roll-trigger">
                      <RollText>{link}</RollText>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 LESGO Supplements.
        </p>

        <ul className="footer__socials">
          {socialLinks.map((social) => (
            <li key={social}>
              <a href="#" className="roll-trigger">
                <RollText>{social}</RollText>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__brand" aria-hidden="true">
        <motion.img
          src={logo}
          alt=""
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  );
}
