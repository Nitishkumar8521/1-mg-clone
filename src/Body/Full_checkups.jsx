import { SimpleGrid, Text, Link, Box, Image, Flex } from "@chakra-ui/react";

function Full_checkups() {
    return (
        <>
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>Full body health checkups</Flex>
            <SimpleGrid columns={4} m='10px' gap='10px'>
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Good Health Smart Package</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px' h>
                            <Text pl='3%' fontSize='lg'>₹399 <Text fontSize='xs' textDecoration='line-through' as='span'>800</Text></Text>
                        </Flex>
                    </Link>
                </Box>
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Comprehensive Gold Full B...</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px' h>
                            <Text pl='3%' fontSize='lg'>₹399 <Text fontSize='xs' textDecoration='line-through' as='span'>800</Text></Text>
                        </Flex>
                    </Link>
                </Box>
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Good Health Silver Package</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px' h>
                            <Text pl='3%' fontSize='lg'>₹399 <Text fontSize='xs' textDecoration='line-through' as='span'>800</Text></Text>
                        </Flex>
                    </Link>
                </Box>
                <Box boxShadow='base' h='130px' mt='15px'>
                    <Link>
                        <Flex justify='space-between' p='10px'>
                            <Text as='b'>Comprehensive Silver Full B...</Text>
                            <Flex align='center' bg='#F4A460'> 
                                <Image boxSize='15px' src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                <Text ml='5px' as='b'>SAFE</Text>
                            </Flex>
                        </Flex>
                        <Flex pt='40px' h>
                            <Text pl='3%' fontSize='lg'>₹399 <Text fontSize='xs' textDecoration='line-through' as='span'>800</Text></Text>
                        </Flex>
                    </Link>
                </Box>
            </SimpleGrid>
        </>
    );
}

export default Full_checkups;
