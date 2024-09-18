import { HStack, Box, Button, Image, VStack, Heading, Text, Link } from "@chakra-ui/react";
import Footer from "../Components/Footer";

function Lab_tests() {
  return (
    <>
      {/* Main heading for the Lab Tests page */}
      Lab_tests

      {/* Container for the primary section */}
      <VStack ml='10%' align="start">
        <HStack gap={10}>
          {/* Image section */}
          <Box width='40%'>
            <Link>
              <Image src="https://onemg.gumlet.io/9d9a10ca-59a7-4c58-a419-0606d3b9d344.png" />
            </Link>
          </Box>

          {/* Text and information section */}
          <VStack align="start">
            {/* Heading and description */}
            <Heading as='h4' size='md'>Lab Test From The Comfort Of Your Home</Heading>
            <Text fontSize='md'>Trusted by 40 Lakhs+ satisfied customers | 1 Crore+ lab tests booked</Text>
            
            {/* Section with icons and text */}
            <HStack gap={7} pb='40px'>
              {/* Safe & Hygienic icon */}
              <Box textAlign='center'>
                <Image pl='10%' src='https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto' />
                <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>

              {/* Divider */}
              <div style={{height:'70px', border:'1px dotted black'}}></div>

              {/* Lab delivery icon */}
              <Box>
                <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto' />
                <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>

              {/* Divider */}
              <div style={{height:'70px', border:'1px dotted black'}}></div>

              {/* Online report icon */}
              <Box>
                 <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto' />
                 <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>

              {/* Divider */}
              <div style={{height:'70px', border:'1px dotted black'}}></div>

              {/* Doctor icon */}
              <Box>
                 <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto' />
                 <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>

              {/* Divider */}
              <div style={{height:'70px', border:'1px dotted black'}}></div>

              {/* Offer icon */}
              <Box>
                  <Image h='40px' pl='10%' src='https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto' />
                  <Text fontSize='xs'>100% Safe <br /> & Hygienic</Text>
              </Box>
            </HStack>

            {/* Button to view popular packages */}
            <Button w='50%' colorScheme='teal' size='sm'>VIEW POPULAR PACKAGES</Button>
          </VStack>
        </HStack>

        {/* Section for popular lab tests */}
        <Text fontSize='20px' as='b'>Popular lab tests & profiles</Text>
        <HStack>
          {/* Health test at home section */}
          <HStack>
            <Box boxShadow='base'>
              <Text pt='15px' pl='10%'>
                <i className="fa-solid fa-house-chimney"></i> <Text as='b'>HEALTH TEST AT YOUR HOME</Text>
              </Text>
              <HStack gap={20}>
                <Box pl='10%' pt='20px'>
                  {/* List of health tests */}
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                  </Link>
                </Box>
                <Box pl='10%' pt='20px'>
                  {/* List of health tests (repeated) */}
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                  </Link>
                </Box>
              </HStack>
            </Box>
          </HStack>

          {/* Another section for health tests at home */}
          <HStack>
            <Box boxShadow='base'>
              <Text pt='15px' pl='10%'>
                <i className="fa-solid fa-circle-notch"></i> <Text as='b'>HEALTH TEST AT YOUR HOME</Text>
              </Text>
              <HStack gap={20}>
                <Box pl='10%' pt='20px'>
                  {/* List of health tests */}
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                  </Link>
                </Box>
                <Box pl='10%' pt='20px'>
                  {/* List of health tests (repeated) */}
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>CBC (Complete Blood Count)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>LFT (Liver Function Test)</Text>
                  </Link>
                  <Link>
                    <Text p='5px 0px'><i className="fa-solid fa-circle-plus"></i>Lipid Profile</Text>
                  </Link>
                </Box>
              </HStack>
            </Box>
          </HStack>
        </HStack>
      </VStack>

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default Lab_tests;
