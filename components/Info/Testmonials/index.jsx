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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
            animi quas quidem quia tempora alias aut dolore voluptates,
            perferendis nemo atque suscipit deleniti perspiciatis id tenetur
            obcaecati natus ipsum.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
            animi quas quidem quia tempora alias aut dolore voluptates,
            perferendis nemo atque suscipit deleniti perspiciatis id tenetur
            obcaecati natus ipsum.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
