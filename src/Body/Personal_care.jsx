import { SimpleGrid,Text,Link,Box,Image,Flex } from "@chakra-ui/react";
function Personal_care(){
    return(<>
     <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>Personal care</Flex>
     <SimpleGrid columns={7}>
        <Box textAlign='center'>
            <Link>
               <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto'></Image>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto'></Image>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443681_sexuall.webp?format=auto'></Image>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto'></Image>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443705_elderly.webp?format=auto'></Image>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto'></Image>
            </Link>
        </Box>
        <Box textAlign='center'>
            <Link>
            <Image p='30px' src='https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443722_womenn.webp?format=auto'></Image>
            </Link>
        </Box>
     </SimpleGrid>
    </>)
}

export default Personal_care;