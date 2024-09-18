// Importing necessary components from Chakra UI and React Router
import { SimpleGrid, Text, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Defining the 'Pathology_off' functional component
function Pathology_off() {
    return (
        <>
            {/* Flexbox for the header with shadow, padding, and height */}
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>
                Pathology Tests | Up to 70% off {/* Title of the section */}
            </Flex>

            {/* SimpleGrid to arrange the pathology tests into columns for different screen sizes */}
            <SimpleGrid columns={{ md: 2, lg: 4 }} m='10px' gap='10px'> {/* Responsive grid with 2 columns on medium screens, 4 on large screens */}
                
                {/* First pathology test card */}
                <Box boxShadow='base' h='150px' mt='15px'> {/* Box with shadow and height for the first test */}
                    <Link to='/lab' target="_blank"> {/* Link to the 'lab' page, opens in a new tab */}
                        <Flex justify='space-between' p='10px'> {/* Flex layout to arrange test name and SAFE badge */}
                            <Text as='b'>Lipid Profile</Text> {/* Test name in bold */}
                            <Flex align='center' bg='#F4A460'> {/* Flex for the 'SAFE' badge with image */}
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" /> {/* SAFE icon */}
                                <Text ml='5px' as='b'>SAFE</Text> {/* 'SAFE' label */}
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 8 tests</Text> {/* Number of tests in the package */}
                        <Flex pt='40px'> {/* Flex for the price display */}
                            <Text as='b' pl='3%' fontSize='lg'>₹399</Text> {/* Price in bold */}
                        </Flex>
                    </Link>
                </Box>

                {/* Second pathology test card */}
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link to='/lab' target="_blank">
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>CBC(Complete Blood Count)</Text> {/* Test name in bold */}
                            <Flex align='center' bg='#F4A460'>
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 21 tests</Text> {/* Number of tests in the package */}
                        <Flex pt='40px'>
                            <Text as='b' pl='3%' fontSize='lg'>₹279</Text> {/* Price in bold */}
                        </Flex>
                    </Link>
                </Box>

                {/* Third pathology test card */}
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link to='/lab' target="_blank">
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Thyroid Profile Total</Text> {/* Test name in bold */}
                            <Flex align='center' bg='#F4A460'>
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 3 tests</Text> {/* Number of tests in the package */}
                        <Flex pt='40px'>
                            <Text as='b' pl='3%' fontSize='lg'>₹289</Text> {/* Price in bold */}
                        </Flex>
                    </Link>
                </Box>

                {/* Fourth pathology test card */}
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link to='/lab' target="_blank">
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Lipid Profile, Non Fasting</Text> {/* Test name in bold */}
                            <Flex align='center' bg='#F4A460'>
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 8 tests</Text> {/* Number of tests in the package */}
                        <Flex pt='40px'>
                            <Text as='b' pl='3%' fontSize='lg'>₹320</Text> {/* Price in bold */}
                        </Flex>
                    </Link>
                </Box>
            </SimpleGrid>
        </>
    );
}

// Exporting the component for use in other parts of the app
export default Pathology_off;
