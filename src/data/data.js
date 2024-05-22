const musicList = [
  {
    name: "Still",
    auther: "Dr. Dre",
    src: "https://dl01.dtmp3.pw/mp3/56461.mp3",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/f5/69/aa/f569aab4-522c-bae7-9771-51e644d237f3/source/512x512bb.jpg",
    mobileImg:
      "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/f5/69/aa/f569aab4-522c-bae7-9771-51e644d237f3/source/160x160bb.webp",
    altImg: "music albom",
    id: 0,
  },
  {
    name: "Dream On",
    auther: "Aerosmith",
    src: "https://dl01.dtmp3.pw/mp3/220.mp3",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/e2/87/d9/e287d987-7b92-7749-737f-b5b8a6913f88/22UM1IM38560.rgb.jpg/512x512bb.jpg",
    mobileImg:
      "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/e2/87/d9/e287d987-7b92-7749-737f-b5b8a6913f88/22UM1IM38560.rgb.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 1,
  },
  {
    name: "Somebody That I Used To Know",
    auther: "Gotye, Kimbra",
    src: "https://dl01.dtmp3.pw/mp3/3297.mp3",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/6a/a0/82/6aa0822e-f9d1-1181-5bce-6c7cedbf91f5/11UMGIM40069.rgb.jpg/512x512bb.jpg",
    mobileImg:
      "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/6a/a0/82/6aa0822e-f9d1-1181-5bce-6c7cedbf91f5/11UMGIM40069.rgb.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 2,
  },
  {
    name: "Save Your Tears",
    auther: "The Weeknd",
    src: "https://dl03.dtmp3.pw/mp3/9162.mp3",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/45/eb/99/45eb99cf-366c-ec08-3983-d9645948c76a/source/512x512bb.jpg",
    mobileImg:
      "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/45/eb/99/45eb99cf-366c-ec08-3983-d9645948c76a/source/160x160bb.webp",
    altImg: "music albom",
    id: 3,
  },
  {
    name: "Pedro",
    auther: "Jaxomy, Agatino Romero, Raffaella Carrà",
    src: "https://dl03.dtmp3.pw/mp3/357561.mp3",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e7/d4/ee/e7d4eed2-44e5-2b08-9f68-d0c34609d098/196871959841.jpg/512x512bb.jpg",
    mobileImg:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e7/d4/ee/e7d4eed2-44e5-2b08-9f68-d0c34609d098/196871959841.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 4,
  },
  {
    name: "Можно я с тобой",
    auther: "AP$ENT",
    src: "https://dl03.dtmp3.pw/mp3/327534.mp3",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/86/83/e3/8683e336-c8e6-e58d-9f18-dcc278bca334/859763174271_cover.jpg/512x512bb.jpg",
    mobileImg:
      "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/86/83/e3/8683e336-c8e6-e58d-9f18-dcc278bca334/859763174271_cover.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 5,
  },
  {
    name: "NEON BLADE (Slowed + Reverb)",
    auther: "MoonDeity",
    src: "https://dl03.dtmp3.pw/mp3/212406.mp3",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/48/ca/ad/48caad22-0533-feeb-c68c-3616758e8404/196925188425.jpg/512x512bb.jpg",
    mobileImg:
      "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/48/ca/ad/48caad22-0533-feeb-c68c-3616758e8404/196925188425.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 6,
  },
  {
    name: "Hotline",
    auther: "Kaito Shoma ",
    src: "https://dl03.dtmp3.pw/mp3/70558.mp3",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/fe/bd/29/febd29b9-320b-9c04-c7a4-5eff43b17124/source/512x512bb.jpg",
    mobileImg:
      "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/fe/bd/29/febd29b9-320b-9c04-c7a4-5eff43b17124/source/160x160bb.webp",
    altImg: "music albom",
    id: 7,
  },
];

const slideMusicData = [
  {
    name: "O'ZBEKISTONLIK",
    auther: "KONSTA",
    src: "https://file.yoshlar.com/mp3/2023/Konsta-Ozbekistonlik.mp3",
    img: "https://yoshlar.com/_ld/175/38423059.jpg",
    mobileImg: "",
    altImg: "music albom",
    id: 0,
  },
  {
    name: "METAMORPHOSIS (Sped Up)",
    auther: "INTERWORLD",
    src: "https://dl03.dtmp3.pw/mp3/246716.mp3",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/60/d7/71/60d77112-6b6b-57a6-2be4-f134b3789fd2/196925259064.jpg/512x512bb.jpg",
    mobileImg:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/60/d7/71/60d77112-6b6b-57a6-2be4-f134b3789fd2/196925259064.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 1,
  },
  {
    name: "What is Love",
    auther: "Haddaway  ",
    src: "https://dl6.ru-music.cc/mp3/492.mp3",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a3/13/6d/a3136d3a-e9a0-6450-f6d4-8b758b0d30dd/source/512x512bb.jpg",
    mobileImg:
      "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a3/13/6d/a3136d3a-e9a0-6450-f6d4-8b758b0d30dd/source/160x160bb.webp",
    altImg: "music albom",
    id: 2,
  },
  {
    name: "Месяц (BY)",
    auther: "Palina",
    src: "https://dl03.dtmp3.pw/mp3/119545.mp3",
    img: "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/84/f8/4a/84f84a7a-9b21-98d8-e191-7d1dcc3f6a60/cover.jpg/512x512bb.jpg",
    mobileImg:
      "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/84/f8/4a/84f84a7a-9b21-98d8-e191-7d1dcc3f6a60/cover.jpg/160x160bb.webp",
    altImg: "music albom",
    id: 3,
  },
  {
    name: "Gimme! Gimme! Gimme!",
    auther: "ABBA",
    src: "https://dl01.dtmp3.pw/mp3/1998.mp3",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c5/a0/61/c5a061a8-0df2-490d-e6f3-90658203ffdc/source/512x512bb.jpg",
    mobileImg:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c5/a0/61/c5a061a8-0df2-490d-e6f3-90658203ffdc/source/160x160bb.webp",
    altImg: "music albom",
    id: 4,
  },
  {
    name: "Get Lucky",
    auther: "Daft Punk, Pharrell Williams",
    src: "https://dl03.dtmp3.pw/mp3/26321.mp3",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/06/d4/8d/06d48d34-b739-f033-d848-c63f918bb2fa/source/512x512bb.jpg",
    mobileImg:
      "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/06/d4/8d/06d48d34-b739-f033-d848-c63f918bb2fa/source/160x160bb.webp",
    altImg: "music albom",
    id: 5,
  },
];

export { slideMusicData, musicList };
