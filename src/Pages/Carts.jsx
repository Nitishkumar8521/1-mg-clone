import {
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Box,
  Spinner,
  Alert,
  AlertIcon,
  SimpleGrid
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Carts() {
  // Access authentication context
  const { auth } = useContext(AuthContext);
  // State variables for products, loading, error, and total price
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch products when the component mounts
  useEffect(() => {
      fetchProduct();
  }, []);

  // Calculate the total price whenever products state changes
  useEffect(() => {
      if (products.length > 0) {
          const price = products.reduce((sum, ele) => sum + ele.price, 0);
          setTotalPrice(price);
      }
  }, [products]);

  // Redirect to login if not authenticated
  if (!auth) {
      return <Navigate to="/login" />;
  }

  // Function to fetch product data from the server
  async function fetchProduct() {
      try {
          // Get the username from local storage
          const user = JSON.parse(localStorage.getItem("loggedStatus")).username;
          setLoading(true);
          // Fetch data from server
          let res = await fetch("http://localhost:3000/allUsersCart");
          let data = await res.json();
          setProducts(data[user]);
          setLoading(false);
      } catch (error) {
          setLoading(false);
          setError(true);
      }
  }

  // Show a spinner while loading
  if (loading) {
      return (
          <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
          />
      );
  }

  // Show an alert if there is an error
  if (error) {
      return (
          <Alert status="error">
              <AlertIcon />
              There was an error processing your request
          </Alert>
      );
  }

  return (
      <>
          {/* Display products in a grid layout */}
          <SimpleGrid columns={[2, 4, 5]} spacing={10}>
              {products.map((product) => (
                  <Card key={product.id} maxW="sm">
                      <CardBody>
                          <Image src={product.src} alt={product.name} borderRadius="lg" />
                          <Stack mt="6" spacing="3">
                              <Text>{product.title}</Text>
                              <Box display="flex" mt="2" alignItems="center">
                                  {Array(5)
                                      .fill("")
                                      .map((_, i) => (
                                          <StarIcon
                                              key={i}
                                              color={i < product.ratings ? "teal.500" : "gray.300"}
                                          />
                                      ))}
                                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                      {product.reviewCount} reviews
                                  </Box>
                              </Box>
                              <Text color="blue.600" fontSize="2xl">
                                  ₹{product.price}
                              </Text>
                          </Stack>
                      </CardBody>
                  </Card>
              ))}
          </SimpleGrid>
          {/* Display message if the cart is empty */}
          {products.length === 0 && (
              <Heading textAlign="center" as="h2">
                  Your Cart is Empty
              </Heading>
          )}
          {/* Display total price */}
          <Text m='5' border='2px dotted red' as='mark' fontSize='2xl'>Your total price = ₹{totalPrice}</Text>
      </>
  );
}

export default Carts;
