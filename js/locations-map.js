(function () {
  const lang = document.body.dataset.mapLang === "vi" ? "vi" : "en";
  const content = {
    en: {
      invitation: "Open invitation",
      partnerLead: "Possible partner lead",
      status: "No School4AI weekend is scheduled here yet.",
      coordinator: "Local coordinator wanted",
      prompt: "If you are a parent, teacher, company, or community helper in this area, contact us and we can discuss how to get started.",
      startingPoint: "A possible School4AI community location in Vietnam.",
      possibleLocation: "A possible School4AI community location in Vietnam.",
      possiblePartner: "English language schools are useful local partner leads for space, students, parents, and teachers.",
      possibleCluster: "A possible local combination where learner demand, English-learning capacity, and ICT mentor capacity overlap.",
      address: "Address",
      source: "Source",
      invitationCity: "Possible School4AI city",
      partnerCard: "English school partner",
      clusterCard: "Candidate local combination",
      priorityCandidate: "Priority candidate",
      partnerReason: "Useful because there is already a local English-school partner with access to students, parents, teachers, and possible space.",
      cityReason: "A possible community location for future School4AI activity.",
      clusterReason: "Strong hotspot because ICT organizations and English-learning providers are both visible in this city.",
      localLeadReason: "A useful local lead for students, parents, teachers, and possible space.",
      candidateDisclosure: "Candidate organizations are identified from public information about local presence and activities. No partnership or affiliation is implied unless explicitly stated.",
      ictCandidates: "ICT candidates",
      englishCandidates: "English-learning candidates",
      examplePairings: "Possible local combinations",
      pairingStatus: "Candidate pairing only",
      noSelectionTitle: "Select a location",
      noSelectionText: "Click a city or partner marker on the map to see why that place could matter for School4AI.",
      nextStep: "What happens next",
      viewDetails: "View details",
      viewLocation: "View location",
      noResults: "No matching locations found. Try another city or search term.",
      photoSource: "Photo source",
      statusHotspot: "Hotspot cluster",
      statusStrong: "Strong lead",
      statusExploring: "Exploring",
      statusOpen: "Open invitation",
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
      startingPoint: "Một địa điểm cộng đồng School4AI tiềm năng tại Việt Nam.",
      possibleLocation: "Một địa điểm cộng đồng School4AI tiềm năng tại Việt Nam.",
      possiblePartner: "Các trung tâm tiếng Anh là đầu mối địa phương phù hợp về địa điểm, học sinh, phụ huynh và giáo viên.",
      possibleCluster: "Một tổ hợp địa phương tiềm năng nơi nhu cầu học tập, năng lực tiếng Anh và năng lực cố vấn ICT cùng xuất hiện.",
      address: "Địa chỉ",
      source: "Nguồn",
      invitationCity: "Thành phố School4AI tiềm năng",
      partnerCard: "Đối tác trung tâm tiếng Anh",
      clusterCard: "Tổ hợp địa phương tiềm năng",
      priorityCandidate: "Ứng viên ưu tiên",
      partnerReason: "Hữu ích vì đã có đầu mối trung tâm tiếng Anh địa phương với khả năng tiếp cận học sinh, phụ huynh, giáo viên và địa điểm.",
      cityReason: "Một địa điểm cộng đồng tiềm năng cho hoạt động School4AI trong tương lai.",
      clusterReason: "Điểm nóng mạnh vì thành phố này có cả tổ chức ICT và đơn vị học tiếng Anh hiện diện rõ ràng.",
      localLeadReason: "Một đầu mối địa phương hữu ích cho học sinh, phụ huynh, giáo viên và địa điểm có thể sử dụng.",
      candidateDisclosure: "Các tổ chức ứng viên được xác định từ thông tin công khai về sự hiện diện và hoạt động tại địa phương. Không hàm ý quan hệ đối tác hoặc liên kết trừ khi được nêu rõ.",
      ictCandidates: "Ứng viên ICT",
      englishCandidates: "Ứng viên học tiếng Anh",
      examplePairings: "Tổ hợp địa phương có thể có",
      pairingStatus: "Chỉ là tổ hợp ứng viên",
      noSelectionTitle: "Chọn một địa điểm",
      noSelectionText: "Bấm vào một thành phố hoặc điểm đối tác trên bản đồ để xem vì sao nơi đó có thể phù hợp với School4AI.",
      nextStep: "Bước tiếp theo",
      viewDetails: "Xem chi tiết",
      viewLocation: "Xem địa điểm",
      noResults: "Không tìm thấy địa điểm phù hợp. Hãy thử thành phố hoặc từ khóa khác.",
      photoSource: "Nguồn ảnh",
      statusHotspot: "Cụm điểm nóng",
      statusStrong: "Đầu mối mạnh",
      statusExploring: "Đang tìm hiểu",
      statusOpen: "Lời mời mở",
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
    },
    {
      name: "VUS Nguyễn Thị Minh Khai",
      city: "TP. Hồ Chí Minh",
      address: "189 Nguyễn Thị Minh Khai, Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh",
      lat: 10.7698,
      lng: 106.6897,
      sourceUrl: "https://teachenglish.vus.edu.vn/"
    },
    {
      name: "VUS Võ Thị Sáu Biên Hòa",
      city: "Biên Hòa",
      address: "213-215 Võ Thị Sáu, phường Thống Nhất, TP. Biên Hòa, Đồng Nai",
      lat: 10.9556,
      lng: 106.8468,
      sourceUrl: "https://www.linkedin.com/company/vustheenglishcenter"
    },
    {
      name: "VUS Vũng Tàu",
      city: "Vũng Tàu",
      address: "498 Trương Công Định, TP. Vũng Tàu",
      lat: 10.3562,
      lng: 107.0855,
      sourceUrl: "https://www.linkedin.com/company/vustheenglishcenter"
    },
    {
      name: "VUS Cầu Giấy",
      city: "Hà Nội",
      address: "Tầng 2 & 3, Tòa Nhà CTM, 299 Cầu Giấy, phường Dịch Vọng, Cầu Giấy, Hà Nội",
      lat: 21.0364,
      lng: 105.7899,
      sourceUrl: "https://www.linkedin.com/company/vustheenglishcenter"
    },
    {
      name: "ILA Nguyễn Đình Chiểu",
      city: "TP. Hồ Chí Minh",
      address: "146 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh",
      lat: 10.7828,
      lng: 106.6905,
      sourceUrl: "https://career.ila.edu.vn/job-description/ila-centre-manager-overseas-study-centre-MDQtMDgtMjAyMy0xNzoxODo0Ng%3D%3D"
    },
    {
      name: "YOLA Trần Não",
      city: "TP. Thủ Đức",
      address: "115 Trần Não, khu phố 4, Bình An, TP. Thủ Đức, TP. Hồ Chí Minh",
      lat: 10.7901,
      lng: 106.7352,
      sourceUrl: "https://teacheratyola.talent.vn/"
    },
    {
      name: "YOLA Nguyễn Tri Phương",
      city: "TP. Hồ Chí Minh",
      address: "431 Nguyễn Tri Phương, Phường 8, Quận 10, TP. Hồ Chí Minh",
      lat: 10.7654,
      lng: 106.6683,
      sourceUrl: "https://teacheratyola.talent.vn/"
    },
    {
      name: "YOLA Phan Đăng Lưu",
      city: "TP. Hồ Chí Minh",
      address: "128B Phan Đăng Lưu, Phú Nhuận, TP. Hồ Chí Minh",
      lat: 10.8008,
      lng: 106.6824,
      sourceUrl: "https://news.tuoitre.vn/yola-expands-with-new-phan-dang-luu-center-reinforcing-commitment-to-empowering-vietnamese-young-talent-103250609102805132.htm"
    },
    {
      name: "RES Nguyễn Thượng Hiền",
      city: "Hà Nội",
      address: "17 Nguyễn Thượng Hiền, phường Cửa Nam, Hà Nội",
      lat: 21.0189,
      lng: 105.8432,
      sourceUrl: "https://res.edu.vn/chi-nhanh/"
    },
    {
      name: "RES Quận 7",
      city: "TP. Hồ Chí Minh",
      address: "10-12 Nguyễn Thị Thập, phường Tân Hưng, Quận 7, TP. Hồ Chí Minh",
      lat: 10.7406,
      lng: 106.7041,
      sourceUrl: "https://res.edu.vn/trung-tam-luyen-thi-ielts-tot-nhat-quan-7/"
    }
  ];

  const candidateClusters = [
    {
      city: "Hà Nội",
      clusterOrder: 1,
      lat: 21.0278,
      lng: 105.8342,
      ictCandidates: [
        { name: "NTQ Solution", sourceUrl: "https://ntq.com.vn/vi/lien-he/" },
        { name: "SotaTek", sourceUrl: "https://www.sotatek.com/careers-list/" },
        { name: "Rikkeisoft", sourceUrl: "https://rikkeisoft.com/" },
        { name: "NashTech", sourceUrl: "https://www.nashtechglobal.com/our-locations" },
        { name: "FPT", sourceUrl: "https://fpt.com/en/contact" }
      ],
      englishCandidates: [
        { name: "ILA Vietnam", sourceUrl: "https://ila.edu.vn/en/centers" },
        { name: "Apollo English", sourceUrl: "https://apollo.edu.vn/en/center-locations" },
        { name: "British Council Hanoi", sourceUrl: "https://www.britishcouncil.vn/en/english-courses/teaching-centre/hanoi" }
      ],
      pairings: ["NTQ Solution + ILA Hanoi", "SotaTek + Apollo Hanoi", "NashTech + British Council Hanoi"]
    },
    {
      city: "TP. Hồ Chí Minh",
      clusterOrder: 2,
      lat: 10.8231,
      lng: 106.6297,
      ictCandidates: [
        { name: "NashTech", sourceUrl: "https://www.nashtechglobal.com/our-locations" },
        { name: "KMS Technology", sourceUrl: "https://kms-technology.com/contact/" },
        { name: "SotaTek", sourceUrl: "https://www.sotatek.com/careers-list/" },
        { name: "Rikkeisoft", sourceUrl: "https://rikkeisoft.com/" },
        { name: "FPT", sourceUrl: "https://fpt.com/en/contact" },
        { name: "Axon Active", sourceUrl: "https://axonactive.com/" }
      ],
      englishCandidates: [
        { name: "ILA Vietnam", sourceUrl: "https://ila.edu.vn/en/centers" },
        { name: "Apollo English", sourceUrl: "https://apollo.edu.vn/en/center-locations" }
      ],
      pairings: ["KMS Technology + ILA Ho Chi Minh City", "NashTech + Apollo Ho Chi Minh City", "Axon Active + ILA Ho Chi Minh City"]
    },
    {
      city: "Đà Nẵng",
      clusterOrder: 3,
      lat: 16.0544,
      lng: 108.2022,
      ictCandidates: [
        { name: "Axon Active", sourceUrl: "https://axonactive.com/" },
        { name: "KMS Technology", sourceUrl: "https://kms-technology.com/contact/" },
        { name: "SotaTek", sourceUrl: "https://www.sotatek.com/careers-list/" },
        { name: "Rikkeisoft", sourceUrl: "https://rikkeisoft.com/" },
        { name: "FPT", sourceUrl: "https://fpt.com/en/contact" }
      ],
      englishCandidates: [
        { name: "ILA Da Nang", sourceUrl: "https://ila.edu.vn/en/centers" },
        { name: "Apollo Da Nang", sourceUrl: "https://apollo.edu.vn/en/center-locations" }
      ],
      pairings: ["Axon Active + Apollo Da Nang", "KMS Technology + ILA Da Nang", "SotaTek + Apollo Da Nang"]
    },
    {
      city: "Cần Thơ",
      clusterOrder: 4,
      lat: 10.0452,
      lng: 105.7469,
      ictCandidates: [
        { name: "Axon Active", sourceUrl: "https://axonactive.com/" },
        { name: "FPT", sourceUrl: "https://fpt.com/en/contact" }
      ],
      englishCandidates: [
        { name: "ILA Can Tho", sourceUrl: "https://ila.edu.vn/en/centers" },
        { name: "Apollo Can Tho", sourceUrl: "https://apollo.edu.vn/en/center-locations" }
      ],
      pairings: ["Axon Active + ILA Can Tho", "FPT Can Tho + Apollo Can Tho"]
    }
  ];

  const mapElement = document.getElementById("locations-map");
  const dialog = document.getElementById("location-dialog");
  const dialogContent = document.getElementById("location-dialog-content");
  const searchInput = document.getElementById("location-search");
  const directoryList = document.getElementById("location-directory-list");
  const directoryFilters = document.querySelector(".directory-filters");
  const mapLocationDetails = document.getElementById("map-location-details");
  const locationCountElements = document.querySelectorAll("[data-location-count]");
  const directoryTotalElements = document.querySelectorAll("[data-directory-total]");
  const priorityCities = new Set(["Bà Rịa", "Bắc Ninh", "Biên Hòa", "Cần Thơ", "Đà Nẵng", "Hà Nội", "Hạ Long", "Nha Trang", "TP. Hồ Chí Minh", "Thái Nguyên"]);
  const cityImages = {
    "Bà Rịa": "ba-ria-vung-tau",
    "Vũng Tàu": "ba-ria-vung-tau",
    "Bắc Ninh": "bac-ninh",
    "Từ Sơn": "bac-ninh",
    "Bến Tre": "ben-tre",
    "Biên Hòa": "bien-hoa",
    "Buôn Ma Thuột": "buon-ma-thuot",
    "Nam Định": "nam-dinh",
    "Yên Bái": "yen-bai",
    "Đà Nẵng": "da-nang",
    "Nha Trang": "nha-trang",
    "Cần Thơ": "can-tho",
    "TP. Hồ Chí Minh": "hcmc",
    "TP. Thủ Đức": "hcmc"
  };
  const locationPhotoSources = {
    "ba-ria-vung-tau": "https://commons.wikimedia.org/wiki/File:V%C5%A9ng_T%C3%A0u,_Ba_Ria_-_Vung_Tau,_Vietnam_-_panoramio_(2).jpg",
    "bac-ninh": "https://commons.wikimedia.org/wiki/File:But_Thap_Temple_-_20.jpg",
    "ben-tre": "https://commons.wikimedia.org/wiki/File:20190924_Ben_Tre_Bridge-1.jpg",
    "bien-hoa": "https://commons.wikimedia.org/wiki/File:B%E1%BB%ADu_Long,_Bien_Hoa,_Dong_Nai,_Vietnam_-_panoramio_(23).jpg",
    "buon-ma-thuot": "https://commons.wikimedia.org/wiki/File:Bu%C3%B4n_Ma_Thu%E1%BB%99t_banner_%C4%90ray_Nur_waterfall.jpg",
    "nam-dinh": "https://commons.wikimedia.org/wiki/File:C%E1%BB%95ng_ch%C3%A0o_Nam_%C4%90%E1%BB%8Bnh_(Nam_Dinh_City_Gate,_Vietnam).jpg",
    "yen-bai": "https://commons.wikimedia.org/wiki/File:Mu_Cang_Chai_Town_-_Yen_Bai_-_Vietnam.jpg",
    "da-nang": "https://commons.wikimedia.org/wiki/File:Dragon_Bridge_Da_Nang_7.jpg",
    "nha-trang": "https://commons.wikimedia.org/wiki/File:Nha_Trang_Beach_3.jpg",
    "can-tho": "https://commons.wikimedia.org/wiki/File:Can_Tho,_Vietnam,_Floating_Market.jpg",
    "hcmc": "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_City,_Notre-Dame_Basilica,_2020-01_CN-01.jpg"
  };
  const regionalFallbacks = {
    north: "yen-bai",
    central: "da-nang",
    south: "can-tho"
  };

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

  const selectedMarkerIcon = L.divIcon({
    className: "school-marker selected-marker",
    html: '<span aria-hidden="true"></span>',
    iconSize: [42, 52],
    iconAnchor: [21, 50]
  });

  const selectedPartnerIcon = L.divIcon({
    className: "school-marker partner-marker selected-marker",
    html: '<span aria-hidden="true"></span>',
    iconSize: [42, 52],
    iconAnchor: [21, 50]
  });

  const markerRegistry = new Map();
  let selectedMarker = null;

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

  function getLocationKind(location) {
    if (location && location.kind === "cluster") {
      return "cluster";
    }
    return location && location.kind === "partner" ? "partner" : "invitation";
  }

  function getLocationKey(location) {
    if (!location) {
      return "";
    }
    const kind = getLocationKind(location);
    const markerKind = kind === "cluster" ? "invitation" : kind;
    const name = kind === "partner" ? location.name : location.city;
    return `${markerKind}:${name}:${location.city}`;
  }

  function getDefaultIcon(location) {
    return getLocationKind(location) === "partner" ? partnerIcon : markerIcon;
  }

  function getSelectedIcon(location) {
    return getLocationKind(location) === "partner" ? selectedPartnerIcon : selectedMarkerIcon;
  }

  function setSelectedMarker(location) {
    if (selectedMarker) {
      selectedMarker.setIcon(getDefaultIcon(selectedMarker.school4aiLocation));
      selectedMarker.setZIndexOffset(0);
      selectedMarker = null;
    }
    const marker = markerRegistry.get(getLocationKey(location));
    if (!marker) {
      return;
    }
    marker.setIcon(getSelectedIcon(location));
    marker.setZIndexOffset(1000);
    selectedMarker = marker;
  }

  function getLocationRegion(location) {
    if (location.lat >= 18.2) {
      return "north";
    }
    if (location.lat >= 12.1) {
      return "central";
    }
    return "south";
  }

  function getSelectedRadio(name) {
    const checked = directoryFilters ? directoryFilters.querySelector(`input[name="${name}"]:checked`) : null;
    return checked ? checked.value : "";
  }

  function getStatusLabel(status) {
    if (status === "hotspot") {
      return content.statusHotspot;
    }
    if (status === "strong") {
      return content.statusStrong;
    }
    if (status === "exploring") {
      return content.statusExploring;
    }
    return content.statusOpen;
  }

  function enrichDirectoryLocation(location) {
    const region = getLocationRegion(location);
    const imageKey = cityImages[location.city] || regionalFallbacks[region];
    const isPartner = location.kind === "partner";
    const isCluster = location.kind === "cluster";
    const statusValue = isCluster ? "hotspot" : location.priority ? "strong" : isPartner ? "exploring" : "open";
    const photoSourceUrl = locationPhotoSources[imageKey];
    return {
      ...location,
      region,
      statusValue,
      statusLabel: getStatusLabel(statusValue),
      image: `assets/location-photos/${imageKey}.webp`,
      imageAlt: `${location.city}, Vietnam`,
      photoSourceUrl,
      reason: isPartner && location.priority ? content.localLeadReason : location.reason
    };
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
      <p>${isPartner ? content.possiblePartner : content.possibleLocation}</p>
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
    setSelectedMarker(location);
    const isPartner = location && location.kind === "partner";
    const isCluster = location && location.kind === "cluster";
    const title = location ? location.city : content.noSelectionTitle;
    const partnerName = isPartner ? `<p class="detail-partner">${escapeHtml(location.name)}</p>` : "";
    const address = isPartner ? `<p class="detail-block"><strong>${content.address}</strong><br>${escapeHtml(location.address)}</p>` : "";
    const source = isPartner ? `<p class="detail-source"><strong>${content.source}</strong><br><a href="${escapeHtml(location.sourceUrl)}">${escapeHtml(location.sourceUrl)}</a></p>` : "";
    const locality = location && !isPartner ? `<p class="detail-meta">${escapeHtml(location.city)}</p>` : "";
    const reason = location ? isCluster ? content.clusterReason : isPartner ? content.partnerReason : content.cityReason : content.noSelectionText;
    const status = location ? `<p class="detail-block"><strong>${content.coordinator}</strong><br>${content.status}</p>` : "";
    const prompt = location ? `<p>${content.prompt}</p>` : "";
    const type = location ? isCluster ? content.clusterCard : isPartner ? content.partnerCard : content.invitationCity : content.invitation;
    const ctaCity = location ? location.city : lang === "vi" ? "khu vuc cua toi" : "my area";
    const href = `https://wa.me/971509718065?text=${encodeURIComponent(content.whatsapp.replace("{city}", ctaCity))}`;
    const clusterBlock = isCluster ? `
      <div class="detail-candidate-grid">
        <div>
          <p class="detail-section-label">${content.ictCandidates}</p>
          ${renderCandidateLinks(location.ictCandidates)}
        </div>
        <div>
          <p class="detail-section-label">${content.englishCandidates}</p>
          ${renderCandidateLinks(location.englishCandidates)}
        </div>
      </div>
      <p class="detail-section-label">${content.examplePairings}</p>
      ${renderPairings(location.pairings)}
      <p class="candidate-disclosure">${content.candidateDisclosure}</p>
    ` : "";
    mapLocationDetails.innerHTML = `
      <p class="detail-type">${type}</p>
      <h2>${escapeHtml(title)}</h2>
      ${partnerName}
      <p>${escapeHtml(reason)}</p>
      ${locality}
      ${address}
      ${source}
      ${clusterBlock}
      ${status}
      ${location ? `<p class="detail-section-label">${content.nextStep}</p>` : ""}
      ${prompt}
      <a class="button primary whatsapp-link" href="${href}">${content.cta}</a>
    `;
  }

  function renderCandidateLinks(candidates) {
    return `<ul class="candidate-list">${candidates.map((candidate) => `
      <li><a href="${escapeHtml(candidate.sourceUrl)}">${escapeHtml(candidate.name)}</a></li>
    `).join("")}</ul>`;
  }

  function renderPairings(pairings) {
    return `<ul class="candidate-pairings">${pairings.map((pairing) => `
      <li>${escapeHtml(pairing)} <span>${content.pairingStatus}</span></li>
    `).join("")}</ul>`;
  }

  locations.forEach((location) => {
    const marker = L.marker([location.lat, location.lng], {
      icon: markerIcon,
      title: location.city
    });
    marker.school4aiLocation = location;
    markerRegistry.set(getLocationKey(location), marker);
    marker.on("click", () => renderLocationDetail(location));
    clusterGroup.addLayer(marker);
  });

  partnerLocations.forEach((location) => {
    const partnerLocation = { ...location, kind: "partner" };
    const marker = L.marker([location.lat, location.lng], {
      icon: partnerIcon,
      title: location.name
    });
    marker.school4aiLocation = partnerLocation;
    markerRegistry.set(getLocationKey(partnerLocation), marker);
    marker.on("click", () => renderLocationDetail(partnerLocation));
    clusterGroup.addLayer(marker);
  });

  const directoryLocations = [
    ...locations.map((location) => ({
      ...location,
      kind: "invitation",
      name: location.city,
      reason: content.cityReason
    })),
    ...partnerLocations.map((location) => ({
      ...location,
      kind: "partner",
      priority: priorityCities.has(location.city),
      reason: content.partnerReason
    })),
    ...candidateClusters.map((location) => ({
      ...location,
      kind: "cluster",
      name: location.city,
      priority: true,
      reason: content.clusterReason
    }))
  ].map(enrichDirectoryLocation).sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority ? -1 : 1;
    }
    if (a.kind !== b.kind) {
      if (a.kind === "cluster") {
        return -1;
      }
      if (b.kind === "cluster") {
        return 1;
      }
      return a.kind === "partner" ? -1 : 1;
    }
    if (a.kind === "cluster") {
      return a.clusterOrder - b.clusterOrder;
    }
    return a.city.localeCompare(b.city, "vi") || a.name.localeCompare(b.name, "vi");
  });

  function renderLocationTotals() {
    const total = directoryLocations.length.toLocaleString(lang === "vi" ? "vi-VN" : "en");
    locationCountElements.forEach((element) => {
      element.textContent = total;
    });
    directoryTotalElements.forEach((element) => {
      element.textContent = total;
    });
  }

  function getFilteredLocations() {
    const term = normalize(searchInput ? searchInput.value : "");
    const type = getSelectedRadio("location-type");
    const region = getSelectedRadio("location-region");
    return directoryLocations.filter((location) => {
      const candidateText = [
        ...(location.ictCandidates || []).map((candidate) => candidate.name),
        ...(location.englishCandidates || []).map((candidate) => candidate.name),
        ...(location.pairings || [])
      ].join(" ");
      const haystack = normalize([location.name, location.city, location.address, location.reason, candidateText].filter(Boolean).join(" "));
      const matchesSearch = !term || haystack.includes(term);
      const matchesType = !type || location.kind === type;
      const matchesRegion = !region || location.region === region;
      return matchesSearch && matchesType && matchesRegion;
    });
  }

  function renderDirectoryItems(items) {
    if (!items.length) {
      return "";
    }
    const entries = items.map((location, index) => {
      const isPartner = location.kind === "partner";
      const isCluster = location.kind === "cluster";
      const sourceLink = isPartner ? `<a href="${escapeHtml(location.sourceUrl)}">${content.source}</a>` : "";
      const photoSource = location.photoSourceUrl ? `<a href="${escapeHtml(location.photoSourceUrl)}">${content.photoSource}</a>` : "";
      const locality = isPartner ? location.address : location.city;
      const partnerName = isPartner ? `<p class="directory-partner">${escapeHtml(location.name)}</p>` : "";
      const candidateNames = isCluster ? `
        <p class="directory-candidates">${escapeHtml([...location.ictCandidates, ...location.englishCandidates].map((candidate) => candidate.name).join(" · "))}</p>
        <p class="candidate-disclosure">${content.candidateDisclosure}</p>
      ` : "";
      const sourceItems = [sourceLink, photoSource].filter(Boolean).join("");
      return `
        <article class="directory-item ${isCluster ? "cluster-item" : isPartner ? "partner-item" : "city-item"} ${location.priority ? "priority-item" : ""}">
          <img src="${escapeHtml(location.image)}" alt="${escapeHtml(location.imageAlt)}" loading="lazy">
          <div class="directory-item-copy">
            <p class="directory-priority">${escapeHtml(location.statusLabel)}</p>
            <h3>${escapeHtml(location.city)}</h3>
            ${partnerName}
            <p class="directory-type">${isCluster ? content.clusterCard : isPartner ? content.partnerCard : content.invitationCity}</p>
            <p class="directory-reason">${escapeHtml(location.reason)}</p>
            ${candidateNames}
            <p class="directory-locality">${escapeHtml(locality)}</p>
            <div class="directory-actions">
              ${sourceItems}
              <button type="button" data-directory-index="${index}">${content.viewLocation}</button>
            </div>
          </div>
        </article>
      `;
    }).join("");
    return `<div class="directory-list">${entries}</div>`;
  }

  function renderDirectory() {
    if (!directoryList) {
      return;
    }
    const filtered = getFilteredLocations();
    if (!filtered.length) {
      directoryList.innerHTML = `<p class="directory-empty">${content.noResults}</p>`;
      return;
    }
    directoryList.innerHTML = renderDirectoryItems(filtered);
    directoryList.querySelectorAll("[data-directory-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".directory-item");
        const location = filtered[Number(button.dataset.directoryIndex)];
        renderLocationDetail(location);
        map.flyTo([location.lat, location.lng], Math.max(map.getZoom(), 8), { duration: 0.7 });
        document.querySelector(".map-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
        if (card) {
          card.classList.add("is-selected");
          setTimeout(() => card.classList.remove("is-selected"), 900);
        }
      });
    });
  }

  const vietnamFocusApplied = applyVietnamFocus();
  map.addLayer(clusterGroup);
  if (!vietnamFocusApplied) {
    map.fitBounds(clusterGroup.getBounds().pad(0.18));
  }

  renderLocationTotals();
  renderDirectory();
  renderLocationDetail(null);
  if (searchInput) {
    searchInput.addEventListener("input", renderDirectory);
  }
  if (directoryFilters) {
    directoryFilters.addEventListener("submit", (event) => event.preventDefault());
    directoryFilters.addEventListener("change", renderDirectory);
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();
