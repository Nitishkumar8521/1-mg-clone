import { Image, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Diabetes_Card from "../Cards/Diabetics_Card";
import Footer from "../Components/Footer";

export default function Diabetes() {
  return (
    <>
      {/* Container for the main content */}
      <Box m="30">
        {/* Section Title */}
        <Text fontSize="lg" as="b">
          DIABETES CARE
        </Text>
        <br />

        {/* Banner Image */}
        <Image
          boxSize="100%"
          src="https://onemg.gumlet.io/1d0539d1-926a-4d07-9b62-bce5e6c3aebc_1711102149.png?w=1062&h=124&format=auto"
        ></Image>
        <br />
        <br />

        {/* Shop by Category Title */}
        <Text as="b">Shop by category</Text>

        {/* Grid for displaying product categories */}
        <SimpleGrid columns={[2,4,6]} gap="10" w="100%" boxShadow="md" pt="9" pb="7">
          {/* Individual category items */}
          <Box pl="10">
            <Link>
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/504f54f4-2db8-43b7-b155-af29c0f0d67c.png?format=auto"></Image>
              <Text fontSize="lg">Test Strips & Lancets</Text>
            </Link>
          </Box>
          <Box>
            <Link>
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zcklys075ztwc6sgcczh.jpg?format=auto"></Image>
              <Text fontSize="lg">Test Strips & Lancets</Text>
            </Link>
          </Box>
          <Box>
            <Link>
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ttdhgrg4utfaltgxveof.jpg?format=auto"></Image>
              <Text fontSize="lg">Test Strips & Lancets</Text>
            </Link>
          </Box>
          <Box>
            <Link>
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cxxweivxcwkvy4h6xvvy.png?format=auto"></Image>
              <Text fontSize="lg">Test Strips & Lancets</Text>
            </Link>
          </Box>
          <Box>
            <Link>
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bwzpqcug4wgbapowfwxf.png?format=auto"></Image>
              <Text fontSize="lg">Test Strips & Lancets</Text>
            </Link>
          </Box>
          <Box>
            <Link>
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/u7oawcb7vx4cfy8guqpd.png?format=auto"></Image>
              <Text fontSize="lg">Test Strips & Lancets</Text>
            </Link>
          </Box>
        </SimpleGrid>

        {/* All Products Title */}
        <Text>All Products</Text>
        <br />
        <br />

        {/* Grid for displaying all diabetes products */}
        <SimpleGrid columns={[1,2,4]} gap={6}>
          <Diabetes_Card />
        </SimpleGrid>
      </Box>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
}
