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

          {/* <Experience
						href="https://iyk.app"
						side="2022 - present"
						title="Senior Frontend Engineer – IYK"
						desc="Building the Whole Wide World﹡"
						stack="Remix • Prisma • Tailwind • Shadcn"
					/>
					<Experience
						href="https://everpress.com/"
						side="2020 - 2022"
						title="Full Stack & Technical Lead – Everpress"
						desc="Led a team of 5 engineers to develop our creator tools and e-commerce
						app. Collaborated closely with the Head of Product to track our tactical
						objectives, improve technical directions and shipping frequency."
						stack="React • Redux • Symfony • AWS"
					/>
					<Experience
						side="2016 – 2020"
						title="Front End Engineer – Freelance"
						desc="Worked with a range of large and small agencies, start-ups and individuals to build products. Clients included Marvel App, United Nations, Netflix, Dropbox Design."
						stack="React • Redux • Styled Components • Framer Motion"
					/>
					<Experience
						href="https://neverbland.com/"
						side="2014 – 2016"
						title="Front End Engineer – Neverbland"
						desc="Part of a tight-knit team of designers, developers and critical thinkers, I built MVP products and marketing experiences for start-ups."
						stack="React • Redux • CSSModules • Three.js"
					/> */}

          <Experience
            // href="https://hacked.treblle.com/"
            href="https://treblle-monorepo-docs.vercel.app/"
            side="2023"
            title="Treblle SDK – Hacktoberfest"
            desc="Accounting for security, load balancing and data masking. I built an SDK that captures incoming API requests and responses, and sends that to Treblle servers."
            stack="Express Js • Typescript • Nextra docs"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Side Projects
          </Heading>

          <Experience
            href="https://github.com/emee-dev/useworm"
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
						title="@maximebonhomme"
						href="https://github.com/maximebonhomme"
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
