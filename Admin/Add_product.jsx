import { Button, Input, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import Loading from "../Feedback/Loading";
import Error from "../Feedback/Error";

export default function Add_Product() {
  const [data, setData] = useState({name:"", photo:null, price:1, category:"", quantity:1, rating:1 })
  const [loading, setLoading ] = useState(false)
  const [error, setError ] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("photo", data.photo); 
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("quantity", data.quantity);
      formData.append("rating", data.rating);
      setLoading(true)

      const response = await fetch('https://demo-1mg-backend.onrender.com/product/add-product', {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"), 
        },
        body: formData, //because payload is not only JSON format (i.e req.file is also present for image) 
        //if all payload is in JSON format then we can use (body: JSON.stringify(payload))       
      });
  
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      
      console.log("Product added successfully");
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error("Error in handleSubmit:", error.message);
    }
  }
  

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    const formInput = type === "file" ? files[0] : type === "number" ? Number(value) : value; // Handle file inputs
    setData({ ...data, [name]: formInput });
  }

  if(loading){
    return <Loading />
  }
  
  if(error){
    return <Error />
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        margin="auto"
        gap="4"
        align="flex-start"
        maxW="sm"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
      >
        <FormControl isRequired>
          <FormLabel>Enter product name</FormLabel>
          <Input placeholder="product name" name="name" value={data.name} onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Enter Category</FormLabel>
          <Select placeholder="Select option" name='category' value={data.category} onChange={handleChange}>
            <option value="diabetes">diabetes</option>
            <option value="heart">heart</option>
            <option value="stomach">stomach</option>
            <option value="liver">liver</option>
            <option value="bone">bone</option>
            <option value="kidney">kidney</option>
            <option value="derma">derma</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Upload image</FormLabel>
          <input type="file" name='photo' onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Enter Price </FormLabel>
          <NumberInput size="sm" defaultValue={15} min={1}>
            <NumberInputField type='number' focusBorderColor="red.200" name='price' value={data.price} onChange={handleChange} />
            <NumberInputStepper>
              <NumberIncrementStepper
                bg="green.200"
                _active={{ bg: "green.300" }}
                children="+"
              />
              <NumberDecrementStepper
                bg="pink.200"
                _active={{ bg: "pink.300" }}
                children="-"
              />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Enter Quantity </FormLabel>
          <NumberInput size="sm" defaultValue={15} min={1}>
            <NumberInputField type='number' focusBorderColor="red.200" name='quantity' value={data.quantity} onChange={handleChange} />
            <NumberInputStepper>
              <NumberIncrementStepper
                bg="green.200"
                _active={{ bg: "green.300" }}
                children="+"
              />
              <NumberDecrementStepper
                bg="pink.200"
                _active={{ bg: "pink.300" }}
                children="-"
              />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Enter Rating </FormLabel>
          <NumberInput size="sm" defaultValue={5} min={1} max={5}>
            <NumberInputField type='number' focusBorderColor="red.200" name='rating' value={data.rating} onChange={handleChange} />
            <NumberInputStepper>
              <NumberIncrementStepper
                bg="green.200"
                _active={{ bg: "green.300" }}
                children="+"
              />
              <NumberDecrementStepper
                bg="pink.200"
                _active={{ bg: "pink.300" }}
                children="-"
              />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
