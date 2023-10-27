"use client";

import styles from "./styles.module.scss";
import slide1 from "../../public/hero4.jpg";
import slide2 from "../../public/hero2.jpg";
import slide3 from "../../public/hero5.jpg";
import slide4 from "../../public/hero6.jpg";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";

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
      title:
        "Brasil bate recorde de doadores de órgãos no primeiro semestre do ano",
      text: "Com mais de 1,9 mil doadores efetivos, país realizou mais de 4,3 mil transplantes entre janeiro e junho, 16% a mais que no mesmo período de 2022",
      img: slide1,
      link: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2023/agosto/brasil-bate-recorde-de-doadores-de-orgaos-no-primeiro-semestre-do-ano'
    },
    {
      id: 2,
      title: "PL prevê doação presumida de órgãos no Brasil; CFM é favorável",
      text: "Conforme projeto, todos os brasileiros seriam considerados doadores, salvo exceções.",
      img: slide2,
      link: 'https://www.migalhas.com.br/quentes/394251/pl-preve-doacao-presumida-de-orgaos-no-brasil-cfm-e-favoravel'
    },
    {
      id: 3,
      title: "Dia Nacional da Doação de Órgãos: conscientização e desafios",
      text: "A doação de órgãos é um gesto de solidariedade que pode mudar vidas e oferecer esperança a quem mais precisa",
      img: slide3,
      link: 'https://www.tre-pr.jus.br/comunicacao/noticias/2023/Setembro/dia-nacional-da-doacao-de-orgaos-conscientizacao-e-desafios'
    },
    {
      id: 4,
      title: "Número de doação de órgãos alcança recorde histórico no primeiro semestre de 2023",
      text: "Segundo o Sistema Nacional de Transplantes (SNT), o Brasil registrou mais de 1,9 mil doadores efetivos de órgãos e realizou mais de 4,3 mil transplantes entre janeiro e junho",
      img: slide4,
      link: 'https://brasil61.com/n/numero-de-doacao-de-orgaos-alcanca-recorde-historico-no-primeiro-semestre-de-2023-bras239441'
    },
    {
      id: 2,
      title: "PL prevê doação presumida de órgãos no Brasil; CFM é favorável",
      text: "Conforme projeto, todos os brasileiros seriam considerados doadores, salvo exceções.",
      img: slide2,
      link: 'https://www.migalhas.com.br/quentes/394251/pl-preve-doacao-presumida-de-orgaos-no-brasil-cfm-e-favoravel'
    },
  ];

  return (
    <section className={styles.heroContainer}>
      <article className={styles.heroWrapper}>
        <Slider
          {...settings}
        >
          {carouselItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    {item.title}
                  </p>
                  <h4 className="text-white font-medium text-large">
                    {item.text}
                  </h4>
                </CardHeader>
                <Image
                  alt={item.title}
                  className="z-0 w-full h-full object-cover"
                  src={item.img}
                />
              </Card>
            </Link>
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
