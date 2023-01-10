import {
  AspectRatio,
  BackgroundImage,
  Box,
  Center,
  Container,
  Title,
  Image,
  createStyles,
  Text,
} from "@mantine/core";

import { createClient, groq } from "next-sanity";

export default function Home({ posts }) {
  const useStyles = createStyles((theme) => ({
    imageTextOverlayContainer: {
      position: "relative",
      textAlign: "center",
      color: "white",

      [theme.fn.smallerThan("sm")]: {
        width: "100%",
      },
      [theme.fn.largerThan("sm")]: {
        width: "500px",
        height: "500px",
      },
    },
    overlayImage: {
      filter: "opacity(20%)",
      width: "1024px",
      height: "auto",
    },

    centeredText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.25rem",
      fontWeight: "bold",
      width: "100%",
    },
  }));

  const { classes, cx } = useStyles();

  return (
    <Container py="xl">
      {/* <span className="text-4xl font-bold underline">SDA Next.js Template</span> */}

      <Center>
        <div className={classes.imageTextOverlayContainer}>
          <Image
            src="/sda-fancy-logo.png"
            alt=""
            className={classes.overlayImage}
          ></Image>
          <Text className={classes.centeredText}>
            Socialist Developers Association
          </Text>
        </div>
      </Center>
    </Container>
  );
}

export async function getStaticProps() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-01-09",
    useCdn: false,
  });

  const posts = await client.fetch(groq`*[_type == "post"[0..2]]`);

  console.log("posts", posts);

  return {
    props: {
      posts,
    },
  };
}
