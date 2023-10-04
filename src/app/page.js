"use client";
import { Hero } from "../../components/Hero";
import { Info } from "../../components/Info";

export default function Home() {
  return (
    <>
      <Hero
        mainText="Juntos, podemos transformar a espera em oportunidade !"
        missionText="Nossa missão é conectar doadores e receptores de órgãos de forma eficiente, tecnológica, sustentável e humana."
      />
      <Info />
    </>
  );
}
