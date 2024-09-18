import {
  HStack,
  Box,
  Image,
  Heading,
  Text,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { useRef } from "react";
// Importing custom hook for handling toasts
import { useHandleToast } from "../Icon/Toast";

function Sign_up() {
  // State to manage the value of the email input
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { toggle } = useContext(AuthContext);
  const signRef = useRef(null);
  const handleToast = useHandleToast();

  // Handler for input change
  function handleChange(event) {
    setValue(event.target.value);
  }

  // Function to handle form submission
  function saveData(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let email_id = value;
    let obj = {
      email: email_id,
    };
    // Fetch existing users
    fetch("http://localhost:3000/users")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // Check if the email already exists
        let exit = data.some((ele) => ele.email === email_id);
        if (exit) {
          alert("Email id already exists"); // Alert if email exists
        } else {
          // Otherwise, add new user
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }).then(() => {
            // Save login status to local storage
            localStorage.setItem(
              "loggedStatus",
              JSON.stringify({ status: true, username: value })
            );
            toggle(); // Update authentication context
            handleToast({ status: "success" }); // Show success toast
            navigate("/"); // Redirect to home page
            localStorage.setItem(
              "loggedStatus",
              JSON.stringify({ username: value })
            );
          });
        }
      });
  }

  // Function to navigate to login page
  function Login() {
    navigate("/login");
  }

  // Focus on the email input field when the component mounts
  useEffect(() => {
    signRef.current.focus();
  }, []);

  return (
    <HStack gap={200}>
      <Box pl="5%">
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
        <Box>
          <Heading as="h3" size="lg">
            Sign Up
          </Heading>
          <Text fontSize="xl">
            Get access to your orders, lab tests & doctor consultations.
          </Text>
        </Box>
        <Box>
          <form onSubmit={saveData}>
            <Box>
              <Text mb="8px">Enter Email ID</Text>
              <Input
                ref={signRef}
                type="email"
                w="245%"
                value={value}
                onChange={handleChange}
                size="sm"
                required
              />
            </Box>
            <Box pt="80px">
              <Button
                type="submit"
                width="245%"
                colorScheme="teal"
                variant="solid"
              >
                SIGN UP
              </Button>
              <Text textAlign="center">
                Have an account?
                <Button colorScheme="whiteAlpha" onClick={Login}>
                  <span style={{ color: "red" }}>Login</span>
                </Button>
              </Text>
            </Box>
          </form>
        </Box>
      </VStack>
    </HStack>
  );
}

export default Sign_up;
