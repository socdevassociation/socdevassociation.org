import {
  Footer as MantineFooter,
  Group,
  Center,
  Text,
  Stack,
  Flex,
  SimpleGrid,
  createStyles,
  Space,
} from "@mantine/core";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons";
import Link from "next/link";

export default function SDAFooter() {
  const useStyles = createStyles((theme) => ({
    link: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    },
  }));

  const { classes } = useStyles();

  return (
    <MantineFooter height={120} p="md" fixed={false}>
      <Flex justify="end" align="center" direction="column" h="100%">
        <Flex justify="space-between" gap={50}>
          <Link href="https://twitter.com/socdevassoc" className={classes.link}>
            <IconBrandTwitter></IconBrandTwitter>
          </Link>
          <Link
            href="https://github.com/socdevassociation"
            className={classes.link}
          >
            <IconBrandGithub></IconBrandGithub>
          </Link>
        </Flex>
        <Space h="md"></Space>
        <Center>© 2023, Socialist Developers Association</Center>
      </Flex>
    </MantineFooter>
  );
}
