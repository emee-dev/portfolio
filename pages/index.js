import { Box, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Avatar } from "../components/Avatar";
import { Experience } from "../components/Experience";
import { Grid } from "../components/Grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emee - FullStack Developer</title>
      </Head>
      {/* <Cursor /> */}

      <Box py="115px" px={4} maxWidth={500} mx="auto">
        <Grid
          fluid
          templateColumns="repeat(4, 1fr)"
          mb={10}
          alignItems="center"
        >
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Emmanuel Ajike
              </Heading>
              <Text>Backend-oriented Fullstack Developer</Text>
              <Link
                color="white"
                opacity={0.5}
                href="https://github.com/emee-dev"
              >
                emee-dev
              </Link>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            Hello, I'm Emmanuel. I envy beautiful dynamic, creative products
            which lead me to create, and publish even better products. I am
            focused on developing intuitive experiences for my users. I love
            indie hacking.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>

          <Experience
            href="https://hacked.treblle.com/"
            side="2023"
            title="Treblle SDK – Hacktoberfest"
            desc="Accounting for security, load balancing and data masking. I built an SDK that captures incoming API requests and responses, and sends that to Treblle servers."
            stack="Express Js • Typescript • Nextra docs"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Side Projects
          </Heading>

          <Experience
            href="https://github.com/emee-dev/pinpanda"
            image="/offline.gif"
            side="Ongoing"
            title="Postman Alternative"
            desc="Readable, diffable, local first. File based request collection. A free and simple and offline based Http client."
            stack="Rust • Tauri • Turborepo • file based • fully offline"
          />

          <Experience
            image="/tamiko.svg"
            side="Paused"
            title="Kinde CLI"
            desc="Interactive, easy to use CLI tool to manage your dashboard, and projects right in your terminal."
            stack="Commander Js • Typescript • Kinde API"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          {/* <Experience
						side="Github"
						title="@/"
						href="https://github.com/___"
						mb={4}
					/>
					<Experience
						side="Etherscan"
						title="bonhomme.eth"
						href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
						mb={4}
					/>
					<Experience
						side="Foundation"
						title="@bonhomme"
						href="https://foundation.app/@bonhomme?tab=owned"
						mb={4}
					/>
					<Experience
						side="Twitter"
						title="@pixel_arts"
						href="https://twitter.com/pixel_arts"
						mb={4}
					/> */}
          <Experience
            side="Github"
            title="@emee-dev"
            href="https://github.com/emee-dev"
            mb={4}
          />
          <Experience
            side="Twitter"
            title="@___emee_"
            href="https://x.com/___emee_"
            mb={4}
          />
          <Experience
            side="Credits"
            title="@bonhomme"
            href="https://github.com/maximebonhomme/bonhomme-2022"
            mb={4}
          />
        </Box>
      </Box>
    </>
  );
}
