import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a server
    console.log("Submitted Recipe:", recipe);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit} width="100%">
        <Heading as="h1" size="xl">Submit Your Recipe</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Recipe Name</FormLabel>
          <Input name="name" value={recipe.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="ingredients" isRequired>
          <FormLabel>Ingredients</FormLabel>
          <Textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
        </FormControl>
        <FormControl id="instructions" isRequired>
          <FormLabel>Instructions</FormLabel>
          <Textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" size="lg" type="submit">Submit Recipe</Button>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;