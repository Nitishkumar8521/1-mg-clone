// Importing necessary components from Chakra UI and React Router
import { SimpleGrid, Text, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Defining the 'Shop_concerns' functional component
function Shop_concerns() {
    return (
        <>
            {/* Header with plain text */}
            <h1>Shop_concerns</h1>

            {/* Flexbox for the sub-header with shadow, padding, and height */}
            <Flex boxShadow='md' h='50px' pt='20px' pl='50px'>
                Shop by Health concerns {/* Subtitle section */}
            </Flex>

            {/* SimpleGrid to arrange the health concern items into columns */}
            <SimpleGrid columns={[2, 4, 7]}> {/* Responsive grid with 2 columns on small screens, 4 on medium, and 7 on large screens */}
                
                {/* First health concern box for Diabetes */}
                <Box textAlign='center'> {/* Centered box for diabetes */}
                    <Link to='/categories/diabetes'> {/* Link to the 'diabetes' category */}
                        <Image p='30px' src='https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto'></Image> {/* Diabetes image */}
                        <Text as='samp'>Diabetes</Text> {/* Text label for Diabetes */}
                    </Link>
                </Box>

                {/* Second health concern box for Heart Care */}
                <Box textAlign='center'>
                    <Link to='/categories/Heart_Care'>
                        <Image p='30px' src='https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto'></Image> {/* Heart Care image */}
                        <Text as='samp'>Heart Care</Text> {/* Text label for Heart Care */}
                    </Link>
                </Box>

                {/* Third health concern box for Stomach Care */}
                <Box textAlign='center'>
                    <Link to='/categories/Stomach_Care'>
                        <Image p='30px' src='https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto'></Image> {/* Stomach Care image */}
                        <Text as='samp'>Stomach Care</Text> {/* Text label for Stomach Care */}
                    </Link>
                </Box>

                {/* Fourth health concern box for Liver Care */}
                <Box textAlign='center'>
                    <Link to='/categories/Liver_Care'>
                        <Image p='30px' src='https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto'></Image> {/* Liver Care image */}
                        <Text as='samp'>Liver Care</Text> {/* Text label for Liver Care */}
                    </Link>
                </Box>

                {/* Fifth health concern box for Bone, Joint, & Muscle Care */}
                <Box textAlign='center'>
                    <Link to='/categories/Bone_Jonint'>
                        <Image p='30px' src='https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto'></Image> {/* Bone, Joint & Muscle Care image */}
                        <Text as='samp'>Bone, Jonint & Muscle Care</Text> {/* Text label for Bone, Joint & Muscle Care */}
                    </Link>
                </Box>

                {/* Sixth health concern box for Kidney Care */}
                <Box textAlign='center'>
                    <Link to='/categories/Kidney_Care'>
                        <Image p='30px' src='https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto'></Image> {/* Kidney Care image */}
                        <Text as='samp'>Kidney Care</Text> {/* Text label for Kidney Care */}
                    </Link>
                </Box>

                {/* Seventh health concern box for Derma Care */}
                <Box textAlign='center'>
                    <Link to='/categories/Derma_Care'>
                        <Image p='30px' src='https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto'></Image> {/* Derma Care image */}
                        <Text as='samp'>Derma Care</Text> {/* Text label for Derma Care */}
                    </Link>
                </Box>
                
            </SimpleGrid>
        </>
    );
}

// Exporting the component for use in other parts of the app
export default Shop_concerns;
