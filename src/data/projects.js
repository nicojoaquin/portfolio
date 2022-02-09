import hardStore from "../assets/projects/hardStore.png"
import phone from "../assets/projects/phone.png";
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
    src: phone,
    desc: "Phone E-commerce, made in collaboration with another developer, using React with Context API and MERN for admin dashboard",
    repoLink: "https://github.com/kevinefraim/phone-store",
    pageLink: "https://kevinefraim.github.io/phone-store",
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
];
