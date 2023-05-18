const generateTsParticleOptions = () => (
  {
    background: {
      color: {
        value: "#1a233a"
      }
    },
    "fullScreen": {
      "zIndex": -10
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "size": 40
        },
        "grab": {
          "distance": 400
        },
        "repulse": {
          "distance": 150
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "enable": true,
            "speed": 20
          }
        }
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "enable": true,
        "opacity": 0.4
      },
      "move": {
        "enable": true,
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "spin": {}
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "value": 0.5,
        "animation": {}
      },
      "size": {
        "value": {
          "min": 0.1,
          "max": 3
        },
        "animation": {}
      }
    }
  }
)

export default generateTsParticleOptions