import React, { useState } from "react";

const useSingleSelection = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };

  const isSelected = (option: any) => {
    return option === selectedOption;
  };

  return { selectedOption, handleSelect, isSelected };
};

export default useSingleSelection;
