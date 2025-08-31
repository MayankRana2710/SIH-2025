// Chart
const ctx = document.getElementById("fraChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Madhya Pradesh", "Tripura", "Odisha", "Telangana"],
    datasets: [
      {
        label: "Approved Pattas",
        data: [892, 456, 1123, 678],
        backgroundColor: "rgba(0, 123, 255, 0.7)"
      },
      {
        label: "Pending Claims",
        data: [353, 222, 444, 256],
        backgroundColor: "rgba(220, 53, 69, 0.7)"
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom" } }
  }
});

// Leaflet Map
const map = L.map('map').setView([21.5, 82], 5); // Centered on India
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example markers
L.marker([23.25, 77.41]).addTo(map).bindPopup("Madhya Pradesh");
L.marker([23.84, 91.28]).addTo(map).bindPopup("Tripura");
L.marker([20.95, 85.1]).addTo(map).bindPopup("Odisha");
L.marker([17.36, 78.47]).addTo(map).bindPopup("Telangana");
