import {
  HStack,
  Box,
  Image,
  Heading,
  Text,
  Input,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

function Login() {
  // State to manage the input value
  const [value, setValue] = useState(null);
  
  // Hook to navigate programmatically
  const navigate = useNavigate();
  
  // Context for authentication state
  const { toggle } = useContext(AuthContext);
  
  // Reference for the input field
  const loginRef = useRef(null);
  
  // Hook for showing toast notifications
  const toast = useToast();

  // Handler for input change
  function handleChange(event) {
    setValue(event.target.value);
  }

  // Login function to verify user and handle navigation
  function login() {
    let email = value;
    fetch("http://localhost:3000/users")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // Filter users based on the email entered
        let exit = data.filter((ele) => ele.email === email);
        if (exit.length > 0) {
          handleToast({status: 'success'});
          localStorage.setItem(
            "loggedStatus",
            JSON.stringify({username: exit[0].email })
          );
          toggle(); // Toggle authentication state
          navigate("/"); // Navigate to home page
        } else {
          handleToast({status: 'error'});
        }
      });
  }

  // Focus on the input field when the component mounts
  useEffect(() => {
    loginRef.current.focus();
  }, []);

  // Navigate to the sign-up page
  function Sign_Up() {
    navigate("/sign");
  }

  // Function to handle toast notifications
  function handleToast({status}) {
    toast({
      title: status === 'success' ? "Login Successfully." : "Warning!",
      description: status === 'success' ? "Welcome Back." : "Please Provide valid Email",
      status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  }

  return (
    <>
      <HStack gap={200}>
        <Box pl="5%">
          {/* Image and description on the left side */}
          <Image
            pl="20%"
            src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
          />
          <Heading p="5% 7%" as="h5" size="sm">
            Make Healthcare Simpler
          </Heading>
          <Text>
            Get medicine information, order medicines, book <br />
            lab tests and consult doctors online from the <br />
            comfort of your home.
          </Text>
        </Box>
        <VStack align="start" gap={70}>
          {/* Login section on the right side */}
          <Box>
            <Heading as="h3" size="lg">
              Login{" "}
            </Heading>
            <Text fontSize="xl">
              Get access to your orders, lab tests & doctor consultations.
            </Text>
          </Box>
          <Box>
            {/* Email input field */}
            <Text mb="8px">Enter Email ID</Text>
            <Input
              w="255%"
              ref={loginRef}
              value={value}
              onChange={handleChange}
              size="sm"
              required
            />
          </Box>
          <Box>
            {/* Login button */}
            <Button
              onClick={() => { login(); }}
              width="245%"
              colorScheme="teal"
              variant="solid"
            >
              {" "}LOGIN{" "}
            </Button>
            <Text textAlign="center">
              New on 1mg?{" "}
              <Button colorScheme="whiteAlpha" onClick={Sign_Up}>
                <span style={{ color: "red" }}>Sign Up</span>
              </Button>
            </Text>
          </Box>
        </VStack>
      </HStack>
    </>
  );
}

export default Login;
