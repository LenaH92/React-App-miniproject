
// import ListItem from "../List_Item"
import "./App.css"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Your go-to destination for [products you sell].</p>
      </header>

      {/* Our Story Section */}
      <section className="our-story">
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
        <button onClick={() => window.location.href = "/ListItem"}>
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;