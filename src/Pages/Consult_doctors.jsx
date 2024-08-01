import { HStack,Box,Image, VStack, Button,Text, Heading } from "@chakra-ui/react";
import Footer from "../Components/Footer";
function Consult_doctors(){
    return (<>
    Consult_doctors
    <HStack bg='red.200' textAlign='Center'>
        <Box pl='30%'>
            <Image height='50px' src='http://onemg.gumlet.io/marketing/5e7341e1-0637-4703-a7dc-aa8ea920769b.png' />
        </Box>
        <Box>
            <VStack align='start'>
                <Text>Free consultation and more benefits with Care Plan membership.</Text>
                <Button bg='red.200'><Image src='https://onemg.gumlet.io/marketing/b9af5a3d-cfb3-43c3-a37f-d5b982882a51.svg' /> Join now!</Button>
            </VStack>
        </Box>
    </HStack>
    <VStack pt='50px'>
        <HStack>
            <VStack align='start'>
                <Heading as='h4'>Online doctor consultation with qualified <br /> doctors</Heading>
                <Text>Starting at ₹ 199</Text>
                <HStack>
                    <HStack>
                        <Image src='https://onemg.gumlet.io/marketing/e7391473-ce45-403b-ae9e-04f25674874c.svg' />
                        <Text>Talk within 30 <br /> min</Text>
                    </HStack>
                    <HStack>
                        <Image src='https://onemg.gumlet.io/marketing/e7391473-ce45-403b-ae9e-04f25674874c.svg' />
                        <Text>Talk within 30 <br /> min</Text>
                    </HStack>
                    <HStack>
                        <Image src='https://onemg.gumlet.io/marketing/e7391473-ce45-403b-ae9e-04f25674874c.svg' />
                        <Text>Talk within 30 <br /> min</Text>
                    </HStack>
                </HStack>
                <Button w='250px' color='white' bg='red.400'>Consult now</Button>
            </VStack>
            <VStack>
                <Image src='https://onemg.gumlet.io/marketing/793368e4-7232-45b3-9690-2fc81da12287.svg' />
            </VStack>
        </HStack>
    </VStack>
    <HStack border='2px dotted black' w='70%' ml='15%' gap={20} mt='50px'>
        <Box h='200px' textAlign='center' p='50px'>
            <Heading color='red' as='h2' size='3xl'>30L+</Heading>
            <Heading as='h5' size='sm'>Total Consultations</Heading>
        </Box>
        <Box h='200px' p='50px'>
            <Heading color='red' as='h2' size='3xl'>3K+</Heading>
            <Heading as='h5' size='sm'>Daily Consultations</Heading>
        </Box>
        <Box h='200px' p='50px'>
            <Heading color='red' as='h2' size='3xl'>22+</Heading>
            <Heading as='h5' size='sm'>Specialities</Heading>
        </Box>
    </HStack>
    <Footer />
    </>)
}

export default Consult_doctors;