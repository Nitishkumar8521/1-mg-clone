// Importing necessary components from Chakra UI and other libraries
import {
  Image,
  Text,
  Box,
  Button,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Spinner,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"; // Importing the Star icon for ratings
import { useContext, useEffect, useState } from "react"; // React hooks
import { AuthContext } from "../Contexts/AuthContextProvider"; // Auth context for user authentication
import { useNavigate } from "react-router-dom"; // Navigation hook for redirecting

let productId = null; // A variable to store the current product ID

// Diabetes_Card functional component
export default function Diabetes_Card() {
  // State variables
  const [products, setProducts] = useState([]); // State to hold product data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false); // Error state
  const { auth } = useContext(AuthContext); // Accessing authentication status from AuthContext
  const navigate = useNavigate(); // Hook for navigation
  const [userCart, setUserCart] = useState({}); // State to hold user's cart data
  const [isFirstRender, setIsFirstRender] = useState(true); // State to check first render
  const [isFound, setIsfount] = useState(false); // State to check if a product is already in the cart

  // Function to fetch products from the backend
  async function fetchProduct() {
    try {
      setLoading(true); // Setting loading state to true
      let res = await fetch("http://localhost:3000/products"); // Fetching product data from API
      let data = await res.json(); // Parsing the response data
      setProducts(data); // Setting product data to state
      setLoading(false); // Setting loading state to false
    } catch (error) {
      setLoading(false); // In case of error, stop loading
      setError(true); // Set error state to true
    }
  }

  // useEffect to fetch products on component mount
  useEffect(() => {
    let isCancelled = false; // Variable to check if component is unmounted
    if (!isCancelled) {
      fetchProduct(); // Fetching products if not cancelled
    }
    return () => {
      isCancelled = true; // Cleanup to prevent memory leaks
    };
  }, []);

  // --------------------------ADD TO CART FUNCTIONALITY------------------------

  // Function to update the database with user cart data
  async function updateDatabase() {
    try {
      await fetch(`http://localhost:3000/allUsersCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCart), // Sending user cart data to the database
      });
    } catch (error) {
      console.log("Error in updateDatabase", error); // Error handling
    }
  }

  // Function to update the cart by adding a product
  async function updateCart(id) {
    try {
      const user = JSON.parse(localStorage.getItem("loggedStatus")).username; // Retrieving logged-in user information

      // Initialize the userCart for the user if it doesn't exist
      if (!userCart[user]) {
        userCart[user] = []; // Initialize the user's cart with an empty array
      }

      let res = await fetch(`http://localhost:3000/products/${id}`); // Fetching product details by ID
      let data = await res.json();
      
      // Check if the product is already in the user's cart
      if (userCart[user].some((ele) => ele.id === id)) {
        setIsfount(true); // Set found state to true
        alert("Already Present in your cart"); // Show alert if product is already in cart
        return;
      }
      
      userCart[user].push(data); // Add the product to the user's cart
      updateDatabase(); // Update the database with the new cart
    } catch (error) {
      console.log("Error in updateCart:", error); // Error handling
    }
  }

  // useEffect to update cart after the first render and when the userCart state changes
  useEffect(() => {
    if (!isFirstRender && Object.keys(userCart).length > 0) {
      updateCart(productId); // Only call this after userCart is updated
    }
    setIsFirstRender(false); // After first render, set this to false
  }, [userCart]);

  // Function to fetch cart data from the backend
  async function fetchData() {
    try {
      setLoading(true); // Start loading state
      let res = await fetch(`http://localhost:3000/allUsersCart`); // Fetching all user cart data
      let data = await res.json();
      setUserCart(data); // Set the fetched cart data to state
      setLoading(false); // Stop loading state
    } catch (error) {
      console.log("Error in fetchData");
      setLoading(false); // Stop loading on error
      setError(true); // Set error state to true
    }
  }

  // Function to handle adding products to cart
  function handleAddtocart(id) {
    if (!auth) { // If user is not authenticated
      navigate("/login"); // Redirect to login page
    } else {
      productId = id; // Set the productId to the selected product
      fetchData(); // Fetch user cart data
    }
  }

  // If loading, display a spinner
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

  // If there's an error, display an alert
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  // Rendering the products with a Card layout
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} maxW="sm"> {/* Unique key for each product */}
          <CardBody>
            <Image src={product.src} alt={product.name} borderRadius="lg" /> {/* Product image */}
            <Stack mt="6" spacing="3">
              <Text>{product.title}</Text> {/* Product title */}
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < product.ratings ? "teal.500" : "gray.300"} // Display stars based on product rating
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {product.reviewCount} reviews {/* Number of reviews */}
                </Box>
              </Box>
              <Text color="blue.600" fontSize="2xl">
                ₹{product.price} {/* Product price */}
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
                  handleAddtocart(product.id); // Handle adding product to cart
                }}
              >
                Add to cart {/* Button to add the product to cart */}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
