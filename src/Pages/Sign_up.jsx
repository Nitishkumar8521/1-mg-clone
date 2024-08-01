import { HStack, Box, Image, Heading, Text, Input, VStack, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

function Sign_up() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const { auth, toggle } = useContext(AuthContext);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function saveData(event) {
        event.preventDefault();  
        let email_id = value;
        let obj = {
            email: email_id
        };
        fetch('http://localhost:3000/users')
            .then(function (res) { return res.json() })
            .then(function (data) {
                let exit = data.some(ele => ele.email === email_id);
                if (exit) {
                    alert('Email id already exists');
                } else {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(obj)
                    }).then(() => {
                        localStorage.setItem("loggedStatus", JSON.stringify({ status: true, username: value }));
                        toggle();
                        navigate('/');
                    });
                }
            });
    }

    function Login() {
        navigate('/login');
    }

    return (
        <HStack gap={200}>
            <Box pl='5%'>
                <Image pl='20%' src='https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png' />
                <Heading p='5% 7%' as='h5' size='sm'>Make Healthcare Simpler</Heading>
                <Text>
                    Get medicine information, order medicines, book <br />
                    lab tests and consult doctors online from the <br />comfort of your home.
                </Text>
            </Box>
            <VStack align="start" gap={70}>
                <Box>
                    <Heading as='h3' size='lg'>Sign Up</Heading>
                    <Text fontSize='xl'>Get access to your orders, lab tests & doctor consultations.</Text>
                </Box>
                <Box>
                <form onSubmit={saveData}>
                    <Box>
                        <Text mb='8px'>Enter Email ID</Text>
                        <Input type="email" w='245%' value={value} onChange={handleChange} size='sm' required />
                    </Box>
                    <Box pt='80px'>
                        <Button type="submit" width='245%' colorScheme='teal' variant='solid'>SIGN UP</Button>
                        <Text textAlign='center'>
                            Have an account? 
                            <Button colorScheme='whiteAlpha' onClick={Login}>
                                <span style={{ color: 'red' }}>Login</span>
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
