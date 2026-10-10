import './RollText.css'

export default function RollText({ children }) {
  const letters = [...children]

  return (
    <span className="roll" aria-label={children}>
      {letters.map((letter, i) => (
        <span className="roll__letter" style={{ '--i': i }} aria-hidden="true" key={i}>
          <span>{letter === ' ' ? '\u00A0' : letter}</span>
          <span>{letter === ' ' ? '\u00A0' : letter}</span>
        </span>
      ))}
    </span>
  )
}
