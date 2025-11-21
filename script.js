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
        mode: "remove", // Remove particles on click/tap release
      },
      onHover: {
        enable: true,
        mode: ["grab", "remove"], // Connect AND remove
      },
      resize: true,
    },
    modes: {
      remove: {
        quantity: 1, // Remove 1 particle at a time on hover
      },
      grab: {
        distance: 200,
        links: {
          opacity: 1,
          color: "random" // Lines take random colors
        }
      }
    },
  },
  particles: {
    color: {
      value: "random", // Each particle has a unique random color
    },
    links: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50, // Start with fewer, let emitter fill
      max: 150, // Cap total particles
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
  emitters: {
    direction: "none",
    rate: {
      quantity: 1,
      delay: 0.5, // Slowly add 1 particle every 0.5s
    },
    size: {
      width: 100,
      height: 100,
      mode: "percent",
    },
    position: {
      x: 50,
      y: 50,
    },
  },
  detectRetina: true,
});
