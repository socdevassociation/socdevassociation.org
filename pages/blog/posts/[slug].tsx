import { groq } from "next-sanity";
import client from "../../../lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Container, Title, Text, Divider } from "@mantine/core";
import Head from "next/head";
import dayjs from "dayjs";

export default function Post({ post }) {
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Title py="xl">{post.title}</Title>
      <Text size="sm">{post.authorName}</Text>
      <Text size="sm">{dayjs(post.publishedAt).format("MMMM D, YYYY")}</Text>
      <Divider mt="md"></Divider>
      <PortableText value={post.body}></PortableText>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "post"]`);

  return {
    paths: paths.map((post: { slug: { current: any } }) => ({
      params: { slug: post.slug.current },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug = "" } = params;

  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        ...,
        "authorName": author->name,
    }`,
    {
      slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}
