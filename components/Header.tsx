import {
  Header as MantineHeader,
  Image,
  Flex,
  Burger,
  createStyles,
  Group,
  Transition,
  Paper,
  Container,
  Title,
  Grid,
} from "@mantine/core";
import { useRouter } from "next/router";
import { Route, routes } from "../cfg/routes";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

export default function SDAHeader() {
  const HEADER_HEIGHT = 60;
  const router = useRouter();
  let currentRoute = undefined as Route | undefined;

  const navigation = routes.map((r) => {
    r.current = r.href === router.asPath;
    if (r.current) currentRoute = r;
    return r;
  });

  const [opened, { toggle, close }] = useDisclosure(false);

  const useStyles = createStyles((theme) => ({
    root: {
      position: "relative",
      zIndex: 1,
    },
    dropdown: {
      position: "absolute",
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: "hidden",

      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
    links: {
      gridColumn: "3",
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
    burger: {
      alignSelf: "end",
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.lg,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },

      [theme.fn.smallerThan("sm")]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).color,
      },
    },
    headerTitle: {
      paddingLeft: "10px",
      [theme.fn.smallerThan("sm")]: {
        display: "none",
        width: "0px",
      },
    },
    headerLogo: {
      // [theme.fn.smallerThan("sm")]: {
      //   display: "none",
      // },
      margin: "auto",
    },
    headerLogoContainer: {
      gridColumn: "1",
      alignSelf: "center",
      [theme.fn.smallerThan("sm")]: {
        gridColumn: "2",
      },
    },
    headerContent: {
      display: "grid",
      width: "100%",
      alignItems: "center",
      [theme.fn.smallerThan("sm")]: {
        gridTemplateColumns: "50px 1fr 50px",
      },
      [theme.fn.largerThan("sm")]: {
        gridTemplateColumns: "50px 1fr auto",
      },
    },
  }));

  const { classes, cx } = useStyles();

  const links = navigation.map((r) => (
    <Link
      href={r.href}
      key={r.href}
      className={cx(classes.link, {
        [classes.linkActive]: r.current,
      })}
      onClick={close}
    >
      {r.name}
    </Link>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        {/* <Grid>
          <Grid.Col span={2}>
            <Image
              src="/sda-logo.svg"
              alt=""
              height={50}
              width={50}
              className={classes.headerLogo}
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <Title order={5}>Socialist Developers Association</Title>
          </Grid.Col>
        </Grid> */}
        <div className={classes.headerContent}>
          <div className={classes.headerLogoContainer}>
            <Image
              src="/sda-logo.svg"
              alt=""
              height={50}
              width={50}
              className={classes.headerLogo}
            />
          </div>
          <Title className={classes.headerTitle} order={3}>
            {/* SDA */}
          </Title>
          <Group className={classes.links}>{links}</Group>

          <Burger
            opened={opened}
            onClick={toggle}
            size="lg"
            className={classes.burger}
          ></Burger>
        </div>
        {/* <Flex align="center" justify="start" gap="sm" my="sm" h={HEADER_HEIGHT}>
          <div className={classes.headerLogoContainer}>
            <Image
              src="/sda-logo.svg"
              alt=""
              height={50}
              width={50}
              className={classes.headerLogo}
            />
          </div>


        </Flex> */}

        <Transition transition="pop-top-right" mounted={opened} duration={200}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {links}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
