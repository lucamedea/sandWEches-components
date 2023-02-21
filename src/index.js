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
import AddNewProduct from './pages/addNewProduct';
import ModifyProduct from './pages/modifyProduct';
import ViewProduct from './pages/viewProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
const handleChange = (event) => {
  console.log(event.target.value);

};
root.render(
  /*
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

   <ViewProduct width="800" height="800" name="chiozzi" description="molto buono" price="20" 
quantity="5" category="Snack" boolActive="Non Active" kcal="500" fats="200" satured_fats="80" carbohydrates="800"
sugars="20" proteins="30" fibers="30" salt="9"></ViewProduct>

  */
 /*<AddNewProduct text="ADD" width="800" height="800"></AddNewProduct>*/
<ViewProduct width="800" height="800" name="chiozzi" description="molto buono" price="20" 
quantity="5" category="Snack" boolActive="Non Active" kcal="500" fats="200" satured_fats="80" carbohydrates="800"
sugars="20" proteins="30" fibers="30" salt="9"></ViewProduct>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
