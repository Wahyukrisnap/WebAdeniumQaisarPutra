// Katalog Tanaman Adenium
const defaultKatalog = [
  // Tanaman Koleksi
  {
    id: 1,
    nama: "Beauty Varigata",
    jenis: "koleksi",
    deskripsi: "",
    gambar: "Asset/Beauty Varigata Koleksi.jpeg",
  },
  {
    id: 2,
    nama: "Moonlight Yellow",
    jenis: "koleksi",
    deskripsi: "",
    gambar: "Asset/Moonlight Yellow Koleksian.jpeg",
  },
  {
    id: 3,
    nama: "Percabangan Aktif",
    jenis: "koleksi",
    deskripsi: "",
    gambar: "Asset/Percabangan Aktif Koleksi.jpeg",
  },
  {
    id: 4,
    nama: "Petit",
    jenis: "koleksi",
    deskripsi: "",
    gambar: "Asset/Petit Koleksi.jpeg",
  },
  {
    id: 5,
    nama: "Thaisoco",
    jenis: "koleksi",
    deskripsi: "",
    gambar: "Asset/Thaisoco Koleksi.jpeg",
  },
  {
    id: 6,
    nama: "Id Arabicum Bonggol Emas",
    jenis: "koleksi",
    deskripsi: "Adenium dengan bonggol emas yang indah dan unik.",
    gambar: "Asset/Bonggol Emas Koleksian.jpg",
  },
  // Tanaman Grafting (Id)
  {
    id: 7,
    nama: "Id Banburi",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Banburi.jpeg",
  },
  {
    id: 8,
    nama: "Id Camelia",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Camelia.jpeg",
  },
  {
    id: 9,
    nama: "Id Chili Vermilion",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Chili Vermilion.jpeg",
  },
  {
    id: 10,
    nama: "Id Citrus Brezee",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Citrus Brezee.jpeg",
  },
  {
    id: 11,
    nama: "Id Eye of The Storm",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Eye of The Storm.jpeg",
  },
  {
    id: 12,
    nama: "Id Golden Cicada",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Golden Cicada.jpeg",
  },
  {
    id: 13,
    nama: "Id Golden Dragon",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Golden Dragon.jpeg",
  },
  {
    id: 14,
    nama: "Id Golden Year",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Golden Year.jpeg",
  },
  {
    id: 15,
    nama: "Id Hangson",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Hangson.jpeg",
  },
  {
    id: 16,
    nama: "Id Kindly",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Kindly.jpeg",
  },
  {
    id: 17,
    nama: "Id Kirei",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Kirei.jpeg",
  },
  {
    id: 18,
    nama: "Id Kumbang",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Kumbang.jpeg",
  },
  {
    id: 19,
    nama: "Id Lembayung",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Lembayung.jpeg",
  },
  {
    id: 20,
    nama: "Id Lumintang",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Lumintang.jpeg",
  },
  {
    id: 21,
    nama: "Id Madeira",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Madeira.jpeg",
  },
  {
    id: 22,
    nama: "Id Mussela",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Mussela.jpeg",
  },
  {
    id: 23,
    nama: "Id Num Wan",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Num Wan.jpeg",
  },
  {
    id: 24,
    nama: "Id Red Spider",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Red Spider.jpeg",
  },
  {
    id: 25,
    nama: "Id Sakura",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Sakura.jpeg",
  },
  {
    id: 26,
    nama: "Id Smile In The Dark Night",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Smile In The Dark Night.jpeg",
  },
  {
    id: 27,
    nama: "Id Suntikan Yellow",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Suntikan Yellow.jpeg",
  },

  // Item dengan ID 27 sekarang adalah Id Suntikan Yellow

  // Tanaman Grafting
  {
    id: 28,
    nama: "Ac Milan",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Ac Milan.jpeg",
  },
  {
    id: 29,
    nama: "Bao Trum 9",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Bao Trum 9.jpeg",
  },
  {
    id: 30,
    nama: "Beauty of Taiwan",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Beauty of Taiwan.jpeg",
  },
  {
    id: 31,
    nama: "Black Amarilis",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Black Amarilis.jpeg",
  },
  {
    id: 32,
    nama: "Black Canyon",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Black Canyon.jpeg",
  },
  {
    id: 33,
    nama: "Black Lover",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Black Lover.jpeg",
  },
  {
    id: 34,
    nama: "Calypso",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Calypso.jpeg",
  },
  {
    id: 35,
    nama: "Candik Ayu",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Candik Ayu.jpeg",
  },
  {
    id: 36,
    nama: "Cecilia",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Cecilia.jpeg",
  },
  {
    id: 37,
    nama: "Chamelion",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Chamelion.jpeg",
  },
  {
    id: 38,
    nama: "Dragon Castle",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Dragon Castle.jpeg",
  },
  {
    id: 39,
    nama: "Dunhuang",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Dunhuang.jpeg",
  },
  {
    id: 40,
    nama: "Gloria",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Gloria.jpeg",
  },
  {
    id: 41,
    nama: "Golden Boy",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Golden Boy.jpeg",
  },
  {
    id: 42,
    nama: "Golden Master",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Golden Master.jpeg",
  },
  {
    id: 43,
    nama: "Golden Phoenix",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Golden Phoenix.jpeg",
  },
  {
    id: 44,
    nama: "Golden Swan",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Golden Swan.jpeg",
  },
  {
    id: 45,
    nama: "HasadePink",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/HasadePink.jpeg",
  },
  {
    id: 46,
    nama: "Honey Lemon",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Honey Lemon.jpeg",
  },
  {
    id: 47,
    nama: "Hot Girl",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Hot Girl.jpeg",
  },
  {
    id: 48,
    nama: "Ijo Celontong",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Ijo Celontong.jpeg",
  },
  {
    id: 49,
    nama: "Jaws",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Jaws.jpeg",
  },
  {
    id: 50,
    nama: "Julius Caesar",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Julius Caesar.jpeg",
  },
  {
    id: 51,
    nama: "Kaleidoscope",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Kaleidoscope.jpeg",
  },
  {
    id: 52,
    nama: "Legend",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Legend.jpeg",
  },
  {
    id: 53,
    nama: "Liberty",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Liberty.jpeg",
  },
  {
    id: 54,
    nama: "Lotus Evija",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Lotus Evija.jpeg",
  },
  {
    id: 55,
    nama: "MO",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/MO.jpeg",
  },
  {
    id: 56,
    nama: "Mahasaytii",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Mahasaytii.jpeg",
  },
  {
    id: 57,
    nama: "Meng Qian",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Meng Qian.jpeg",
  },
  {
    id: 58,
    nama: "Mongcam",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Mongcam.jpeg",
  },
  {
    id: 59,
    nama: "Musk Lady",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Musk Lady.jpeg",
  },
  {
    id: 60,
    nama: "Olive",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Olive.jpeg",
  },
  {
    id: 61,
    nama: "Orange JE",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Orange JE.jpeg",
  },
  {
    id: 62,
    nama: "PetMongkon",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/PetMongkon.jpeg",
  },
  {
    id: 63,
    nama: "Pinot Noir",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Pinot Noir.jpeg",
  },
  {
    id: 64,
    nama: "Porcelain 2",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Porcelain 2.jpeg",
  },
  {
    id: 65,
    nama: "Purple Jinda",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Purpel Jinda.jpeg",
  },
  // Item Purple Pupil dihapus dari katalog
  // Item Racan Purple dihapus dari katalog
  {
    id: 69,
    nama: "Santa Clause",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Santa Clause.jpeg",
  },
  {
    id: 70,
    nama: "Snow Gold",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Snow Gold.jpeg",
  },
  {
    id: 71,
    nama: "Snow White",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Snow White.jpeg",
  },
  {
    id: 72,
    nama: "Sunny Day",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Sunny Day.jpeg",
  },
  {
    id: 73,
    nama: "Taurus",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Taurus.jpeg",
  },
  {
    id: 74,
    nama: "Triple Wish",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Triple Wish.jpeg",
  },
  {
    id: 75,
    nama: "Trung Thing",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Trung Thing.jpeg",
  },
  {
    id: 76,
    nama: "Unparallede",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Unparallede.jpeg",
  },
  {
    id: 77,
    nama: "Wasabi",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Wasabi.jpeg",
  },
  {
    id: 78,
    nama: "Wonderland",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Wonderland.jpeg",
  },
  {
    id: 79,
    nama: "Yellow Vietnam",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Yellow Vietnam.jpeg",
  },
  {
    id: 80,
    nama: "Yuvika",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Yuvika.jpeg",
  },
  {
    id: 81,
    nama: "Zahra",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Zahra.jpeg",
  },
  // Tambahan tanaman yang belum ada di katalog
  {
    id: 82,
    nama: "Ac Milan",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Ac Milan.jpeg",
  },
  {
    id: 83,
    nama: "Bao Trum 9",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Bao Trum 9.jpeg",
  },
  {
    id: 84,
    nama: "Beauty of Taiwan",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Beauty of Taiwan.jpeg",
  },
  {
    id: 85,
    nama: "Black Amarilis",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Black Amarilis.jpeg",
  },
  {
    id: 86,
    nama: "Black Canyon",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Black Canyon.jpeg",
  },
  {
    id: 87,
    nama: "Black Lover",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Black Lover.jpeg",
  },
  {
    id: 88,
    nama: "Calypso",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Calypso.jpeg",
  },
  {
    id: 89,
    nama: "Candik Ayu",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Candik Ayu.jpeg",
  },
  {
    id: 90,
    nama: "Cecilia",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Cecilia.jpeg",
  },
  {
    id: 91,
    nama: "Chamelion",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Chamelion.jpeg",
  },
  {
    id: 92,
    nama: "Dragon Castle",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Dragon Castle.jpeg",
  },
  {
    id: 93,
    nama: "Dunhuang",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Dunhuang.jpeg",
  },
  {
    id: 94,
    nama: "Gloria",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Gloria.jpeg",
  },
  {
    id: 95,
    nama: "Hot Girl",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Hot Girl.jpeg",
  },
  {
    id: 96,
    nama: "Ijo Celontong",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Ijo Celontong.jpeg",
  },
  {
    id: 97,
    nama: "Jaws",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Jaws.jpeg",
  },
  {
    id: 98,
    nama: "Julius Caesar",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Julius Caesar.jpeg",
  },
  {
    id: 99,
    nama: "Kaleidoscope",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Kaleidoscope.jpeg",
  },
  {
    id: 100,
    nama: "Legend",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Legend.jpeg",
  },
  {
    id: 101,
    nama: "Liberty",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Liberty.jpeg",
  },
  {
    id: 102,
    nama: "Lotus Evija",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Lotus Evija.jpeg",
  },
  {
    id: 103,
    nama: "MO",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/MO.jpeg",
  },
  {
    id: 104,
    nama: "Mahasaytii",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Mahasaytii.jpeg",
  },
  {
    id: 105,
    nama: "PetMongkon",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/PetMongkon.jpeg",
  },
  {
    id: 106,
    nama: "Pinot Noir",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Pinot Noir.jpeg",
  },
  {
    id: 107,
    nama: "Porcelain 2",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Porcelain 2.jpeg",
  },
  {
    id: 108,
    nama: "Purple Jinda",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Purpel Jinda.jpeg",
  },
  // Item Purpel Pupil dihapus dari katalog
  // Item Racan Purpel dihapus dari katalog
  {
    id: 111,
    nama: "Santa Clause",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Santa Clause.jpeg",
  },
  {
    id: 112,
    nama: "Snow Gold",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Snow Gold.jpeg",
  },
  {
    id: 113,
    nama: "Snow White",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Snow White.jpeg",
  },
  {
    id: 114,
    nama: "Unparallede",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Unparallede.jpeg",
  },
  {
    id: 115,
    nama: "Wasabi",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Wasabi.jpeg",
  },
  {
    id: 116,
    nama: "Wonderland",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Wonderland.jpeg",
  },
  {
    id: 117,
    nama: "Yellow Vietnam",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Yellow Vietnam.jpeg",
  },
  {
    id: 118,
    nama: "Yuvika",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Yuvika.jpeg",
  },
  {
    id: 119,
    nama: "Zahra",
    jenis: "biasa",
    deskripsi: "",
    gambar: "Asset/Zahra.jpeg",
  },
  {
    id: 120,
    nama: "Id Ferari",
    jenis: "grafting",
    deskripsi: "Adenium Id Ferari dengan keindahan yang unik dan menarik. Varietas grafting premium dengan karakteristik bunga yang indah.",
    gambar: "Asset/Id Ferari.jpg",
  },
  {
    id: 121,
    nama: "Id Tangnapaka",
    jenis: "grafting",
    deskripsi: "Adenium Id Tangnapaka dengan keindahan yang unik dan menarik. Varietas grafting premium dengan karakteristik bunga yang indah.",
    gambar: "Asset/Id Tangnapaka.jpg",
  },

];

// Fungsi untuk menampilkan katalog - TIDAK DIGUNAKAN, DIGANTI DENGAN displayKatalog
// Fungsi ini dipertahankan untuk referensi tetapi tidak digunakan lagi
/*
function tampilkanKatalog(katalog) {
  const katalogContainer = document.getElementById("katalog-container");
  katalogContainer.innerHTML = "";

  katalog.forEach((item) => {
    const card = document.createElement("div");
    card.className = "katalog-card";
    card.dataset.jenis = item.jenis;

    // Menentukan label jenis yang benar
    let jenisLabel = "";
    if (item.jenis === "koleksi") {
      jenisLabel = "Adenium Koleksi";
    } else if (item.jenis === "biasa") {
      jenisLabel = "Adenium Biasa";
    } else {
      jenisLabel = "Adenium Grafting";
    }

    card.innerHTML = `
      <div class="katalog-img">
        <img src="${item.gambar}" alt="${item.nama}">
      </div>
      <div class="katalog-info">
        <h3>${item.nama}</h3>
        <p class="jenis-tag ${item.jenis}">${jenisLabel}</p>
        <a href="https://wa.me/6285716942804?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
          item.nama
        )}%20yang%20dijual.%20Apakah%20masih%20tersedia?" class="btn" target="_blank">Pesan Sekarang</a>
      </div>
    `;

    // Menambahkan event listener untuk gambar saja
    const imgContainer = card.querySelector(".katalog-img");
    imgContainer.addEventListener("click", (e) => {
      e.stopPropagation();
      tampilkanDetail(item);
    });

    katalogContainer.appendChild(card);
  });
}
*/


// Fungsi untuk menampilkan detail tanaman
function tampilkanDetail(item) {
  const modalContainer = document.getElementById("modal-container");
  const modalContent = document.getElementById("modal-content");

  // Menentukan label jenis yang benar
  let jenisLabel = "";
  if (item.jenis === "koleksi") {
    jenisLabel = "Adenium Koleksi";
  } else {
    jenisLabel = "Adenium Grafting";
  }

  modalContent.innerHTML = `
    <span class="close-btn">&times;</span>
    <div class="detail-container">
      <div class="detail-img">
        <img src="${item.gambar}" alt="${item.nama}">
      </div>
      <div class="detail-info">
        <h2>${item.nama}</h2>
        <p class="jenis-tag ${item.jenis}">${jenisLabel}</p>
        <p>${item.deskripsi || "Tanaman adenium dengan kualitas terbaik."}</p>
        <a href="https://wa.me/6285716942804?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
          item.nama
        )}%20yang%20dijual.%20Apakah%20masih%20tersedia?" class="btn" target="_blank">Pesan Sekarang via WhatsApp</a>
      </div>
    </div>
  `;

  modalContainer.style.display = "flex";

  // Close modal when clicking on close button
  const closeBtn = modalContent.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });
}

// Fungsi untuk filter katalog berdasarkan jenis
function filterKatalog(filter) {
  console.log("Filter applied:", filter); // Debugging
  const katalogItems = document.querySelectorAll(".katalog-item");
  console.log("Found", katalogItems.length, "katalog items"); // Debugging
  
  if (filter === "semua" || filter === "all") {
    console.log("Showing all items"); // Debugging
    katalogItems.forEach((item) => {
      item.style.display = "block";
    });
  } else {
    console.log("Filtering by:", filter); // Debugging
    let matchCount = 0;
    katalogItems.forEach((item) => {
      console.log("Item jenis:", item.dataset.jenis, "Filter:", filter); // Debugging
      if (item.dataset.jenis === filter) {
        item.style.display = "block";
        matchCount++;
      } else {
        item.style.display = "none";
      }
    });
    console.log("Found", matchCount, "items matching filter", filter); // Debugging
  }
}

// Fungsi untuk pencarian katalog
function searchKatalog(keyword) {
  console.log("Searching for:", keyword); // Debugging
  const katalogItems = document.querySelectorAll(".katalog-item");
  console.log("Found", katalogItems.length, "katalog items for search"); // Debugging
  const lowerKeyword = keyword.toLowerCase();
  
  let matchCount = 0;
  katalogItems.forEach((item) => {
    const title = item.querySelector("h3").textContent.toLowerCase();
    console.log("Checking item:", title); // Debugging
    if (title.includes(lowerKeyword)) {
      item.style.display = "block";
      matchCount++;
    } else {
      item.style.display = "none";
    }
  });
  console.log("Found", matchCount, "items matching search", keyword); // Debugging
}
// Fungsi untuk menambahkan item katalog baru
function addKatalogItem(item) {
  // Generate ID baru (ID terakhir + 1)
  const newId = defaultKatalog.length > 0 ? defaultKatalog[defaultKatalog.length - 1].id + 1 : 1;
  
  const newItem = {
    id: newId,
    nama: item.nama,
    jenis: item.jenis,
    deskripsi: item.deskripsi || "",
    gambar: item.gambar
  };
  
  defaultKatalog.push(newItem);
  tampilkanKatalog(defaultKatalog);
  return newItem;
}

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Elemen-elemen DOM
  const katalogContainer = document.getElementById("katalog-container");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const tambahItemBtn = document.getElementById("tambah-item-btn");
  const tambahKatalogForm = document.getElementById("tambah-katalog-form");
  const tambahForm = document.getElementById("tambah-form");
  const contactForm = document.getElementById("contact-form");
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const sliderContainer = document.querySelector(".slider-container");

  // Tampilkan katalog default
  tampilkanKatalog(defaultKatalog);

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      console.log("Filter button clicked:", btn.dataset.filter); // Debugging
      filterKatalog(btn.dataset.filter);
    });
  });

  // Search functionality - improved with real-time search
  searchBtn.addEventListener("click", () => {
    searchKatalog(searchInput.value);
  });

  searchInput.addEventListener("keyup", () => {
    searchKatalog(searchInput.value);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      searchKatalog(searchInput.value);
    }
  });

  // Toggle tambah katalog form
  if (tambahItemBtn && tambahKatalogForm) {
    tambahItemBtn.addEventListener("click", () => {
      if (tambahKatalogForm.style.display === "none") {
        tambahKatalogForm.style.display = "block";
        tambahItemBtn.textContent = "- Sembunyikan Form";
      } else {
        tambahKatalogForm.style.display = "none";
        tambahItemBtn.textContent = "+ Tambah Item Katalog";
      }
    });
  }

  // Add new katalog item
  if (tambahForm) {
    tambahForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Cek apakah form memiliki field deskripsi
      const deskripsiField = document.getElementById("deskripsi-tanaman");
      
      const newItem = {
        nama: document.getElementById("nama-tanaman").value,
        jenis: document.getElementById("jenis-tanaman").value,
        gambar: document.getElementById("gambar-tanaman").value,
        deskripsi: deskripsiField ? deskripsiField.value : `Adenium dengan keindahan yang unik.`
      };

      const addedItem = addKatalogItem(newItem);
      tambahForm.reset();

      // Hide form after adding item
      tambahKatalogForm.style.display = "none";
      tambahItemBtn.textContent = "+ Tambah Item Katalog";

      alert(`Tanaman berhasil ditambahkan ke katalog dengan ID: ${addedItem.id}!`);
    });
  }

  // Contact form
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const telepon = document.getElementById("telepon").value;
      const pesan = document.getElementById("pesan").value;

      // Redirect to WhatsApp with the message
      const whatsappMessage = `Halo, saya ${nama}. Email: ${email}, Telepon: ${telepon}. Pesan: ${pesan}`;
      const whatsappUrl = `https://wa.me/6285716942804?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");

      contactForm.reset();
    });
  }

  // Mobile menu toggle
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a menu item
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });
});

// DOM Elements
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".slider-dots");
const katalogContainer = document.getElementById("katalog-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const tambahItemBtn = document.getElementById("tambah-item-btn");
const tambahKatalogForm = document.getElementById("tambah-katalog-form");
const tambahForm = document.getElementById("tambah-form");
const contactForm = document.getElementById("contact-form");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize slider
  initSlider();

  // Initialize katalog
  initKatalog();

  // Initialize event listeners
  initEventListeners();
});

// Slider functionality
function initSlider() {
  // Create dots for each slide
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Set up automatic slider
  let currentSlide = 0;
  const dots = document.querySelectorAll(".dot");

  function goToSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  }

  // Set up event listeners for slider controls
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
}

// Katalog functionality
function initKatalog() {
  console.log("Initializing katalog");
  console.log("Default katalog has", defaultKatalog.length, "items");
  
  // Debugging: Log first few items in defaultKatalog
  console.log("Sample items from defaultKatalog:", defaultKatalog.slice(0, 3).map(item => {
    return { nama: item.nama, jenis: item.jenis };
  }));
  
  // Periksa dan hapus item duplikat dalam defaultKatalog
  const cleanDefaultKatalog = removeDuplicateItems(defaultKatalog);
  if (cleanDefaultKatalog.length < defaultKatalog.length) {
    console.log("Removed", defaultKatalog.length - cleanDefaultKatalog.length, "duplicate items from defaultKatalog");
  }
  
  // Daftar nama item yang tidak boleh ditampilkan
  const excludedItems = ["Purple Pupil", "Purpel Pupil", "Racan Purple", "Racan Purpel"];
  
  // Filter default katalog
  const filteredDefaultKatalog = cleanDefaultKatalog.filter(item => !excludedItems.includes(item.nama));
  
  // Pastikan setiap item dalam defaultKatalog memiliki ID dan jenis yang valid
  const processedDefaultKatalog = filteredDefaultKatalog.map((item, index) => {
    // Pastikan item memiliki ID
    if (!item.id) {
      item.id = Date.now() + index;
    }
    
    // Pastikan item memiliki jenis yang valid
    if (!item.jenis || item.jenis.trim() === "") {
      console.log(`Item ${item.nama} tidak memiliki jenis, menetapkan default ke "koleksi"`);
      item.jenis = "koleksi";
    }
    
    return item;
  });
  
  // Simpan defaultKatalog yang sudah diproses ke localStorage
  localStorage.setItem("katalog", JSON.stringify(processedDefaultKatalog));
  
  // Tampilkan defaultKatalog terlebih dahulu agar ada konten yang ditampilkan segera
  console.log("Menampilkan defaultKatalog sementara menunggu data dari Firebase/localStorage");
  displayKatalog(processedDefaultKatalog);
  
  // Coba ambil data dari Firebase terlebih dahulu
  if (firebaseInitialized) {
    // Tampilkan indikator loading kecil di bagian atas
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = 'Memuat data terbaru...';
    katalogContainer.insertBefore(loadingIndicator, katalogContainer.firstChild);
    
    // Ambil data dari Firebase
    database.ref('katalog').once('value')
      .then((snapshot) => {
        let firebaseKatalog = snapshot.val();
        
        if (firebaseKatalog && Array.isArray(firebaseKatalog) && firebaseKatalog.length > 0) {
          console.log("Loaded katalog from Firebase with", firebaseKatalog.length, "items");
          
          // Periksa dan hapus item duplikat
          firebaseKatalog = removeDuplicateItems(firebaseKatalog);
          
          // Filter item yang tidak boleh ditampilkan
          firebaseKatalog = firebaseKatalog.filter(item => !excludedItems.includes(item.nama));
          
          // Simpan ke localStorage untuk cadangan
          localStorage.setItem("katalog", JSON.stringify(firebaseKatalog));
          
          // Tampilkan katalog
          displayKatalog(firebaseKatalog);
        } else {
          // Jika tidak ada data di Firebase, gunakan data dari localStorage atau default
          initFromLocalStorage(filteredDefaultKatalog, excludedItems);
        }
        
        // Set up listener untuk perubahan data secara real-time
        setupRealtimeListener(excludedItems);
      })
      .catch((error) => {
        console.error("Error mengambil data dari Firebase:", error);
        // Jika gagal, gunakan data dari localStorage atau default
        initFromLocalStorage(filteredDefaultKatalog, excludedItems);
        
        // Tetap setup listener untuk mencoba sinkronisasi jika koneksi kembali
        setupRealtimeListener(excludedItems);
      });
  } else {
    // Jika Firebase tidak tersedia, gunakan data dari localStorage atau default
    initFromLocalStorage(filteredDefaultKatalog, excludedItems);
    
    // Gunakan event storage untuk sinkronisasi antar tab (mode offline)
    setupStorageEventListener(excludedItems);
  }
}

// Fungsi untuk menginisialisasi katalog dari localStorage
function initFromLocalStorage(filteredDefaultKatalog, excludedItems) {
  // Load katalog from localStorage or use default
  let katalog = JSON.parse(localStorage.getItem("katalog")) || filteredDefaultKatalog;
  console.log("Loaded katalog from localStorage has", katalog.length, "items");
  
  // Debugging: Log first few items in katalog
  console.log("Sample items from localStorage:", katalog.slice(0, 3).map(item => ({ nama: item.nama, jenis: item.jenis })));

  // Periksa dan hapus item duplikat dalam katalog yang dimuat
  katalog = removeDuplicateItems(katalog);
  
  // Filter item yang tidak boleh ditampilkan
  katalog = katalog.filter(item => !excludedItems.includes(item.nama));
  
  // If katalog is empty or localStorage doesn't exist, use default
  if (katalog.length === 0 || !localStorage.getItem("katalog")) {
    console.log("Using default katalog");
    katalog = filteredDefaultKatalog;
    
    // Pastikan setiap item memiliki ID unik
    katalog = katalog.map((item, index) => {
      if (!item.id) {
        item.id = Date.now() + index;
      }
      return item;
    });
    
    localStorage.setItem("katalog", JSON.stringify(katalog));
  }
  
  // Pastikan setiap item memiliki jenis yang valid
  katalog = katalog.map(item => {
    // Jika jenis tidak ada atau kosong, tetapkan default ke "koleksi"
    if (!item.jenis || item.jenis.trim() === "") {
      console.log(`Item ${item.nama} tidak memiliki jenis, menetapkan default ke "koleksi"`);
      item.jenis = "koleksi";
    }
    return item;
  });
  
  // Simpan katalog yang sudah dibersihkan
  saveKatalogData(katalog);
  
  // Display katalog items
  console.log("Menampilkan katalog dari localStorage dengan", katalog.length, "items");
  if (katalog.length > 0) {
    // Tampilkan katalog
    displayKatalog(katalog);
  } else {
    // Jika katalog masih kosong, tampilkan pesan
    katalogContainer.innerHTML = '<p class="no-items">Tidak ada tanaman yang ditemukan. Mungkin terjadi kesalahan saat memuat data.</p>';
    console.error("Katalog kosong setelah inisialisasi dari localStorage");
  }
}

// Fungsi untuk setup listener perubahan data secara real-time dari Firebase
function setupRealtimeListener(excludedItems) {
  // Periksa apakah Firebase diinisialisasi dan konfigurasi valid
  if (!firebaseInitialized) {
    console.error("Firebase tidak diinisialisasi. Tidak dapat setup listener real-time.");
    updateSyncStatus('offline');
    showNotification('Mode Offline', 'Aplikasi berjalan dalam mode offline. Perubahan tidak akan terlihat di perangkat lain.', true);
    return;
  }
  
  if (!isFirebaseConfigValid()) {
    console.error("Konfigurasi Firebase tidak valid. Tidak dapat setup listener real-time.");
    updateSyncStatus('offline');
    showNotification('Konfigurasi Tidak Valid', 'Konfigurasi Firebase tidak valid. Aplikasi berjalan dalam mode offline.', true);
    return;
  }
  
  if (!database) {
    console.error("Referensi database Firebase tidak tersedia. Tidak dapat setup listener real-time.");
    updateSyncStatus('offline');
    showNotification('Error Database', 'Tidak dapat mengakses database. Aplikasi berjalan dalam mode offline.', true);
    return;
  }
  
  console.log("Setting up Firebase realtime listener...");
  
  // Periksa status koneksi terlebih dahulu
  database.ref('.info/connected').once('value')
    .then((snap) => {
      const isConnected = snap.val() === true;
      console.log("Status koneksi Firebase awal:", isConnected ? "Terhubung" : "Tidak terhubung");
      updateSyncStatus(isConnected ? 'online' : 'offline');
      
      if (!isConnected) {
        showNotification('Tidak Terhubung', 'Tidak dapat terhubung ke server. Menggunakan data lokal.', true);
      }
    })
    .catch(error => {
      console.error("Error memeriksa status koneksi:", error);
      updateSyncStatus('offline');
    });
  
  // Listener untuk perubahan data secara real-time
  database.ref('katalog').on('value', (snapshot) => {
    try {
      let updatedKatalog = snapshot.val();
      
      // Log status data yang diterima dari Firebase
      console.log("Data dari Firebase:", 
        updatedKatalog ? 
          (Array.isArray(updatedKatalog) ? `Array dengan ${updatedKatalog.length} items` : `Bukan array: ${typeof updatedKatalog}`) : 
          "null atau undefined");
      
      if (updatedKatalog && Array.isArray(updatedKatalog) && updatedKatalog.length > 0) {
        console.log("Real-time update from Firebase with", updatedKatalog.length, "items");
        console.log("Sample items from Firebase:", updatedKatalog.slice(0, 3).map(item => ({ 
          nama: item.nama, 
          jenis: item.jenis, 
          id: item.id,
          hasGambar: !!item.gambar
        })));
        
        // Periksa dan hapus item duplikat
        const originalLength = updatedKatalog.length;
        updatedKatalog = removeDuplicateItems(updatedKatalog);
        if (updatedKatalog.length < originalLength) {
          console.log("Removed", originalLength - updatedKatalog.length, "duplicate items from Firebase data");
        }
        
        // Filter item yang tidak boleh ditampilkan
        updatedKatalog = updatedKatalog.filter(item => !excludedItems.includes(item.nama));
        
        // Pastikan setiap item memiliki ID dan jenis yang valid
        updatedKatalog = updatedKatalog.map((item, index) => {
          // Pastikan item memiliki ID
          if (!item.id) {
            const newId = Date.now() + index;
            console.log(`Item ${item.nama} dari Firebase tidak memiliki ID, menetapkan ID baru: ${newId}`);
            item.id = newId;
          }
          
          // Pastikan item memiliki jenis yang valid
          if (!item.jenis || item.jenis.trim() === "") {
            console.log(`Item ${item.nama} dari Firebase tidak memiliki jenis, menetapkan default ke "koleksi"`);
            item.jenis = "koleksi";
          }
          
          return item;
        });
        
        // Bandingkan dengan data lokal untuk menentukan apakah ada perubahan
        const localDataStr = localStorage.getItem("katalog");
        const localData = localDataStr ? JSON.parse(localDataStr) : [];
        const isDataChanged = JSON.stringify(localData) !== JSON.stringify(updatedKatalog);
        
        // Update localStorage tanpa memicu event storage
        try {
          localStorage.setItem("katalog", JSON.stringify(updatedKatalog));
          localStorage.setItem("lastUpdate", new Date().toISOString());
          console.log("Data dari Firebase berhasil disimpan ke localStorage");
          
          // Tampilkan notifikasi jika ada perubahan signifikan
          if (isDataChanged) {
            const diffCount = Math.abs(localData.length - updatedKatalog.length);
            if (diffCount > 0) {
              showNotification('Data Diperbarui', `Data telah diperbarui dari server (${updatedKatalog.length} item).`, false);
            }
          }
        } catch (error) {
          console.error("Error menyimpan data dari Firebase ke localStorage:", error);
          
          // Coba simpan data yang lebih kecil jika terjadi QuotaExceededError
          if (error.name === 'QuotaExceededError') {
            console.log("Mencoba menyimpan data yang lebih kecil karena QuotaExceededError");
            try {
              // Simpan hanya data penting (tanpa gambar) untuk menghemat ruang
              const reducedKatalog = updatedKatalog.map(item => {
                const { gambar, ...rest } = item;
                return { ...rest, hasGambar: !!gambar };
              });
              localStorage.setItem("katalog_reduced", JSON.stringify(reducedKatalog));
              localStorage.setItem("katalog_reduced_timestamp", new Date().toISOString());
              console.log("Data yang dikurangi berhasil disimpan ke localStorage");
            } catch (reducedError) {
              console.error("Error menyimpan data yang dikurangi:", reducedError);
            }
          }
        }
        
        // Tampilkan katalog yang diperbarui
        displayKatalog(updatedKatalog);
        
        // Update status sinkronisasi
        updateSyncStatus('online');
      } else {
        console.warn("Tidak ada data valid dari Firebase atau data bukan array");
        
        // Jika tidak ada data valid dari Firebase, coba push data dari localStorage ke Firebase
        try {
          const localKatalog = JSON.parse(localStorage.getItem("katalog"));
          
          if (localKatalog && Array.isArray(localKatalog) && localKatalog.length > 0) {
            console.log("Menggunakan data dari localStorage sebagai fallback");
            const filteredLocalKatalog = localKatalog.filter(item => !excludedItems.includes(item.nama));
            displayKatalog(filteredLocalKatalog);
            
            // Coba push data dari localStorage ke Firebase
            console.log("Mencoba push data dari localStorage ke Firebase...");
            try {
              // Pastikan setiap item memiliki ID dan jenis yang valid sebelum push ke Firebase
              const cleanedKatalog = localKatalog.map((item, index) => {
                if (!item.id) item.id = Date.now() + index;
                if (!item.jenis || item.jenis.trim() === "") item.jenis = "koleksi";
                return item;
              });
              
              // Log sampel item yang akan di-push ke Firebase
              console.log("Sampel item yang akan di-push ke Firebase:", cleanedKatalog.slice(0, 3).map(item => ({ 
                nama: item.nama, 
                jenis: item.jenis, 
                id: item.id,
                hasGambar: !!item.gambar
              })));
              
              // Update status sinkronisasi
              updateSyncStatus('syncing');
              showNotification('Sinkronisasi', 'Menyinkronkan data lokal ke server...', false);
              
              database.ref('katalog').set(cleanedKatalog)
                .then(() => {
                  console.log("Data dari localStorage berhasil di-push ke Firebase");
                  updateSyncStatus('online');
                  showNotification('Sinkronisasi Berhasil', 'Data lokal berhasil disinkronkan ke server.', false);
                })
                .catch((error) => {
                  console.error("Error push data ke Firebase:", error);
                  updateSyncStatus('offline');
                  
                  // Coba gunakan metode update sebagai fallback jika set gagal
                  if (error.code === 'PERMISSION_DENIED') {
                    console.log("Mencoba metode update sebagai fallback...");
                    database.ref().update({ 'katalog': cleanedKatalog })
                      .then(() => {
                        console.log("Data berhasil di-update ke Firebase menggunakan metode update");
                        updateSyncStatus('online');
                        showNotification('Sinkronisasi Berhasil', 'Data lokal berhasil disinkronkan ke server.', false);
                      })
                      .catch(updateError => {
                        console.error("Error update data ke Firebase:", updateError);
                        updateSyncStatus('offline');
                        showNotification('Sinkronisasi Gagal', 'Tidak dapat menyinkronkan data ke server.', true);
                      });
                  } else {
                    showNotification('Sinkronisasi Gagal', 'Tidak dapat menyinkronkan data ke server.', true);
                  }
                });
            } catch (error) {
              console.error("Error akses Firebase saat push data:", error);
              updateSyncStatus('offline');
              showNotification('Error', 'Terjadi kesalahan saat mengakses server.', true);
            }
          } else {
            // Jika tidak ada data di localStorage, gunakan defaultKatalog
            console.log("Menggunakan defaultKatalog sebagai fallback terakhir");
            const filteredDefaultKatalog = defaultKatalog.filter(item => !excludedItems.includes(item.nama));
            
            // Pastikan setiap item memiliki ID dan jenis yang valid
            const cleanedDefaultKatalog = filteredDefaultKatalog.map((item, index) => {
              if (!item.id) item.id = Date.now() + index;
              if (!item.jenis || item.jenis.trim() === "") item.jenis = "koleksi";
              return item;
            });
            
            displayKatalog(cleanedDefaultKatalog);
            
            // Coba push defaultKatalog ke Firebase
            console.log("Mencoba push defaultKatalog ke Firebase...");
            try {
              // Update status sinkronisasi
              updateSyncStatus('syncing');
              
              database.ref('katalog').set(cleanedDefaultKatalog)
                .then(() => {
                  console.log("DefaultKatalog berhasil di-push ke Firebase");
                  updateSyncStatus('online');
                  showNotification('Inisialisasi Berhasil', 'Data default berhasil disimpan ke server.', false);
                })
                .catch((error) => {
                  console.error("Error push defaultKatalog ke Firebase:", error);
                  updateSyncStatus('offline');
                  showNotification('Inisialisasi Gagal', 'Tidak dapat menyimpan data default ke server.', true);
                });
            } catch (error) {
              console.error("Error akses Firebase saat push defaultKatalog:", error);
              updateSyncStatus('offline');
              showNotification('Error', 'Terjadi kesalahan saat mengakses server.', true);
            }
          }
        } catch (error) {
          console.error("Error memproses data lokal:", error);
          updateSyncStatus('offline');
          showNotification('Error', 'Terjadi kesalahan saat memproses data lokal.', true);
        }
      }
    } catch (error) {
      console.error("Error memproses data dari Firebase:", error);
      updateSyncStatus('offline');
      showNotification('Error', 'Terjadi kesalahan saat memproses data dari server.', true);
    }
  }, (error) => {
    console.error("Error pada listener Firebase:", error);
    updateSyncStatus('offline');
    showNotification('Koneksi Terputus', 'Koneksi ke server terputus. Menggunakan data lokal.', true);
    
    // Jika terjadi error, gunakan data dari localStorage
    try {
      const localKatalog = JSON.parse(localStorage.getItem("katalog"));
      if (localKatalog && Array.isArray(localKatalog) && localKatalog.length > 0) {
        console.log("Menggunakan data dari localStorage karena error Firebase");
        displayKatalog(localKatalog.filter(item => !excludedItems.includes(item.nama)));
      } else {
        // Jika tidak ada data di localStorage, gunakan defaultKatalog
        console.log("Menggunakan defaultKatalog karena error Firebase dan tidak ada data di localStorage");
        const filteredDefaultKatalog = defaultKatalog.filter(item => !excludedItems.includes(item.nama));
        displayKatalog(filteredDefaultKatalog);
      }
    } catch (error) {
      console.error("Error memproses data lokal setelah error Firebase:", error);
      // Fallback terakhir ke defaultKatalog
      const filteredDefaultKatalog = defaultKatalog.filter(item => !excludedItems.includes(item.nama));
      displayKatalog(filteredDefaultKatalog);
    }
  });
  
  // Tambahkan listener untuk error koneksi
  database.ref('katalog').on('error', (error) => {
    console.error("Error koneksi Firebase pada katalog:", error);
    updateSyncStatus('offline');
    showNotification('Error Koneksi', 'Terjadi kesalahan koneksi ke server.', true);
  });
  
  // Tambahkan listener untuk status koneksi
  database.ref('.info/connected').on('value', (snap) => {
    const isConnected = snap.val() === true;
    console.log("Status koneksi Firebase berubah:", isConnected ? "Terhubung" : "Tidak terhubung");
    updateSyncStatus(isConnected ? 'online' : 'offline');
    
    if (isConnected) {
      showNotification('Terhubung', 'Koneksi ke server berhasil dibuat.', false);
    } else {
      showNotification('Tidak Terhubung', 'Koneksi ke server terputus. Perubahan tidak akan terlihat di perangkat lain.', true);
    }
  });
}

// Fungsi untuk setup event listener storage (untuk mode offline dan sinkronisasi antar tab)
function setupStorageEventListener(excludedItems) {
  console.log("Setting up storage event listener for cross-tab synchronization");
  
  window.addEventListener("storage", function(e) {
    if (e.key === "katalog") {
      console.log("Storage event detected for katalog");
      
      try {
        // Update katalog jika ada perubahan dari tab/perangkat lain
        let updatedKatalog = JSON.parse(e.newValue);
        
        // Validasi data katalog
        if (!updatedKatalog) {
          console.error("Data katalog dari storage event adalah null atau undefined");
          showNotification('Error Data', 'Data katalog tidak valid dari tab lain.', true);
          return;
        }
        
        if (!Array.isArray(updatedKatalog)) {
          console.error("Data katalog dari storage event bukan array:", typeof updatedKatalog);
          showNotification('Error Data', 'Format data katalog tidak valid dari tab lain.', true);
          return;
        }
        
        console.log("Received updated katalog from another tab with", updatedKatalog.length, "items");
        console.log("Sample items from storage event:", updatedKatalog.slice(0, 3).map(item => ({ 
          nama: item.nama, 
          jenis: item.jenis, 
          id: item.id,
          hasGambar: !!item.gambar
        })));
        
        // Periksa dan hapus item duplikat
        const originalLength = updatedKatalog.length;
        updatedKatalog = removeDuplicateItems(updatedKatalog);
        if (updatedKatalog.length < originalLength) {
          console.log("Removed", originalLength - updatedKatalog.length, "duplicate items from storage event data");
        }
        
        // Filter item yang tidak boleh ditampilkan
        updatedKatalog = updatedKatalog.filter(item => !excludedItems.includes(item.nama));
        
        // Pastikan setiap item memiliki ID dan jenis yang valid
        updatedKatalog = updatedKatalog.map((item, index) => {
          // Pastikan item memiliki ID
          if (!item.id) {
            const newId = Date.now() + index;
            console.log(`Item ${item.nama} dari storage event tidak memiliki ID, menetapkan ID baru: ${newId}`);
            item.id = newId;
          }
          
          // Pastikan item memiliki jenis yang valid
          if (!item.jenis || item.jenis.trim() === "") {
            console.log(`Item ${item.nama} dari storage event tidak memiliki jenis, menetapkan default ke "koleksi"`);
            item.jenis = "koleksi";
          }
          
          return item;
        });
        
        // Bandingkan dengan data lokal saat ini untuk menentukan apakah ada perubahan signifikan
        const currentKatalog = katalog || [];
        const isSignificantChange = Math.abs(currentKatalog.length - updatedKatalog.length) > 0;
        
        // Tampilkan katalog yang diperbarui
        displayKatalog(updatedKatalog);
        
        // Tampilkan notifikasi jika ada perubahan signifikan
        if (isSignificantChange) {
          showNotification('Data Diperbarui', `Data telah diperbarui dari tab lain (${updatedKatalog.length} item).`, false);
        }
        
        // Jika Firebase diinisialisasi, coba sinkronkan dengan Firebase
        if (firebaseInitialized && isFirebaseConfigValid() && database) {
          try {
            console.log("Mencoba sinkronisasi data dari storage event ke Firebase...");
            
            // Update status sinkronisasi
            updateSyncStatus('syncing');
            
            // Periksa status koneksi terlebih dahulu
            database.ref('.info/connected').once('value')
              .then((snap) => {
                const isConnected = snap.val() === true;
                
                if (isConnected) {
                  // Hanya sinkronkan jika terhubung ke Firebase
                  console.log("Terhubung ke Firebase, melanjutkan sinkronisasi...");
                  
                  // Log sampel item yang akan di-push ke Firebase
                  console.log("Sampel item yang akan di-push ke Firebase:", updatedKatalog.slice(0, 3).map(item => ({ 
                    nama: item.nama, 
                    jenis: item.jenis, 
                    id: item.id,
                    hasGambar: !!item.gambar
                  })));
                  
                  database.ref('katalog').set(updatedKatalog)
                    .then(() => {
                      console.log("Data dari storage event berhasil disinkronkan ke Firebase");
                      updateSyncStatus('online');
                      
                      // Simpan juga timestamp terakhir update
                      database.ref('lastUpdate').set(firebase.database.ServerValue.TIMESTAMP)
                        .then(() => {
                          console.log("Timestamp berhasil disimpan ke Firebase");
                        })
                        .catch(error => {
                          console.error("Error menyimpan timestamp:", error);
                        });
                    })
                    .catch((error) => {
                      console.error("Error sinkronisasi data ke Firebase:", error);
                      updateSyncStatus('offline');
                      
                      // Coba lagi dengan metode update jika set gagal
                      if (error.code === 'PERMISSION_DENIED') {
                        console.log("Mencoba metode update sebagai fallback...");
                        database.ref().update({ 'katalog': updatedKatalog })
                          .then(() => {
                            console.log("Data berhasil disinkronkan ke Firebase menggunakan metode update");
                            updateSyncStatus('online');
                            showNotification('Sinkronisasi Berhasil', 'Data berhasil disinkronkan ke server.', false);
                          })
                          .catch(updateError => {
                            console.error("Error sinkronisasi data ke Firebase dengan metode update:", updateError);
                            updateSyncStatus('offline');
                            showNotification('Sinkronisasi Gagal', 'Tidak dapat menyinkronkan data ke server.', true);
                          });
                      } else {
                        showNotification('Sinkronisasi Gagal', 'Tidak dapat menyinkronkan data ke server.', true);
                      }
                    });
                } else {
                  // Jika tidak terhubung, simpan hanya secara lokal
                  console.log("Tidak terhubung ke Firebase, data hanya disimpan secara lokal");
                  updateSyncStatus('offline');
                  showNotification('Mode Offline', 'Perubahan disimpan secara lokal. Akan disinkronkan saat terhubung kembali.', true);
                }
              })
              .catch(error => {
                console.error("Error memeriksa status koneksi:", error);
                updateSyncStatus('offline');
                showNotification('Error Koneksi', 'Tidak dapat memeriksa status koneksi ke server.', true);
              });
          } catch (error) {
            console.error("Error akses Firebase saat sinkronisasi dari storage event:", error);
            updateSyncStatus('offline');
            showNotification('Error', 'Terjadi kesalahan saat mengakses server.', true);
          }
        } else {
          // Jika Firebase tidak diinisialisasi atau konfigurasi tidak valid
          if (!firebaseInitialized) {
            console.log("Firebase tidak diinisialisasi. Data hanya disimpan secara lokal.");
            showNotification('Mode Offline', 'Firebase tidak diinisialisasi. Perubahan hanya disimpan secara lokal.', true);
          } else if (!isFirebaseConfigValid()) {
            console.log("Konfigurasi Firebase tidak valid. Data hanya disimpan secara lokal.");
            showNotification('Konfigurasi Tidak Valid', 'Konfigurasi Firebase tidak valid. Perubahan hanya disimpan secara lokal.', true);
          } else if (!database) {
            console.log("Referensi database Firebase tidak tersedia. Data hanya disimpan secara lokal.");
            showNotification('Error Database', 'Tidak dapat mengakses database. Perubahan hanya disimpan secara lokal.', true);
          }
          
          updateSyncStatus('offline');
        }
      } catch (error) {
        console.error("Error memproses storage event:", error);
        showNotification('Error', 'Terjadi kesalahan saat memproses perubahan dari tab lain.', true);
      }
    }
  });
}

// Variabel global untuk melacak status tampilan katalog
let showAllItems = false;
let currentPage = 1;
const ITEMS_PER_PAGE = 8; // Jumlah item yang ditampilkan per halaman
let currentItems = []; // Menyimpan item yang sedang ditampilkan untuk pagination

function displayKatalog(items) {
  console.log("Displaying katalog with", items.length, "items");
  
  // Pastikan katalogContainer ada
  if (!katalogContainer) {
    console.error("katalogContainer tidak ditemukan!");
    return;
  }
  
  // Simpan items untuk pagination
  currentItems = [...items];
  
  // Reset ke halaman pertama saat menampilkan katalog baru
  currentPage = 1;
  
  // Bersihkan container sebelum menambahkan item baru
  katalogContainer.innerHTML = "";

  // Debugging: Log jenis of items
  const jenisCounts = items.reduce((counts, item) => {
    counts[item.jenis || 'undefined'] = (counts[item.jenis || 'undefined'] || 0) + 1;
    return counts;
  }, {});
  console.log("Jenis counts:", jenisCounts);
  console.log("Sample items being displayed:", items.slice(0, 3).map(item => ({ nama: item.nama, jenis: item.jenis, id: item.id })));

  if (!items || items.length === 0) {
    console.error("Tidak ada item untuk ditampilkan dalam displayKatalog");
    katalogContainer.innerHTML =
      '<p class="no-items">Tidak ada tanaman yang ditemukan.</p>';
    return;
  }
  
  // Hitung total halaman
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  
  // Tentukan item yang akan ditampilkan berdasarkan halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = showAllItems ? items.length : Math.min(startIndex + ITEMS_PER_PAGE, items.length);
  const displayedItems = items.slice(startIndex, endIndex);
  
  // Tampilkan item yang sesuai dengan halaman saat ini
  displayedItems.forEach((item) => {
    const katalogItem = document.createElement("div");
    katalogItem.classList.add("katalog-item");
    katalogItem.dataset.jenis = item.jenis;
    katalogItem.dataset.id = item.id;

    // Cek apakah item ini ditambahkan oleh user (berdasarkan properti userAdded)
    const isUserAdded = item.userAdded === true;

    let actionButtons = "";
    if (isUserAdded) {
      actionButtons = `
                <div class="user-actions" style="display: flex; justify-content: flex-end; margin-top: 10px; opacity: 0.6; transition: opacity 0.3s ease;">
                    <button class="edit-btn" style="background: none; border: none; color: #3498db; margin-right: 10px; cursor: pointer;">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" style="background: none; border: none; color: #e74c3c; cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
    }
    
    // Tambahkan badge untuk item baru (ditambahkan dalam 7 hari terakhir)
    let newBadge = "";
    if (item.dateAdded) {
      const addedDate = new Date(item.dateAdded);
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - addedDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 7) {
        newBadge = `<span class="new-badge" style="position: absolute; top: 10px; right: 10px; background-color: #e74c3c; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; font-weight: bold;">BARU</span>`;
      }
    }

    katalogItem.innerHTML = `
            <div class="katalog-image">
                <img src="${item.gambar}" alt="${item.nama}" onerror="this.src='https://via.placeholder.com/300x300?text=Gambar+Tidak+Tersedia'; this.onerror=''">
                ${newBadge}
            </div>
            <div class="katalog-info">
                <h3>${item.nama}</h3>
                <span class="jenis ${item.jenis}">${
      item.jenis === "koleksi" ? "Adenium Koleksi" : "Adenium Grafting"
    }</span>
                <a href="https://wa.me/6285716942804?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                  item.nama
                )}%20yang%20dijual.%20Apakah%20masih%20tersedia?" class="btn" target="_blank">Pesan Sekarang</a>
                ${actionButtons}
            </div>
        `;

    katalogContainer.appendChild(katalogItem);

    // Tambahkan event listener untuk gambar
    const img = katalogItem.querySelector(".katalog-image img");
    img.addEventListener("click", function () {
      openImageModal(item.gambar, item.nama);
    });

    // Tambahkan event listener untuk tombol edit dan delete jika item ditambahkan oleh user
    if (isUserAdded) {
      const userActions = katalogItem.querySelector(".user-actions");
      const editBtn = katalogItem.querySelector(".edit-btn");
      const deleteBtn = katalogItem.querySelector(".delete-btn");

      // Tambahkan hover effect untuk tombol-tombol aksi
      katalogItem.addEventListener("mouseenter", function () {
        if (userActions) userActions.style.opacity = "1";
      });

      katalogItem.addEventListener("mouseleave", function () {
        if (userActions) userActions.style.opacity = "0.6";
      });

      editBtn.addEventListener("click", function () {
        editKatalogItem(item.id);
      });

      deleteBtn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        deleteKatalogItem(item.id);
      });
    }
  });
  
  // Tambahkan pagination controls jika tidak menampilkan semua item
  if (!showAllItems && totalPages > 1) {
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination");
    paginationContainer.style.cssText = "display: flex; justify-content: center; margin-top: 15px; gap: 3px;";
    
    // Tombol Previous
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.innerHTML = "&laquo; Sebelumnya";
      prevButton.style.cssText = "padding: 5px 10px; background-color: #f1f1f1; border: none; border-radius: 3px; cursor: pointer; font-size: 0.8rem;";
      prevButton.addEventListener("click", () => {
        currentPage--;
        displayKatalog(currentItems);
      });
      paginationContainer.appendChild(prevButton);
    }
    
    // Tombol halaman
    for (let i = 1; i <= totalPages; i++) {
      // Batasi jumlah tombol halaman yang ditampilkan
      if (
        i === 1 || // Selalu tampilkan halaman pertama
        i === totalPages || // Selalu tampilkan halaman terakhir
        (i >= currentPage - 1 && i <= currentPage + 1) // Tampilkan halaman di sekitar halaman saat ini
      ) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.style.cssText = `padding: 5px 10px; background-color: ${i === currentPage ? '#4CAF50' : '#f1f1f1'}; color: ${i === currentPage ? 'white' : 'black'}; border: none; border-radius: 3px; cursor: pointer; font-size: 0.8rem;`;
        pageButton.addEventListener("click", () => {
          currentPage = i;
          displayKatalog(currentItems);
        });
        paginationContainer.appendChild(pageButton);
      } else if (
        (i === currentPage - 2 && currentPage > 3) || 
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        // Tambahkan ellipsis untuk halaman yang tidak ditampilkan
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        ellipsis.style.cssText = "padding: 5px 3px; margin: 0 3px; font-size: 0.8rem;";
        paginationContainer.appendChild(ellipsis);
      }
    }
    
    // Tombol Next
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.innerHTML = "Selanjutnya &raquo;";
      nextButton.style.cssText = "padding: 5px 10px; background-color: #f1f1f1; border: none; border-radius: 3px; cursor: pointer; font-size: 0.8rem;";
      nextButton.addEventListener("click", () => {
        currentPage++;
        displayKatalog(currentItems);
      });
      paginationContainer.appendChild(nextButton);
    }
    
    // Tombol Show All
    const showAllButton = document.createElement("button");
    showAllButton.textContent = showAllItems ? "Tampilkan Per Halaman" : "Tampilkan Semua";
    showAllButton.style.cssText = "padding: 5px 10px; background-color: #2196F3; color: white; border: none; border-radius: 3px; cursor: pointer; margin-left: 5px; font-size: 0.8rem;";
    showAllButton.addEventListener("click", () => {
      showAllItems = !showAllItems;
      displayKatalog(currentItems);
    });
    paginationContainer.appendChild(showAllButton);
    
    katalogContainer.appendChild(paginationContainer);
  } else if (showAllItems && items.length > ITEMS_PER_PAGE) {
    // Tombol untuk kembali ke tampilan pagination
    const showPaginatedButton = document.createElement("button");
    showPaginatedButton.textContent = "Tampilkan Per Halaman";
    showPaginatedButton.style.cssText = "display: block; margin: 15px auto; padding: 5px 10px; background-color: #2196F3; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 0.8rem;";
    showPaginatedButton.addEventListener("click", () => {
      showAllItems = false;
      displayKatalog(currentItems);
    });
    katalogContainer.appendChild(showPaginatedButton);
  }
  
  // Tampilkan informasi jumlah item
  const itemCountInfo = document.createElement("div");
  itemCountInfo.classList.add("item-count-info");
  itemCountInfo.style.cssText = "text-align: center; margin-top: 10px; font-style: italic; color: #666;";
  itemCountInfo.textContent = `Menampilkan ${showAllItems ? items.length : displayedItems.length} dari ${items.length} item`;
  katalogContainer.appendChild(itemCountInfo);
}

// Tambahkan fungsi yang hilang
function openImageModal(imageSrc, caption) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalCaption.innerHTML = caption;

  // Tambahkan event listener untuk tombol close
  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Tutup modal jika user mengklik di luar gambar
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function editKatalogItem(itemId) {
  const katalog = JSON.parse(localStorage.getItem("katalog")) || defaultKatalog;
  const itemToEdit = katalog.find((item) => item.id === itemId);

  if (!itemToEdit) {
    showNotification('Error', 'Item tidak ditemukan dalam katalog.', true);
    return;
  }

  // Tampilkan form tambah katalog
  tambahKatalogForm.style.display = "block";
  tambahItemBtn.textContent = "- Sembunyikan Form";

  // Isi form dengan data item yang akan diedit
  document.getElementById("nama-tanaman").value = itemToEdit.nama;
  document.getElementById("jenis-tanaman").value = itemToEdit.jenis;
  document.getElementById("gambar-tanaman").value = itemToEdit.gambar;
  
  // Jika ada field deskripsi di form, isi juga
  const deskripsiField = document.getElementById("deskripsi-tanaman");
  if (deskripsiField && itemToEdit.deskripsi) {
    deskripsiField.value = itemToEdit.deskripsi;
  }

  // Ubah teks tombol submit
  const submitBtn = tambahForm.querySelector('button[type="submit"]');
  submitBtn.textContent = "Perbarui Tanaman";

  // Simpan ID item yang diedit ke dalam form
  tambahForm.dataset.editId = itemId;

  // Scroll ke form
  tambahKatalogForm.scrollIntoView({ behavior: "smooth" });

  // Override submit handler untuk update
  const originalSubmitHandler = tambahForm.onsubmit;
  tambahForm.onsubmit = function (e) {
    e.preventDefault();

    // Ambil nilai deskripsi jika ada field-nya
    let deskripsi = itemToEdit.deskripsi;
    if (deskripsiField) {
      deskripsi = deskripsiField.value;
    }

    const updatedItem = {
      id: itemId,
      nama: document.getElementById("nama-tanaman").value,
      jenis: document.getElementById("jenis-tanaman").value,
      gambar: document.getElementById("gambar-tanaman").value,
      deskripsi: deskripsi,
      userAdded: true,
      dateModified: new Date().toISOString() // Tambahkan timestamp untuk tracking
    };

    // Pertahankan properti lain yang mungkin ada
    if (itemToEdit.dateAdded) {
      updatedItem.dateAdded = itemToEdit.dateAdded;
    }

    // Update item in katalog
    const updatedKatalog = katalog.map((item) =>
      item.id === itemId ? updatedItem : item
    );

    // Simpan dengan fungsi yang memicu event storage dan sinkronisasi ke Firebase
    saveKatalogData(updatedKatalog);
    
    // Perbarui tampilan katalog
    displayKatalog(updatedKatalog);

    // Reset form
    tambahForm.reset();
    tambahKatalogForm.style.display = "none";
    tambahItemBtn.textContent = "+ Tambah Item Katalog";
    submitBtn.textContent = "Tambah Tanaman";
    delete tambahForm.dataset.editId;

    // Restore original submit handler
    tambahForm.onsubmit = originalSubmitHandler;

    // Tampilkan notifikasi bahwa item berhasil diperbarui
    showNotification('Item Diperbarui', `Adenium ${updatedItem.nama} berhasil diperbarui.`, false);
  };
}

function deleteKatalogItem(itemId) {
  const katalog = JSON.parse(localStorage.getItem("katalog")) || defaultKatalog;
  const itemToDelete = katalog.find((item) => item.id === itemId);
  
  if (!itemToDelete) {
    showNotification('Error', 'Item tidak ditemukan dalam katalog.', true);
    return;
  }
  
  if (confirm(`Apakah Anda yakin ingin menghapus ${itemToDelete.nama} dari katalog?`)) {
    const updatedKatalog = katalog.filter((item) => item.id !== itemId);

    // Simpan dengan fungsi yang memicu event storage dan sinkronisasi ke Firebase
    saveKatalogData(updatedKatalog);
    
    // Perbarui tampilan katalog
    displayKatalog(updatedKatalog);

    // Tampilkan notifikasi bahwa item berhasil dihapus
    showNotification('Item Dihapus', `Adenium ${itemToDelete.nama} berhasil dihapus dari katalog.`, false);
  }
}

function filterKatalog(filter) {
  console.log("Filtering katalog by:", filter);
  let katalog = JSON.parse(localStorage.getItem("katalog")) || [];
  
  // Jika katalog kosong, gunakan defaultKatalog
  if (katalog.length === 0) {
    console.log("Katalog dari localStorage kosong, menggunakan defaultKatalog");
    katalog = [...defaultKatalog];
    
    // Pastikan setiap item dalam defaultKatalog memiliki ID dan jenis yang valid
    katalog = katalog.map((item, index) => {
      // Pastikan item memiliki ID
      if (!item.id) {
        item.id = Date.now() + index;
      }
      
      // Pastikan item memiliki jenis yang valid
      if (!item.jenis || item.jenis.trim() === "") {
        console.log(`Item ${item.nama} tidak memiliki jenis, menetapkan default ke "koleksi"`);
        item.jenis = "koleksi";
      }
      
      return item;
    });
    
    // Simpan defaultKatalog yang sudah diproses ke localStorage
    localStorage.setItem("katalog", JSON.stringify(katalog));
  }
  
  console.log("Katalog dari localStorage:", katalog.length, "items");
  console.log("Sample items:", katalog.slice(0, 3).map(item => ({ nama: item.nama, jenis: item.jenis })));
  
  // Daftar nama item yang tidak boleh ditampilkan
  const excludedItems = ["Purple Pupil", "Purpel Pupil", "Racan Purple", "Racan Purpel"];
  
  // Filter item yang tidak boleh ditampilkan
  let filteredItems = katalog.filter(item => !excludedItems.includes(item.nama));
  
  // Terapkan filter berdasarkan jenis jika diperlukan
  if (filter.toLowerCase() !== "all" && filter.toLowerCase() !== "semua") {
    // Pemetaan nilai filter ke nilai jenis yang sesuai
    const jenisMapping = {
      "grafting": "grafting",
      "koleksi": "koleksi"
    };
    
    // Gunakan pemetaan jika tersedia, jika tidak gunakan nilai filter langsung
    const jenisFilter = jenisMapping[filter.toLowerCase()] || filter.toLowerCase();
    console.log("Filtering by jenis:", jenisFilter);
    
    filteredItems = filteredItems.filter((item) => {
      // Pastikan item memiliki jenis yang valid
      if (!item.jenis || item.jenis.trim() === "") {
        item.jenis = "koleksi";
      }
      
      // Konversi ke lowercase untuk perbandingan yang tidak case-sensitive
      const itemJenis = item.jenis.toLowerCase();
      const filterJenis = jenisFilter.toLowerCase();
      
      // Periksa apakah jenis item mengandung nilai filter
      const match = itemJenis.includes(filterJenis);
      // console.log(`Item: ${item.nama}, Jenis: ${itemJenis}, Match: ${match}`);
      return match;
    });
  }
  
  console.log("Filtered items:", filteredItems.length);
  if (filteredItems.length > 0) {
    console.log("Sample filtered items:", filteredItems.slice(0, 3).map(item => ({ nama: item.nama, jenis: item.jenis })));
  } else {
    console.log("Tidak ada item yang cocok dengan filter");
  }
  
  displayKatalog(filteredItems);
}

function searchKatalog(query) {
  console.log("Searching katalog with query:", query);
  const katalog = JSON.parse(localStorage.getItem("katalog")) || defaultKatalog;
  const searchQuery = query.toLowerCase().trim();

  // Daftar nama item yang tidak boleh ditampilkan
  const excludedItems = ["Purple Pupil", "Purpel Pupil", "Racan Purple", "Racan Purpel"];
  
  // Filter item yang tidak boleh ditampilkan
  let filteredKatalog = katalog.filter(item => !excludedItems.includes(item.nama));

  if (searchQuery === "") {
    displayKatalog(filteredKatalog);
    return;
  }
  
  // Fungsi untuk menghitung skor kecocokan
  function calculateMatchScore(item, query) {
    const itemName = item.nama.toLowerCase();
    const itemType = (item.jenis || "").toLowerCase();
    let score = 0;
    
    // Kecocokan nama persis
    if (itemName === query) {
      score += 100;
    }
    // Kecocokan nama di awal
    else if (itemName.startsWith(query)) {
      score += 75;
    }
    // Kecocokan nama di tengah
    else if (itemName.includes(query)) {
      score += 50;
    }
    // Kecocokan kata-kata dalam nama
    else if (query.split(" ").some(word => itemName.includes(word))) {
      score += 25;
    }
    
    // Kecocokan jenis
    if (itemType.includes(query)) {
      score += 20;
    }
    
    // Kecocokan deskripsi jika ada
    if (item.deskripsi && item.deskripsi.toLowerCase().includes(query)) {
      score += 10;
    }
    
    return score;
  }
  
  // Hitung skor untuk setiap item dan filter yang memiliki skor > 0
  const scoredItems = filteredKatalog
    .map(item => ({
      item,
      score: calculateMatchScore(item, searchQuery)
    }))
    .filter(({ score }) => score > 0);
  
  // Urutkan berdasarkan skor tertinggi
  scoredItems.sort((a, b) => b.score - a.score);
  
  // Ekstrak item dari hasil pencarian
  const filteredItems = scoredItems.map(({ item }) => item);
  
  console.log(`Pencarian untuk "${searchQuery}" menemukan ${filteredItems.length} hasil`);
  if (filteredItems.length > 0) {
    console.log("Sample search results:", filteredItems.slice(0, 3).map(item => ({ 
      nama: item.nama, 
      jenis: item.jenis,
      id: item.id
    })));
  } else {
    console.log("Tidak ada hasil yang ditemukan, mencoba pencarian fuzzy...");
    
    // Jika tidak ada hasil, coba pencarian fuzzy dengan memecah query
    const queryWords = searchQuery.split(" ").filter(word => word.length > 2);
    if (queryWords.length > 0) {
      const fuzzyResults = filteredKatalog.filter(item => {
        const itemName = item.nama.toLowerCase();
        const itemType = (item.jenis || "").toLowerCase();
        
        // Periksa apakah ada kata dalam query yang cocok dengan nama atau jenis
        return queryWords.some(word => 
          itemName.includes(word) || 
          itemType.includes(word) ||
          (item.deskripsi && item.deskripsi.toLowerCase().includes(word))
        );
      });
      
      console.log(`Pencarian fuzzy menemukan ${fuzzyResults.length} hasil`);
      if (fuzzyResults.length > 0) {
        console.log("Sample fuzzy results:", fuzzyResults.slice(0, 3).map(item => ({ 
          nama: item.nama, 
          jenis: item.jenis,
          id: item.id
        })));
        displayKatalog(fuzzyResults);
        return;
      }
    }
  }
  
  // Tampilkan hasil pencarian
  if (filteredItems.length > 0) {
    displayKatalog(filteredItems);
  } else {
    // Jika tidak ada hasil, tampilkan pesan
    displayKatalog([]);
    showNotification('Pencarian', `Tidak ada hasil untuk "${searchQuery}"`, false);
  }
}

function addKatalogItem(item) {
  const katalog = JSON.parse(localStorage.getItem("katalog")) || defaultKatalog;

  // Periksa apakah item dengan nama yang sama sudah ada
  const lowerName = item.nama.toLowerCase().trim();
  const existingItem = katalog.find(existing => existing.nama.toLowerCase().trim() === lowerName);
  
  if (existingItem) {
    alert(`Item dengan nama "${item.nama}" sudah ada dalam katalog!`);
    return null; // Batalkan penambahan item
  }

  // Generate a new ID
  const newId =
    katalog.length > 0 ? Math.max(...katalog.map((item) => item.id)) + 1 : 1;

  const newItem = {
    id: newId,
    nama: item.nama,
    jenis: item.jenis,
    gambar: item.gambar,
    deskripsi: item.deskripsi || `Adenium ${item.nama} dengan keindahan yang unik.`,
    userAdded: true, // Tandai bahwa item ini ditambahkan oleh user
    dateAdded: new Date().toISOString() // Tambahkan timestamp untuk tracking
  };

  katalog.push(newItem);
  
  // Simpan data ke localStorage dan Firebase
  saveKatalogData(katalog);
  
  // Tampilkan notifikasi bahwa item berhasil ditambahkan
  showNotification('Item Ditambahkan', `Adenium ${item.nama} berhasil ditambahkan ke katalog.`, false);

  // Perbarui tampilan katalog
  displayKatalog(katalog);
  
  return newItem; // Return item baru untuk referensi
}

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXH7JgXIWzi7pdfs-P1F1BXKxuGQVdYgQ",
  authDomain: "qaisar-putra-adenium.firebaseapp.com",
  databaseURL: "https://qaisar-putra-adenium-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qaisar-putra-adenium",
  storageBucket: "qaisar-putra-adenium.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Periksa apakah konfigurasi Firebase valid
const isFirebaseConfigValid = () => {
  // Periksa apakah properti wajib ada dan tidak kosong
  if (!firebaseConfig.apiKey || typeof firebaseConfig.apiKey !== 'string' || firebaseConfig.apiKey.trim() === '') {
    console.error("Konfigurasi Firebase tidak valid: apiKey tidak ada atau kosong");
    return false;
  }
  
  // Periksa apakah apiKey bukan nilai default/placeholder
  if (firebaseConfig.apiKey === "AIzaSyBXH7JgXIWzi7pdfs-P1F1BXKxuGQVdYgQ") {
    console.error("Konfigurasi Firebase tidak valid: apiKey masih menggunakan nilai default");
    return false;
  }
  
  // Periksa databaseURL
  if (!firebaseConfig.databaseURL || typeof firebaseConfig.databaseURL !== 'string' || firebaseConfig.databaseURL.trim() === '') {
    console.error("Konfigurasi Firebase tidak valid: databaseURL tidak ada atau kosong");
    return false;
  }
  
  // Periksa projectId
  if (!firebaseConfig.projectId || typeof firebaseConfig.projectId !== 'string' || firebaseConfig.projectId.trim() === '') {
    console.error("Konfigurasi Firebase tidak valid: projectId tidak ada atau kosong");
    return false;
  }
  
  console.log("Konfigurasi Firebase valid");
  return true;
};

// Inisialisasi Firebase
let firebaseInitialized = false;
let database;

// Fungsi untuk memperbarui status sinkronisasi di UI
function updateSyncStatus(status) {
  const syncStatusElement = document.getElementById('sync-status');
  const connectionStatusElement = document.getElementById('connection-status');
  
  if (!syncStatusElement || !connectionStatusElement) {
    console.log("Elemen status sinkronisasi tidak ditemukan di UI");
    return;
  }
  
  console.log("Updating sync status to:", status);
  
  // Hapus semua kelas status sebelumnya
  syncStatusElement.classList.remove('online', 'offline', 'syncing');
  
  // Tambahkan kelas status baru
  syncStatusElement.classList.add(status);
  
  // Perbarui teks status
  switch(status) {
    case 'online':
      connectionStatusElement.textContent = 'Terhubung (sinkronisasi aktif)';
      connectionStatusElement.style.color = '#4CAF50'; // Hijau
      break;
    case 'offline':
      connectionStatusElement.textContent = 'Tidak terhubung (mode offline)';
      connectionStatusElement.style.color = '#F44336'; // Merah
      break;
    case 'syncing':
      connectionStatusElement.textContent = 'Menyinkronkan data...';
      connectionStatusElement.style.color = '#2196F3'; // Biru
      break;
    default:
      connectionStatusElement.textContent = 'Memeriksa koneksi...';
      connectionStatusElement.style.color = '#FF9800'; // Oranye
  }
  
  // Tambahkan notifikasi visual untuk pengguna
  if (status === 'online') {
    showNotification('Terhubung ke server', 'Data akan disinkronkan secara otomatis dengan perangkat lain.');
  } else if (status === 'offline') {
    showNotification('Tidak terhubung ke server', 'Data hanya disimpan secara lokal. Perubahan tidak akan terlihat di perangkat lain.', true);
  }
}

// Fungsi untuk menampilkan notifikasi
function showNotification(title, message, isError = false, duration = 3000) {
  // Buat ID unik untuk notifikasi ini
  const notificationId = 'notification-' + Date.now();
  
  // Buat container untuk notifikasi jika belum ada
  let notificationContainer = document.getElementById('notification-container');
  if (!notificationContainer) {
    notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    document.body.appendChild(notificationContainer);
  }
  
  // Buat elemen notifikasi baru
  const notificationElement = document.createElement('div');
  notificationElement.id = notificationId;
  notificationElement.className = 'notification'; // Tambahkan class notification
  
  // Atur warna dan ikon berdasarkan jenis notifikasi
  let icon;
  if (isError) {
    icon = '⚠️';
    notificationElement.classList.add('error'); // Tambahkan class error
  } else {
    icon = '✅';
    notificationElement.classList.add('success'); // Tambahkan class success
  }
  
  // Atur konten notifikasi dengan ikon
  notificationElement.innerHTML = `
    <div style="display: flex; align-items: flex-start;">
      <div style="font-size: 14px; margin-right: 5px;">${icon}</div>
      <div style="flex: 1;">
        <div style="font-weight: bold; font-size: 12px;">${title}</div>
        <div style="font-size: 11px;">${message}</div>
      </div>
      <div style="cursor: pointer; font-size: 12px; margin-left: 3px;" class="close-notification">×</div>
    </div>
    <div class="notification-progress"></div>
  `;

  
  // Tambahkan notifikasi ke container
  notificationContainer.appendChild(notificationElement);
  
  // Tampilkan notifikasi dengan animasi
  setTimeout(() => {
    // Animasi masuk dengan CSS
    notificationElement.style.opacity = '1';
    notificationElement.style.transform = 'translateX(0)';
    
    // Mulai animasi progress bar
    const progressBar = notificationElement.querySelector('.notification-progress');
    if (progressBar) {
      progressBar.style.transition = `width ${duration}ms linear`;
      progressBar.style.width = '0';
    }
  }, 10);
  
  // Tambahkan event listener untuk menutup notifikasi saat diklik
  const closeButton = notificationElement.querySelector('.close-notification');
  if (closeButton) {
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      closeNotification(notificationId);
    });
  }
  
  // Tambahkan event listener untuk menutup notifikasi saat diklik di mana saja
  notificationElement.addEventListener('click', () => {
    closeNotification(notificationId);
  });
  
  // Sembunyikan notifikasi setelah durasi tertentu
  const timeoutId = setTimeout(() => {
    closeNotification(notificationId);
  }, duration);
  
  // Simpan timeout ID di elemen untuk membatalkan jika perlu
  notificationElement.dataset.timeoutId = timeoutId;
  
  // Fungsi untuk menutup notifikasi dengan animasi
  function closeNotification(id) {
    const notification = document.getElementById(id);
    if (notification) {
      // Batalkan timeout jika ada
      if (notification.dataset.timeoutId) {
        clearTimeout(parseInt(notification.dataset.timeoutId));
      }
      
      // Animasi keluar
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(50px)';
      
      // Hapus elemen setelah animasi selesai
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
        
        // Hapus container jika tidak ada notifikasi lagi
        const container = document.getElementById('notification-container');
        if (container && container.children.length === 0) {
          container.parentNode.removeChild(container);
        }
      }, 300);
    }
  }
  
  // Kembalikan ID notifikasi dan fungsi untuk menutupnya
  return {
    id: notificationId,
    close: () => closeNotification(notificationId)
  };
}

try {
  console.log("Memulai inisialisasi Firebase...");
  
  // Periksa apakah konfigurasi Firebase valid
  if (!isFirebaseConfigValid()) {
    console.warn("Konfigurasi Firebase tidak valid atau menggunakan nilai default. Aplikasi akan berjalan dalam mode offline.");
    updateSyncStatus('offline');
    firebaseInitialized = false;
    showNotification('Tidak dapat terhubung ke server', 'Aplikasi berjalan dalam mode offline. Perubahan tidak akan terlihat di perangkat lain.', true);
  } else {
    // Periksa apakah Firebase SDK tersedia
    if (typeof firebase === 'undefined') {
      throw new Error("Firebase SDK tidak tersedia. Pastikan script Firebase dimuat dengan benar.");
    }
    
    // Periksa apakah Firebase sudah diinisialisasi
    if (!firebase.apps.length) {
      // Inisialisasi Firebase jika belum diinisialisasi
      console.log("Menginisialisasi Firebase baru...");
      firebase.initializeApp(firebaseConfig);
      database = firebase.database();
      firebaseInitialized = true;
      console.log("Firebase berhasil diinisialisasi");
      
      // Tambahkan listener untuk status koneksi
      const connectedRef = database.ref('.info/connected');
      connectedRef.on('value', (snap) => {
        const isConnected = snap.val() === true;
        console.log("Status koneksi Firebase:", isConnected ? "Terhubung" : "Tidak terhubung");
        updateSyncStatus(isConnected ? 'online' : 'offline');
        
        if (isConnected) {
          // Jika terhubung, coba sinkronkan data lokal ke Firebase
          const localKatalog = JSON.parse(localStorage.getItem("katalog"));
          if (localKatalog && Array.isArray(localKatalog) && localKatalog.length > 0) {
            console.log("Mencoba sinkronisasi data lokal ke Firebase setelah terhubung...");
            try {
              database.ref('katalog').once('value')
                .then((snapshot) => {
                  const firebaseData = snapshot.val();
                  // Hanya push data lokal jika tidak ada data di Firebase atau data Firebase kosong
                  if (!firebaseData || !Array.isArray(firebaseData) || firebaseData.length === 0) {
                    console.log("Firebase kosong, push data lokal...");
                    database.ref('katalog').set(localKatalog)
                      .then(() => console.log("Data lokal berhasil di-push ke Firebase"))
                      .catch(error => console.error("Error push data lokal ke Firebase:", error));
                  }
                })
                .catch(error => console.error("Error memeriksa data Firebase:", error));
            } catch (error) {
              console.error("Error saat mencoba sinkronisasi data lokal:", error);
            }
          }
        }
      });
      
      // Tambahkan listener untuk error koneksi
      database.ref('.info/connected').on('error', (error) => {
        console.error("Error koneksi Firebase:", error);
        updateSyncStatus('offline');
      });
    } else {
      // Firebase sudah diinisialisasi sebelumnya
      console.log("Firebase sudah diinisialisasi sebelumnya, menggunakan instance yang ada");
      try {
        database = firebase.database();
        firebaseInitialized = true;
        
        // Periksa status koneksi
        database.ref('.info/connected').once('value')
          .then((snap) => {
            const isConnected = snap.val() === true;
            console.log("Status koneksi Firebase (instance yang ada):", isConnected ? "Terhubung" : "Tidak terhubung");
            updateSyncStatus(isConnected ? 'online' : 'offline');
          })
          .catch(error => {
            console.error("Error memeriksa status koneksi:", error);
            updateSyncStatus('offline');
          });
      } catch (error) {
        console.error("Error mengakses database dari instance Firebase yang ada:", error);
        updateSyncStatus('offline');
      }
    }
  }
} catch (error) {
  console.error("Error inisialisasi Firebase:", error);
  updateSyncStatus('offline');
  firebaseInitialized = false;
  showNotification('Tidak dapat terhubung ke server', 'Aplikasi berjalan dalam mode offline. Perubahan tidak akan terlihat di perangkat lain.', true);
}

// Fungsi untuk menyimpan data katalog ke localStorage dan Firebase
function saveKatalogData(katalog) {
  console.log("Menyimpan katalog dengan", katalog ? katalog.length : 0, "items");
  
  // Periksa apakah katalog adalah array yang valid
  if (!Array.isArray(katalog)) {
    console.error("Katalog bukan array yang valid:", katalog);
    alert("Terjadi kesalahan format data. Aplikasi akan dimuat ulang.");
    location.reload();
    return;
  }
  
  // Periksa item duplikat sebelum menyimpan
  const duplicates = checkDuplicateItems(katalog);
  if (duplicates.length > 0) {
    console.log("Ditemukan item duplikat dalam katalog: " + duplicates.map(d => d.nama).join(", "));
    // Hapus item duplikat (otomatis)
    katalog = removeDuplicateItems(katalog);
    console.log("Item duplikat telah dihapus dari katalog.");
  }
  
  // Pastikan setiap item memiliki ID dan jenis yang valid
  katalog = katalog.map((item, index) => {
    // Pastikan item memiliki ID
    if (!item.id) {
      const newId = Date.now() + index;
      console.log(`Item ${item.nama} tidak memiliki ID, menetapkan ID baru: ${newId}`);
      item.id = newId;
    }
    
    // Pastikan item memiliki jenis yang valid
    if (!item.jenis || item.jenis.trim() === "") {
      console.log(`Item ${item.nama} tidak memiliki jenis, menetapkan default ke "koleksi"`);
      item.jenis = "koleksi";
    }
    
    return item;
  });
  
  // Simpan ke localStorage
  try {
    localStorage.setItem("katalog", JSON.stringify(katalog));
    console.log("Data berhasil disimpan ke localStorage");
    
    // Simpan juga timestamp terakhir update di localStorage
    localStorage.setItem("lastUpdate", new Date().toISOString());
  } catch (error) {
    console.error("Error menyimpan data ke localStorage:", error);
    // Coba hapus beberapa item jika localStorage penuh
    if (error.name === 'QuotaExceededError') {
      try {
        // Simpan hanya 50 item terakhir jika terlalu banyak
        const reducedKatalog = katalog.slice(-50);
        localStorage.setItem("katalog", JSON.stringify(reducedKatalog));
        console.log("Menyimpan katalog yang dikurangi ke localStorage karena kuota terlampaui");
      } catch (e) {
        console.error("Masih gagal menyimpan ke localStorage setelah mengurangi ukuran:", e);
      }
    }
  }
  
  // Update status sinkronisasi
  updateSyncStatus('syncing');
  
  // Simpan ke Firebase jika tersedia dan valid
  if (firebaseInitialized && isFirebaseConfigValid()) {
    try {
      // Tambahkan timestamp untuk tracking
      const dataToSave = {
        items: katalog,
        lastUpdated: firebase.database.ServerValue.TIMESTAMP
      };
      
      // Log sample items yang akan disimpan ke Firebase
      console.log("Sample items yang akan disimpan ke Firebase:", 
        katalog.slice(0, 3).map(item => ({ nama: item.nama, jenis: item.jenis, id: item.id })));
      
      // Simpan data ke Firebase
      database.ref('katalog').set(katalog)
        .then(() => {
          console.log("Data berhasil disimpan ke Firebase");
          updateSyncStatus('online');
          showNotification('Sinkronisasi', 'Data berhasil disimpan dan disinkronkan ke server', false);
          
          // Simpan juga timestamp terakhir update
          database.ref('lastUpdate').set(firebase.database.ServerValue.TIMESTAMP)
            .then(() => {
              console.log("Timestamp berhasil disimpan ke Firebase");
            })
            .catch(error => {
              console.error("Error menyimpan timestamp:", error);
            });
        })
        .catch((error) => {
          console.error("Error menyimpan data ke Firebase:", error);
          updateSyncStatus('offline');
          showNotification('Sinkronisasi Gagal', 'Data hanya disimpan secara lokal. Perubahan tidak akan terlihat di perangkat lain.', true);
          console.log("Data hanya disimpan secara lokal karena error Firebase:", error.message);
          
          // Coba lagi dengan metode update jika set gagal
          if (error.code === 'PERMISSION_DENIED') {
            console.log("Mencoba metode update sebagai fallback...");
            database.ref().update({ 'katalog': katalog })
              .then(() => {
                console.log("Data berhasil disimpan ke Firebase menggunakan metode update");
                updateSyncStatus('online');
                showNotification('Sinkronisasi', 'Data berhasil disimpan dan disinkronkan ke server', false);
              })
              .catch(updateError => {
                console.error("Error menyimpan data ke Firebase dengan metode update:", updateError);
                updateSyncStatus('offline');
                showNotification('Sinkronisasi Gagal', 'Data hanya disimpan secara lokal. Perubahan tidak akan terlihat di perangkat lain.', true);
              });
          }
        });
    } catch (error) {
      console.error("Error akses Firebase:", error);
      updateSyncStatus('offline');
      showNotification('Sinkronisasi Gagal', 'Data hanya disimpan secara lokal. Perubahan tidak akan terlihat di perangkat lain.', true);
    }
  } else {
    console.log("Firebase tidak diinisialisasi atau konfigurasi tidak valid. Data hanya disimpan secara lokal.");
    updateSyncStatus('offline');
    showNotification('Mode Offline', 'Data hanya disimpan secara lokal. Perubahan tidak akan terlihat di perangkat lain.', true);
  }
  
  // Trigger storage event pada tab/window lain (untuk kompatibilitas)
  try {
    // Membuat event storage custom untuk memicu pembaruan di tab lain
    const storageEvent = new StorageEvent('storage', {
      key: 'katalog',
      newValue: JSON.stringify(katalog),
      url: window.location.href,
      storageArea: localStorage
    });
    window.dispatchEvent(storageEvent);
    console.log("Event storage dipicu untuk sinkronisasi antar tab");
  } catch (e) {
    console.log('Browser tidak mendukung pembuatan StorageEvent kustom:', e);
  }
  
  return katalog; // Return katalog yang sudah diproses
}

// Fungsi untuk memeriksa item duplikat dalam katalog
function checkDuplicateItems(katalog) {
  const duplicates = [];
  const nameMap = {};
  
  katalog.forEach(item => {
    const lowerName = item.nama.toLowerCase().trim();
    if (nameMap[lowerName]) {
      // Item dengan nama yang sama sudah ada
      duplicates.push(item);
    } else {
      nameMap[lowerName] = item;
    }
  });
  
  return duplicates;
}

// Fungsi untuk menghapus item duplikat dari katalog
function removeDuplicateItems(katalog) {
  const uniqueItems = [];
  const nameMap = {};
  
  katalog.forEach(item => {
    const lowerName = item.nama.toLowerCase().trim();
    if (!nameMap[lowerName]) {
      uniqueItems.push(item);
      nameMap[lowerName] = true;
    }
  });
  
  return uniqueItems;
}

// Event listeners
function initEventListeners() {
  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      console.log("Filter button clicked:", btn.dataset.filter); // Debugging
      filterKatalog(btn.dataset.filter);
    });
  });

  // Search functionality - improved with real-time search
  searchBtn.addEventListener("click", () => {
    searchKatalog(searchInput.value);
  });

  searchInput.addEventListener("keyup", () => {
    searchKatalog(searchInput.value);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      searchKatalog(searchInput.value);
    }
  });

  // Toggle tambah katalog form
  tambahItemBtn.addEventListener("click", () => {
    if (tambahKatalogForm.style.display === "none") {
      tambahKatalogForm.style.display = "block";
      tambahItemBtn.textContent = "- Sembunyikan Form";
    } else {
      tambahKatalogForm.style.display = "none";
      tambahItemBtn.textContent = "+ Tambah Item Katalog";
    }
  });

  // Add new katalog item
  tambahForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Cek apakah form memiliki field deskripsi
    const deskripsiField = document.getElementById("deskripsi-tanaman");
    
    const newItem = {
      nama: document.getElementById("nama-tanaman").value,
      jenis: document.getElementById("jenis-tanaman").value,
      gambar: document.getElementById("gambar-tanaman").value,
      deskripsi: deskripsiField ? deskripsiField.value : `Adenium dengan keindahan yang unik.`,
      userAdded: true, // Tandai bahwa item ini ditambahkan oleh user
      dateAdded: new Date().toISOString() // Tambahkan timestamp untuk tracking
    };

    const addedItem = addKatalogItem(newItem);
    
    if (addedItem) {
      tambahForm.reset();

      // Hide form after adding item
      tambahKatalogForm.style.display = "none";
      tambahItemBtn.textContent = "+ Tambah Item Katalog";
    }
  });

  // Contact form
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const telepon = document.getElementById("telepon").value;
      const pesan = document.getElementById("pesan").value;

      // Redirect to WhatsApp with the message
      const whatsappMessage = `Halo, saya ${nama}. Email: ${email}, Telepon: ${telepon}. Pesan: ${pesan}`;
      const whatsappUrl = `https://wa.me/6285716942804?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");

      contactForm.reset();
    });
  }

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a menu item
  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });
}
