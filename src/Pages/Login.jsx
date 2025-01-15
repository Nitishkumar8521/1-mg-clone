import {
  HStack,
  Box,
  Image,
  Heading,
  Text,
  Input,
  VStack,
  Button,
  useToast
} from "@chakra-ui/react";
import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";
import Loading from "../../Feedback/Loading";

function Login() {
  // State to manage the input value
  const [value, setValue] = useState(null);
  const [loading, setLoading ] = useState(false)
  
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
  async function login() {
    try {
      let email = value;
      setLoading(true);
      const response =await fetch("https://demo-1mg-backend.onrender.com/user/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email})
    })
    const data = await response.json();
    if(data.token){
      localStorage.setItem("token",data.token)
      localStorage.setItem("userId",data.currentUser._id)
      localStorage.setItem("role",data.currentUser.role);
      localStorage.setItem("email",data.currentUser.email);
      setLoading(false)
      handleToast({status: 'success'});
      toggle();
      navigate('/');
    }else{
      setLoading(false)
      handleToast({status:'error'});
    }
    } catch (error) {
      handleToast({status:'error'});
    }
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

  if (loading) {
    return <Loading />
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
