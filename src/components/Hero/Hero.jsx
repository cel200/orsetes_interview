import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import heroVideo from "../../assets/hero.mp4";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <Navbar />

      <div className="hero__media">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="hero__shade"></div>

      <div className="hero__content">
        <h1 className="hero__title">
          <motion.span
            className="hero__line"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start your day.
          </motion.span>

          <motion.span
            className="hero__line"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hit go.
          </motion.span>
        </h1>

        <div className="btn btn--yellow hero__cta">Shop Lesgo</div>
      </div>
    </section>
  );
}
