import { Input } from "@nextui-org/react";
import './searchBar.css'
export default function App({width,handleChange}) {
  return <Input style={{width:width}} bordered placeholder='Search...' aria-label='ciao' onChange={handleChange}/>;
}
