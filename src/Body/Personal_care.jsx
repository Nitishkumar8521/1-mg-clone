// Importing necessary components from Chakra UI and React Router
import { SimpleGrid, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Defining the 'Personal_care' functional component
function Personal_care() {
    return (
        <>
            {/* Flexbox for the header with shadow, padding, and height */}
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>
                Personal care {/* Title of the section */}
            </Flex>

            {/* SimpleGrid to arrange personal care items into columns */}
            <SimpleGrid columns={[2, 4, 7]}> {/* Grid with 2 columns on small screens, 4 on medium, and 7 on large screens */}

                {/* First product box with centered content */}
                <Box textAlign='center'> {/* Box to center the image */}
                    <Link to='/categories/diabetes'> {/* Link to the 'diabetes' category page */}
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto'></Image> {/* Image with padding */}
                    </Link>
                </Box>

                {/* Second product box */}
                <Box textAlign='center'>
                    <Link to='/categories/diabetes'>
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto'></Image>
                    </Link>
                </Box>

                {/* Third product box */}
                <Box textAlign='center'>
                    <Link to='/categories/diabetes'>
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443681_sexuall.webp?format=auto'></Image>
                    </Link>
                </Box>

                {/* Fourth product box */}
                <Box textAlign='center'>
                    <Link to='/categories/diabetes'>
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto'></Image>
                    </Link>
                </Box>

                {/* Fifth product box */}
                <Box textAlign='center'>
                    <Link to='/categories/diabetes'>
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443705_elderly.webp?format=auto'></Image>
                    </Link>
                </Box>

                {/* Sixth product box */}
                <Box textAlign='center'>
                    <Link to='/categories/diabetes'>
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto'></Image>
                    </Link>
                </Box>

                {/* Seventh product box */}
                <Box textAlign='center'>
                    <Link to='/categories/diabetes'>
                        <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443722_womenn.webp?format=auto'></Image>
                    </Link>
                </Box>

            </SimpleGrid>
        </>
    );
}

// Exporting the component for use in other parts of the app
export default Personal_care;
