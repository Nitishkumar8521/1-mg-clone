import Footer from "../Components/Footer";





import { Box, Button, Text, HStack, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Need_help() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <Box bg="gray.50" w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
    <VStack w='100%' align='start' pl='40%' mt='10px'>
    <Text fontSize="sm" >Need Help?</Text>
      <VStack spacing={4} p={4} boxShadow="md" bg="white" borderRadius="md" >
        <HStack spacing={4}>
          <Text>With your orders</Text>
          <Button colorScheme="red" onClick={handleLogin}>LOGIN</Button>
        </HStack>
      </VStack>
    </VStack>
    </Box>
    <Footer />
    </>
  );
}

export default Need_help;
