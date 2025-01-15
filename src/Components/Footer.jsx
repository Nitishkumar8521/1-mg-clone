import {
  Flex,
  Heading,
  Text,
  VStack,
  Box,
  HStack,
  Input,
  Button,
  Link as ChakraLink,
  Image,
  Stack
} from "@chakra-ui/react";
import Sign_up from "../Pages/Sign_up";
import { Link } from "react-router-dom";

// Footer Component
function Footer() {
  return (
    <>
      {/* Horizontal line for separation */}
      <hr style={{ margin: "30px 5px" }} />

      {/* Section displaying statistics about the platform */}
      <VStack>
        <Heading size="md" as="h6" textAlign="center">
          INDIA'S LARGEST HEALTHCARE PLATFORM
        </Heading>
        <Flex gap="220px">
          {/* Visitors count */}
          <Box m="20px 0px">
            <Heading>260m+</Heading>
            <Text textAlign="center">Visitors</Text>
          </Box>
          {/* Orders Delivered count */}
          <Box m="20px 0px">
            <Heading>31m+</Heading>
            <Text textAlign="center">Orders Delivered</Text>
          </Box>
          {/* Cities count */}
          <Box m="20px 0px">
            <Heading>1800+</Heading>
            <Text textAlign="center">Cities</Text>
          </Box>
        </Flex>
      </VStack>

      {/* Horizontal line for separation */}
      <hr style={{ margin: "30px 5px" }} />

      {/* Section for app download link */}
      <HStack justify="center" align="center" w="full">
        <Text as="b">Get the link to download App</Text>
        <Input w="20%" placeholder="Enter Phone Number" />
        <Button colorScheme="teal" size="md">
          Send Link
        </Button>
      </HStack>

      {/* Horizontal line for separation */}
      <hr style={{ margin: "30px 5px" }} />

      {/* Footer links sections */}
      <Stack direction={['column', 'row']} spacing={20} ml="5%">
        {/* Know Us links */}
        <Box>
          <VStack align="start">
            <Text pl="0px" as="b">
              Know Us
            </Text>
            <ChakraLink>About Us</ChakraLink>
            <ChakraLink>Contact Us</ChakraLink> {/* Fixed typo from "Contect Us" */}
            <ChakraLink>Press Coverage</ChakraLink>
            <ChakraLink>Careers</ChakraLink>
            <ChakraLink>Business Partnership</ChakraLink> {/* Fixed typo from "Bussiness Partnership" */}
            <ChakraLink>Become a Health Partner</ChakraLink>
            <ChakraLink>Corporate Governance</ChakraLink>
          </VStack>
        </Box>
        {/* Our Policies links */}
        <Box>
          <VStack align="start">
            <Text pl="0px" as="b">
              Our Policies
            </Text>
            <ChakraLink>Privacy Policy</ChakraLink>
            <ChakraLink>Terms and Conditions</ChakraLink>
            <ChakraLink>Editorial Policy</ChakraLink>
            <ChakraLink>Return Policy</ChakraLink>
            <ChakraLink>IP Policy</ChakraLink>
            <ChakraLink>Grievance Redressal Policy</ChakraLink>
            <ChakraLink>Fake Jobs and Fraud Disclaimer</ChakraLink>
          </VStack>
        </Box>
        {/* Our Services links */}
        <Box pb="30px">
          <VStack align="start">
            <Text pl="0px" as="b">
              Our Services
            </Text>
            <ChakraLink>Order Medicines</ChakraLink>
            <ChakraLink>Book Lab Tests</ChakraLink>
            <ChakraLink>Consult a Doctor</ChakraLink>
            <ChakraLink>Ayurveda Articles</ChakraLink>
            <ChakraLink>Hindi Articles</ChakraLink>
            <ChakraLink>Care Plan</ChakraLink>
          </VStack>
        </Box>
        {/* Connect section with social links and sign up button */}
        <Box pb="60px">
          <VStack align="start">
            <Text pl="0px" as="b">
              Connect
            </Text>
            <Text>Social Links</Text>
            <HStack spacing={8}>
              <ChakraLink target="_blank" href="https://www.facebook.com/1mgOfficial">
                <i
                  style={{ fontSize: "30px" }}
                  class="fa-brands fa-square-facebook"
                ></i>
              </ChakraLink>
              <ChakraLink target="_blank" href="https://www.instagram.com/1mgofficialpage/">
                <i
                  style={{ fontSize: "30px" }}
                  class="fa-brands fa-square-instagram"
                ></i>
              </ChakraLink>
              <ChakraLink target="_blank" href="https://x.com/1mgofficial?mx=2">
                <i
                  style={{ fontSize: "30px" }}
                  class="fa-brands fa-square-twitter"
                ></i>
              </ChakraLink>
              <ChakraLink target="_blank" href='https://www.youtube.com/c/1mgofficial'>
                <i
                  style={{ fontSize: "30px" }}
                  class="fa-brands fa-youtube"
                ></i>
              </ChakraLink>
              <ChakraLink target="_blank" href='https://www.linkedin.com/company/1mg'>
                <i
                  style={{ fontSize: "30px" }}
                  class="fa-brands fa-linkedin"
                ></i>
              </ChakraLink>
            </HStack>
            <Text>Want daily dose of health?</Text>
            <Link to="/sign">
              <Button onClick={Sign_up} colorScheme="teal" size="md">
                SIGN UP
              </Button>
            </Link>
          </VStack>
        </Box>
        {/* Download App section */}
        <Box pb="100px">
          <VStack align="start">
            <Text as="b">Download App</Text>
            <ChakraLink href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus">
              <Button colorScheme="teal" size="md" width="140px" height="48px">
                <i className="fa-brands fa-google-play"></i> GET IT ON <br />
                Google Play
              </Button>
            </ChakraLink>

            <ChakraLink href="https://apps.apple.com/in/app/tata-1mg-healthcare-app/id554578419">
              <Button colorScheme="teal" size="md" width="140px" height="48px">
                <i className="fa-brands fa-apple"></i> GET IT ON <br />
                App Store
              </Button>
            </ChakraLink>
          </VStack>
        </Box>
      </Stack>

      {/* Horizontal line for separation */}
      <hr style={{ margin: "30px 5px" }} />

      {/* Certification and copyright information */}
      <VStack>
        <HStack>
          <Box>
            <ChakraLink>
              <Image src="https://static.legitscript.com/seals/729605.png" />
            </ChakraLink>
          </Box>
          <Box>
            <Image src="https://onemg.gumlet.io/URS_ebgmxc.png" />
          </Box>
        </HStack>
        <Heading size="md" as="h6" textAlign="center">
          India's only LegitScript and ISO/ IEC 27001 certified online
          healthcare platform
        </Heading>
        <hr style={{ margin: "30px 5px" }} />
        <Text pl="5%" pr="5%">
          © 2024 Tata 1mg. All rights reserved. All medicines are dispensed in
          compliance with the Drugs and Cosmetics Act, 1940 and Drugs and
          Cosmetics Rules, 1945. We do not{" "}
        </Text>
        <Text ml="6%">
          not process requests for Schedule X and habit forming drugs.
        </Text>
      </VStack>
    </>
  );
}

export default Footer;
