window.addEventListener('DOMContentLoaded', () => {
  const items = [
    { label: "Vegetation Community Classification", link: "https://example.com/vegetation" },
    { label: "Snow Contamination", link: "https://example.com/snow-contamination" },
    { label: "Air Quality", link: "https://example.com/air-quality" },
    { label: "Waterfowl Egg Quality", link: "https://example.com/egg-quality" },
    { label: "Fish Quality", link: "https://example.com/fish-quality" },
    { label: "Muskrat Quality", link: "https://example.com/muskrat-quality" },
    { label: "River Water Quality", link: "https://example.com/river-water" },
    { label: "Lake Level", link: "https://example.com/lake-level" },
    { label: "Surface Water", link: "https://example.com/surface-water" },
    { label: "AXF", link: "https://example.com/axf" },
    { label: "River Flow", link: "https://example.com/river-flow" },
    { label: "Ice", link: "https://example.com/ice" },
    { label: "Muskrat Abundance", link: "https://example.com/muskrat-abundance" },
    { label: "Waterfowl Abundance", link: "https://example.com/waterfowl" },
    { label: "Wood Bison Abundance", link: "https://example.com/wood-bison" },
    { label: "Plant Productivity & Growing Season Change", link: "https://example.com/growing-season" }
  ];

  const circleMenu = document.getElementById("circleMenu");
  const centerX = circleMenu.offsetWidth / 2;
  const centerY = circleMenu.offsetHeight / 2;

  const radius = 400;
  const angleStep = (2 * Math.PI) / items.length;

  items.forEach((item, i) => {
    const angle = i * angleStep;
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
