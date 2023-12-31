import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>

      <div>
        <div className="home2">
          <img src={vg} alt="Graphics" />
          <div>
            <p>
              We are one and only solutions to the tech problems you face
              everyday.Our aim is to increase the problem solving ability in
              children.
            </p>
          </div>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are:</h1>
          <p>
            At TechyStar, we are more than just a tech company; we are a team of
            passionate individuals dedicated to making a positive impact in the
            digital world. As a company driven by values, we believe in
            transparency, integrity, and a customer-centric approach. TechyStar
            is not just about fixing problems; it's about envisioning a future
            where technology becomes an enabler for progress and positive
            change.Beyond the lines of code and the pixels on the screen,
            TechyStar is a community. A community that fosters learning, growth,
            and collaboration. We believe in the power of knowledge sharing and
            continuous improvement, both within our team and with our clients.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
