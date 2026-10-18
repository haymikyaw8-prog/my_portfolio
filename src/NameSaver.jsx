import { useState, useEffect } from "react"
function NameSaver() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("portfolio-name") || ""
  })

  useEffect(() => {
    localStorage.setItem("portfolio-name", name)
  }, [name])

  return (
    <section className="name-saver">
      <h2>Remember My Name 🎀</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Hello, {name || "friend"}! 💗</p>
    </section>
  )
}

export default NameSaver
