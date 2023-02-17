import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SelectNumber from './components/selectNumber';
import reportWebVitals from './reportWebVitals';
import Select from'./components/select';
import ArrowButton from './components/arrowButton'
import MyPopup from './components/popup'
import TextField from './components/textField'
import SearchBar from './components/searchBar'
import Button from './components/button'
import DisabledTextField from './components/disabledTextField'

const root = ReactDOM.createRoot(document.getElementById('root'));
const handleChange = (event) => {
  console.log(event.target.value);

};
root.render(
  <React.StrictMode>
    <SelectNumber h="80" w="500"/>
    <ArrowButton /> 
    <Select h="80" w="500"/>
    <MyPopup/>
    <TextField placeHolder="ciao chiozzi" width="300px" handleChange={handleChange}/>
    
    <SearchBar width="200px" handleChange={handleChange}/>
    <Button text="Delete Account" width="200px" onClick={console.log("bravo chiozzi")}/>
    <DisabledTextField placeholder="medea.luca@gmail.com" width="300px"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
