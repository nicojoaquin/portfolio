import hardStore from "../assets/projects/hardStore.png"
import storeLu from "../assets/projects/storeLu.png";
import portfolio from "../assets/projects/portfolio.png";
import lgant from "../assets/projects/lgant.png";
import games from "../assets/projects/games.png";

export const projects = [
  {
    src: lgant,
    desc: "Men's clothing store, made with React, using Firebase-Firestore as database.",
    repoLink: "https://github.com/nicojoaquin/L-Gant",
    pageLink: "https://l-gant.vercel.app/",
  },
  {
    src: games,
    desc: "Free games app, fetching external api with redux toolkit. Login system made with MERN.",
    repoLink: "https://github.com/nicojoaquin/games-app-backEnd",
    pageLink: "https://freegamesapp.vercel.app/",
  },
  {
    src: hardStore,
    desc: "Hardware E-Commerce, made with HTML, Sass and JavaScript, fetching fake API REST for rendering.",
    repoLink: "https://github.com/nicojoaquin/hard-store",
    pageLink: "https://hard-store.netlify.app/",
  },
  {
    src: portfolio,
    desc: "Personal page, used as portfolio, made with React and Bootstrap.",
    repoLink: "https://github.com/nicojoaquin/portfolio",
    pageLink: "https://nicolas-joaquin.vercel.app/",
  },
  {
    src: storeLu,
    desc: "Store of pots and plants, made with HTML, Sass and JavaScript, together with another developer.",
    repoLink: "https://github.com/nicojoaquin/Store-Lu",
    pageLink: "https://store-lu.netlify.app/",
  },
];
