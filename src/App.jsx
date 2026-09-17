import { useState } from "react";
import "./App.css";

const flavours = [
  {
    name: "Berry",
    bg: "#df7298",
    blob: "#76245e",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Strawberry",
    bg: "#ef858f",
    blob: "#bd0027",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Blueberry",
    bg: "#8ca7dc",
    blob: "#4c3f88",
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Tropical",
    bg: "#e7bd67",
    blob: "#b85b24",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90",
  },
];

function App() {
  const [active, setActive] = useState(0);

  const flavour = flavours[active];

  return (
    <div
      className="page"
      style={{
        "--background": flavour.bg,
        "--blob": flavour.blob,
      }}
    >
      {/* TOP AREA */}

      <header className="topbar">
        <div className="profile">
          <div className="profile-icon">
            <div></div>
          </div>

          <span>uiuxzaid</span>
        </div>

        <div className="top-buttons">
          <span>TUTORIAL</span>
          <span>FIGMA</span>
          <span>EFFECT</span>
          <span>ANIMATION</span>
        </div>
      </header>

      {/* MAIN WEBSITE CARD */}

      <main className="website-card">

        {/* LEFT SHAPE */}

        <div className="organic-shape"></div>

        {/* NAVBAR */}

        <nav className="navbar">

          <div className="brand">
            Smoothie
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#flavours">Flavours</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact</a>
          </div>

        </nav>

        {/* HERO */}

        <section className="hero" id="home">

          <div className="hero-left">

            <h1>SMOOTHIES</h1>

            <p>
              Best healthy refresh smoothie that make benefits
              for you with different different flavours just for you.
            </p>

            {/* FLAVOURS */}

            <div className="flavours" id="flavours">

              {flavours.map((item, index) => (
                <button
                  key={item.name}
                  className={
                    active === index
                      ? "flavour active"
                      : "flavour"
                  }
                  onClick={() => setActive(index)}
                  aria-label={item.name}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </button>
              ))}

            </div>

          </div>

          {/* PRODUCT */}

          <div className="hero-right">

            <div className="product-circle">
              <img
                key={flavour.image}
                src={flavour.image}
                alt={`${flavour.name} smoothie`}
              />
            </div>

            <div className="floating-dot dot-one"></div>
            <div className="floating-dot dot-two"></div>
            <div className="floating-dot dot-three"></div>

          </div>

        </section>

      </main>

      {/* BOTTOM */}

      <footer className="bottom">

        <div className="bottom-profile">
          <div className="profile-icon small">
            <div></div>
          </div>

          <span>uiuxzaid</span>
        </div>

        <span className="copyright">
          © 2024 All rights reserved
        </span>

      </footer>

    </div>
  );
}

export default App;