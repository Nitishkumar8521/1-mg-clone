// Importing necessary components from Chakra UI and React Router
import { SimpleGrid, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Defining the 'Featured_brand' functional component
function Featured_brand() {
    return (
        <>
            {/* Flexbox for the header with shadow, padding, and height */}
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>
                Featured brands {/* Title of the section */}
            </Flex>

            {/* SimpleGrid for responsive grid layout of the brand logos */}
            <SimpleGrid columns={[2, 4, 7]}>
                {/* First brand logo inside Box component */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    {/* Link component to navigate to 'diabetes' category */}
                    <Link to='/categories/diabetes'>
                        {/* Image component for brand logo, circular and with defined size */}
                        <Image
                            borderRadius='full' 
                            boxSize='150px' 
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602198_Himalaya.png?format=auto' 
                        />
                    </Link>
                </Box>

                {/* Second brand logo */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    <Link to='/categories/diabetes'>
                        <Image
                            borderRadius='full' 
                            boxSize='150px' 
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602492_Baidyanath.png?format=auto'
                        />
                    </Link>
                </Box>

                {/* Third brand logo */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    <Link to='/categories/diabetes'>
                        <Image
                            borderRadius='full' 
                            boxSize='150px' 
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602499_Tynor+1.png?format=auto'
                        />
                    </Link>
                </Box>

                {/* Fourth brand logo */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    <Link to='/categories/diabetes'>
                        <Image
                            borderRadius='full' 
                            boxSize='150px' 
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602507_Dabur.png?format=auto'
                        />
                    </Link>
                </Box>

                {/* Fifth brand logo */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    <Link to='/categories/diabetes'>
                        <Image
                            borderRadius='full' 
                            boxSize='150px' 
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602516_Protinex1.png?format=auto'
                        />
                    </Link>
                </Box>

                {/* Sixth brand logo */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    <Link to='/categories/diabetes'>
                        <Image
                            borderRadius='full' 
                            boxSize='150px' 
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602522_Accu+Chek.png?format=auto'
                        />
                    </Link>
                </Box>

                {/* Seventh brand logo */}
                <Box textAlign='center' pt='20px' pl='40px'>
                    <Link to='/categories/diabetes'>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src='https://onemg.gumlet.io/diagnostics%2F2024-06%2F1718602527_Zandu.png?format=auto'
                        />
                    </Link>
                </Box>
            </SimpleGrid>
        </>
    );
}

// Exporting the component for use in other parts of the app
export default Featured_brand;
