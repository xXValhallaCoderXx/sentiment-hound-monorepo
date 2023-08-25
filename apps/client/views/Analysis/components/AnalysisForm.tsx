import * as yup from "yup";
import { FC, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { IGetAnalysisParams } from "@client/shared/slices/analysis/analysis.api";
import { Card, Box, Button, Text, Input } from "@chakra-ui/react";
import {
  YOUTUBE_REGEX,
  TWITTER_REGEX,
} from "@client/shared/utils/regex-strings";

type Inputs = {
  contentUrl: string;
};

function extractId(url: string) {
  if (YOUTUBE_REGEX.test(url)) {
    const matches: any = url.match(YOUTUBE_REGEX);
    return {
      type: "youtube",
      id: matches[1],
    };
  } else if (TWITTER_REGEX.test(url)) {
    const matches: any = url.match(TWITTER_REGEX);
    return {
      type: "twitter",
      id: matches[2],
    };
  } else {
    return null; // Return null for invalid URLs
  }
}

const youtubeTwitterUrlValidator = (value: string) => {
  if (YOUTUBE_REGEX.test(value)) {
    return true;
  } else if (TWITTER_REGEX.test(value)) {
    return true;
  }
  return false;
};
const checkPlatform = (value: string) => {
  if (YOUTUBE_REGEX.test(value)) {
    return "youtube";
  } else if (TWITTER_REGEX.test(value)) {
    return "twitter";
  }

  return "";
};

const schema = yup.object().shape({
  contentUrl: yup
    .string()
    .required("Please enter social media url")
    .test(
      "valid-social-media-url",
      "Please enter a valid social media url",
      youtubeTwitterUrlValidator
    ),
});

interface IAnalysisFormProps {
  onSubmit: (data: IGetAnalysisParams) => void;
}

const AnalysisForm: FC<IAnalysisFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [platform, setPlatform] = useState("");
  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    if (platform && extractId(data.contentUrl)) {
      onSubmit({
        id: extractId(data.contentUrl)?.id,
        // @ts-ignore
        platform,
      });
    }
  };

  useEffect(() => {
    const platformType = checkPlatform(watch("contentUrl"));
    setPlatform(platformType);
  }, [watch("contentUrl")]);

  console.log(watch("contentUrl")); // wa

  return (
    <Card p={6}>
      <Box>
        <Text mt={-2} fontSize="2xl" fontWeight={600}>
          Social Analysis
        </Text>
        <Text color="gray.500" fontSize="xs">
          Enter a Youtube or Twitter URL to fetch its sentiment
        </Text>
        <Box mt={4}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Text fontSize="sm" mb={1}>
              Social Media URL
            </Text>
            <Box gap={4} display="flex">
              <Input
                placeholder="Enter a social media URL"
                {...register("contentUrl")}
              />
              <Button type="submit" bgColor="primary" color="white">
                Analyze
              </Button>
            </Box>
            {errors.contentUrl && (
              <Text fontWeight={500} fontSize="sm" color="red" ml={1} mt={2}>
                {errors.contentUrl.message}
              </Text>
            )}
            {isValid && platform && (
              <Text ml={1} mt={2} fontSize="sm" color="green">
                You have entered a valid {platform} url
              </Text>
            )}
          </form>
        </Box>
      </Box>
    </Card>
  );
};

export default AnalysisForm;
