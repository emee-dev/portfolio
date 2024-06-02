import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Header = () => {
	const [hasMounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!hasMounted) return false;

	return (
		<Flex
			position="fixed"
			top={0}
			width="full"
			p={4}
			as="header"
			alignItems="center"
			justifyContent="space-between"
		>
			<Image src="/logo.svg" alt="Bonhomme" />
			<Box
				onClick={() => console.log("Open modal")}
				height="24px"
				position="relative"
				as="button"
				role="button"
				textTransform="uppercase"
				px={3}
				color="white"
				borderRadius="lg"
				bg="blue.500"
				fontSize="sm"
				fontWeight="semibold"
				transition="0.1s"
				_hover={{ bg: "blue.700" }}
			>
				<Box as="span" position="relative" zIndex={10}>
					Donate
				</Box>
			</Box>
		</Flex>
	);
};
