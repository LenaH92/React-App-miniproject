
// import ListItem from "../List_Item"
//import "./App.css"; // Assuming you have a CSS file for styling

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutUsContainer">
      {/* Header Section */}
      <header className="aboutUsHeather">
        <h1>About Us</h1>
        <p>Your go-to destination for [products you sell].</p>
      </header>

      {/* Our Story Section */}
      <section className="ourStory">
        <h2>Our Story</h2>
        <p>
          Founded
        </p>
      </section>


      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Check</h2>
        <p>
          Explore our latest collection and experience the [Your Brand Name]
          difference. We are committed to making your shopping experience
          exceptional.
        </p>
        <button><Link to={`/`}>
          Shop Now
        </Link>
        </button>
      </section>
    </div>
  );
};

export default About;