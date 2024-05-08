import { Link } from "react-router-dom";
import bgImg from "../assets/marvel-about-bg.png";

const About = () => {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" alt="Marvel About" />
      <div className="about-page-content">
        <h1>Explore the Marvel Universe</h1>
        <p>
          Welcome to the Marvel Universe, where heroes, villains, and
          extraordinary beings collide in epic battles that shape the fate of
          the cosmos. Dive into a world of limitless imagination and
          breathtaking adventures.
        </p>
        <p>
          Marvel Comics, founded in 1939, has been the bedrock of pop culture
          for generations, captivating audiences with iconic characters like
          Spider-Man, Iron Man, Captain America, and the Avengers.
        </p>
        <p>
          Our mission is to celebrate the rich history and boundless creativity
          of Marvel by providing fans with access to a treasure trove of
          characters, stories, and artistry that continue to inspire and
          entertain audiences worldwide.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>Embark on Your Marvel Journey</h2>
        <Link className="link-button" to="/">
          Discover Marvel Heroes
        </Link>
      </div>
    </div>
  );
};

export default About;
