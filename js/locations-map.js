(function () {
  const lang = document.body.dataset.mapLang === "vi" ? "vi" : "en";
  const content = {
    en: {
      invitation: "Open invitation",
      partnerLead: "Possible partner lead",
      status: "No School4AI weekend is scheduled here yet.",
      coordinator: "Local coordinator wanted",
      prompt: "If you are a parent, teacher, company, or community helper in this area, contact us and we can discuss how to get started.",
      startingPoint: "Starting point for the School4AI idea.",
      possibleLocation: "A possible School4AI community location in Vietnam.",
      possiblePartner: "English language schools are useful local partner leads for space, students, parents, and teachers.",
      address: "Address",
      source: "Source",
      invitationCity: "Possible School4AI city",
      partnerCard: "English school partner",
      priorityCandidate: "Priority candidate",
      strongLeads: "Strong partner leads",
      otherCities: "Other cities to explore",
      partnerReason: "Useful because there is already a local English-school partner with access to students, parents, teachers, and possible space.",
      cityReason: "A possible community location for future School4AI activity.",
      noSelectionTitle: "Select a location",
      noSelectionText: "Click a city or partner marker on the map to see why that place could matter for School4AI.",
      nextStep: "What happens next",
      viewDetails: "View details",
      noResults: "No matching locations found. Try another city or search term.",
      resultSingular: "1 possible location",
      resultPlural: "{count} possible locations",
      cta: "Contact coordinator",
      close: "Close",
      whatsapp: "Hello Jarkko. I want to help start School4AI in {city}."
    },
    vi: {
      invitation: "Lời mời mở",
      partnerLead: "Đối tác tiềm năng",
      status: "Chưa có cuối tuần School4AI nào được lên lịch tại đây.",
      coordinator: "Cần người điều phối địa phương",
      prompt: "Nếu bạn là phụ huynh, giáo viên, doanh nghiệp hoặc người hỗ trợ cộng đồng tại khu vực này, hãy liên hệ để cùng trao đổi cách bắt đầu.",
      startingPoint: "Điểm bắt đầu của ý tưởng School4AI.",
      possibleLocation: "Một địa điểm cộng đồng School4AI tiềm năng tại Việt Nam.",
      possiblePartner: "Các trung tâm tiếng Anh là đầu mối địa phương phù hợp về địa điểm, học sinh, phụ huynh và giáo viên.",
      address: "Địa chỉ",
      source: "Nguồn",
      invitationCity: "Thành phố School4AI tiềm năng",
      partnerCard: "Đối tác trung tâm tiếng Anh",
      priorityCandidate: "Ứng viên ưu tiên",
      strongLeads: "Đầu mối đối tác mạnh",
      otherCities: "Các thành phố khác để tìm hiểu",
      partnerReason: "Hữu ích vì đã có đầu mối trung tâm tiếng Anh địa phương với khả năng tiếp cận học sinh, phụ huynh, giáo viên và địa điểm.",
      cityReason: "Một địa điểm cộng đồng tiềm năng cho hoạt động School4AI trong tương lai.",
      noSelectionTitle: "Chọn một địa điểm",
      noSelectionText: "Bấm vào một thành phố hoặc điểm đối tác trên bản đồ để xem vì sao nơi đó có thể phù hợp với School4AI.",
      nextStep: "Bước tiếp theo",
      viewDetails: "Xem chi tiết",
      noResults: "Không tìm thấy địa điểm phù hợp. Hãy thử thành phố hoặc từ khóa khác.",
      resultSingular: "1 địa điểm tiềm năng",
      resultPlural: "{count} địa điểm tiềm năng",
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

  const partnerLocations = [
    {
      name: "Apollo Vũng Tàu",
      city: "Vũng Tàu",
      address: "130 Lê Hồng Phong, phường 4, TP. Vũng Tàu",
      lat: 10.3578,
      lng: 107.0869,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Bà Rịa",
      city: "Bà Rịa",
      address: "99 Nguyễn Tất Thành, Phước Nguyễn, TP. Bà Rịa",
      lat: 10.4963,
      lng: 107.1682,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Từ Sơn",
      city: "Từ Sơn",
      address: "Tầng 3 tòa nhà Long Phương, 374-376 Trần Phú, TP. Từ Sơn",
      lat: 21.1187,
      lng: 105.9587,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Bắc Ninh",
      city: "Bắc Ninh",
      address: "Tầng 4 Tòa nhà viễn thông Bắc Ninh, 33 Lý Thái Tổ, TP. Bắc Ninh",
      lat: 21.1854,
      lng: 106.0763,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Dĩ An",
      city: "Dĩ An",
      address: "40 Đường M, Khu Hành Chính Dĩ An, TP. Dĩ An",
      lat: 10.9068,
      lng: 106.7698,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Bình Dương 3",
      city: "Thủ Dầu Một",
      address: "457 Đại Lộ Bình Dương, Phú Cường, TP. Thủ Dầu Một",
      lat: 10.9804,
      lng: 106.6604,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Cách Mạng Tháng Tám",
      city: "Thủ Dầu Một",
      address: "201 Cách Mạng Tháng Tám, Hiệp Thành, TP. Thủ Dầu Một",
      lat: 10.9904,
      lng: 106.6519,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Hà Huy Giáp",
      city: "Biên Hòa",
      address: "180 Hà Huy Giáp, Trung Dũng, TP. Biên Hòa",
      lat: 10.9574,
      lng: 106.8507,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Ecopark",
      city: "Văn Giang",
      address: "MAA-16 Khu biệt thự Thuỷ Nguyên, Khu đô thị Ecopark, Văn Giang",
      lat: 20.9552,
      lng: 105.9305,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Nha Trang",
      city: "Nha Trang",
      address: "44 Lê Thành Phương, Phương Sài, TP. Nha Trang",
      lat: 12.2488,
      lng: 109.1867,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Rạch Giá",
      city: "Rạch Giá",
      address: "Lô 17-63+64 Đường 3 tháng 2, Vĩnh Thanh Vân, TP. Rạch Giá",
      lat: 10.0225,
      lng: 105.0809,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Cao Thắng",
      city: "Vinh",
      address: "Tầng 4, Phú Nguyên Plaza, 19 Cao Thắng, TP. Vinh",
      lat: 18.6896,
      lng: 105.6813,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Hạ Long",
      city: "Hạ Long",
      address: "Lô A4-21 Mon Bay, Hồng Gai, TP. Hạ Long",
      lat: 20.9612,
      lng: 107.0548,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Thái Nguyên",
      city: "Thái Nguyên",
      address: "215 Lương Ngọc Quyến, Hoàng Văn Thụ, TP. Thái Nguyên",
      lat: 21.5672,
      lng: 105.8352,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Thanh Hoá",
      city: "Thanh Hóa",
      address: "Lô E2 E19, khu đô thị mới Vincom, TP. Thanh Hóa",
      lat: 19.8167,
      lng: 105.7852,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Vĩnh Phúc",
      city: "Vĩnh Yên",
      address: "26-28 Phan Chu Trinh, Khai Quang, TP. Vĩnh Yên",
      lat: 21.3089,
      lng: 105.6049,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Cần Thơ",
      city: "Cần Thơ",
      address: "233 đường 30/4, Xuân Khánh, Ninh Kiều, Cần Thơ",
      lat: 10.0352,
      lng: 105.7569,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Nguyễn Hữu Thọ Đà Nẵng",
      city: "Đà Nẵng",
      address: "189 Nguyễn Hữu Thọ, Hòa Thuận Tây, Hải Châu, TP. Đà Nẵng",
      lat: 16.0444,
      lng: 108.2022,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Đống Đa Đà Nẵng",
      city: "Đà Nẵng",
      address: "309 Đống Đa, Thạch Thang, Hải Châu, TP. Đà Nẵng",
      lat: 16.0744,
      lng: 108.2122,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Phố Huế",
      city: "Hà Nội",
      address: "181-183-185 Phố Huế, Hai Bà Trưng, Hà Nội",
      lat: 21.0178,
      lng: 105.8442,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Phan Đình Phùng",
      city: "Hà Nội",
      address: "1A Nguyễn Tri Phương, Ba Đình, Hà Nội",
      lat: 21.0378,
      lng: 105.8342,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Liễu Giai",
      city: "Hà Nội",
      address: "05 Liễu Giai, Ba Đình, Hà Nội",
      lat: 21.0378,
      lng: 105.8142,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Nguyễn Tuân",
      city: "Hà Nội",
      address: "Tầng 2, Thống Nhất Complex, 82 Nguyễn Tuân, Thanh Xuân, Hà Nội",
      lat: 21.0078,
      lng: 105.8042,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Lê Trọng Tấn",
      city: "Hà Nội",
      address: "206 Lê Trọng Tấn, Khương Trung, Thanh Xuân, Hà Nội",
      lat: 20.9978,
      lng: 105.8242,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Vincom Imperia",
      city: "Hải Phòng",
      address: "BH03-12B đường Manhattan 10, Vinhomes Imperia, Hồng Bàng, Hải Phòng",
      lat: 20.8549,
      lng: 106.6781,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Lê Hồng Phong",
      city: "Hải Phòng",
      address: "Lô 8A Lê Hồng Phong, Ngô Quyền, Hải Phòng",
      lat: 20.8449,
      lng: 106.6981,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Hai Bà Trưng",
      city: "Hải Phòng",
      address: "292B Hai Bà Trưng, Cát Dài, Lê Chân, Hải Phòng",
      lat: 20.8349,
      lng: 106.6881,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Phạm Ngọc Thạch",
      city: "TP. Hồ Chí Minh",
      address: "58 Phạm Ngọc Thạch, Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh",
      lat: 10.7831,
      lng: 106.6997,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Tô Hiến Thành",
      city: "TP. Hồ Chí Minh",
      address: "213 Tô Hiến Thành, Phường 13, Quận 10, TP. Hồ Chí Minh",
      lat: 10.7731,
      lng: 106.6697,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Nguyễn Văn Lượng",
      city: "TP. Hồ Chí Minh",
      address: "314-316 Nguyễn Văn Lượng, Phường 16, Gò Vấp, TP. Hồ Chí Minh",
      lat: 10.8331,
      lng: 106.6697,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "Apollo Moonlight",
      city: "TP. Thủ Đức",
      address: "Tầng 2, TTTM Moonlight, 102 Đặng Văn Bi, Bình Thọ, TP. Thủ Đức",
      lat: 10.8491,
      lng: 106.7589,
      sourceUrl: "https://apollo.edu.vn/he-thong-trung-tam"
    },
    {
      name: "British Council Láng Road",
      city: "Hà Nội",
      address: "Third floor, Lancaster Luminaire, 1152 Láng Road, Hà Nội",
      lat: 21.0188,
      lng: 105.7942,
      sourceUrl: "https://www.britishcouncil.vn/en/english-courses/teaching-centre"
    },
    {
      name: "British Council Cộng Hòa",
      city: "TP. Hồ Chí Minh",
      address: "20 Cộng Hòa, Tân Bình district, TP. Hồ Chí Minh",
      lat: 10.8021,
      lng: 106.6497,
      sourceUrl: "https://www.britishcouncil.vn/en/english-courses/teaching-centre"
    },
    {
      name: "British Council Nguyễn Văn Cừ",
      city: "TP. Hồ Chí Minh",
      address: "235 Nguyễn Văn Cừ, District 1, TP. Hồ Chí Minh",
      lat: 10.7631,
      lng: 106.6897,
      sourceUrl: "https://www.britishcouncil.vn/en/english-courses/teaching-centre"
    },
    {
      name: "British Council Điện Biên Phủ",
      city: "TP. Hồ Chí Minh",
      address: "195 Điện Biên Phủ, Bình Thạnh district, TP. Hồ Chí Minh",
      lat: 10.7931,
      lng: 106.7097,
      sourceUrl: "https://www.britishcouncil.vn/en/english-courses/teaching-centre"
    }
  ];

  const mapElement = document.getElementById("locations-map");
  const dialog = document.getElementById("location-dialog");
  const dialogContent = document.getElementById("location-dialog-content");
  const searchInput = document.getElementById("location-search");
  const cityFilter = document.getElementById("location-city-filter");
  const resultCount = document.getElementById("location-result-count");
  const directoryList = document.getElementById("location-directory-list");
  const directoryFilters = document.querySelector(".directory-filters");
  const mapLocationDetails = document.getElementById("map-location-details");
  const priorityCities = new Set(["Bà Rịa", "Bắc Ninh", "Biên Hòa", "Cần Thơ", "Đà Nẵng", "Hạ Long", "Nha Trang", "Thái Nguyên"]);

  if (!mapElement || !window.L) {
    return;
  }

  const map = L.map(mapElement, {
    center: [16.6, 107.7],
    zoom: 5.6,
    minZoom: 5,
    maxZoom: 14,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    scrollWheelZoom: true,
    maxBoundsViscosity: 0.48
  });
  mapElement._schoolMap = map;

  const maskPane = map.createPane("vietnam-mask");
  const outlinePane = map.createPane("vietnam-outline");
  maskPane.style.zIndex = 410;
  maskPane.style.pointerEvents = "none";
  outlinePane.style.zIndex = 420;
  outlinePane.style.pointerEvents = "none";

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

  const partnerIcon = L.divIcon({
    className: "school-marker partner-marker",
    html: '<span aria-hidden="true"></span>',
    iconSize: [34, 44],
    iconAnchor: [17, 42]
  });

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalize(value) {
    return String(value || "")
      .toLocaleLowerCase("vi")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function getVietnamBoundary() {
    const boundary = window.school4aiVietnamBoundary;
    if (!boundary || !boundary.features || !boundary.features.length) {
      return null;
    }
    return boundary;
  }

  function getOuterRings(geojson) {
    const features = geojson.type === "FeatureCollection" ? geojson.features : [geojson];
    return features.flatMap((feature) => {
      const geometry = feature.geometry || feature;
      if (!geometry) {
        return [];
      }
      if (geometry.type === "Polygon") {
        return geometry.coordinates.length ? [geometry.coordinates[0]] : [];
      }
      if (geometry.type === "MultiPolygon") {
        return geometry.coordinates
          .filter((polygon) => polygon.length)
          .map((polygon) => polygon[0]);
      }
      return [];
    });
  }

  function createOutsideVietnamMask(geojson) {
    const worldRing = [
      [-180, -90],
      [-180, 90],
      [180, 90],
      [180, -90],
      [-180, -90]
    ];
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [worldRing, ...getOuterRings(geojson)]
      }
    };
  }

  function applyVietnamFocus() {
    const boundary = getVietnamBoundary();
    if (!boundary) {
      return false;
    }

    L.geoJSON(createOutsideVietnamMask(boundary), {
      pane: "vietnam-mask",
      interactive: false,
      style: {
        stroke: false,
        fillColor: "#fbf7ed",
        fillOpacity: 0.56,
        fillRule: "evenodd"
      }
    }).addTo(map);

    const outlineLayer = L.geoJSON(boundary, {
      pane: "vietnam-outline",
      interactive: false,
      style: {
        color: "#277653",
        weight: 2.4,
        opacity: 0.78,
        fillOpacity: 0,
        lineJoin: "round"
      }
    }).addTo(map);

    const vietnamBounds = outlineLayer.getBounds();
    if (!vietnamBounds.isValid()) {
      return false;
    }
    map.fitBounds(vietnamBounds, {
      paddingTopLeft: [54, 46],
      paddingBottomRight: [54, 54],
      maxZoom: 7
    });
    map.setMaxBounds(vietnamBounds.pad(0.58));
    return true;
  }

  function openLocation(location) {
    const message = encodeURIComponent(content.whatsapp.replace("{city}", location.city));
    const href = `https://wa.me/971509718065?text=${message}`;
    const isPartner = location.kind === "partner";
    const title = isPartner ? location.name : location.city;
    dialogContent.innerHTML = `
      <p class="panel-eyebrow">${isPartner ? content.partnerLead : content.invitation}</p>
      <h2 id="location-dialog-title">${escapeHtml(title)}</h2>
      <p>${isPartner ? content.possiblePartner : location.city === "Yên Bái" ? content.startingPoint : content.possibleLocation}</p>
      ${isPartner ? `<p><strong>${content.address}</strong><br>${escapeHtml(location.address)}</p>` : ""}
      ${isPartner ? `<p><strong>${content.source}</strong><br><a href="${escapeHtml(location.sourceUrl)}">${escapeHtml(location.sourceUrl)}</a></p>` : ""}
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

  function renderLocationDetail(location) {
    if (!mapLocationDetails) {
      return;
    }
    const isPartner = location && location.kind === "partner";
    const title = location ? location.city : content.noSelectionTitle;
    const partnerName = isPartner ? `<p class="detail-partner">${escapeHtml(location.name)}</p>` : "";
    const address = isPartner ? `<p class="detail-block"><strong>${content.address}</strong><br>${escapeHtml(location.address)}</p>` : "";
    const source = isPartner ? `<p class="detail-source"><strong>${content.source}</strong><br><a href="${escapeHtml(location.sourceUrl)}">${escapeHtml(location.sourceUrl)}</a></p>` : "";
    const locality = location && !isPartner ? `<p class="detail-meta">${escapeHtml(location.city)}</p>` : "";
    const reason = location ? isPartner ? content.partnerReason : location.city === "Yên Bái" ? content.startingPoint : content.cityReason : content.noSelectionText;
    const status = location ? `<p class="detail-block"><strong>${content.coordinator}</strong><br>${content.status}</p>` : "";
    const prompt = location ? `<p>${content.prompt}</p>` : "";
    const type = location ? isPartner ? content.partnerCard : content.invitationCity : content.invitation;
    const ctaCity = location ? location.city : lang === "vi" ? "khu vuc cua toi" : "my area";
    const href = `https://wa.me/971509718065?text=${encodeURIComponent(content.whatsapp.replace("{city}", ctaCity))}`;
    mapLocationDetails.innerHTML = `
      <p class="detail-type">${type}</p>
      <h2>${escapeHtml(title)}</h2>
      ${partnerName}
      <p>${escapeHtml(reason)}</p>
      ${locality}
      ${address}
      ${source}
      ${status}
      ${location ? `<p class="detail-section-label">${content.nextStep}</p>` : ""}
      ${prompt}
      <a class="button primary whatsapp-link" href="${href}">${content.cta}</a>
    `;
  }

  locations.forEach((location) => {
    const marker = L.marker([location.lat, location.lng], {
      icon: markerIcon,
      title: location.city
    });
    marker.on("click", () => renderLocationDetail(location));
    clusterGroup.addLayer(marker);
  });

  partnerLocations.forEach((location) => {
    const marker = L.marker([location.lat, location.lng], {
      icon: partnerIcon,
      title: location.name
    });
    marker.on("click", () => renderLocationDetail({ ...location, kind: "partner" }));
    clusterGroup.addLayer(marker);
  });

  const directoryLocations = [
    ...locations.map((location) => ({
      ...location,
      kind: "invitation",
      name: location.city,
      reason: location.city === "Yên Bái" ? content.startingPoint : content.cityReason
    })),
    ...partnerLocations.map((location) => ({
      ...location,
      kind: "partner",
      priority: priorityCities.has(location.city),
      reason: content.partnerReason
    }))
  ].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority ? -1 : 1;
    }
    if (a.kind !== b.kind) {
      return a.kind === "partner" ? -1 : 1;
    }
    return a.city.localeCompare(b.city, "vi") || a.name.localeCompare(b.name, "vi");
  });

  function populateCityFilter() {
    if (!cityFilter) {
      return;
    }
    const cities = [...new Set(directoryLocations.map((location) => location.city))].sort((a, b) => a.localeCompare(b, "vi"));
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityFilter.append(option);
    });
  }

  function getFilteredLocations() {
    const term = normalize(searchInput ? searchInput.value : "");
    const city = cityFilter ? cityFilter.value : "";
    return directoryLocations.filter((location) => {
      const haystack = normalize([location.name, location.city, location.address, location.reason].filter(Boolean).join(" "));
      const matchesSearch = !term || haystack.includes(term);
      const matchesCity = !city || location.city === city;
      return matchesSearch && matchesCity;
    });
  }

  function renderDirectoryGroup(title, items, startIndex) {
    if (!items.length) {
      return "";
    }
    const entries = items.map((location, index) => {
      const isPartner = location.kind === "partner";
      const sourceLink = isPartner ? `<a href="${escapeHtml(location.sourceUrl)}">${content.source}</a>` : "";
      const locality = isPartner ? location.address : location.city;
      const partnerName = isPartner ? `<p class="directory-partner">${escapeHtml(location.name)}</p>` : "";
      const priority = location.priority ? `<p class="directory-priority">${content.priorityCandidate}</p>` : "";
      const actionIndex = startIndex + index;
      return `
        <article class="directory-item ${isPartner ? "partner-item" : "city-item"} ${location.priority ? "priority-item" : ""}">
          ${priority}
          <h3>${escapeHtml(location.city)}</h3>
          <p class="directory-type">${isPartner ? content.partnerCard : content.invitationCity}</p>
          ${partnerName}
          <p class="directory-reason">${escapeHtml(location.reason)}</p>
          <p class="directory-locality">${escapeHtml(locality)}</p>
          <div class="directory-actions">
            ${sourceLink}
            <button type="button" data-directory-index="${actionIndex}">${content.viewDetails}</button>
          </div>
        </article>
      `;
    }).join("");
    return `
      <section class="directory-group">
        <h3>${title}</h3>
        <div class="directory-list">${entries}</div>
      </section>
    `;
  }

  function renderDirectory() {
    if (!directoryList || !resultCount) {
      return;
    }
    const filtered = getFilteredLocations();
    resultCount.textContent = filtered.length === 1 ? content.resultSingular : content.resultPlural.replace("{count}", filtered.length);
    if (!filtered.length) {
      directoryList.innerHTML = `<p class="directory-empty">${content.noResults}</p>`;
      return;
    }
    const strongLeads = filtered.filter((location) => location.kind === "partner");
    const otherCities = filtered.filter((location) => location.kind !== "partner");
    directoryList.innerHTML = [
      renderDirectoryGroup(content.strongLeads, strongLeads, 0),
      renderDirectoryGroup(content.otherCities, otherCities, strongLeads.length)
    ].join("");
    directoryList.querySelectorAll("[data-directory-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const location = filtered[Number(button.dataset.directoryIndex)];
        openLocation(location);
      });
    });
  }

  const vietnamFocusApplied = applyVietnamFocus();
  map.addLayer(clusterGroup);
  if (!vietnamFocusApplied) {
    map.fitBounds(clusterGroup.getBounds().pad(0.18));
  }

  populateCityFilter();
  renderDirectory();
  renderLocationDetail(null);
  if (searchInput) {
    searchInput.addEventListener("input", renderDirectory);
  }
  if (cityFilter) {
    cityFilter.addEventListener("change", renderDirectory);
  }
  if (directoryFilters) {
    directoryFilters.addEventListener("submit", (event) => event.preventDefault());
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();
