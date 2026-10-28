// =====================================================
// CONFIG — ubah gambar & isi halaman cukup di file ini
// Semua gambar ada di folder assets/images/
// Cara ganti gambar: taruh file baru di folder itu,
// lalu ganti nama file-nya di bawah (atau timpa file lama
// dengan nama yang sama).
// =====================================================

// Gambar halaman Home + halaman About
const IMAGES = {
  hero:       "assets/images/hero.jpg",        // gambar hero di Home
  projects:   "assets/images/projects.jpg",    // cover track Projects
  skills:     "assets/images/skills.jpg",      // cover track Skills
  experience: "assets/images/experience.jpg",  // cover track Experience
  about:      "assets/images/about.jpg"        // foto di halaman About
};

// Halaman EXPERIENCE (urutan = urutan tampil, gambar selang-seling)
const EXPERIENCE = [
  {
    img: "assets/images/learning.jpg",
    title: "Learning & Exploring",
    tags: "Web Development / Self Learning",
    text: "Mulai tertarik dengan dunia pemrograman dan web development. Dari coba-coba, belajar secara mandiri, sampai akhirnya bisa bikin project sederhana sendiri.",
    year: "2026 - sekarang"
  },
  {
    img: "assets/images/collaboration.jpg",
    title: "Project & Collaboration",
    tags: "Personal Projects / Community",
    text: "Mengembangkan beberapa project, termasuk website portofolio dan fanbase. Belajar kerja tim, komunikasi, dan mengelola ide jadi sesuatu yang bisa dimanfaatkan.",
    year: "2026 - sekarang"
  }
];

// Halaman SKILLS (tiap group = satu baris kartu yang bisa digeser)
const SKILLS = [
  {
    group: "Coding", tag: "Web, programming, tools",
    items: [
      { name: "HTML",         desc: "Structure the web.",                 img: "assets/images/html.jpg" },
      { name: "CSS",          desc: "Style and layout.",                  img: "assets/images/css.jpg" },
      { name: "JavaScript",   desc: "Make it interactive.",               img: "assets/images/javascript.jpg" },
      { name: "Python",       desc: "Automate and explore.",              img: "assets/images/python.jpg" },
      { name: "Git & GitHub", desc: "Version control & collaboration.",   img: "assets/images/git.jpg" }
    ]
  },
  {
    group: "Musik", tag: "Drum, genre, curation",
    items: [
      { name: "Drum",               desc: "Rhythm in my head.",           img: "assets/images/drum.jpg" },
      { name: "Music Appreciation", desc: "More than just listening.",    img: "assets/images/music_apre.jpg" },
      { name: "Genre Knowledge",    desc: "any genre.",       img: "assets/images/genre.jpg" },
     
    ]
  },
  {
    group: "Others", tag: "Design, thinking, lifestyle",
    items: [
      { name: "Visual Direction",          desc: "Build the right atmosphere.",    img: "assets/images/directions.jpg" },
      { name: "Creative Thinking",         desc: "Ideas into something real.",     img: "assets/images/creative.jpg" },
      { name: "Community & Communication", desc: "Connect and collaborate.",       img: "assets/images/comunication.jpg" },
      { name: "Problem Solving",           desc: "Find better ways.",              img: "assets/images/problem.jpg" },
      { name: "Self Learning",             desc: "Always in progress.",            img: "assets/images/self.jpg" }
    ]
  }
];

// Halaman PROJECTS (tambah / hapus objek sesuka kamu)
const PROJECTS = [
  { name: "Portfolio Website", stack: "HTML, CSS, JavaScript", img: "assets/images/portofolio.jpg", link: "#" },
  { name: "TaskFlows Website", stack: "HTML, CSS, JavaScript", img: "assets/images/taskflows.jpg",   link: "https://habzshifterid-svg.github.io/webprib/" },
  { name: "Game Website", stack: "HTML, CSS, JavaScript", img: "assets/images/game.jpg", link: "https://habzshifterid-svg.github.io/webguwah/" }
];
