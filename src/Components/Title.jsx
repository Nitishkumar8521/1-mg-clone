import { Flex, Box, Image, Link, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Title() {
    // Array of image URLs for the rotating images
    const themeArray = [
        'https://onemg.gumlet.io/d75dc007-7957-4fdd-a27b-b8eeb85c969e_1717693454.jpg?w=899&h=200&format=auto',
        'https://onemg.gumlet.io/cd1f821f-c028-4cf6-8df5-96fb71b39bdc_1718004734.png?w=899&h=200&format=auto',
        'https://onemg.gumlet.io/edbb7435-43d5-4ce0-9aa7-99a2d5ec7678_1718366198.png?w=899&h=200&format=auto',
        'https://onemg.gumlet.io/e84d656e-bd74-4e1b-a822-af2a2b035846_1708002794.jpg?w=899&h=200&format=auto',
        'https://onemg.gumlet.io/3d9636d0-d22c-465c-9710-24d5519fa468_1712576949.png?w=899&h=200&format=auto',
        'https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=899&h=200&format=auto',
        'https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=899&h=200&format=auto'
    ];
    
    // State to manage the current index of the rotating image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Set an interval to rotate images every 3 seconds
        const interval = setInterval(() => {         
            setCurrentImageIndex(currentIndex => {
                // Rotate to the next image or loop back to the first image
                if (currentIndex === 6) {
                    return 0;
                } else {
                    return (currentIndex + 1);
                }
            });          
        }, 3000); 
        
        // Clear the interval when the component is unmounted
        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <Flex pt='10px'>
                {/* Container for the rotating image */}
                <Box w='70%' h='200px'>
                    <Link href="">
                        <Image src={themeArray[currentImageIndex]} />
                    </Link>
                </Box>
                {/* Container for the static image */}
                <Box w='30%'>
                    <Link>
                        <Image h='200px' src='https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=899&h=200&format=auto' />
                    </Link>
                </Box>
            </Flex>
            {/* Text below the images */}
            <Text fontSize='2xl' p='30px' textAlign='center'>
                 Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
            </Text>
            {/* Bottom banner image */}
            <Box bg='black.300' boxShadow='md'>
                <Link>
                    <Image p='20px 30px' src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png"></Image>
                </Link>
            </Box>
        </>
    );
}

export default Title;
