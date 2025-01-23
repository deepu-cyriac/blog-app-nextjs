import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dev-logo.png"
          alt="An image of developer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Deepu</h1>
      <p>I blog about web development using React and Angular.</p>
    </section>
  );
}

export default Hero;
