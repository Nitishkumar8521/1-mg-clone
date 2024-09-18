import Footer from "../Components/Footer";
import {
  HStack,
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

export default function Single_page() {
  // Extract the product ID from the URL parameters
  const { id } = useParams();

  // Array of image URLs to display in the product details
  const imgArray = [
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg",
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6433e3a7dfb649e8ba0d81d8a4d1491c.jpg",
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3ab53077d4c44f3c9fdbc83d5d3948b0.jpg",
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e6abfe99bf324feea25a46f383cca8b4.jpg",
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cgzh629olyrrv6mlc4zy.jpg",
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/a569ab4a9eb843e9b9890f9965b92027.jpg",
    "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/85d94e897a59427aadf99eed6ba02caa.jpg",
  ];

  return (
    <>
      <HStack spacing="24px" m="10">
        {/* Left section: Product Image */}
        <Box w="33%" bg="yellow.100" h="400">
          <Image
            h="400"
            p="10"
            src={`${imgArray[id - 1]}`} // Display image based on ID
            alt="Product Image"
            w="100%"
          />
        </Box>

        {/* Middle section: Product Details */}
        <Box w="33%" bg="tomato.100" h="400" p="10">
          <Text as="b" fontSize="2xl">
            Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for
            Skin & Antioxidant Benefits | Tablet
          </Text>
          <br />
          <Text fontSize="lg">Product highlights</Text>
          <UnorderedList>
            <ListItem>
              Promotes formation of natural collagen which vitally improves skin
              health and reduce wrinkles
            </ListItem>
            <ListItem>
              Provides antioxidant support and reduce free radicals formed in
              the body
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Right section: Pricing and Add to Cart */}
        <Box w="33%" bg="pink.100" h="400" p="10">
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardHeader>
                <Checkbox isInvalid>
                  <HStack direction="row" spacing={3}>
                    <Text as="bold" fontSize="2xl">
                      ₹1000
                    </Text>
                    <Text textDecoration="line-through" fontSize="xs">
                      ₹1299
                    </Text>
                    <Text bg="green.100" fontSize="xs">
                      23% off
                    </Text>
                  </HStack>
                  <br />
                </Checkbox>
                <Checkbox isInvalid>
                  <HStack direction="row" spacing={3}>
                    <Text as="bold" fontSize="2xl">
                      ₹1000
                    </Text>
                    <Text fontSize="md">+</Text>
                    <Text fontSize="sm">free shipping with</Text>
                  </HStack>
                </Checkbox>
              </CardHeader>
              <CardBody>
                <Text>Inclusive of all taxes</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="orange" w="100%">
                  ADD TO CART
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </HStack>

      <HStack m="10" gap="20">
        {/* Left section: Additional Information */}
        <VStack>
          <Box border="2px solid red">
            <Image src="https://placehold.co/800x400" />
          </Box>
          <Box boxShadow="md" p="5">
            <br />
            <Text fontSize="lg" as="b">
              Information about Healthkart HK Vitals Disolve with Marine
              Collagen & Resveratrol | Strip for Healthy Skin | Flavour Mango
            </Text>
            <br />
            <br />
            <Text boxShadow="sm">
              HealthKart HK Vitals Disolve Collagen Strip is a dietary
              supplement enriched with vitamin D, resveratrol, green tea
              extract, and pure marine collagen, which can help improve skin
              health, reduce the appearance of wrinkles, and add moisture to the
              skin. The supplement is in the form of strips, which is easy to
              consume and takes only 30 seconds to dissolve in the mouth.
            </Text>
            <br />
            <Text boxShadow="sm" as="b">
              Key Ingredients:
            </Text>
            <UnorderedList>
              <ListItem>Collagen Peptide</ListItem>
              <ListItem>Resveratrol</ListItem>
              <ListItem>Green Tea Extract</ListItem>
              <ListItem>Vitamin D3</ListItem>
            </UnorderedList>
            <br />
            <Text boxShadow="sm" as="b">
            Key Benefits:
            </Text>
            <UnorderedList>
              <ListItem>Pure marine collagen can help nourish the skin and reduce the appearance of fine lines and wrinkles</ListItem>
              <ListItem>Resveratrol helps improve skin’s elasticity and firmness</ListItem>
              <ListItem>Green tea extract aids in getting even skin tone and reduces discolouration</ListItem>
              <ListItem>Vitamin D supports moisture retention and skin repair</ListItem>
            </UnorderedList>
          </Box>
        </VStack>

        {/* Right section: Additional Actions */}
        <VStack gap="10">
          <Box boxShadow="md" p="35">
            <Link>
              <Image
                ml="54"
                borderRadius="full"
                boxSize="150px"
                src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/labs.png"
              />
              <Button colorScheme="red" variant="outline" mt="5" m="3">
                BOOK A LAB TEST ONLINE
              </Button>
            </Link>
          </Box>

          <Box boxShadow="md" p="35">
            <Link>
              <Image
                ml="54"
                borderRadius="full"
                boxSize="150px"
                src="https://onemg.gumlet.io/Doctor_xqon4h.png"
              />
              <Button colorScheme="red" variant="outline" mt="5">
                CONSULT A DOCTOR ONLINE
              </Button>
            </Link>
          </Box>

          {/* Box for displaying trust indicators */}
          <Box boxShadow="md">
            <HStack gap="8" p="6">
              <Box>
                <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/star.png" />
                <Text fontSize="md">Authentic</Text>
                <Text fontSize="md">Products</Text>
              </Box>
              <Box>
                <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/group.png" />
                <Text fontSize="md">Authentic</Text>
                <Text fontSize="md">Products</Text>
              </Box>
              <Box>
                <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/delivery.png" />
                <Text fontSize="md">Authentic</Text>
                <Text fontSize="md">Products</Text>
              </Box>
            </HStack>
          </Box>

          {/* Box for displaying content details */}
          <Box boxShadow="md">
            <Text as="b" fontSize="lg" pl="4">
              Content Details
            </Text>
            <br />
            <br />
            <Text fontSize="sm" pl="4">
              Last updated
            </Text>
            <Text fontSize="sm" pl="4">
              10 Sep 2024 | 01:03 AM (IST)
            </Text>
            <br />
            <hr />
            <HStack>
              <Box>
                <Image
                  boxSize="50px"
                  src="https://onemg.gumlet.io/hpmev62q0ukad0pyv31g.png"
                />
              </Box>
              <Box>
                <br />
                <Text fontSize="sm">
                  We provide you with authentic, trustworthy
                </Text>
                <Text>and relevant information</Text>
                <Text color="red">Want to Know More...</Text>
                <br />
              </Box>
            </HStack>
          </Box>
        </VStack>
      </HStack>

      {/* Footer component */}
      <Footer />
    </>
  );
}
