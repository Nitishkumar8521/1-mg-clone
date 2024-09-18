// Importing necessary components from Chakra UI and React Router
import { SimpleGrid, Text, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Define the 'Collagen_week' functional component
function Collagen_week() {
    return (
        <>
            {/* Header Section with Flexbox for styling */}
            <Flex boxShadow="md" h="50px" pt="20px" pl="50px">
                Collagen | Supplement of the week
            </Flex>

            {/* SimpleGrid for product layout: dynamic columns based on screen size */}
            <SimpleGrid columns={[2, 4, 7]}>
                {/* Repeating product listing */}
                <Box textAlign="center" pt="20px" pl="40px">
                    {/* Using Link component for navigation */}
                    <Link to="/collagen/1" target="_blank">
                        {/* Product Image */}
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg"
                        />
                        {/* Product Details */}
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        {/* Price Section */}
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>

                {/* Second product - repeat of the above logic */}
                <Box textAlign="center" pt="20px" pl="40px">
                    <Link to="/collagen/2" target="_blank">
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6433e3a7dfb649e8ba0d81d8a4d1491c.jpg"
                        />
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>

                {/* Third product */}
                <Box textAlign="center" pt="20px" pl="40px">
                    <Link to="/collagen/3" target="_blank">
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3ab53077d4c44f3c9fdbc83d5d3948b0.jpg"
                        />
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>

                {/* Fourth product */}
                <Box textAlign="center" pt="20px" pl="40px">
                    <Link to="/collagen/4" target="_blank">
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e6abfe99bf324feea25a46f383cca8b4.jpg"
                        />
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>

                {/* Fifth product */}
                <Box textAlign="center" pt="20px" pl="40px">
                    <Link to="/collagen/5" target="_blank">
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cgzh629olyrrv6mlc4zy.jpg"
                        />
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>

                {/* Sixth product */}
                <Box textAlign="center" pt="20px" pl="40px">
                    <Link to="/collagen/6" target="_blank">
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/a569ab4a9eb843e9b9890f9965b92027.jpg"
                        />
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>

                {/* Seventh product */}
                <Box textAlign="center" pt="20px" pl="40px">
                    <Link to="/collagen/7" target="_blank">
                        <Image
                            h="200px"
                            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/85d94e897a59427aadf99eed6ba02caa.jpg"
                        />
                        <Text as="b">Swisse Beauty Vegan</Text>
                        <Text>bottle of 30.0 tablets</Text>
                        <Text>
                            Delivery by <Text as="b">10pm, Tomorrow</Text>
                        </Text>
                        <Flex justify="center" gap="5px">
                            <Text as="del">MRP ₹1299</Text>
                            <Text color="green" as="sub" pt="12px">
                                23% off
                            </Text>
                        </Flex>
                        <Text as="b">₹1000</Text>
                    </Link>
                </Box>
            </SimpleGrid>
        </>
    );
}

export default Collagen_week;
