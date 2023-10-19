"use client";

import styles from "./styles.module.scss";
import slide1 from "../../public/hero4.jpg";
import slide2 from "../../public/hero2.jpg";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader } from "@nextui-org/react";

export const Hero = ({ mainText, missionText }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselItems = [
    {
      id: 1,
      title: "Slide 1",
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: slide1,
    },
    {
      id: 2,
      title: "Slide 2",
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: slide2,
    },
  ];

  return (
    <section className={styles.heroContainer}>
      <article className={styles.heroWrapper}>
        <Slider
          {...settings}
          // showThumbs={false}
        >
          {carouselItems.map((item, index) => (
            <Card className="col-span-12 sm:col-span-4 h-[300px]" key={index}>
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-black/60 uppercase font-bold">
                  {item.title}
                </p>
                <h4 className="text-black font-medium text-large">
                  {item.text}
                </h4>
              </CardHeader>
              <Image
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={item.img}
              />
            </Card>
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
