import styles from "./styles.module.scss";
import logo from "../../public/logo.png";
import Image from "next/image";

export const Info = () => {
  return (
    <section className={styles.infoSection}>
      <article>
        <h1>o Vida+ é para você!</h1>

        <div className={styles.donorInfo}>
          <p className={styles.donorTitle}>DOADOR</p>
          <p className={styles.donorText}>
            Através do Vida+, você terá a oportunidade de conectar-se
            diretamente com receptores compatíveis, agilizando o processo de
            transplante e proporcionando um impacto imensurável. Sua doação se
            torna o elo vital que une histórias, promovendo a renovação e o
            renascimento.
          </p>
        </div>

        <div className={styles.receptorInfo}>
          <p className={styles.receptorTitle}>RECEPTOR</p>
          <p className={styles.receptorText}>
            Sabemos que cada transplante representa muito mais do que um
            procedimento médico, por isso, através do Vida+, você terá acesso a
            uma rede de doadores comprometidos e compatíveis, além de suporte
            abrangente, cuidado compassivo durante sua jornada de cura.
            Promovemos também a comunicação horizontal com todos os
            profissionais que estarão responsáveis por seu processo, prontos
            para esclarecer qualquer dúvida.
          </p>
        </div>
      </article>

      <article className={styles.causeContainer}>
        <p className={styles.causeTitle}>Problema da doação de órgãos no Brasil</p>

        <div className={styles.causeCardContainer}>
          <div className={styles.causeCard}>
            <p className={styles.cardTitle}>CARÊNCIA DE DOADORES</p>
            <p className={styles.cardText}>Distância</p>
            <p className={styles.cardText}>Recusa familiar</p>
          </div>

          <div className={styles.causeCard}>
            <p className={styles.cardTitle}>Processo Burocrático</p>
            <p className={styles.cardText}>Falta de conhecimento da legislação</p>
            <p className={styles.cardText}>Processo lento</p>
            <p className={styles.cardText}>Baixa notificação de morte encefálica nos hospitais</p>
          </div>

          <div className={styles.causeCard}>
            <p className={styles.cardTitle}>AUSÊNCIA DE INFRAESTRUTURA</p>
            <p className={styles.cardText}>Problemas com transporte</p>
            <p className={styles.cardText}>Manipulação incorreta dos órgãos</p>
            <p className={styles.cardText}>Falta de treinamento</p>
          </div>
        </div>
      </article>

      <article className={styles.solutionContainer}>
        <p className={styles.solutionTitle}>Solução</p>

        <div className={styles.solutionWrapper}>
          <p className={styles.solutionText}>
          O Vida+ é um sistema  que tem como objetivo conectar doadores e receptores de órgãos de forma <em>eficiente, tecnológica, sustentável e humana.</em> A solução utiliza o padrão <em>FHIR</em> para armazenamento e  troca segura de informações entre os usuários, hospitais e órgãos responsáveis pela doação. Nosso sistema segue rigorosamente  a legislação e  é integrado ao sistema do SNT oferecendo acima de tudo credibilidade aos pacientes.
          </p>

          <div className={styles.solutionCardContainer}>
            <div className={styles.solutionCard}>
              <p>Agiliza os processos</p>
            </div>
            <div className={styles.solutionCard}>
              <p>Conscientiza sobre a doação</p>
            </div>
            <div className={styles.solutionCard}>
              <p>Contribui para salvar vidas</p>
            </div>
            <div className={styles.solutionCard}>
              <p>
                Conecta de forma tecnológica, otimizada <em>e segura</em>
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.vidaDayInfo}>
        <p className={styles.vidaInfoTitle}>
          O Brasil é o 2º país que mais realiza transplantes no mundo.
        </p>

        <div className={styles.infoCardContainer}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>+23 mil</p>
            <hr />
            <p className={styles.cardText}>Transplantes realizados em 2021.</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>+54 mil</p>
            <hr />
            <p className={styles.cardText}>na lista de espera</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>+80%</p>
            <hr />
            <p className={styles.cardText}>com Recursos Públicos</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>20%</p>
            <hr />
            <p className={styles.cardText}>de Recursos Privados</p>
          </div>
        </div>
      </article>

      <article className={styles.testmonialsContainer}>
        <p className={styles.testmonialsTitle}>DEPOIMENTOS</p>

        <p>nenhum depoimento encontrado...</p>
      </article>

      <article className={styles.contact}>
        <Image src={logo} width="100%" height="100%" alt="Logotipo" />

        <p>fale conosco</p>
      </article>
    </section>
  );
};
