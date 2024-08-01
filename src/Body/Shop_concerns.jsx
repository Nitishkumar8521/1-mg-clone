import { SimpleGrid,Text,Link,Box,Image,Flex } from "@chakra-ui/react";
function Shop_concerns(){
    return(<>
     <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>Shop by Health concerns</Flex>
     <SimpleGrid columns={7}>
        <Box textAlign='center'>
            <Link>
               <Image p='30px' src='https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto'></Image>
               <Text as='samp'>Diabetes</Text>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto'></Image>
            <Text as='samp'>Heart Care</Text>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto'></Image>
            <Text as='samp'>Stomach Care</Text>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto'></Image>
            <Text as='samp'>Liver Care</Text>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto'></Image>
            <Text as='samp'>Bone, Jonint & Muscle Care</Text>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto'></Image>
            <Text as='samp'>Kidney Care</Text>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto'></Image>
            <Text as='samp'>Derma Care</Text>
            </Link>
        </Box>
     </SimpleGrid>
    </>)
}

export default Shop_concerns;