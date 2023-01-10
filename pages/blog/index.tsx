import { groq } from "next-sanity";
import BlogPostCard from "../../components/BlogPostCard";
import client from "../../lib/sanity/client";
import { Container, SimpleGrid, Title } from "@mantine/core";
import Head from "next/head";

export default function Blog({ posts }) {
  return (
    <Container>
      <Head>
        <title>Blog</title>
      </Head>
      <Title py="xl">Blog</Title>

      <SimpleGrid
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[
          { minWidth: "sm", cols: 1 },
          {
            minWidth: "md",
            cols: 2,
          },
        ]}
      >
        {posts.map((post) => (
          <BlogPostCard post={post} key={post.slug}></BlogPostCard>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(
    groq`*[_type == "post"]{
        title,
        'slug': slug.current,
        "authorName": author->name,
        publishedAt
        }`
  );

  return {
    props: {
      posts,
    },
  };
}
