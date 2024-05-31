import { Container, Text, VStack, Heading, Box, Image, Button, HStack, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import { useState } from "react";

const Index = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Delicious Recipe", rating: 0, numRatings: 0 },
    // Add more recipes as needed
  ]);

  const handleRating = (recipeId, rating) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              rating: recipe.rating + rating,
              numRatings: recipe.numRatings + 1,
            }
          : recipe
      )
    );
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Recipeify</Heading>
        <Text fontSize="lg">Your ultimate destination for sharing and discovering delicious recipes.</Text>
        {recipes.map((recipe) => (
          <Box key={recipe.id} boxSize="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mt={4}>
            <Image src="/images/recipe-image.jpg" alt={recipe.name} />
            <Heading as="h2" size="md" my={2}>
              {recipe.name}
            </Heading>
            <HStack spacing={1} my={2}>
              {[...Array(5)].map((_, index) => (
                <Icon
                  key={index}
                  as={FaStar}
                  color={index < recipe.rating / recipe.numRatings ? "gold" : "gray.300"}
                  onClick={() => handleRating(recipe.id, index + 1)}
                />
              ))}
            </HStack>
          </Box>
        ))}
        <Button as={RouterLink} to="/submit-recipe" colorScheme="teal" size="lg">Submit a Recipe</Button>
      </VStack>
    </Container>
  );
};

export default Index;