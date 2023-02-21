import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddNewProduct from './pages/addNewProduct';
import ModifyProduct from './pages/modifyProduct';
import ViewProduct from './pages/viewProduct';
import CreateOffer from './pages/createOffer';
import ModifyOffer from './pages/modifyOffer';


const root = ReactDOM.createRoot(document.getElementById('root'));

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

 <ModifyProduct width="800" height="800" name="chiozzi" description="molto buono" price="20" 
 quantity="5" category="Snack" boolActive="Non Active" kcal="500" fats="200" satured_fats="80" carbohydrates="800"
 sugars="20" proteins="30" fibers="30" salt="9"></ModifyProduct>

 <CreateOffer width="800" height="800"> </CreateOffer>
 <ModifyOffer width="800" height="800" name="Mega offerta" description="super conveniente" price="500" 
quantity="10" start="22/02/2023" finish="22/02/2023" active="Active"> </ModifyOffer>
  */
 /*<AddNewProduct width="800" height="800"></AddNewProduct>*/
 <ModifyOffer width="800" height="800" name="Mega offerta" description="super conveniente" price="500" 
quantity="10" start='2023-02-21' finish="2023-02-01" active="Active"> </ModifyOffer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
