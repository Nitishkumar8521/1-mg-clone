import { Link } from "react-router-dom";
import LocationIcon from "../Icon/LocationIcon";
import SearchIcon from "../Icon/SearchIcon";
import SearchRoundIcon from "../Icon/SearchRoundIcon";
import { Button, Flex, Image, Text, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { useContext } from "react";

function Navbar() {
    const { auth, toggle } = useContext(AuthContext);

    function logout() {
        toggle();
    }

    function openInNewTab(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <Flex justify='space-evenly' bg='white' color='black'>
                <Link to='/'> <Image h='30px' objectFit='cover' src='https://www.1mg.com/images/tata_1mg_logo.svg' alt='Tata_logo' /></Link>
                <Text as='b'><Link to='/'>Medicines</Link></Text>
                <Text as='b' onClick={() => openInNewTab('/lab')} style={{ cursor: 'pointer' }}>LAB TESTS</Text>
                <Text as='b' onClick={() => openInNewTab('/consult')} style={{ cursor: 'pointer' }}>CONSULT DOCTORS</Text>
                <Text as='b' onClick={() => openInNewTab('/cancer')} style={{ cursor: 'pointer' }}>CANCER CARE</Text>
                <Text as='b' onClick={() => openInNewTab('/partnerships')} style={{ cursor: 'pointer' }}>PARTNERSHIPS</Text>
                {/* <Text as='b' onClick={() => openInNewTab('/care')} style={{ cursor: 'pointer' }}>CARE PLAN</Text> */}
                {auth === 1 ? <Image borderRadius='full' boxSize='30px' src='data:image/png;base64,...' /> : null}
                {auth === 1 ? <Button onClick={logout} colorScheme='red' size='xs'>LOGOUT</Button> : null}
                {auth === 0 ? <Link to='/login'>Login</Link> : null}
                {auth === 0 ? <Link to='/sign'>Sign Up</Link> : null}
                <Link to='/offers'>Offers</Link>
                <Link to='/carts'><i className="fa-solid fa-cart-shopping"></i></Link>
                <Link to='/need'>Need Help?</Link>
            </Flex>
            <Flex boxShadow='xs'>
                <InputGroup w='13%' ml='5%'>
                    <InputLeftElement pointerEvents='none'>
                        <LocationIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Enter Your City' />
                    <InputRightElement>
                        <SearchIcon color='gray.300' />
                    </InputRightElement>
                </InputGroup>
                <InputGroup w='45%'>
                    <Input type='tel' placeholder='Search for Medicines and Health Products' />
                    <InputRightElement>
                        <SearchRoundIcon color='gray.300' />
                    </InputRightElement>
                </InputGroup>
                <Text p='0% 2%'>QUICK BUY! Get up to 25% off on medicines</Text>
                <Button colorScheme='orange' p='5px 10px'>Quick order</Button>
            </Flex>
        </>
    );
}

export default Navbar;