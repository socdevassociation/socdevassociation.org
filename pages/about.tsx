import { Container, Title, Text, Space } from "@mantine/core";

export default function PageTwo() {
  return (
    <Container>
      <Title py="xl">About Us</Title>

      <Text lh={2} size="xl">
        The Socialist Developers Association is a not-for-profit organization
        made up of leftist tech workers united under the common goal of using
        technology to further socialist ideals, as well as using socialist
        ideals to advocate for reform within the tech industry. We stand for the
        principles of equity, solidarity, cooperation, and above all, democracy.
      </Text>
    </Container>
  );
}
