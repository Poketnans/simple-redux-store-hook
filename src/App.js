import { useState } from "react";
import { useStore } from "./store";
import "./styles.css";
import {
  List,
  ListItem,
  ListIcon,
  Input,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  Code
} from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";

export default function App() {
  const [name, setName] = useState();
  const [product, setProduct] = useState();
  const {
    names,
    removeName,
    addName,
    addProduct,
    products,
    removeProduct
  } = useStore(); // simple store use

  const handleChange = ({ target }) => setName(target.value);

  const handleChangeProduct = ({ target }) => setProduct(target.value);

  const handleAdd = () => addName(name);

  const handleAddProduct = () => addProduct(product);

  const handleDelete = (name) => removeName(name);

  const handleDeleteProduct = (product) => removeProduct(product);

  return (
    <VStack className="App">
      <Heading as="h1">Simple Store Hook - Redux</Heading>

      <Text>
        Using a simple hook on the store index file,
        <br />
        it's possible to avoid verbose code on the components
        <br />
        like in the line beneath.
      </Text>
      <Code p="3" borderRadius="8px" colorScheme="">
        {" "}
        const names = useSelector((store) =&gt; store.names){" "}
      </Code>
      <Text>
        Also, it's possible to avoid the dispatch/thunk call
        <br />
        on the component like in the line beneath.
      </Text>
      <Code p="3" borderRadius="8px" colorScheme="">
        import &#123; addNameThunk &#125; from "./store/names/thunks";
        <br />
        <br />
        import &#123; useDispatch &#125; from "react-redux";
        <br />
        <br />
        const dispatch = useDispatch();
        <br />
        <br />
        const handleClick = () =&gt; dispatch(addNameThunk(newName));
      </Code>

      <HStack alignItems="start">
        <VStack>
          <VStack>
            <Input placeholder="New name" onChange={handleChange} />
            <Button bg="#88fd" onClick={handleAdd}>
              {" "}
              Add{" "}
            </Button>
          </VStack>
          <List spacing={4}>
            {names.map((name, index) => (
              <ListItem
                key={index}
                w="150px"
                display="flex"
                justifyContent="space-between"
              >
                <ListIcon as={CheckCircleIcon} mr={5} color="green.200" />
                {name}
                <ListIcon
                  as={DeleteIcon}
                  cursor="pointer"
                  color="red"
                  onClick={() => handleDelete(name)}
                />
              </ListItem>
            ))}
          </List>
        </VStack>
        <VStack>
          <VStack>
            <Input placeholder="New product" onChange={handleChangeProduct} />
            <Button bg="#eeaa54" onClick={handleAddProduct}>
              {" "}
              Add{" "}
            </Button>
          </VStack>

          <List spacing={4}>
            {products.map((product, index) => (
              <ListItem
                key={index}
                w="150px"
                display="flex"
                justifyContent="space-between"
              >
                <ListIcon as={CheckCircleIcon} mr={5} color="green.200" />
                {product}
                <ListIcon
                  as={DeleteIcon}
                  cursor="pointer"
                  color="red"
                  onClick={() => handleDeleteProduct(product)}
                />
              </ListItem>
            ))}
          </List>
        </VStack>
      </HStack>
    </VStack>
  );
}
