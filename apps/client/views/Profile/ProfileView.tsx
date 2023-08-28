import { Card, Box, Flex, Text, Divider } from "@chakra-ui/react";
import AccountInfoItem from "./components/AccointInfoItem";
import { FaMicrophoneSlash } from "react-icons/fa";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";

const ProfileView = () => {
  return (
    <Box height="100%">
      <Card
        display="flex"
        flexDirection="column"
        rounded="lg"
        position="relative"
        height={260}
      >
        <Box p={4} flexBasis="50%" roundedTop="lg" bgColor="red"></Box>
        <Flex p={4} pl={8}>
          <Box flexBasis="20%">
            <Box
              sx={{
                position: "absolute",
                top: 50,
                left: 8,
                backgroundColor: "green",
                height: 40,
                width: 40,
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box flexBasis="25%">
            <Text fontSize="xl" fontWeight={600}>
              Renate Gouveia
            </Text>
            <Text fontSize="sm" color="secondary.500">
              Account Admin
            </Text>
          </Box>
          <Box flexBasis="25%">
            <Text fontSize="xl" fontWeight={600}>
              Plan Tier
            </Text>
            <Text fontSize="sm">Free Trial</Text>
          </Box>
          <Box flexBasis="25%">
            <Text fontSize="xl" fontWeight={600}>
              Account Status
            </Text>
            <Text fontSize="sm">Active</Text>
          </Box>
        </Flex>
      </Card>
      <Flex mt={4} gap={4}>
        <Card flexBasis="40%">
          <Text fontSize="xl" fontWeight={500} p={4}>
            Account Info
          </Text>
          <Divider />
          <Box p={4}>
            <AccountInfoItem
              title="E-Mail"
              content="renare.gouveia@gmail.com"
              icon={<FaMicrophoneSlash />}
            />
            <AccountInfoItem
              wrapperSx={{ mt: 2 }}
              title="Location"
              content="Singapore"
              icon={<FaMicrophoneSlash />}
            />
          </Box>
        </Card>
        <Card flexBasis="60%">
          <Text fontSize="xl" fontWeight={500} p={4}>
            Account Overview
          </Text>
          <Divider />
          <Box height="100%" display="flex" justifyContent="center">
            <EmptyData title="No Data?" subtitle="Feature coming soon..." />
          </Box>
        </Card>
      </Flex>
    </Box>
  );
};

export default ProfileView;
