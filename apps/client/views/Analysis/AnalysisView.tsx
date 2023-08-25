import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import {
  useStartAnalysisMutation,
  IGetAnalysisParams,
} from "@client/shared/slices/analysis/analysis.api";
import AnalysisForm from "./components/AnalysisForm";

const AnalysisView = () => {
  const router = useRouter();

  const [triggerAnalysis, analysisApi] = useStartAnalysisMutation();

  useEffect(() => {
    if (analysisApi.isSuccess) {
      router.push("/dashboard/tasks");
    }
  }, [analysisApi, router]);

  const handleSubmit = ({ id, platform }: IGetAnalysisParams) => {
    triggerAnalysis({
      id,
      platform,
    });
  };
  return (
    <Box>
      <Flex flexDirection={{ lg: "row", sm: "column" }} gap={10}>
        <Box w={{ base: "100%", md: "100%", lg: "60%" }}>
          <AnalysisForm onSubmit={handleSubmit} />
        </Box>
      </Flex>
    </Box>
  );
};

export default AnalysisView;
