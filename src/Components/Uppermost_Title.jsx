import {Text,Button,Flex,Link } from "@chakra-ui/react";

function Uppermost_Title(){
    return(<>
    <Flex position='sticky' justify='space-between' bg='black' width="full" >
        <Text></Text>      
      <Text  color='white' alignItems='center' >
        <span style={{ fontWeight: 'bold' }}>Limited Period Offer:</span> Get up to 10% off + extra 15% off on medicines & more offers. <span style={{ fontWeight: 'bold' }}><Link bg='black' color='red'>Explore</Link></span> 
      </Text>
      <Flex justify='space-between' spacing="4px">
            <Button bg='black' color='red'>
            <i class="fa-solid fa-arrow-up"></i>
            </Button>
            <Button bg='black' color='red'>
            <i class="fa-solid fa-xmark"></i>
            </Button>
        </Flex>
    </Flex>
    </>)
}

export default Uppermost_Title;