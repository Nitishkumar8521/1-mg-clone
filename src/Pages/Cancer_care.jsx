import { HStack, Link, Image, Text, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

function Cancer_care() {
    return (
        <>
            {/* Navigation and Action Links */}
            <HStack gap={8} boxShadow='xs'>
                <Link>
                    {/* Tata 1mg Logo */}
                    <Image src='https://www.1mg.com/images/tata_1mg_logo.svg' />
                </Link>
                <Link as='b'>Get Second Opinion</Link>
                <Link as='b'>Find Cancer Specialists</Link>
                <Link as='b'>Buy Cancer Medicines</Link>
                <Link as='b'>Book Tests for Cancer</Link>
                <Link as='b'>Get Financial Support</Link>
                <Link as='b'>Access NGOSs</Link>
                <Image src='https://onemg.gumlet.io/staging/51e49cc6-37f8-4f10-9271-34981a3b46da.svg' />
            </HStack>
            
            {/* Main Banner Image */}
            <Image h='300px' w='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCAo1gQ-QIOD8fpbDotpG9OuhIl2CHYSmuQ&s' />
            
            {/* Main Heading and Description */}
            <Heading p='10px 0px' textAlign='center' as='h5'>Access to quality cancer care does not occur by chance</Heading>
            <Text p='10px 0px' textAlign='center'>
                Tata 1mg is here to support you and provide access to quality cancer care.
            </Text>
            
            {/* Action Links with Images */}
            <HStack gap={10} pl='10%'>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/308ebd83-c1f8-499b-accf-fc9c9e73ef2c.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/ff1111e4-3cb5-4f9c-ab19-7353e4076ceb.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/592c21f5-b62c-44a1-adda-acbfaff44292.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/fe623d02-d64e-41be-b054-61a79b3f7d0b.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/e424a497-1d07-47fe-a5b9-688d728bf5d0.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/b50e6720-4d2e-43b2-82ad-0097b51e4798.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
                <Link>
                    <Image bg='red.300' borderRadius='10px' src='https://onemg.gumlet.io/staging/fff45a56-8545-45d4-b0b4-e39242091891.svg' />
                    <Text>Find cancer <br /> specialists</Text>
                </Link>
            </HStack>
            
            {/* Major Types of Cancer Section */}
            <Heading pl='5%' as='h3'>Major Types of Cancer</Heading>
            <SimpleGrid columns={3} gap={5} p='10px 5%' w='80%'>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/45dc27c4-16d3-42c7-9c4c-ad0fde44ed51.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                {/* Repeating content for other cancer types */}
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/b04a5431-21eb-4f7a-8475-e0cc01d20687.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/d75c5054-70ed-4827-81c4-214b370e33cc.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/50f3ff8d-0531-487e-ab0b-0b6d6c4c52a0.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/a5904e25-b784-46c0-b14e-70d217b11a40.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/9912c989-9734-4e54-853f-c5a1f00b8890.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/3ded280a-e850-4012-b3a6-791e3e2e051e.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
                <VStack bg='green.200' borderRadius='5px'>
                    <HStack>
                        <Image h='60px' src='https://onemg.gumlet.io/staging/fd49dc70-4a70-45d4-b7ac-3d53c7599c94.png' />
                        <VStack>
                            <Heading as='h6'>Breast</Heading>
                            <Text fontSize='lg'>Cancer</Text>
                        </VStack>
                    </HStack>
                    <hr />
                    <HStack>
                        <Link>About</Link>
                        <Link>Support Programs</Link>
                        <Link>MGOs</Link>
                    </HStack>
                </VStack>
            </SimpleGrid>
        </>
    );
}

export default Cancer_care;
