import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import React, { useEffect } from "react";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);



const Business = () =>  (
  
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unleash the fury <br className="sm:block hidden" /> of Beyblade Live battles!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Live, Thrilling, Unstoppable!
      </p>
      <iframe src="https://player.twitch.tv/?channel=marblesracebet&parent=www.example.com" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>

      <Button styles={`mt-10`} />
    </div>
    
  </section>
);

export default Business;
