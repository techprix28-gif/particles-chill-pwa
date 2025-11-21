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
        mode: ["push", "repulse", "bubble"], // Burst + Push away + Flash size
      },
      onHover: {
        enable: true,
        mode: "grab", // Lines only on hover
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 6, // Add particles
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      bubble: {
        distance: 250,
        size: 10, // Flash effect: particles grow momentarily
        duration: 0.2,
        opacity: 1,
        color: "#ffffff"
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
      enable: false, // Disabled by default, only on hover (grab)
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
