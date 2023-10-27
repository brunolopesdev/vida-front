import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

import slide1 from "../../public/hero4.jpg";
import slide2 from "../../public/hero2.jpg";
import slide3 from "../../public/hero5.jpg";
import slide4 from "../../public/hero6.jpg";

export default function BlogPosts() {
  const blogPosts = [
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
    <section className="flex flex-wrap gap-4 p-6 justify-center align-center">
      {blogPosts.map((post, index) => (
        <Card className="max-w-[400px]" key={index}>
          <CardHeader className="flex gap-3">
            <Image
              alt={post.title}
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{post.title}</p>
              <p className="text-small text-default-500">{post.date}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{post.text}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href={post.link}>
              Ler mais...
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
