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
  // Tanaman Grafting (Id)
  {
    id: 6,
    nama: "Id Banburi",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Banburi.jpeg",
  },
  {
    id: 7,
    nama: "Id Camelia",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Camelia.jpeg",
  },
  {
    id: 8,
    nama: "Id Chili Vermilion",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Chili Vermilion.jpeg",
  },
  {
    id: 9,
    nama: "Id Citrus Brezee",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Citrus Brezee.jpeg",
  },
  {
    id: 10,
    nama: "Id Eye of The Storm",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Eye of The Storm.jpeg",
  },
  {
    id: 11,
    nama: "Id Golden Cicada",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Golden Cicada.jpeg",
  },
  {
    id: 12,
    nama: "Id Golden Dragon",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Golden Dragon.jpeg",
  },
  {
    id: 13,
    nama: "Id Golden Year",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Golden Year.jpeg",
  },
  {
    id: 14,
    nama: "Id Hangson",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Hangson.jpeg",
  },
  {
    id: 15,
    nama: "Id Kindly",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Kindly.jpeg",
  },
  {
    id: 16,
    nama: "Id Kirei",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Kirei.jpeg",
  },
  {
    id: 17,
    nama: "Id Kumbang",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Kumbang.jpeg",
  },
  {
    id: 18,
    nama: "Id Lembayung",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Lembayung.jpeg",
  },
  {
    id: 19,
    nama: "Id Lumintang",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Lumintang.jpeg",
  },
  {
    id: 20,
    nama: "Id Madeira",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Madeira.jpeg",
  },
  {
    id: 21,
    nama: "Id Mussela",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Mussela.jpeg",
  },
  {
    id: 22,
    nama: "Id Num Wan",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Num Wan.jpeg",
  },
  {
    id: 23,
    nama: "Id Red Spider",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Red Spider.jpeg",
  },
  {
    id: 24,
    nama: "Id Sakura",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Sakura.jpeg",
  },
  {
    id: 25,
    nama: "Id Smile In The Dark Night",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Smile In The Dark Night.jpeg",
  },
  {
    id: 26,
    nama: "Id Suntikan Yellow",
    jenis: "grafting",
    deskripsi: "",
    gambar: "Asset/Id Suntikan Yellow.jpeg",
  },

  // Item dengan ID 27 (Id Swallow) sudah tidak ada

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
  console.log("Sample items from defaultKatalog:", defaultKatalog.slice(0, 3).map(item => item.nama));
  
  // Periksa dan hapus item duplikat dalam defaultKatalog
  const cleanDefaultKatalog = removeDuplicateItems(defaultKatalog);
  if (cleanDefaultKatalog.length < defaultKatalog.length) {
    console.log("Removed", defaultKatalog.length - cleanDefaultKatalog.length, "duplicate items from defaultKatalog");
  }
  
  // Daftar nama item yang tidak boleh ditampilkan
  const excludedItems = ["Purple Pupil", "Purpel Pupil", "Racan Purple", "Racan Purpel"];
  
  // Filter default katalog
  const filteredDefaultKatalog = cleanDefaultKatalog.filter(item => !excludedItems.includes(item.nama));
  
  // Tampilkan defaultKatalog terlebih dahulu agar ada konten yang ditampilkan segera
  console.log("Menampilkan defaultKatalog sementara menunggu data dari Firebase/localStorage");
  displayKatalog(filteredDefaultKatalog);
  
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

  // Periksa dan hapus item duplikat dalam katalog yang dimuat
  katalog = removeDuplicateItems(katalog);
  
  // Filter item yang tidak boleh ditampilkan
  katalog = katalog.filter(item => !excludedItems.includes(item.nama));
  
  // If katalog is empty or localStorage doesn't exist, use default
  if (katalog.length === 0 || !localStorage.getItem("katalog")) {
    console.log("Using default katalog");
    katalog = filteredDefaultKatalog;
    localStorage.setItem("katalog", JSON.stringify(katalog));
  }
  
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
  if (!firebaseInitialized) return;
  
  // Listener untuk perubahan data secara real-time
  database.ref('katalog').on('value', (snapshot) => {
    let updatedKatalog = snapshot.val();
    
    if (updatedKatalog && Array.isArray(updatedKatalog)) {
      console.log("Real-time update from Firebase with", updatedKatalog.length, "items");
      
      // Periksa dan hapus item duplikat
      updatedKatalog = removeDuplicateItems(updatedKatalog);
      
      // Filter item yang tidak boleh ditampilkan
      updatedKatalog = updatedKatalog.filter(item => !excludedItems.includes(item.nama));
      
      // Update localStorage tanpa memicu event storage
      localStorage.setItem("katalog", JSON.stringify(updatedKatalog));
      
      // Tampilkan katalog yang diperbarui
      displayKatalog(updatedKatalog);
    } else {
      console.log("Tidak ada data valid dari Firebase atau data bukan array");
      // Jika tidak ada data valid dari Firebase, gunakan data dari localStorage
      const localKatalog = JSON.parse(localStorage.getItem("katalog"));
      if (localKatalog && Array.isArray(localKatalog) && localKatalog.length > 0) {
        console.log("Menggunakan data dari localStorage sebagai fallback");
        displayKatalog(localKatalog.filter(item => !excludedItems.includes(item.nama)));
      } else {
        // Jika tidak ada data di localStorage, gunakan defaultKatalog
        console.log("Menggunakan defaultKatalog sebagai fallback terakhir");
        const filteredDefaultKatalog = defaultKatalog.filter(item => !excludedItems.includes(item.nama));
        displayKatalog(filteredDefaultKatalog);
      }
    }
  }, (error) => {
    console.error("Error pada listener Firebase:", error);
    // Jika terjadi error, gunakan data dari localStorage
    const localKatalog = JSON.parse(localStorage.getItem("katalog"));
    if (localKatalog && Array.isArray(localKatalog) && localKatalog.length > 0) {
      console.log("Menggunakan data dari localStorage karena error Firebase");
      displayKatalog(localKatalog.filter(item => !excludedItems.includes(item.nama)));
    }
  });
}

// Fungsi untuk setup event listener storage (untuk mode offline)
function setupStorageEventListener(excludedItems) {
  window.addEventListener("storage", function(e) {
    if (e.key === "katalog") {
      // Update katalog jika ada perubahan dari tab/perangkat lain
      let updatedKatalog = JSON.parse(e.newValue);
      
      // Periksa dan hapus item duplikat
      updatedKatalog = removeDuplicateItems(updatedKatalog);
      
      // Filter item yang tidak boleh ditampilkan
      updatedKatalog = updatedKatalog.filter(item => !excludedItems.includes(item.nama));
      
      // Tampilkan katalog yang diperbarui
      displayKatalog(updatedKatalog);
    }
  });
}

// Variabel global untuk melacak status tampilan katalog
let showAllItems = false;
const ITEMS_PER_PAGE = 8; // Jumlah item yang ditampilkan awalnya

function displayKatalog(items) {
  console.log("Displaying katalog with", items.length, "items");
  katalogContainer.innerHTML = "";

  // Debugging: Log jenis of items
  const jenisCounts = items.reduce((counts, item) => {
    counts[item.jenis] = (counts[item.jenis] || 0) + 1;
    return counts;
  }, {});
  console.log("Jenis counts:", jenisCounts);
  console.log("Sample items being displayed:", items.slice(0, 3).map(item => ({ nama: item.nama, jenis: item.jenis })));

  if (!items || items.length === 0) {
    console.error("Tidak ada item untuk ditampilkan dalam displayKatalog");
    katalogContainer.innerHTML =
      '<p class="no-items">Tidak ada tanaman yang ditemukan.</p>';
    return;
  }
  
  // Tambahkan log untuk memastikan katalogContainer ada
  if (!katalogContainer) {
    console.error("katalogContainer tidak ditemukan!");
    return;
  }

  // Tampilkan semua item tanpa batasan
  items.forEach((item) => {
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

    katalogItem.innerHTML = `
            <div class="katalog-image">
                <img src="${item.gambar}" alt="${item.nama}">
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

  if (!itemToEdit) return;

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

    // Simpan dengan fungsi yang memicu event storage
    saveKatalogData(updatedKatalog);
    displayKatalog(updatedKatalog);

    // Reset form
    tambahForm.reset();
    tambahKatalogForm.style.display = "none";
    tambahItemBtn.textContent = "+ Tambah Item Katalog";
    submitBtn.textContent = "Tambah Tanaman";
    delete tambahForm.dataset.editId;

    // Restore original submit handler
    tambahForm.onsubmit = originalSubmitHandler;

    alert("Tanaman berhasil diperbarui!");
  };
}

function deleteKatalogItem(itemId) {
  if (confirm("Apakah Anda yakin ingin menghapus tanaman ini dari katalog?")) {
    const katalog =
      JSON.parse(localStorage.getItem("katalog")) || defaultKatalog;
    const updatedKatalog = katalog.filter((item) => item.id !== itemId);

    // Simpan dengan fungsi yang memicu event storage
    saveKatalogData(updatedKatalog);
    displayKatalog(updatedKatalog);

    alert("Tanaman berhasil dihapus dari katalog!");
  }
}

function filterKatalog(filter) {
  const katalog = JSON.parse(localStorage.getItem("katalog")) || defaultKatalog;
  
  // Daftar nama item yang tidak boleh ditampilkan
  const excludedItems = ["Purple Pupil", "Purpel Pupil", "Racan Purple", "Racan Purpel"];
  
  // Filter item yang tidak boleh ditampilkan
  let filteredItems = katalog.filter(item => !excludedItems.includes(item.nama));
  
  // Terapkan filter berdasarkan jenis jika diperlukan
  if (filter !== "all" && filter !== "semua") {
    filteredItems = filteredItems.filter((item) => item.jenis === filter);
  }

  displayKatalog(filteredItems);
}

function searchKatalog(query) {
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

  const filteredItems = filteredKatalog.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery)
  );

  displayKatalog(filteredItems);
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
  saveKatalogData(katalog);

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

// Inisialisasi Firebase
let firebaseInitialized = false;
let database;

// Fungsi untuk memperbarui status sinkronisasi di UI
function updateSyncStatus(status) {
  const syncStatusElement = document.getElementById('sync-status');
  const connectionStatusElement = document.getElementById('connection-status');
  
  if (!syncStatusElement || !connectionStatusElement) return;
  
  // Hapus semua kelas status sebelumnya
  syncStatusElement.classList.remove('online', 'offline', 'syncing');
  
  // Tambahkan kelas status baru
  syncStatusElement.classList.add(status);
  
  // Perbarui teks status
  switch(status) {
    case 'online':
      connectionStatusElement.textContent = 'Terhubung (sinkronisasi aktif)';
      break;
    case 'offline':
      connectionStatusElement.textContent = 'Tidak terhubung (mode offline)';
      break;
    case 'syncing':
      connectionStatusElement.textContent = 'Menyinkronkan data...';
      break;
    default:
      connectionStatusElement.textContent = 'Memeriksa koneksi...';
  }
}

try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  database = firebase.database();
  firebaseInitialized = true;
  console.log("Firebase berhasil diinisialisasi");
  updateSyncStatus('online');
  
  // Tambahkan listener untuk status koneksi
  const connectedRef = database.ref('.info/connected');
  connectedRef.on('value', (snap) => {
    if (snap.val() === true) {
      updateSyncStatus('online');
    } else {
      updateSyncStatus('offline');
    }
  });
} catch (error) {
  console.error("Error inisialisasi Firebase:", error);
  updateSyncStatus('offline');
  alert("Terjadi kesalahan saat menghubungkan ke database. Aplikasi akan berjalan dalam mode offline.");
}

// Fungsi untuk menyimpan data katalog ke localStorage dan Firebase
function saveKatalogData(katalog) {
  // Periksa item duplikat sebelum menyimpan
  const duplicates = checkDuplicateItems(katalog);
  if (duplicates.length > 0) {
    alert("Ditemukan item duplikat dalam katalog: " + duplicates.map(d => d.nama).join(", "));
    // Hapus item duplikat (otomatis)
    katalog = removeDuplicateItems(katalog);
    console.log("Item duplikat telah dihapus dari katalog.");
  }
  
  // Simpan ke localStorage
  localStorage.setItem("katalog", JSON.stringify(katalog));
  
  // Update status sinkronisasi
  updateSyncStatus('syncing');
  
  // Simpan ke Firebase jika tersedia
  if (firebaseInitialized) {
    try {
      database.ref('katalog').set(katalog)
        .then(() => {
          console.log("Data berhasil disimpan ke Firebase");
          updateSyncStatus('online');
        })
        .catch((error) => {
          console.error("Error menyimpan data ke Firebase:", error);
          updateSyncStatus('offline');
          alert("Terjadi kesalahan saat menyimpan data. Data disimpan secara lokal.");
        });
    } catch (error) {
      console.error("Error akses Firebase:", error);
    }
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
  } catch (e) {
    console.log('Browser tidak mendukung pembuatan StorageEvent kustom');
  }
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
      deskripsi: deskripsiField ? deskripsiField.value : `Adenium dengan keindahan yang unik.`
    };

    const addedItem = addKatalogItem(newItem);
    tambahForm.reset();

    // Hide form after adding item
    tambahKatalogForm.style.display = "none";
    tambahItemBtn.textContent = "+ Tambah Item Katalog";

    alert(`Tanaman berhasil ditambahkan ke katalog dengan ID: ${addedItem.id}!`);
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
