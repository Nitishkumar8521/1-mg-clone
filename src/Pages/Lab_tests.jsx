import { HStack,Box,Button,Image, VStack, Heading,Text,Link } from "@chakra-ui/react";
import Footer from "../Components/Footer";
function Lab_tests(){
    return (<>
    Lab_tests
    <VStack ml='10%' align="start">
    <HStack gap={10}>
        <Box width='40%'>
            <Link>
            <Image src="https://onemg.gumlet.io/9d9a10ca-59a7-4c58-a419-0606d3b9d344.png" />
            </Link>
        </Box>
        <VStack align="start">
            <Heading as='h4' size='md'>Lab Test From The Comfort Of Your Home</Heading>
            <Text fontSize='md'>Trusted by 40 Lakhs+ satisfied customers | 1 Crore+ lab tests booked</Text>
            <HStack gap={7} pb='40px'>
              <Box textAlign='center'>
                <Image pl='10%' src='https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto' />
                <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>
              <div style={{height:'70px', border:'1px dotted black'}}></div>
              <Box>
                <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto' />
                <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>
              <div style={{height:'70px', border:'1px dotted black'}}></div>
              <Box>
                 <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto' />
                 <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>
              <div style={{height:'70px', border:'1px dotted black'}}></div>
              <Box>
                 <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto' />
                 <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>
              <div style={{height:'70px', border:'1px dotted black'}}></div>
              <Box>
                  <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto' />
                  <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>
            </HStack>
            <Button w='50%'  colorScheme='teal' size='sm'>   VIEW POPULAR PACKAGES  </Button>
        </VStack>
    </HStack>
    <Text fontSize='20px' as='b'>Popular lab tests & profiles</Text>
    <HStack>
        <HStack>
            <Box boxShadow='base'>
                <Text pt='15px' pl='10%'>
                   <i class="fa-solid fa-house-chimney"></i> <Text as='b'>HEALTH TEST AT YOUR HOME</Text>
                </Text>
                  <HStack gap={20}>
                    <Box pl='10%' pt='20px'>
                        <Link>
                         <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                        </Link>
                    </Box>
                    <Box pl='10%' pt='20px'>
                    <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                        </Link>
                    </Box>
                 </HStack>
            </Box>
        </HStack>

        <HStack>
            <Box boxShadow='base'>
                <Text pt='15px' pl='10%'>
                <i class="fa-solid fa-circle-notch"></i> <Text as='b'>HEALTH TEST AT YOUR HOME</Text>
                </Text>
                <HStack gap={20}>
                <Box pl='10%' pt='20px'>
                <Link>
                         <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                        </Link>
                </Box>
                <Box pl='10%' pt='20px'>
                <Link>
                         <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                        </Link>
                        <Link>
                        <Text p='5px 0px'><i class="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                        </Link>
                </Box>
            </HStack>
        </Box>
    </HStack>
    </HStack>

    
    </VStack>
    <Footer />
    </>)
}

export default Lab_tests;