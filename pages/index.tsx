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

export default function Home() {
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
      fontSize: "2rem",
      fontWeight: "bold",
      width: "100%",
    },
  }));

  const { classes, cx } = useStyles();

  return (
    <Container py="xl">
      {/* <span className="text-4xl font-bold underline">SDA Next.js Template</span> */}

      <Center>
        {/* <AspectRatio ratio={1 / 1} w="50%">
          <BackgroundImage src="/sda-logo.svg">
            <Center>
              <Title py="xl" order={2}>
                Socialist Developers Association
              </Title>
            </Center>
          </BackgroundImage>
        </AspectRatio> */}
        {/* <Image src="/sda-logo.svg" maw={512} alt="">
          <Center>
            <Title py="xl" order={2}>
              SDA
            </Title>
          </Center>
        </Image> */}
        <div className={classes.imageTextOverlayContainer}>
          <Image
            src="/sda-logo.svg"
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
