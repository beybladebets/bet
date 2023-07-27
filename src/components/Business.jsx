import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
// Business.jsx
import React, { useEffect, useState } from 'react';

const Business = () => {
  const [twitchScriptLoaded, setTwitchScriptLoaded] = useState(false);

  useEffect(() => {
    if (!twitchScriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://player.twitch.tv/js/embed/v1.js';
      script.async = true;
      script.onload = () => {
        setTwitchScriptLoaded(true);
      };
      document.body.appendChild(script);
    }
  }, [twitchScriptLoaded]);

  useEffect(() => {
    if (twitchScriptLoaded) {
      // Load the Twitch player when the component mounts
      new window.Twitch.Player("twitch-embed", {
        channel: "beyblade_bet",
        parent: "streamernews.example.com", // Replace with your actual domain
        muted: true, // Set this to true if you want the player to be muted initially
      });
    }
  }, [twitchScriptLoaded]);

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Unleash the fury <br className="sm:block hidden" /> of Beyblade Live battles!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Live, Thrilling, Unstoppable!
        </p>

        <div id="twitch-embed"></div>

        {/* The Button component (if needed) */}
        <Button styles={`mt-10`} />
      </div>
    </section>
  );
};

export default Business;