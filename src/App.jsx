import { MotionConfig } from 'framer-motion'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Hero from './components/Hero/Hero'
import Flavors from './components/Flavors/Flavors'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <main>
        <Hero />
        <Flavors />
      </main>
      <Footer />
    </MotionConfig>
  )
}
