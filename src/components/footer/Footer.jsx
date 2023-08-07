import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import one from "../../../public/1.png";
import two from "../../../public/2.png";
import three from "../../../public/3.png";
import four from "../../../public/4.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src={one}
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook Account"
          placeholder="blur"
          priority
        />
        <Image
          src={two}
          width={15}
          height={15}
          className={styles.icon}
          alt=""
          placeholder="blur"
          priority
        />
        <Image
          src={three}
          width={15}
          height={15}
          className={styles.icon}
          alt=""
          placeholder="blur"
          priority
        />
        <Image
          src={four}
          width={15}
          height={15}
          className={styles.icon}
          alt=""
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
