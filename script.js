window.addEventListener('DOMContentLoaded', () => {
  const items = [
    { angleDeg: 12, label: "Wood Bison Abundance" },
    { angleDeg: 33.5, label: "Muskrat Abundance" },
    { angleDeg: 55, label: "Waterfowl Abundance", link: "https://www.arcgis.com/apps/dashboards/c3dde2e77d0a402fa28407f218530275" },
    { angleDeg: 76.7, label: "Plant Productivity & Growing Season Change", link: "https://apca.maps.arcgis.com/apps/dashboards/f3e230c889e146e895542932c5153b99" },
    { angleDeg: 98, label: "Vegetation Community Classification", link: "https://www.arcgis.com/apps/dashboards/94a8c9c3ef0a436081a64d69bb410047" },

    { angleDeg: 122, label: "Air Quality", link: "https://www.arcgis.com/apps/dashboards/958cc412607c49d08169e7998af4a340" },
    { angleDeg: 145.2, label: "Waterfowl Egg Quality", link: "https://apca.maps.arcgis.com/apps/dashboards/4d5df48bbd494a67846d90fe8954b7cf" },
    { angleDeg: 168.4, label: "Snow Contamination", link: "https://www.arcgis.com/apps/dashboards/d8b751e1e2b3468d8f052d32afd7c093" },
    { angleDeg: 191.6, label: "Fish Quality" },
    { angleDeg: 214.8, label: "River Water Quality", link: "https://www.arcgis.com/apps/dashboards/10be9736c9f84297b7f7b2db7963f0f5" },
    { angleDeg: 238, label: "Muskrat Quality" },

    { angleDeg: 262, label: "Ice", link: "https://www.arcgis.com/apps/dashboards/c6399a3e216047c9a46adb0e95d433c3" },
    { angleDeg: 283.5, label: "Surface Water", link: "https://www.arcgis.com/apps/dashboards/51963a29c60740268b59a54a8b05cf46" },
    { angleDeg: 305, label: "Lake Level", link: "https://www.arcgis.com/apps/dashboards/d8fa865c3ce44f76904eb8628ce9a288" },
    { angleDeg: 326.5, label: "Navigation", link: "https://www.arcgis.com/apps/dashboards/b99e3d8d2b4d408791bf5ac47c9961bd" },
    { angleDeg: 348, label: "River Flow", link: "https://www.arcgis.com/apps/dashboards/d9acccf8158c43a68b78527d0389ba13" },
  ];

  const circleMenu = document.getElementById("circleMenu");
  const centerX = circleMenu.offsetWidth / 2;
  const centerY = circleMenu.offsetHeight / 2;
  const radius = 325;

  items.forEach(({ angleDeg, label, link }) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
    const x = centerX + radius * Math.cos(angleRad) - 55;
    const y = centerY + radius * Math.sin(angleRad) - 55;

    const el = link ? document.createElement("a") : document.createElement("div");
    el.className = "menu-item";
    el.textContent = label;

    if (link) {
      el.href = link;
      el.target = "_blank";
    }

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    circleMenu.appendChild(el);
  });
});
