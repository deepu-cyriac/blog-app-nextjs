import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for making fullstack React applications.",
    date: "2025-01-24",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for making fullstack React applications.",
    date: "2025-01-24",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for making fullstack React applications.",
    date: "2025-01-24",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
