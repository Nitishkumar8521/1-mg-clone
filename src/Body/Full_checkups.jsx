// Importing necessary components from Chakra UI and React Router
import { SimpleGrid, Text, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Defining the 'Full_checkups' functional component
function Full_checkups() {
    return (
        <>
            {/* Flexbox for the header with shadow, padding, and height */}
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>
                Full body health checkups {/* Title of the section */}
            </Flex>

            {/* SimpleGrid to arrange checkups into columns for different screen sizes */}
            <SimpleGrid columns={{md:2, lg:4}} m='10px' gap='10px'> {/* Responsive grid with 2 columns on medium screens, 4 on large screens */}
                
                {/* First health checkup card */}
                <Box boxShadow='base' h='130px' mt='15px'> {/* Box with shadow and height for the first checkup */}
                    <Link to='/lab' target="_blank"> {/* Link to the 'lab' page, opens in a new tab */}
                        <Flex justify='space-between' p='10px'> {/* Flex layout to arrange text and image */}
                            <Text as='b'>Good Health Smart Package</Text> {/* Checkup name in bold */}
                            <Flex align='center' bg='#F4A460'> {/* Flex for the 'SAFE' badge with image */}
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" /> {/* SAFE icon */}
                                <Text ml='5px' as='b'>SAFE</Text> {/* 'SAFE' label */}
                            </Flex>
                        </Flex>
                        <Flex pt='40px'> {/* Flex for the price display */}
                            <Text pl='3%' fontSize='lg'>
                                ₹399 {/* Current price */}
                                <Text fontSize='xs' textDecoration='line-through' as='span'>
                                    800
                                </Text> {/* Original price with strikethrough */}
                            </Text>
                        </Flex>
                    </Link>
                </Box>

                {/* Second health checkup card */}
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link to='/lab' target="_blank">
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Comprehensive Gold Full B...</Text> {/* Checkup name truncated */}
                            <Flex align='center' bg='#F4A460'>
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px'>
                            <Text pl='3%' fontSize='lg'>
                                ₹399
                                <Text fontSize='xs' textDecoration='line-through' as='span'>
                                    800
                                </Text>
                            </Text>
                        </Flex>
                    </Link>
                </Box>

                {/* Third health checkup card */}
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link to='/lab' target="_blank">
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Good Health Silver Package</Text> {/* Checkup name */}
                            <Flex align='center' bg='#F4A460'>
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px'>
                            <Text pl='3%' fontSize='lg'>
                                ₹399
                                <Text fontSize='xs' textDecoration='line-through' as='span'>
                                    800
                                </Text>
                            </Text>
                        </Flex>
                    </Link>
                </Box>

                {/* Fourth health checkup card */}
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link to='/lab' target="_blank">
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Comprehensive Silver Full B...</Text> {/* Checkup name truncated */}
                            <Flex align='center' bg='#F4A460'>
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px'>
                            <Text pl='3%' fontSize='lg'>
                                ₹399
                                <Text fontSize='xs' textDecoration='line-through' as='span'>
                                    800
                                </Text>
                            </Text>
                        </Flex>
                    </Link>
                </Box>
            </SimpleGrid>
        </>
    );
}

// Exporting the component for use in other parts of the app
export default Full_checkups;
