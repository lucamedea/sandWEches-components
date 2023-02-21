import { Input } from "@nextui-org/react";
import './disabledTextField.css'
export default function DisabledTextField({placeholder,width,label}) {
  return <Input disabled style={{width:width, background:"#EBEDF0"}} label={label} placeholder={placeholder} />;
}