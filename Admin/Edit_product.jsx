import {
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Feedback/Loading";
import Error from "../Feedback/Error";

export default function Edit_product() {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start loading as true because we have to fetch data first
  const [error, setError] = useState(false);

  async function fetchItem() {
    try {
      const res = await fetch(
        `https://demo-1mg-backend.onrender.com/product/get-product/${productId}`,
        {
          method: "GET",
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const product = await res.json()
      setData(product.product);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error fetching product:", error.message);
    }
  }

  useEffect(() => {
    fetchItem();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch(
        `https://demo-1mg-backend.onrender.com/product/update-product/${productId}`,
        {
          method: "PATCH",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Product updated successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error in handleSubmit in Edit_product:", error.message);
    }
  }

  function handleChange(e) {
    const { name, value, type } = e.target;
    const formInput = type === "number" ? Number(value) : value;
    setData({ ...data, [name]: formInput });
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
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
        <FormControl>
          <FormLabel>Enter Product name</FormLabel>
          <Input
            placeholder="Product name"
            name="name"
            value={data.name || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Enter Category</FormLabel>
          <Select
            placeholder="Select option"
            name="category"
            value={data.category || ""}
            onChange={handleChange}
          >
            <option value="diabetes">diabetes</option>
            <option value="heart">heart</option>
            <option value="stomach">stomach</option>
            <option value="liver">liver</option>
            <option value="bone">bone</option>
            <option value="kidney">kidney</option>
            <option value="derma">derma</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Enter Price</FormLabel>
          <NumberInput size="sm" defaultValue={data.price}>
            <NumberInputField
              type="number"
              focusBorderColor="red.200"
              name="price"
              value={data.price || 1}
              onChange={handleChange}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Enter Quantity</FormLabel>
          <NumberInput size="sm" defaultValue={data.quantity}>
            <NumberInputField
              type="number"
              focusBorderColor="red.200"
              name="quantity"
              value={data.quantity || 1}
              onChange={handleChange}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Enter Rating</FormLabel>
          <NumberInput
            defaultValue={data.rating}
            max={5}
            min={1}
            keepWithinRange={false}
            clampValueOnBlur={false}
          >
            <NumberInputField
              value={data.rating}
              type="number"
              focusBorderColor="red.200"
              name="rating"
              onChange={handleChange}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Update
        </Button>
      </Stack>
    </form>
  );
}
