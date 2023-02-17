import { Button, Spacer } from '@nextui-org/react';
import './button.css'
export default function App({text,width,onClick}) {
  return (
      <Button width={width} bordered onClick={onClick}>{text}</Button>
  );
}