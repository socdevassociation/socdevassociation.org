import { Card, Group, Stack, Text, Title } from "@mantine/core";

import dayjs from "dayjs";
import Link from "next/link";

export default function BlogPostCard({
  post,
}: {
  post: {
    title: string;
    slug: string;
    authorName: string;
    publishedAt: string;
  };
}) {
  return (
    <Card>
      <Link href={`/blog/posts/${encodeURIComponent(post.slug)}`}>
        <Title order={2}>{post.title}</Title>
      </Link>

      <Stack spacing="xs" pt="md">
        <Text weight="bold">{post.authorName}</Text>
        <Text>{dayjs(post.publishedAt).format("MMMM D, YYYY")}</Text>
      </Stack>
    </Card>
  );
}
