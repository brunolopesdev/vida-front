import { Icon } from "@iconify/react";
import { useGlobalContext } from "../../helpers/context";
import styles from "../AppointmentsModal/styles.module.scss";
import {
  AiOutlineHeart as HeartIconEmpty,
  AiFillHeart as HeartIconFill,
} from "react-icons/ai";
import { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export const PractitionersModal = () => {
  const { practitioners, openPract, handleModalPract } = useGlobalContext();
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <section className={styles.appointmentsModal}>
      {openPract && (
        <div className={styles.modalContainer}>
          <i>
            <Icon icon="icomoon-free:cross" onClick={handleModalPract} />
          </i>
          <div className={styles.modalWrapper}>
            <p className={styles.modalTitle}>Seus médicos</p>

            {!practitioners.length && (
              <p style={{ color: "#015249" }}>carregando...</p>
            )}

            {practitioners.map((practitioner, index) => {
              return (
                <div className={styles.appointmentWrapper} key={index}>
                  <div>
                    {!like ? (
                      <HeartIconEmpty
                        color="#015249"
                        size={30}
                        style={{ cursor: "pointer" }}
                        onClick={handleLike}
                      />
                    ) : (
                      <HeartIconFill
                        color="#015249"
                        size={30}
                        style={{ cursor: "pointer" }}
                        onClick={handleLike}
                      />
                    )}
                  </div>
                  <Card className="p-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        {practitioner.resource?.qualification[0].code.text}
                      </p>
                      <small className="text-default-500">
                        {practitioner.resource?.qualification[0].period.start}
                      </small>
                      <h4 className="font-bold text-large">
                        {practitioner.resource?.name[0].given[0] +
                          " " +
                          practitioner.resource?.name[0].family}
                      </h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={35}
                      />
                    </CardBody>
                  <p>
                    Contatos: {practitioner.resource?.telecom[0].value}<br />
                    {practitioner.resource?.telecom[1].value}
                  </p>
                  </Card>
                  <div className="flex justify-center">
                    <ButtonGroup>
                      <Button>Ligar</Button>
                      <Button>
                        <a
                          href={`mailto:${practitioner.resource?.telecom[1].value}`}
                        >
                          Email
                        </a>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
