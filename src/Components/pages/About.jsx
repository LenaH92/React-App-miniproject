
// import ListItem from "../List_Item"
//import "./App.css"; // Assuming you have a CSS file for styling

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutUsContainer">
      {/* Header Section */}
      <header className="aboutUsHeather">
        <h1>About Us</h1>
        <p>"Hey everyone! Welcome to our online store, where we have everything and more. Looking for something specific? We've got it! Something rare and unique? We've got that too! From super fun gadgets to lifestyle products you didn’t know you needed but now can't live without. And let’s not forget our amazing deals and surprises! Whether you're a tech lover, a fashion fan, or just someone who enjoys a good find, you'll find something here that’ll make you smile. So, why wait? Click and start exploring what our store has for you. I promise you won’t be disappointed! <br /> See you inside!"</p>
      </header>

      {/* Our Story Section */}
      <section className="ourStory">
        <h2>Our Story</h2>
        <p>
          We are a pair of animal-loving girls who are just starting in code. After a half-life of trying to make life work for us, we decided to set up this little shop as if it were working perfectly well, so we could complete the first mini-project of the IronHack's WebDev bootcamp.
        </p>
        <div className="justUs">
          <div id="mariiasDiv">
            <img src="src\img\Mariia.png" alt="Mariia's slack profile picture" />
            <h3>Mariia Tararaeva's story</h3>
            <p>Mariia Tararaeva, of Russian descent, grew up in Siberia, riding horses across the snowy landscapes. Her life changed when she moved to Berlin with her boyfriend, who encouraged her to try something new. One day, she heard about the Ironhack bootcamp and decided to start learning to code. <br />

              At first, coding felt challenging, but with the same determination she used while riding, Mariia ventured into the world of programming. Every day, she is becoming a programmer, solving problems and acquiring new skills. On weekends, she continues riding horses, enjoying the freedom she has always loved. <br /> (totally not made up)</p>
          </div>
          <div id="lenasDiv">
            <img src="src\img\Lena.png" alt="Lena's slack profile picture" />
            <h3>Lena Cortes' story</h3>
            <p>Lena Cortés, born and raised in Valencia, Spain, has always had a passion for exploring new places. Her love for travel has taken her to various corners of the world, where she’s immersed herself in different cultures and experiences. Despite her busy life as an avid traveler, Lena decided to expand her horizons even further by diving into the world of programming. <br />

              Recently, she enrolled in Ironhack’s bootcamp, eager to learn coding and embrace a new challenge. Although it was a big shift from her usual lifestyle, Lena was determined to succeed. The problem-solving aspect of coding intrigued her, and she found herself captivated by the endless possibilities it offered. <br />

              Now, Lena is balancing her passion for travel with her newfound interest in tech, learning to code by day and dreaming of her next adventure by night. She’s excited to see where both her journey as a coder and her travels will take her. <br /> (also totally not made up)</p>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Check</h2>
        <p>
          Explore our latest collection and experience the [Your Brand Name]
          difference. We are committed to making your shopping experience
          exceptional.
        </p>
        <button className="buttonStyling"><Link to={`/`}>
          Shop Now
        </Link>
        </button>
      </section>
    </div>
  );
};

export default About;