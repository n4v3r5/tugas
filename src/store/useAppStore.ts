import { create } from "zustand";

export type PageType = "landing" | "home" | "book-detail" | "reading" | "profile";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  genres: string[];
  excerpt: string;
  chapters: { title: string; content: string }[];
}

export interface Genre {
  id: string;
  name: string;
  image: string;
}

interface AppState {
  currentPage: PageType;
  selectedBookId: string | null;
  selectedChapter: number;
  isDarkMode: boolean;
  userName: string;
  readingProgress: number;
  points: number;
  isOnboarded: boolean;

  setPage: (page: PageType) => void;
  selectBook: (bookId: string) => void;
  selectChapter: (chapter: number) => void;
  toggleDarkMode: () => void;
  setUserName: (name: string) => void;
  setOnboarded: (value: boolean) => void;
  addPoints: (pts: number) => void;
  updateProgress: (progress: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: "landing",
  selectedBookId: null,
  selectedChapter: 0,
  isDarkMode: false,
  userName: "Reader",
  readingProgress: 35,
  points: 240,
  isOnboarded: false,

  setPage: (page) => set({ currentPage: page }),
  selectBook: (bookId) => set({ selectedBookId: bookId, currentPage: "book-detail" }),
  selectChapter: (chapter) => set({ selectedChapter: chapter }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setUserName: (name) => set({ userName: name }),
  setOnboarded: (value) => set({ isOnboarded: value }),
  addPoints: (pts) => set((state) => ({ points: state.points + pts })),
  updateProgress: (progress) => set({ readingProgress: progress }),
}));

// Book data
export const BOOKS: Book[] = [
  {
    id: "manohara",
    title: "Manohari: Kamu tak harus selalu hujan Kaia",
    author: "Amelia",
    coverImage: "/images/manohara.jpg",
    genres: ["Romance", "Humor", "Family", "Drama"],
    excerpt: `\u201CTakedown postinganmu tentang saya Jerion, saya bukan pacarmu!\u201D Begitu marahnya Kaia pada sosok lelaki tegap yang kini tepat berdiri di depannya.\n\n\u201CPerasaan gue gak bisa diatur Kaia, gue suka sama lo,\u201D balas Jerion sambil menatap sepasang mata teduh yang menentramkan segala keluh kesah di hidup lelaki itu.\n\n\u201CSaya memang tidak bisa mengatur perasaanmu untuk berlabuh kemana, tapi saya mohon dengan sangat, belajarlah melupakan saya.\u201D\n\n\u201CKasih gue satu alasan, kenapa gue gak boleh suka sama lo?\u201D\n\nDitunjukkan Kaia potret pria kecil yang berhasil memporak-porandakan perasaan Jerion.\n\n\u201CDia putra saya, Maradewa namanya.\u201D\n\nDia paksanya Jerion gugur sebelum benar-benar berperang mendapatkan Permaisurinya.`,
    chapters: [
      {
        title: "5.0 Prolog",
        content: `\u201CMama.\u201D\n\nCintanya Mama udah bangun, sini peluk Mama.\n\nUdah jam setengah delapan pagi, tapi suara itu masih terdengar jelas di telinga Kaia. Suara yang selalu berhasil membuatnya tersenyum, meski hari-harinya tidak selalu berjalan mulus.\n\nKaia membuka matanya perlahan. Cahaya pagi menerobos masuk melalui celah gorden kamar yang tidak sepenuhnya tertutup. Ia meraih ponselnya di atas nakas dan melihat foto seorang anak laki-laki kecil dengan senyum paling manis di dunia sebagai wallpaper-nya.\n\n\u201CSelamat pagi, Maradewa,\u201D bisiknya dengan senyum yang tak bisa ditahan.\n\nHari ini adalah hari pertama Kaia kembali bekerja setelah seminggu cuti mengurus anaknya yang sakit. Maradewa, putranya yang berusia empat tahun, kini sudah pulih dan kembali bersemangat seperti biasa.\n\nKaia bangkit dari tempat tidur, merentangkan tangannya, dan memulai hari dengan doa singkat. Doa yang selalu sama setiap pagi\u2014meminta kekuatan untuk menjalani hari sebagai seorang ibu tunggal yang tidak pernah ia bayangkan harus menjalaninya.\n\nDi dapur, Ibu Ratna sudah sibuk menyiapkan sarapan. Aroma nasi goreng dan kopi hitam memenuhi ruangan\u2014campuran yang sempurna untuk memulai hari.\n\n\u201CKaia, cepat mandi! Nanti telat kerja,\u201D teriak Ibu Ratna dari dapur.\n\n\u201CIya, Bu! Segera!\u201D balas Kaia sambil mengambil handuk dan berjalan menuju kamar mandi.\n\nAir dingin menyiram tubuhnya, membilas sisa-sisa kantuk yang masih menempel. Kaia membiarkan air mengalir di wajahnya sejenak\u2014sebuah ritual kecil yang ia lakukan untuk menyegarkan pikiran sebelum menghadapi dunia.\n\nSetelah mandi, Kaia mengenakan baju kerjanya\u2014blouse putih sederhana dan celana hitam formal. Ia merapikan rambutnya yang hitam panjang ke dalam ikatan kuda yang rapi. Di depan cermin, ia menatap dirinya sendiri.\n\n\u201CKamu kuat, Kaia. Kamu bisa,\u201D bisiknya pada bayangan dirinya.\n\nLalu ia tersenyum\u2014senyum yang sama seperti yang ia berikan pada Maradewa setiap pagi. Senyum yang mengatakan bahwa segala sesuatu akan baik-baik saja, meski ia tidak selalu yakin.`,
      },
      {
        title: "5.1 Pertemuan",
        content: `Kantor Kaia berada di lantai dua puluh tiga sebuah gedung perkantoran di jantung kota Jakarta. Dari meja kerjanya, ia bisa melihat pemandangan kota yang ramai\u2014mobil-mobil kecil di bawah sana, orang-orang yang terburu-buru, dan langit yang tidak pernah benar-benar biru.\n\n\u201CKaia! Sudah masuk ruang meeting!\u201D teriak Dinda, rekan kerjanya yang juga menjadi sahabat terdekat di kantor.\n\n\u201CIya, Dind! Lagi ambil air!\u201D balas Kaia sambil mengisi gelasnya dengan air mineral.\n\nRuang meeting sudah penuh ketika Kaia masuk. Ia segera mengambil tempat duduk di sudut meja, kebiasaan yang ia lakukan agar tidak terlalu menonjol.\n\n\u201CBaik, hari ini kita akan membahas kampanye baru untuk klien kami, PT Nusantara Jaya,\u201D dimulai Bu Megawati, manajer divisi kreatif.\n\nKaia mencatat poin-poin penting di laptopnya. Ia selalu teliti dalam bekerja\u2014salah satu alasan mengapa ia dipercaya untuk menangani klien-klien besar.\n\n\u201CTapi sebelum itu, saya ingin memperkenalkan rekan baru kita yang akan bergabung dengan tim untuk proyek ini,\u201D lanjut Bu Megawati.\n\nPintu ruang meeting terbuka, dan seorang pria tinggi tegap masuk dengan langkah percaya diri. Rambutnya disisir rapi, matanya tajam namun ramah, dan senyumnya\u2014senyum yang sepertinya bisa membuat siapa saja lupa apa yang sedang dikatakan.\n\n\u201CJerion Ananda, silakan perkenalkan diri Anda,\u201D kata Bu Megawati.\n\n\u201CTerima kasih, Bu. Nama saya Jerion Ananda, biasa dipanggil Jerion. Saya pindah dari divisi marketing dan akan membantu tim kreatif untuk proyek kali ini,\u201D ucapnya dengan suara bariton yang tenang namun penuh otoritas.\n\nMata Kaia dan Jerion bertemu untuk pertama kalinya. Dan dalam sekejap, Kaia merasakan sesuatu\u2014sebuah de ja vu yang tidak bisa ia jelaskan. Seperti pernah melihat pria itu sebelumnya, di waktu dan tempat yang tidak bisa ia ingat.\n\nJerion tersenyum padanya, dan Kaia segera memalingkan wajahnya kembali ke laptop.\n\nJangan, Kaia. Jangan mulai lagi.`,
      },
    ],
  },
  {
    id: "laut-bercerita",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    coverImage: "/images/laut-bercerita.jpg",
    genres: ["Literary Fiction", "Historical", "Drama"],
    excerpt: `Laut itu tidak pernah diam. Bahkan ketika permukaannya terlihat tenang, di bawah sana ombak tetap bergerak, bergelombang, mencari jalan keluar. Seperti halnya hati manusia\u2014yang selalu menyimpan cerita di kedalaman yang tidak terlihat.`,
    chapters: [
      {
        title: "1. Biru",
        content: `Laut itu tidak pernah diam.\n\nBiru memandangi laut dari dermaga tua di ujung kota. Angin sore membawa aroma garam dan kenangan\u2014dua hal yang selalu hadir bersamaan di tempat ini.\n\nSudah tiga tahun sejak ia terakhir berdiri di titik yang sama ini. Tiga tahun sejak ia memutuskan untuk pergi dan meninggalkan segalanya. Tiga tahun sejak ia menutup bab yang paling menyakitkan dalam hidupnya.\n\nTapi laut selalu tahu cara memanggilnya kembali.\n\n\u201CBiru?\u201D suara dari belakangnya memecah keheningan.\n\nBiru tidak perlu menoleh untuk tahu siapa pemilik suara itu. Ia sudah menghafalnya\u2014nada yang bercampur antara kelegaan dan kekhawatiran, seperti orang yang baru saja menemukan sesuatu yang lama hilang.\n\n\u201CKau masih di sini,\u201D kata Biru tanpa membalikkan badan.\n\n\u201CKau juga.\u201D\n\nDesiran ombak menjadi pengisi keheningan di antara mereka. Di kejauhan, perahu nelayan kembali ke darat, membawa hasil laut yang akan dijual di pasar pagi.\n\n\u201CAku kembali karena ada yang belum selesai,\u201D kata Biru akhirnya.\n\n\u201CAda yang tidak pernah selesai di antara kita.\u201D\n\nBiru menutup matanya. Angin berhembus kembali, dan untuk pertama kalinya dalam tiga tahun, ia membiarkan dirinya merasakan\u2014benar-benar merasakan\u2014semuanya.`,
      },
    ],
  },
  {
    id: "timun-mas",
    title: "Timun Mas",
    author: "Rina Saraswati",
    coverImage: "/images/timun-mas.jpg",
    genres: ["Fantasy", "Folklore", "Adventure"],
    excerpt: `Di sebuah desa kecil di kaki gunung, hiduplah seorang janda tua yang selalu bermimpi memiliki seorang anak. Suatu malam, seorang raksasa hijau datang dalam mimpinya dan memberikannya biji mentimun emas.`,
    chapters: [
      {
        title: "1. Benih Emas",
        content: `Di sebuah desa kecil di kaki gunung Merapi, hiduplah seorang janda tua bernama Mbok Srini. Ia tinggal sendirian di rumah panggung tua yang sudah berdiri sejak zaman nenek moyangnya. Setiap hari, Mbok Srini bekerja di ladang, menanam sayur-mayur yang ia jual di pasar.\n\nTapi ada satu hal yang selalu membuat hatinya kosong\u2014ia tidak memiliki anak.\n\n\u201CKalau saja aku punya seorang anak,\u201D bisiknya setiap malam sebelum tidur, \u201Cmeskipun sebesar mentimun, aku akan merawatnya dengan sepenuh hatiku.\u201D\n\nSatu malam, ketika bulan purnama bersinar terang, Mbok Srini bermimpi. Dalam mimpinya, seorang raksasa hijau yang tinggi menjulang muncul di depan rumahnya. Kulit raksasa itu berwarna hijau seperti daun pandan, matanya menyala merah, dan suaranya menggelegar seperti guntur.\n\n\u201CMbok Srini,\u201D kata raksasa itu, \u201Caku mendengar doamu. Aku akan memberikanmu apa yang kau inginkan, tapi ada satu syarat.\u201D\n\n\u201CApa syaratnya, Gusti?\u201D tanya Mbok Srini dengan suara bergetar.\n\n\u201CAnak yang kau minta harus kembalikan padaku ketika ia berusia enam belas tahun.\u201D\n\nMbok Srini terdiam. Hatinya bergumul antara keinginan untuk memiliki anak dan ketakutan akan kehilangannya. Tapi cinta seorang ibu\u2014bahkan ibu yang belum menjadi\u2014lebih kuat dari ketakutan apapun.\n\n\u201CBaik,\u201D kata Mbok Srini. \u201CAku terima syaratmu.\u201D\n\nRaksasa itu tersenyum\u2014senyum yang tidak bisa dibaca apakah itu kebaikan atau ancaman. Lalu ia mengeluarkan sesuatu dari telapak tangannya yang raksasa: empat butir biji mentimun yang berkilau seperti emas.\n\n\u201CTanam benih ini di halaman rumahmu. Rawat dengan cinta, dan kau akan mendapatkan apa yang kau impikan.\u201D\n\nKetika Mbok Srini terbangun, ia menemukan empat butir biji emas di telapak tangannya. Biji-biji itu hangat, seolah menyimpan kehidupan di dalamnya.`,
      },
    ],
  },
  {
    id: "malioboro",
    title: "Malioboro at Midnight",
    author: "Skysphere",
    coverImage: "/images/malioboro.jpg",
    genres: ["Contemporary", "Romance", "Travel"],
    excerpt: `Jalan Malioboro di tengah malam memiliki ceritanya sendiri. Ketika turis telah tidur dan pedagang telah pulang, yang tersisa adalah jiwa kota yang sesungguhnya.`,
    chapters: [
      {
        title: "1. Midnight Walk",
        content: `Jalan Malioboro di tengah malam memiliki ceritanya sendiri.\n\nRaka berjalan perlahan di sepanjang trotoar yang sudah sepi. Lampu jalan memancarkan cahaya kuning yang lembut, menciptakan bayangan-bayangan panjang dari pohon-pohon beringin tua yang berjajar di kedua sisi jalan.\n\nJam dua pagi, dan Yogyakarta sedang terlelap. Tidak ada suara tawar-menawar dari pedagang batik, tidak ada teriakan pengobralan, tidak ada derap kaki wisatawan yang penasaran. Hanya ada Raka, langkahnya, dan keheningan yang nyaman.\n\nSejak pindah ke kota ini tiga bulan lalu, Raka sudah menjadikan jalan kaki malam sebagai ritualnya. Ada sesuatu yang menenangkan dari kota yang sedang tidur\u2014seperti melihat seseorang tanpa topeng yang biasa ia kenakan di siang hari.\n\n\u201CEh, permisi...\u201D\n\nRaka menoleh ke arah suara itu. Di bangku taman kecil di pinggir jalan, seorang perempuan duduk sendirian dengan tas ransel besar di pangkuannya. Rambutnya diikat asal, kaosnya kusut, dan di matanya ada campuran antara lelah dan... sesuatu yang lain. Sesuatu yang membuat Raka berhenti melangkah.\n\n\u201CYa?\u201D jawab Raka hati-hati.\n\n\u201CKamu tahu di mana bisa nemu warung kopi yang masih buka jam segini?\u201D\n\nRaka tersenyum. Pertanyaan yang aneh untuk jam dua pagi, tapi ada kepolosan di sana yang membuatnya tidak bisa menolak.\n\n\u201CAku tahu tempatnya. Ikut aku?\u201D\n\nPerempuan itu menatapnya sejenak, lalu mengangguk. Ia berdiri, memasang tas ranselnya, dan berjalan di samping Raka.\n\n\u201CAku Nadia,\u201D katanya.\n\n\u201CRaka.\u201D\n\nDan begitulah, di tengah jalan Malioboro yang sepi, dua orang asing mulai berjalan bersama\u2014tanpa tahu bahwa malam ini akan mengubah segalanya.`,
      },
    ],
  },
  {
    id: "harry-potter",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    coverImage: "/images/harry-potter.jpg",
    genres: ["Fantasy", "Adventure", "Young Adult"],
    excerpt: `Harry Potter tidak pernah menduga bahwa tahun keduanya di Hogwarts akan lebih berbahaya dari yang pertama. Ketika pesan misterius muncul di dinding koridor, semua orang tahu\u2014sesuatu yang gelap telah terbangun.`,
    chapters: [
      {
        title: "1. The Worst Birthday",
        content: `Bukan ide yang bagus untuk merayakan ulang tahun seorang penyihir dengan kue cokelat yang dibakar dan kartu ucapan yang tidak pernah datang.\n\nHarry Potter duduk di kasurnya di kamar tidur kecil di bawah tangga nomor 4 Privet Drive, menatap kue kecil yang bibinya Petunia buatkan\u2014jika bisa disebut \u201Cmembuatkan.\u201D Kue itu gosong di bagian atas, miring ke satu sisi, dan lilinnya ditempelkan asal-asalan dengan frosting yang sudah meleleh.\n\n\u201CSelamat ulang tahun ke dua belas, Harry,\u201D bisiknya pada dirinya sendiri.\n\nTidak ada yang lain. Tidak ada kartu dari Ron, tidak ada surat dari Hermione, bahkan Hedwig\u2014burung hantunya\u2014sedang keluar berburu dan tidak akan kembali sampai pagi.\n\nHarry menghembuskan lilin\u2014semuanya sekaligus, seperti kebiasaan penyihir\u2014dan membuat keinginan. Keinginan yang sama setiap tahun: agar ia bisa pergi dari rumah ini.\n\nTahun ini, keinginannya akan terkabul\u2014meskipun bukan dengan cara yang ia bayangkan.\n\nTepat pada tengah malam, ketika Harry baru saja menelan gigitan pertama kue yang rasanya seperti karton, sebuah suara terdengar dari arah semak-semak di taman depan.\n\nBukan sembarang suara. Ini adalah suara yang tidak mungkin ada di lingkungan normal nomor 4 Privet Drive.\n\nSuara yang sama seperti yang ia dengar di stasiun King's Cross setahun yang lalu.\n\n\u201CHarry... Harry Potter...\u201D`,
      },
    ],
  },
  {
    id: "poetry-heads",
    title: "Poetry in Our Heads",
    author: "Ayu Utami",
    coverImage: "/images/poetry-heads.jpg",
    genres: ["Poetry", "Contemporary", "Literary"],
    excerpt: `Puisi bukan tentang kata-kata indah yang tersusun rapi. Puisi adalah kekacauan yang akhirnya menemukan maknanya\u2014seperti kita, yang akhirnya menemukan alasan untuk tetap hidup.`,
    chapters: [
      {
        title: "I. Kopi Pagi",
        content: `Aku menulis puisi di atas cangkir kopi\nBukan di atas kertas\nKarena kata-kataku lebih suka menguap\nDaripada disimpan\n\n\nAda sesuatu tentang kopi pagi\nYang membuat jujur\nMungkin karena matanya masih setengah terbuka\nAtau karena hari masih belum punya ekspektasi\n\n\nAku dulu berpikir puisi harus bermakna dalam\nHarus punya lapisan yang dikupas seperti bawang\nHarus membuat pembacanya menangis atau berpikir\nAtau keduanya sekaligus\n\n\nTapi sekarang aku tahu\nPuisi hanya butuh kebenaran\nMeski kebenarannya sederhana\nMeski kebenarannya terlalu jujur\n\n\nSeperti: aku rindu\nSeperti: aku takut\nSeperti: aku masih di sini\nMasih mencoba\n\n\nDan itu sudah cukup\nItu sudah merupakan puisi\nYang paling jujur yang pernah aku tulis.`,
      },
    ],
  },
];

export const GENRES: Genre[] = [
  {
    id: "fantasy",
    name: "Fantasy",
    image: "/images/fantasy-genre.jpg",
  },
  {
    id: "horror",
    name: "Horror",
    image: "/images/horror-genre.jpg",
  },
  {
    id: "romance",
    name: "Romance",
    image: "/images/manohara.jpg",
  },
  {
    id: "literary",
    name: "Literary",
    image: "/images/laut-bercerita.jpg",
  },
];
