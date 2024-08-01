import { Flex,Heading,Text,VStack,Box, HStack,Input, Button,Link,Image } from "@chakra-ui/react";
function Footer(){
    return(<>
    <hr style={{margin:'30px 5px'}} />
     <VStack>
        <Heading size='md' as='h6' textAlign='center'>INDIA'S LARGEST HEALTHCARE PLATFORM</Heading>
        <Flex gap='220px'>
            <Box m='20px 0px' >
             <Heading>260m+</Heading>
             <Text textAlign='center'>Visitors</Text>
            </Box> 
            <Box m='20px 0px'>
             <Heading>31m+</Heading>
             <Text textAlign='center'>Orders Delivered</Text>
            </Box>
            <Box m='20px 0px'>
             <Heading>1800+</Heading>
             <Text textAlign='center'>Cities</Text>
            </Box>            
        </Flex>
     </VStack>
     <hr style={{margin:'30px 5px'}} />
     <HStack justify="center" align="center" w="full">
        <Text as='b'>Get the link to download App</Text>
        <Input w='20%' placeholder="Enter Phone Number"/>
        <Button colorScheme='teal' size='md'>Send Link</Button>
     </HStack>
     <hr style={{margin:'30px 5px'}} />
     <HStack spacing={20} ml='5%'>
        <Box>
            <VStack align="start" >
               <Text pl='0px' as='b'>Know Us</Text>
               <Link>About Us</Link>
               <Link>Contect Us</Link>
               <Link>Press Coverage</Link>
               <Link >Careers</Link>
               <Link>Bussiness Partnership</Link>
               <Link>Become a Health Partner</Link>
               <Link>Corporate Governance</Link>
            </VStack>
        </Box>
        <Box>
        <VStack align="start">
               <Text pl='0px' as='b'>Our Policies</Text>
               <Link>Privacy Policy</Link>
               <Link>Terms and Conditions</Link>
               <Link>Editorial Policy</Link>
               <Link >Return Policy</Link>
               <Link>IP Policy</Link>
               <Link>Grievance Redressal Policy</Link>
               <Link>Fake Jobs and Fraud Disclaimer</Link>
            </VStack>
        </Box>
        <Box pb='30px'>
        <VStack align="start">
               <Text pl='0px' as='b'>Our Services</Text>
               <Link>Order Medicines</Link>
               <Link>Book Lab Tests</Link>
               <Link>Consult a Doctor</Link>
               <Link>Ayurveda Articles</Link>
               <Link>Hindi Articles</Link>
               <Link>Care Plan</Link>
        </VStack>
        </Box>
        <Box pb='60px'>
        <VStack align="start">
               <Text pl='0px' as='b'>Connect</Text>
               <Text>Social Links</Text>
               <HStack spacing={8}>                
                <i style={{ fontSize: '30px' }} class="fa-brands fa-square-facebook"></i>
                <i style={{ fontSize: '30px' }} class="fa-brands fa-square-instagram"></i>
                <i style={{ fontSize: '30px' }} class="fa-brands fa-square-twitter"></i>
                <i style={{ fontSize: '30px' }} class="fa-brands fa-youtube"></i>
                <i style={{ fontSize: '30px' }} class="fa-brands fa-linkedin"></i>    
               </HStack>
               <Text>Want daily dose of health?</Text>
               <Button colorScheme='teal' size='md'>SIGN UP</Button>
               
        </VStack>
        </Box>
        <Box pb='100px'>
            <VStack align="start">
                <Text as='b'>Download App</Text>
                <Button colorScheme='teal' size='md' width="full" height="48px">
                   <i className="fa-brands fa-google-play"></i> GET IT ON <br />Google Play
                </Button>
                <Button colorScheme='teal' size='md' width="full" height="48px">
                    <i className="fa-brands fa-apple"></i> GET IT ON <br />App Store
                </Button>
            </VStack>
        </Box>
     </HStack>
     <hr style={{margin:'30px 5px'}} />

     <HStack w='90%' pl='5%'>
        <HStack>
           <Box>
            <HStack>
                 <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACUCAMAAADyHdbUAAAAclBMVEX///8zMzP7+/uDg4MgICAjIyP4+PiGhoYwMDAtLS0pKSk2NjYmJiYbGxsAAADz8/Pk5OQTExPq6uqPj4/ExMRxcXFWVlabm5uqqqpnZ2ejo6O8vLwMDAywsLBbW1thYWHR0dFERETb29tOTk49PT16enq0I0HzAAAGAUlEQVR4nO2b63ayOhCGCQLmQAxBEBFQVLj/W9zBJIiI1n5dLWHtPP9aoJ03mUxOM45jsVgsFovFYrFYLBaLxWKxWCzGwdjcFvyMOM/juW34CXHKy3TBCoT9hCxYwSXnBADC88vclvwbyQ6DDhLukrlt+QfcDCAiBQAEs7nN+TaXM4egB/LzstwozngIhhBcHpYzluNqRyGQ/oOQ7gS6q5Yhge1z3Dc/uu60AoBRvjdfQnw4wrv3oKauG9z/iOHRcEeqW4LxffAiXwzd2uv7AECESVvPbeU0Abtk4cYbhh5MIidwnagZDmjob8LswoK57R3isqgutlfOVeCXcQeFeSSfRzlGYPiE8+u2qCPmzmx3nQiKap+tToDToY0Cv8n6lTTLGv/xKaIlOK2yfVV0f6KeScAqbBqCfEo9DAB5NJCn9aB93Tot4cMLRHiYR7kPSNOEq3m6wl1RCB/N0n5e+tVoI8OqkEMy8aqAzibAm7QeeTATY3RsVJAhD03pJZ5BAiDGzbF6EWKC6tT4+EmDMQJE01OSb5M31gTJ+kQ8/7Ej5hZAEO0oOdytDkn01VdRcljvIC9vHyETBKDjVpBVSX358ARCTBtJlXVfHZEBAvw1C4Lg2ya44iO29o0Q8O1lgbY3WKoAjRXwM6wAK+CH/D8FxMM98QIFsHZ41Ls8ASzl4UDBwgS4wn4PwDBneipemADhP7fjCW+nf7EwAXFL5QaAXtUXSxLgCvu53L8Q76h2DUsSIPxftT+hJ73rWZIAbT8h9H7jtCABLJXHiwTQ0/2qYzkC4tRXZ0LhabBrXogAMX57//fy4a5/IQK6+KPanz7e25sooHi+UZ2KPxLTBAgzkobUo9e69YOyPx+dGpkmQNhPMEb1w1tMj9+n9jdNQNf+JQIE4bsXifGb6/jvPeetmCXAcRN5B4DPdwWR9n/gjf3HMU5AHMpLGhIKBdKkeDB+J64nDRMQ7DfgrqCD5S/Hr/zCKAGu4+438tycYFA7t/hD3tlvmIDuNweqFCBci/Hr9+N3+tTdNAHCjEpfmiFS6fYH/qu8OdMEdBygvMoj0NMpBt7LnDMpAMwtYDW813D33ug+lb/OW2SreQWsbzESjxy82jxcp9L09a1TlN96ydvOdGV/kJtcOFq/HTb35p9YPwyowa23+P537Xz9/6UAuh7djVV+n3bgv8u5ZLILAa9/1czXxCc5TsOxAXugxkF3DPfaPerw9lo4NUn/DXs50XrteEuzl13A3+a8Bmqd7c3lQY5zOcou4MXogVt1M9qb+NNRSA/ExxkTGg9YzVpPqRFiXcTfxJ8OIrsJHX7RwK+IVXIu3T492m/exR/Blt6iLdq9Gya/ToJkohB63grX7/zHdQqVh4bG7vfHtHIg4t2XSRKPRDtMbuug9Hfs+phYrT/D8WTwHraWHQDp7GmYVUm6poT48A1Pdg8ybYiU1e9Z9iGBOvVH4xXFa1wnATIC0acZZAYuVxVLw4+9ods9d6UR+GpETrtuTuR/mi/k6+kjmTOC9rgHtXYLjx/1QXRUA3jWKWwIU8lzJPxi7r0Rq6sCsY8xpsYsPqnEXPx1xVKcqq1muJs9gt5h5S35TVj1dv3mOvqoghBUGmS/CEU6x94/v/WL+Kz6Cnn1H5n2IUmjRzJ+ExovurajC0CGUTQq+R6RYnJ2cp2gIMr/UTPzEm4Cd3CmlU26EcvUDgBAWJkQ/0e4Fe8rl6bCaZT2FU28MNB+QaHOdsXKrnly8US7D4Ab8/xHkaC7ke1DlIxbLU70j3Hj905y7et96LmI9U45Ls76ogPgq8H2dxW4uliGIJoWt8HMivReYBOe6plN/IKoLbWtwEdtwVjRor4CCJbtN7eefw/LNn01FvTJ6UT8/rgabqYDrEF0Pl/4fYsTiAbVGn5obPh5pCt8GxcsEQLDFxdNBsKy81N9kH/OmBH7r8+oU/5Q2SdCUj23Td8j3g9q0iE/L6CSeEy05bLKCXh0uxjvfyBqOUYo5ObH/pdcVtfz6vJclrggouW2vsVisVgsFovFYrFYLBaLxWJ5zX/HnlVyvEXM/gAAAABJRU5ErkJggg==" />
                 <Box>
                    <Text as='b'>Reliable</Text>
                    <Text>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</Text>
                 </Box>
            </HStack>  

           </Box>
        </HStack>
        <HStack>
           <Box>
            <HStack>
                 <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vwRQXl_vUEkvZMCqIWAl_-jfMsNWpfGoJA&s" />
                 <Box>
                    <Text as='b'>Secure</Text>
                    <Text>Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</Text>
                 </Box>
            </HStack>  

           </Box>
        </HStack>
        <HStack>
           <Box>
            <HStack>
                 <Image src="data:image/png;base64,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" />
                 <Box>
                    <Text as='b'>Affordable</Text>
                    <Text>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</Text>
                 </Box>
            </HStack>  

           </Box>
        </HStack>
     </HStack>
     <hr style={{margin:'30px 5px'}} />

     <VStack>
        <HStack>
            <Box>
                <Link>
                  <Image src='https://static.legitscript.com/seals/729605.png' />
                </Link>
            </Box>
            <Box>
                  <Image src='https://onemg.gumlet.io/URS_ebgmxc.png' />
            </Box>
        </HStack>
        <Heading size='md' as='h6' textAlign='center'>India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</Heading>
        <hr style={{margin:'30px 5px'}} />
        <Text pl='5%' pr='5%'>© 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not </Text>
        <Text ml='6%'>not process requests for Schedule X and habit forming drugs.</Text>
     </VStack>
    </>)
}

export default Footer;