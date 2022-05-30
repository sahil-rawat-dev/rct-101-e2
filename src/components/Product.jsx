import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel,Flex,
} from "@chakra-ui/react";
const Product = ({ imageSrc, title, category, price, gender }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product" src={imageSrc}>
      <Image data-cy="product-image" />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{"Rs."}{price}</Box>
    </Stack>
  );
};

export default Product;
