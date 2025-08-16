import { ProjectCardProps } from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export const unixToDate = (unix: number): string => {
  const blogDate = new Date(unix * 1000);

  const blogDateDay = blogDate.getDate();
  const dayName = blogDate.toLocaleString('default', { weekday: 'long' });
  const monthName = blogDate.toLocaleString('default', { month: 'long' });
  const year = blogDate.getFullYear();

  return `${dayName}, ${monthName} ${blogDateDay} ${year}`;
};

export const badgeImage: {
  [badge: string]: string;
} = {
  d3: 'https://img.shields.io/badge/d3-%23F9A03C.svg?style=flat-square&logo=d3.js&logoColor=white',
  javascript:
    'https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E',
  'chakra ui':
    'https://img.shields.io/badge/Chakra_UI-%233197C6.svg?style=flat-square&logo=chakra-ui&logoColor=white',
  react:
    'https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB',
  flask:
    'https://img.shields.io/badge/flask-%23000.svg?style=flat-square&logo=flask&logoColor=white',
  azure:
    'https://img.shields.io/badge/azure-%230072C6.svg?style=flat-square&logo=azure-devops&logoColor=white',
  postgre:
    'https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=flat-square&logo=postgresql&logoColor=white',
  express:
    'https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square',
  mongodb:
    'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white',
  docker:
    'https://img.shields.io/badge/docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white',
  aws: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white',
  'next.js':
    'https://img.shields.io/badge/next.js-%23000000.svg?style=flat-square&logo=nextdotjs&logoColor=white',
  'tailwind css':
    'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white',
  vercel:
    'https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white',
  tensorflow:
    'https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat-square&logo=TensorFlow&logoColor=white',
  firebase:
    'https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat-square&logo=firebase',
  scss: 'https://img.shields.io/badge/Sass-%23CC6699.svg?style=flat-square&logo=sass&logoColor=white',
  auth0:
    'https://img.shields.io/badge/auth0-%230B0D17.svg?style=flat-square&logo=auth0&logoColor=white',
  'chrome extension':
    'https://img.shields.io/badge/Chrome_Extensions-%23F1502F.svg?style=flat-square&logo=google-chrome&logoColor=white',
  flutter:
    'https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat-square&logo=Flutter&logoColor=white',
  dart: 'https://img.shields.io/badge/Dart-%230175C2.svg?style=flat-square&logo=dart&logoColor=white',
  'firebase authentication':
    'https://img.shields.io/badge/firebase_auth-%23039BE5.svg?style=flat-square&logo=firebase&logoColor=white',
  firestore:
    'https://img.shields.io/badge/Cloud_Firestore-%234FC3F7.svg?style=flat-square&logo=firebase&logoColor=white',
  'react native':
    'https://img.shields.io/badge/React_Native-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB',
  expo: 'https://img.shields.io/badge/Expo-%23000020.svg?style=flat-square&logo=expo&logoColor=white',
  webpack:
    'https://img.shields.io/badge/Webpack-%238DD6F9.svg?style=flat-square&logo=webpack&logoColor=black',
  python:
    'https://img.shields.io/badge/Python-%2314354C.svg?style=flat-square&logo=python&logoColor=white',
  django:
    'https://img.shields.io/badge/Django-%23092E20.svg?style=flat-square&logo=django&logoColor=white',
  'codeforces api':
    'https://img.shields.io/badge/Codeforces-%23F34428.svg?style=flat-square&logo=Codeforces&logoColor=white',
  java: 'https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=java&logoColor=white',
  opencv:
    'https://img.shields.io/badge/OpenCV-%23white.svg?style=flat-square&logo=OpenCV&logoColor=white',
  tkinter:
    'https://img.shields.io/badge/tkinter-%23white.svg?style=flat-square&logo=python&logoColor=white',
  'material ui':
    'https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&material-ui&logoColor=white',
  typescript:
    'https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white',
  vscode:
    'https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white',
  markdown:
    'https://img.shields.io/badge/markdown-%23000000.svg?style=flat-square&logo=markdown&logoColor=white',
  css: 'https://img.shields.io/badge/CSS-239120?style=flat-square&logo=css3&logoColor=white',
  'vscode extension':
    'https://img.shields.io/badge/VS_Code_Extension-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white',
  linux:
    'https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black',
  vite: 'https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white',
  html: 'https://img.shields.io/badge/HTML-007ACC?style=flat-square&logoColor=white',
  'c++':
    'https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white',
  'lexical analysis':
    'https://img.shields.io/badge/Lexical_Analysis-%234ea94b.svg?style=flat-square',
  cfg: 'https://img.shields.io/badge/CFG-%233197C6.svg?style=flat-square',
  c: 'https://img.shields.io/badge/C%20Programming-black?style=flat-square&logo=c',
  langchain:
    'https://img.shields.io/badge/LangChain-ffffff?logo=langchain&logoColor=green&style=flat-square',
  rag: 'https://img.shields.io/badge/RAG-%23FF6F00.svg?style=flat-square&logo=RAG&logoColor=white',
  'gpt-4': 'https://img.shields.io/badge/GPT4-%230B0D17.svg?style=flat-square',
  javafx: 'https://img.shields.io/badge/JavaFX-%23039BE5.svg?style=flat-square',
  figma:
    'https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white',
  pandas:
    'https://img.shields.io/badge/-Pandas-333333?style=flat-square&logo=pandas',
  plotly:
    'https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=Plotly&logoColor=white',
  tableau:
    'https://img.shields.io/badge/Tableau-%234ea94b.svg?style=flat-square',
  matlab: 'https://img.shields.io/badge/Matlab-%23white.svg?style=flat-square',
  'a/b testing':
    'https://img.shields.io/badge/A/B Testing-%23000000.svg?style=flat-square',
  'ui/ux': 'https://img.shields.io/badge/UI/UX-%23white.svg?style=flat-square',
  assembly:
    'https://img.shields.io/badge/Assembly-%230175C2.svg?style=flat-square&logo=assemblyscript',
};

export const fetchLikes = async () => {
  const res = await fetch('/api/fetchLikes');
  const data = await res.json();
  return data;
};

export const incrementLikesTo = async (increment: number) => {
  const res = await fetch(`/api/incrementLikes?increment=${increment}`);
  const data = await res.json();
  return { data, status: res.status };
};

export const formatNumber = (number: number) => {
  // return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixIndex = 0;

  while (number >= 10000 && suffixIndex < suffixes.length - 1) {
    number /= 10000;
    suffixIndex++;
  }

  return number + suffixes[suffixIndex];
};

export const generateRandomId = () => {
  return (Math.random() * 1000).toString(16).slice(0, 4);
};
