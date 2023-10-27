import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function Testmonials() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <section className="flex gap-10">
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @zoeylang
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
          Minha vida mudou para sempre quando meu filho precisou de um transplante de rim. Ver a luta dele contra a doença e a esperança de um novo órgão nos fez perceber a importância da doação de órgãos. Quando finalmente recebemos a notícia de que havia um doador compatível, foi um momento de puro milagre. A generosidade de um desconhecido salvou a vida do meu filho, e somos eternamente gratos por essa dádiva. A doação de órgãos é um ato de amor e solidariedade que pode transformar vidas, e hoje estamos aqui para apoiar essa causa com todo nosso coração.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @zoeylang
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
          Há alguns anos, fui diagnosticado com uma doença grave que afetou o meu fígado. Minha saúde estava se deteriorando rapidamente, e a única opção que me restava era um transplante de fígado. Eu estava perdendo a esperança, até que um dia, recebi a notícia de que um doador havia sido encontrado. Foi um milagre que mudou minha vida. A doação de órgãos não apenas me deu uma segunda chance, mas também me mostrou o incrível poder da compaixão humana. Eu sou profundamente grato ao doador e à sua família por terem feito essa escolha incrível. Hoje, estou saudável e aproveitando cada momento da vida, e tudo isso é graças à doação de órgãos. É importante que todos considerem se tornar doadores e compartilhem o presente da vida com aqueles que precisam.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
