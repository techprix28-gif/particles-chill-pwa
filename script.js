tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      grab: {
        distance: 200,
        links: {
          opacity: 1,
          color: "#00FFFF" // Cyan grab lines
        }
      }
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      distance: 150,
      color: {
        value: ["#00FFFF", "#FF00FF", "#FFFF00"] // Neon Cyan, Magenta, Yellow
      },
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1, // Slow and relaxing
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
});
