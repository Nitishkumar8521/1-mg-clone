import { SimpleGrid, Text, Link, Box, Image, Flex } from "@chakra-ui/react";

function Pathology_off() {
    return (
        <>
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>Pathology Tests | Up to 70% off</Flex>
            <SimpleGrid columns={4} m='10px' gap='10px'>
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Lipid Profile</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 8 tests</Text>
                        <Flex pt='40px' h>
                            <Text as='b' pl='3%' fontSize='lg'>₹399</Text>
                        </Flex>
                    </Link>
                </Box>
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>CBC(Complete Blood Count)</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 21 tests</Text>
                        <Flex pt='40px' h>
                            <Text as='b' pl='3%' fontSize='lg'>₹279</Text>
                        </Flex>
                    </Link>
                </Box>
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Thyroid Profile Total</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 3 tests</Text>
                        <Flex pt='40px' h>
                            <Text as='b' pl='3%' fontSize='lg'>₹289</Text>
                        </Flex>
                    </Link>
                </Box>
                <Box boxShadow='base' h='150px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Lipid Profile,Non Fasting</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Text pl='10px'>Contains 8 tests</Text>
                        <Flex pt='40px' h>
                            <Text as='b' pl='3%' fontSize='lg'>₹320</Text>
                        </Flex>
                    </Link>
                </Box>
            </SimpleGrid>
        </>
    );
}

export default Pathology_off;
