import { Container, Title, Text } from "@mantine/core";
import Head from "next/head";

export default function Contact() {
  return (
    <Container>
      <Title py="xl">Contact</Title>
      <Head>
        <title>SDA - Contact</title>
      </Head>

      <Text lh={2} size="xl">
        If you'd like to get in touch with us, please email us at{" "}
        <a href="mailto:contact@socdevassociation.org">
          contact@socdevassociation.org
        </a>
        .
        <br />
        We look forward to hearing from you!
      </Text>
    </Container>
  );
}
