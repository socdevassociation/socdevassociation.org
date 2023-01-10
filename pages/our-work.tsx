import { Container, Title, Text } from "@mantine/core";
import Head from "next/head";

export default function OurWork() {
  return (
    <Container>
      <Head>
        <title>SDA - Our Work</title>
      </Head>
      <Title py="xl">Our Work</Title>
      <Text lh={2} size="xl" pb="xl">
        A large part of our work is providing web services at no cost to other
        non-profit organizations. By leveraging cutting-edge technology and a
        team of talented, hard-working developers, we're able to design and host
        websites that are fast, accessible, and secure, at minimal cost to
        ourselves and no cost to the client.
      </Text>
      <Text lh={2} size="xl">
        Are you an organization in need of web presence? Contact us to see what
        the SDA can do for you. We'd love to work with you.
      </Text>
    </Container>
  );
}
