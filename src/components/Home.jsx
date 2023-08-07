import React from "react";
import vg from "../assests/guy-thinking.png";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>stoicXconcepts</h1>
          <p>Wisdom of the Stoics: Elevate Your Life with Stoic Principles</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Welcome to our website dedicated to Stoic philosophy – the ancient
            wisdom that empowers individuals to find peace, resilience, and
            fulfillment in a world filled with constant change and challenges.
            Rooted in the teachings of Greek and Roman thinkers like Epictetus,
            Seneca, and Marcus Aurelius, Stoicism offers timeless principles
            that guide us in understanding what is within our control and what
            is not. Here, we delve into the core tenets of Stoicism, exploring
            practical strategies to cultivate tranquility of mind, embrace
            adversity with grace, and lead a life of virtue and purpose.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            I am a passionate individual dedicated to spreading the timeless
            wisdom of Stoic philosophy to inspire positive change and personal
            growth in people's lives. My love for this ancient philosophy drives
            me to create a platform where individuals from all walks of life can
            access valuable insights and practical guidance on adopting Stoic
            principles in modern-day challenges. With a deep appreciation for
            the teachings of Stoic thinkers such as Epictetus, Seneca, and
            Marcus Aurelius, I aim to make these profound concepts accessible
            and applicable to contemporary situations. Through thought-provoking
            articles, practical exercises, and engaging discussions, I strive to
            foster a supportive community that embraces Stoic values, empowers
            self-improvement, and encourages the pursuit of a life filled with
            purpose, resilience, and inner peace. As an advocate of Stoic
            wisdom, I invite you to join me and countless other individuals on
            this journey of growth and exploration, uncovering the power within
            ourselves to live a life of virtue and contentment, even amidst
            life's inevitable challenges.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
