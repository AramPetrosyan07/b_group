import React from "react";
import styles from "./team.module.css";
import pers1 from "../../assets/person1.png";
import pers2 from "../../assets/person2.png";
import pers3 from "../../assets/person3.png";

import Insta from "../../assets/Insta.png";
import Fb from "../../assets/facebook.png";
import Twit from "../../assets/twit.png";

const Team = () => {
  const socialIcons = [Insta, Fb, Twit];
  const personsInfo = [
    {
      img: pers1,
      name: "Giovani Bacardo",
      profession: "Farmer",
      social: [1, 2],
    },
    {
      img: pers2,
      name: "Marianne Loreno",
      profession: "Designer",
      social: [0, 1, 2],
    },
    {
      img: pers3,
      name: "Riga Pelore",
      profession: "Farmer",
      social: [0, 1, 2],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.greenText}>Team</p>
          <p className={styles.title}>Our Organic Experts</p>
          <p className={styles.text}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className={styles.picturesContainer}>
          {personsInfo.map((item, ind) => (
            <div key={ind} className={styles.pictureItem}>
              <img src={item.img} alt="" />
              <div className={styles.pictureTextContainer}>
                <div className={styles.pictureTextContent}>
                  <p className={styles.personName}>{item.name}</p>
                  <div className={styles.picturesTextAndIcons}>
                    <p className={styles.personProfession}>{item.profession}</p>
                    <div className={styles.socialIcons}>
                      {item.social.map((item, ind) => {
                        return <img key={ind} src={socialIcons[item]} alt="" />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
