"use client";
import React from "react";
import Image from "next/image";
import styles from "./Clients.module.css"; // Import custom CSS

const Clients = () => {
  const images = [
    // "/assets/client/1.jpg",
    "/assets/client/2.png",
    "/assets/client/3.png",
    "/assets/client/4.png",
    "/assets/client/5.png",
  ];

  return (
    <div className="">
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {images.map((src, index) => (
            <div className={styles.slide} key={index}>
              <Image alt={`Client ${index}`} src={src} width={300} height={200} />
            </div>
          ))}
          {images.map((src, index) => (
            <div className={styles.slide} key={`copy-${index}`}>
              <Image alt={`Client Copy ${index}`} src={src} width={300} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
