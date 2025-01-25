import classes from "./post-content.module.css";
import PostHeader from "./post-header";

import ReactMarkDown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs1",
  title: "Getting started with Next.js",
  image: "getting-started-nextjs.png",
  excerpt:
    "NextJS is a React framework for making fullstack React applications.",
  date: "2025-01-24",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkDown>{DUMMY_POST.content}</ReactMarkDown>
    </article>
  );
}

export default PostContent;
