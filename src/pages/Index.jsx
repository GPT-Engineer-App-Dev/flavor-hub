import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Recipeify</Heading>
        <Text fontSize="lg">Your ultimate destination for sharing and discovering delicious recipes.</Text>
        <Box boxSize="sm">
          <Image src="/images/recipe-image.jpg" alt="Delicious Recipe" />
        </Box>
        <Button as={RouterLink} to="/submit-recipe" colorScheme="teal" size="lg">Submit a Recipe</Button>
      </VStack>
    </Container>
  );
};

export default Index;