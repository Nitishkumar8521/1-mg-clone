import {HStack,Box,Image,Heading,Text,Input, VStack,Button} from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
function Login(){
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const {auth, toggle} = useContext(AuthContext);
    function handleChange(event){
            setValue(event.target.value);
    }

    function login(event){
        console.log(value);
        event.preventDefault();
        let email = value;
        fetch('http://localhost:3000/users')
        .then(function(res){return res.json()} )
        .then(function(data){
            let exit = data.filter(ele => ele.email===email);
            if(exit.length>0){
               alert('Login successfully!');
               localStorage.setItem("loggedStatus",JSON.stringify( {status:true, username:exit[0].name}));
               toggle();
               navigate('/');
            }
            else{
                alert('Password OR email-id is incorrect');
            }
        })
    }

    function Sign_Up(){
        navigate('/sign');
    }
   

    return(<>
    <HStack gap={200} >
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
                <Heading as='h3' size='lg'>Login </Heading>
                <Text fontSize='xl'>Get access to your orders, lab tests & doctor consultations.</Text>
            </Box>
            <Box>
                <Text mb='8px'>Enter Email ID</Text>
                <Input w='255%'   value={value}   onChange={handleChange}  size='sm' />
            </Box>
            <Box>
                <Button onClick={login} width='245%' colorScheme='teal' variant='solid'> LOGIN </Button>
                <Text textAlign='center' >New on 1mg? <Button colorScheme='whiteAlpha' onClick={Sign_Up}>
                    <span style={{color:'red'}}>Sign Up</span></Button></Text>
            </Box>
       </VStack>
    </HStack>
    </>)
}

export default Login;