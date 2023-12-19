/* eslint-disable react/no-unescaped-entities */
import type { InferGetServerSidePropsType } from "next";
import { signIn } from "next-auth/react";
import NextImage from "next/image";
import { getServerSideProps } from "@client/pages/auth/sign-in";
import {
    Box, Flex, Grid, Heading, Text, Image, FormControl, FormLabel, Input, Button, Link, useBreakpointValue,
  } from '@chakra-ui/react';
import MainLogoIcon from "@client/public/logos/main-logo.png";

const SignInPageView = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const columnLayout = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });

    const handleOnClickGoogleSignIn = () => {

        signIn(providers?.google.id, {
            callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
          })
    }
  return (
    <Grid id="sign-in-container" templateColumns={columnLayout} gap={6} h="calc(100vh - 60px)">
    {/* Left Column */}
    <Flex direction="column"   bgColor="#F1F5F9" p={20}>
        <Flex alignItems="center" gap={2}>
       
        <NextImage src={MainLogoIcon} alt="main-logo" height={80} />
        <Heading fontWeight={400} >Sentiment Hound</Heading>
        </Flex>
      <Image src="https://via.placeholder.com/400" alt="Abstract Art" boxSize="300px" />
    </Flex>

    {/* Right Column - Login Form */}
    <Flex direction="column" alignItems="center" justify="center" p={10}>
        <Box width={500}>
        <Heading mb={6}>Login to Your Account</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email Address</FormLabel>
        <Input placeholder="Enter e-mail address" type="email" />
      </FormControl>
      <Button disabled w="100%" colorScheme="primary" mb={4}>Login</Button>
      <Text textAlign="center" fontWeight="medium" mb={4}>OR</Text>
      <Button width="100%" colorScheme="red" onClick={handleOnClickGoogleSignIn} variant="outline">Sign in with Google</Button>
      <Text mt={6} fontSize="sm" textAlign="center">
        Don't have an account? <Link color="blue.500" href="#">Sign up</Link>
      </Text>
        </Box>
    </Flex>
  </Grid>
  );
};

export default SignInPageView;

{
  /* <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <div>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <div key={provider.name}>
                    <button
                      onClick={() =>
                        signIn(provider.id, {
                          callbackUrl: "http://localhost:3000/dashboard",
                        })
                      }
                    >
                      Sign in with {provider.name}
                    </button>
                  </div>
                );
              })}
          </div>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Text color={"blue.500"}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex> */
}
