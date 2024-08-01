import { SimpleGrid, Link, Box, Image, Flex } from "@chakra-ui/react";
function Featured_brand(){
    return (<>
        <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>Featured brands</Flex>
        <SimpleGrid columns={7}>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602198_Himalaya.png?format=auto'
                />
            </Link>
           </Box>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602492_Baidyanath.png?format=auto'
                />
            </Link>
           </Box>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602499_Tynor+1.png?format=auto'
                />
            </Link>
           </Box>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602507_Dabur.png?format=auto'
                />
            </Link>
           </Box>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602516_Protinex1.png?format=auto'
                />
            </Link>
           </Box>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602522_Accu+Chek.png?format=auto'
                />
            </Link>
           </Box>
           <Box textAlign='center' pt='20px' pl='40px'>
            <Link>
               <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602527_Zandu.png?format=auto'
                />
            </Link>
           </Box>
        </SimpleGrid>
       </>)
}

export default Featured_brand;