import { groq } from "next-sanity";
import client from "../../../lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Container, Title, Text, Divider } from "@mantine/core";
import Head from "next/head";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  return (
    <Container>
      {router.isFallback && <div>Loading...</div>}

      {post && (
        <>
          <Head>
            <title>{router.isFallback ? post.title : "Loading..."}</title>
          </Head>
          <Title py="xl">{post.title}</Title>
          <Text size="sm">{post.authorName}</Text>
          <Text size="sm">
            {dayjs(post.publishedAt).format("MMMM D, YYYY")}
          </Text>
          <Divider mt="md"></Divider>
          <PortableText value={post.body}></PortableText>
        </>
      )}
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug = "" } = params;

  console.log("slug", slug);

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
