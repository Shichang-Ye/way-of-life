window.addEventListener('DOMContentLoaded', () => {
  const items = [
    // Manually define each item with angle (degrees), label, and link
    { angleDeg: 12, label: "Wood Bison Abundance", link: "#" },
    { angleDeg: 33.5, label: "Muskrat Abundance", link: "#" },
    { angleDeg: 55, label: "Waterfowl Abundance", link: "#" },
    { angleDeg: 76.7, label: "Plant Productivity & Growing Season Change", link: "#" },
    { angleDeg: 98, label: "Vegetation Community Classification", link: "#" },

    { angleDeg: 122, label: "Air Quality", link: "#" },
    { angleDeg: 145.2, label: "Waterfowl Egg Quality", link: "#" },
    { angleDeg: 168.4, label: "Snow Contamination", link: "#" },
    { angleDeg: 191.6, label: "Fish Quality", link: "#" },
    { angleDeg: 214.8, label: "River Water Quality", link: "#" },
    { angleDeg: 238, label: "Muskrat Quality", link: "#" },

    { angleDeg: 262, label: "Ice", link: "#" },
    { angleDeg: 283.5, label: "Surface Water", link: "#" },
    { angleDeg: 305, label: "Lake Level", link: "#" },
    { angleDeg: 326.5, label: "AXF", link: "#" },
    { angleDeg: 348, label: "River Flow", link: "#" },

    // Add more items here as needed
  ];

  const circleMenu = document.getElementById("circleMenu");
  const centerX = circleMenu.offsetWidth / 2;
  const centerY = circleMenu.offsetHeight / 2;
  const radius = 325;

  items.forEach(({ angleDeg, label, link }) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
    const x = centerX + radius * Math.cos(angleRad) - 55;
    const y = centerY + radius * Math.sin(angleRad) - 55;

    const el = document.createElement("a");
    el.className = "menu-item";
    el.href = link;
    el.target = "_blank";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.textContent = label;

    circleMenu.appendChild(el);
  });
});
