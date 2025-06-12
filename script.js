window.addEventListener('DOMContentLoaded', () => {
  const items = [
    { label: "Vegetation Community Classification", link: "#" },
    { label: "Snow Contamination", link: "#" },
    { label: "Air Quality", link: "#" },
    { label: "Waterfowl Egg Quality", link: "#" },
    { label: "Fish Quality", link: "#" },
    { label: "Muskrat Quality", link: "#" },
    { label: "River Water Quality", link: "#" },
    { label: "Lake Level", link: "#" },
    { label: "Surface Water", link: "#" },
    { label: "AXF", link: "#" },
    { label: "River Flow", link: "#" },
    { label: "Ice", link: "#" },
    { label: "Muskrat Abundance", link: "#" },
    { label: "Waterfowl Abundance", link: "#" },
    { label: "Wood Bison Abundance", link: "#" },
    { label: "Plant Productivity & Growing Season Change", link: "#" }
  ];

  const circleMenu = document.getElementById("circleMenu");
  const centerX = circleMenu.offsetWidth / 2;
  const centerY = circleMenu.offsetHeight / 2;
  const radius = 340; // Outer circle radius
  const angleStep = (2 * Math.PI) / items.length;

  items.forEach((item, i) => {
    const angle = i * angleStep - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle) - 50;
    const y = centerY + radius * Math.sin(angle) - 50;

    const el = document.createElement("a");
    el.className = "menu-item";
    el.href = item.link;
    el.target = "_blank";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.textContent = item.label;

    circleMenu.appendChild(el);
  });
});
