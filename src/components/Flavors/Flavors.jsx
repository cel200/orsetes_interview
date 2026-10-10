import { motion } from 'framer-motion'
import arcticSurge from '../../assets/products/arctic-surge.webp'
import electricLime from '../../assets/products/electric-lime.webp'
import cherryRush from '../../assets/products/cherry-rush.webp'
import mangoFuego from '../../assets/products/mango-fuego.webp'
import lemonHeat from '../../assets/products/lemon-heat.webp'
import './Flavors.css'

const flavors = [
  { name: 'Artic Surge', tagline: 'Blue Raspberry Lemonade', image: arcticSurge, glow: '#1f6bff' },
  { name: 'Electric Lime', tagline: 'Lime with Ginger', image: electricLime, glow: '#a8e01c' },
  { name: 'Cherry Rush', tagline: 'Black Cherry Limeade', image: cherryRush, glow: '#e3192b' },
  { name: 'Mango Fuego', tagline: 'Mango With TAJÍN®', image: mangoFuego, glow: '#ff7a00' },
  { name: 'Lemon Heat', tagline: 'Lemon with Cayenne', image: lemonHeat, glow: '#f0b712' },
]

const title = 'Choose your flavor'

const titleVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025 } },
}

const letterVariants = {
  hidden: { opacity: 0, y: '0.4em', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function FlavorCard({ flavor, hidden }) {
  return (
    <li className="flavor-card" style={{ '--glow': flavor.glow }} aria-hidden={hidden || undefined}>
      <div className="flavor-card__text">
        <h3>{flavor.name}</h3>
        <p>{flavor.tagline}</p>
      </div>
      <span className="flavor-card__glow" />
      <img
        className="flavor-card__image"
        src={flavor.image}
        alt={hidden ? '' : `LESGO ${flavor.name} tub`}
        loading="lazy"
        draggable="false"
      />
    </li>
  )
}

export default function Flavors() {
  return (
    <section className="flavors" id="shop">
      <motion.h2
        className="flavors__title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        aria-label={title}
      >
        {title.split(' ').map((word, w) => (
          <span className="flavors__word" aria-hidden="true" key={w}>
            {[...word].map((char, c) => (
              <motion.span className="flavors__char" variants={letterVariants} key={c}>
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>

      <motion.div
        className="flavors__viewport"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul className="flavors__track">
          {flavors.map((flavor) => (
            <FlavorCard flavor={flavor} key={flavor.name} />
          ))}
          {flavors.map((flavor) => (
            <FlavorCard flavor={flavor} key={`${flavor.name}-clone`} hidden />
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
