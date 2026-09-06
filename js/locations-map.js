(function () {
  const lang = document.body.dataset.mapLang === "vi" ? "vi" : "en";
  const content = {
    en: {
      invitation: "Open invitation",
      status: "No School4AI weekend is scheduled here yet.",
      coordinator: "Local coordinator wanted",
      prompt: "If you are a parent, teacher, company, or community helper in this area, contact us and we can discuss how to get started.",
      startingPoint: "Starting point for the School4AI idea.",
      possibleLocation: "A possible School4AI community location in Vietnam.",
      cta: "Contact coordinator",
      close: "Close",
      whatsapp: "Hello Jarkko. I want to help start School4AI in {city}."
    },
    vi: {
      invitation: "Lời mời mở",
      status: "Chưa có cuối tuần School4AI nào được lên lịch tại đây.",
      coordinator: "Cần người điều phối địa phương",
      prompt: "Nếu bạn là phụ huynh, giáo viên, doanh nghiệp hoặc người hỗ trợ cộng đồng tại khu vực này, hãy liên hệ để cùng trao đổi cách bắt đầu.",
      startingPoint: "Điểm bắt đầu của ý tưởng School4AI.",
      possibleLocation: "Một địa điểm cộng đồng School4AI tiềm năng tại Việt Nam.",
      cta: "Liên hệ người điều phối",
      close: "Đóng",
      whatsapp: "Xin chao Jarkko. Toi muon ho tro bat dau School4AI tai {city}."
    }
  }[lang];

  const locations = [
    { city: "Yên Bái", lat: 21.7168, lng: 104.8986 },
    { city: "Hà Nội", lat: 21.0278, lng: 105.8342 },
    { city: "Hải Phòng", lat: 20.8449, lng: 106.6881 },
    { city: "Hạ Long", lat: 20.9712, lng: 107.0448 },
    { city: "Thái Nguyên", lat: 21.5672, lng: 105.8252 },
    { city: "Lào Cai", lat: 22.4809, lng: 103.9755 },
    { city: "Sơn La", lat: 21.3280, lng: 103.9144 },
    { city: "Điện Biên Phủ", lat: 21.3860, lng: 103.0230 },
    { city: "Hòa Bình", lat: 20.8172, lng: 105.3376 },
    { city: "Việt Trì", lat: 21.3227, lng: 105.4019 },
    { city: "Ninh Bình", lat: 20.2506, lng: 105.9745 },
    { city: "Thanh Hóa", lat: 19.8067, lng: 105.7852 },
    { city: "Vinh", lat: 18.6796, lng: 105.6813 },
    { city: "Đồng Hới", lat: 17.4659, lng: 106.5984 },
    { city: "Huế", lat: 16.4637, lng: 107.5909 },
    { city: "Đà Nẵng", lat: 16.0544, lng: 108.2022 },
    { city: "Hội An", lat: 15.8801, lng: 108.3380 },
    { city: "Tam Kỳ", lat: 15.5736, lng: 108.4740 },
    { city: "Quảng Ngãi", lat: 15.1214, lng: 108.8044 },
    { city: "Quy Nhơn", lat: 13.7820, lng: 109.2190 },
    { city: "Tuy Hòa", lat: 13.0955, lng: 109.3209 },
    { city: "Nha Trang", lat: 12.2388, lng: 109.1967 },
    { city: "Phan Rang-Tháp Chàm", lat: 11.5643, lng: 108.9886 },
    { city: "Phan Thiết", lat: 10.9805, lng: 108.2615 },
    { city: "Đà Lạt", lat: 11.9404, lng: 108.4583 },
    { city: "Buôn Ma Thuột", lat: 12.6662, lng: 108.0382 },
    { city: "Pleiku", lat: 13.9833, lng: 108.0000 },
    { city: "Kon Tum", lat: 14.3497, lng: 108.0005 },
    { city: "Gia Nghĩa", lat: 12.0042, lng: 107.6907 },
    { city: "Thủ Dầu Một", lat: 10.9804, lng: 106.6519 },
    { city: "Biên Hòa", lat: 10.9574, lng: 106.8427 },
    { city: "Vũng Tàu", lat: 10.4114, lng: 107.1362 },
    { city: "TP. Hồ Chí Minh", lat: 10.8231, lng: 106.6297 },
    { city: "Mỹ Tho", lat: 10.3600, lng: 106.3600 },
    { city: "Bến Tre", lat: 10.2415, lng: 106.3759 },
    { city: "Vĩnh Long", lat: 10.2537, lng: 105.9722 },
    { city: "Cần Thơ", lat: 10.0452, lng: 105.7469 },
    { city: "Long Xuyên", lat: 10.3864, lng: 105.4352 },
    { city: "Rạch Giá", lat: 10.0125, lng: 105.0809 },
    { city: "Cà Mau", lat: 9.1768, lng: 105.1524 }
  ];

  const mapElement = document.getElementById("locations-map");
  const dialog = document.getElementById("location-dialog");
  const dialogContent = document.getElementById("location-dialog-content");

  if (!mapElement || !window.L) {
    return;
  }

  const map = L.map(mapElement, {
    center: [16.6, 107.7],
    zoom: 5.6,
    minZoom: 5,
    maxZoom: 14,
    scrollWheelZoom: true
  });
  mapElement._schoolMap = map;

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const clusterGroup = L.markerClusterGroup({
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: true,
    disableClusteringAtZoom: 8,
    maxClusterRadius: 54,
    iconCreateFunction(cluster) {
      return L.divIcon({
        html: `<span>${cluster.getChildCount()}</span>`,
        className: "school-cluster",
        iconSize: L.point(46, 46)
      });
    }
  });

  const markerIcon = L.divIcon({
    className: "school-marker",
    html: '<span aria-hidden="true"></span>',
    iconSize: [34, 44],
    iconAnchor: [17, 42]
  });

  function openLocation(location) {
    const message = encodeURIComponent(content.whatsapp.replace("{city}", location.city));
    const href = `https://wa.me/971509718065?text=${message}`;
    dialogContent.innerHTML = `
      <p class="panel-eyebrow">${content.invitation}</p>
      <h2 id="location-dialog-title">${location.city}</h2>
      <p>${location.city === "Yên Bái" ? content.startingPoint : content.possibleLocation}</p>
      <p><strong>${content.coordinator}</strong></p>
      <p>${content.status}</p>
      <p>${content.prompt}</p>
      <a class="button primary whatsapp-link" href="${href}">${content.cta}</a>
    `;
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  locations.forEach((location) => {
    const marker = L.marker([location.lat, location.lng], {
      icon: markerIcon,
      title: location.city
    });
    marker.on("click", () => openLocation(location));
    clusterGroup.addLayer(marker);
  });

  map.addLayer(clusterGroup);
  map.fitBounds(clusterGroup.getBounds().pad(0.18));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();
