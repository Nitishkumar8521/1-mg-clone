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
  SimpleGrid,Divider,CardFooter,Button,ButtonGroup
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../Feedback/Loading";
import Error from "../../Feedback/Error";

function Carts() {
  // Access authentication context
  const { auth } = useContext(AuthContext);
  // State variables for products, loading, error, and total price
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [flag, setFlag] = useState(false)

  // Fetch products when the component mounts
  useEffect(() => {
      fetchProduct();
  }, [flag]);

  // Calculate the total price whenever products state changes
  useEffect(() => {
      if (Array.isArray(products) && products.length > 0) {
          const price = products.reduce((sum, ele) => sum + ele.price, 0);
          setTotalPrice(price);
       }else{
        setTotalPrice(0)
       }
  }, [products]);

  // Redirect to login if not authenticated
  if (!auth) {
      return <Navigate to="/login" />;
  }

  // Function to fetch product data from the server
  async function fetchProduct() {
      try {
          setLoading(true);
          // Fetch data from server
          let res = await fetch(`https://demo-1mg-backend.onrender.com/user/get-cartItem/${localStorage.getItem("userId")}`,{
            method:"GET",
            headers:{
                token:localStorage.getItem("token"),
            }
          });
          let data = await res.json();
          setProducts(data.cart);
          setLoading(false);
      } catch (error) {
          setLoading(false);
          setError(true);
      }
  }

  async function handleDelete(id) {
    try {
        await fetch(`https://demo-1mg-backend.onrender.com/user/remove-fromCart/${id}`,{
            method:"PATCH",
            headers:{
              token:localStorage.getItem("token"),
              "Content-Type": "application/json",
            }
          })
          setFlag(!flag)
    } catch (error) {
        console.log("Error in handleDelete in Cart Component",error.message)
    }    
      
  }

  // Show a spinner while loading
  if (loading) {
    return <Loading />
  }

  // Show an alert if there is an error
  if (error) {
    return <Error />
  }

  return (
      <>
          {/* Display products in a grid layout */}
          {(Array.isArray(products) && products.length>0) ? 
          <SimpleGrid columns={[2, 4, 5]} spacing={10}>
              {products.map((product) => (
                  <Card key={product._id} maxW="sm">
                      <CardBody>
                          <Image src={product.image} alt={product.name} borderRadius="lg" />
                          <Stack mt="6" spacing="3">
                              <Text>{product.name}</Text>
                              <Box display="flex" mt="2" alignItems="center">
                                  {Array(5)
                                      .fill("")
                                      .map((_, i) => (
                                          <StarIcon
                                              key={i}
                                              color={i < product.rating ? "teal.500" : "gray.300"}
                                          />
                                      ))}
                                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                      {product.rating} reviews
                                  </Box>
                              </Box>
                              <Text color="blue.600" fontSize="2xl">
                                  ₹{product.price}
                              </Text>
                          </Stack>
                      </CardBody>
                      <Divider /> {/* Divider between card body and footer */}
                      <CardFooter>
                       <ButtonGroup spacing="1">
                         <Button
                              variant="ghost"
                              colorScheme="blue"
                              onClick={() => {
                              handleDelete(product._id); // Handle adding product to cart
                        }}
                       >
                         Remove {/* Button to add the product to cart */}
                         </Button>
                       </ButtonGroup>
                      </CardFooter>
                  </Card>
              ))}
          </SimpleGrid>:
          
              <Heading textAlign="center" as="h2">
                  Your Cart is Empty
              </Heading>
          
        }
          {/* Display total price */}
          <Text m='5' border='2px dotted red' as='mark' fontSize='2xl'>Your total price = ₹{totalPrice}</Text>
      </>
  );
}

export default Carts;
