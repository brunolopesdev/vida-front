import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

export default function BlogPosts() {
  const blogPosts = [
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi est non, ducimus ipsam eum explicabo, impedit quaerat eius autem earum quam quisquam! Neque ullam natus itaque. Sed, porro culpa.",
      date: "2021-09-21",
    },
  ];
  return (
    <section className="flex flex-wrap gap-4 p-6 justify-center align-center">
      {blogPosts.map((post) => (
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
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
            <Link isExternal showAnchorIcon href="#">
              Ler mais...
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
