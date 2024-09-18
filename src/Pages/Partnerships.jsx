import { Box, HStack, Image, VStack, Text, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import Footer from "../Components/Footer";

function Partnerships() {
  return (
    <>
      {/* Header section with the logo */}
      <Box w='100%'>
        <Image src='https://www.1mg.com/images/tata_1mg_logo.svg' />
      </Box>

      {/* Main content section with transformation details */}
      <HStack gap={10} justify='center'>
        <VStack align='start'>
          <Text fontSize='3xl' as='b'>
            Transforming Workplace <br /> Wellness
          </Text>
          <Text>
            Empower your employees with our holistic corporate <br />
            health & wellness programs. Experience customized <br />
            health checkups, employee wellness initiatives, and <br />
            seamless medicine delivery services.
          </Text>
          <Button bg='red.400' color='white'>Schedule Demo</Button>
        </VStack>
        <Image src="https://onemg.gumlet.io/staging/5fdb22bc-20ad-4c0e-a89c-cf744e6632ef.svg" />
      </HStack>

      {/* Section with various services offered */}
      <VStack bg='red.100'>
        <Text fontSize='xl' pt='20px' as='b'>Say hello to Better Health</Text>
        <hr style={{ border: '2px solid black', width: '5%' }} />
        <Text>Innovative ideas for improving the corporate experience.</Text>
        <HStack gap={10}>
          <Box textAlign='center'>
            <Image h='100px' src='https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706293182_diagnostics_2023-07_1690285315_Medicine_Mweb%2B%282%29.png' />
            <Text as='b'>Medicines</Text>
          </Box>
          <Box textAlign='center'>
            <Image h='100px' src='https://onemg.gumlet.io/diagnostics%2F2024-04%2F1711952961_Lab+tests_Mweb+%281%29+%281%29.png' />
            <Text as='b'>Lab Tests</Text>
          </Box>
          <Box textAlign='center'>
            <Image h='100px' src='https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706293206_Consult+doctors_Mweb+%283%29.png' />
            <Text as='b'>Consultations</Text>
          </Box>
          <Box textAlign='center'>
            <Image h='100px' src='https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706293194_OTC_Mweb.png' />
            <Text as='b'>OTC Products</Text>
          </Box>
        </HStack>
        <Text fontSize='xl' pt='20px' as='b'>Trusted Partners</Text>
        <hr style={{ border: '2px solid black', width: '5%' }} />
        <Text>Meet our trusted partners and see who we work with.</Text>
        <HStack gap={5} justify='center'>
          <Image w='10%' src='https://onemg.gumlet.io/v1642326214/bolrvfezjxqrakuee8th.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1642326231/dwu4rxk9lihiee3s5yuq.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1642326251/unuqgbwaccanuzewmlfo.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1641941795/xobnlnayucz1axbh4a2t.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1641908388/mfzvpdg3p6hz4sl3wdkw.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1641941718/vcgwbh33txrsuz3knqcq.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1641941822/bfjmgrbl4vs8591nkunp.png' />
          <Image w='10%' src='https://onemg.gumlet.io/v1642326138/u0pdme9dlzmmmvji9k9p.jpg' />
        </HStack>
      </VStack>

      {/* Contact form section */}
      <HStack pt='30px' bg='gray.50' justify='center' gap={10}>
        <Box pb='350px'>
          <Text fontSize='2xl' as='b'>Contact us for Corporate Health Solutions</Text>
          <Text>
            Boost your company's health initiatives with Tata 1mg's tailored corporate <br />
            wellness services across India
          </Text>
          <HStack pt='10px'>
            <i className="fa-solid fa-envelope"></i>
            <Text>Email:</Text>
            <Text color='red.400'>sales@1mg.com</Text>
          </HStack>
        </Box>
        <Box boxShadow='md' w='40%' bg='white' p='20px 20px'>
          <form>
            {/* Form for corporate inquiries */}
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder='First name' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Organization Name</FormLabel>
              <Input placeholder='Your Organization Name' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Work Email ID</FormLabel>
              <Input placeholder='abc@example.com' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Contact number</FormLabel>
              <Input type="number" placeholder='Your Mobile Number' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Employee Strength</FormLabel>
              <Select>
                <option value='1'>&lt;500 Employees</option>
                <option value='2'>500-2000 Employees</option>
                <option value='3'>&gt;2000 Employees</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Services you would like to know about</FormLabel>
              <Select>
                <option value='Health Checks'>Health Checks</option>
                <option value='Medicine Delivery'>Medicine Delivery</option>
                <option value='Consultations'>Consultations</option>
                <option value='Insurance Products'>Insurance Products</option>
                <option value='Medical Rooms'>Medical Rooms</option>
                <option value='Other'>Other: Please mention in the requirements</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Please mention your requirement</FormLabel>
              <Input placeholder='Your Custom Requirement' />
            </FormControl>
            <Button color='white' mt='20px' bg='red.300' w='40%'>Submit</Button>
          </form>
        </Box>
      </HStack>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Partnerships;
