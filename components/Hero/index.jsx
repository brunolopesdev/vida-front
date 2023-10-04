"use client";

import styles from "./styles.module.scss";
import slide1 from "../../public/hero4.jpg";
import slide2 from "../../public/hero2.jpg";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = ({ mainText, missionText }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const carouselItems = [
        {
          id: 1,
          title: "Slide 1",
          img: slide1,
        },
        {
          id: 2,
          title: "Slide 2",
          img: slide2,
        },
      ];

  return (
    <section className={styles.heroContainer}>
      <article className={styles.heroWrapper}>
        <Slider {...settings}
        // showThumbs={false}
        >
          {carouselItems.map((item, index) => (
            <Image key={index} src={item.img} alt={item.title}  />
          ))}
        </Slider>
      </article>

      <article className={styles.vidaMission}>
        <p className={styles.missionTitle}>MISSÃO</p>
        <div className={styles.missionText}>
          <p>{missionText}</p>
        </div>
      </article>
    </section>
  );
};
