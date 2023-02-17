import { Input } from "@nextui-org/react";
import './disabledTextField.css'
export default function App({placeholder,width}) {
  return <Input disabled style={{width:width}} bordered placeholder={placeholder} />;
}