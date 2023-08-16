import { FC } from "react";
import { Input, InputProps } from "@chakra-ui/react";

type ITextInputProps = InputProps;

const TextInput: FC<ITextInputProps> = (props) => <Input {...props} />;

export default TextInput;
