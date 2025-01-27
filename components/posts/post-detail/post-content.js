import Image from "next/image";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

import ReactMarkDown from "react-markdown";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs1",
//   title: "Getting started with Next.js",
//   image: "getting-started-nextjs.png",
//   excerpt:
//     "NextJS is a React framework for making fullstack React applications.",
//   date: "2025-01-24",
//   content: "# This is a first post",
// };

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkDown components={customRenderers}>{post.content}</ReactMarkDown>
    </article>
  );
}

export default PostContent;
