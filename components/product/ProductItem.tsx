"use client";

import { ProductType } from "@/models/Product";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const ProductItem: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {product.category.name}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {product.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export const ProductItemSkeleton = () => {
  return (
    <Center py={12} className="animate-pulse bg-slate-100">
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Box
            className="animate-pulse bg-slate-200 rounded-lg"
            h={230}
            w={282}
          ></Box>
        </Box>
        <Stack pt={10} align={"center"}>
          <Box
            className="animate-pulse bg-slate-100 rounded-lg"
            h={"4"}
            w={"full"}
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          ></Box>
          <Box
            className="animate-pulse bg-slate-100 rounded-lg"
            h={"10"}
            w={"full"}
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          ></Box>
          <Stack direction={"row"} align={"center"}>
            <Box
              className="animate-pulse bg-slate-100 rounded-lg w-full"
              h={"4"}
              w={"full"}
              fontWeight={800}
              fontSize={"xl"}
            ></Box>
            <Box
              textDecoration={"line-through"}
              color={"gray.600"}
              h={"4"}
              w={"full"}
              className="animate-pulse bg-slate-100 rounded-lg w-full"
            ></Box>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductItem;
