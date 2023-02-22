import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddNewProduct from './pages/addNewProduct';
import ModifyProduct from './pages/modifyProduct';
import ViewProduct from './pages/viewProduct';
import CreateOffer from './pages/createOffer';
import ModifyOffer from './pages/modifyOffer';
import AddNewAccount from './pages/addNewAccount';
import PopupDeleteAccount from './components/popup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /*
   <AddNewProduct width="800" height="800"></AddNewProduct>

   <ViewProduct width="800" height="800" name="chiozzi" description="molto buono" price="20" 
quantity="5" category="Snack" boolActive="Non Active" kcal="500" fats="200" satured_fats="80" carbohydrates="800"
sugars="20" proteins="30" fibers="30" salt="9"></ViewProduct>

 <ModifyProduct width="800" height="800" name="chiozzi" description="molto buono" price="20" 
 quantity="5" category="Snack" boolActive="Non Active" kcal="500" fats="200" satured_fats="80" carbohydrates="800"
 sugars="20" proteins="30" fibers="30" salt="9"></ModifyProduct>

 <CreateOffer width="800" height="800"> </CreateOffer>

 <ModifyOffer width="800" height="800" name="Mega offerta" description="super conveniente" price="500" 
quantity="10" start='2023-02-21' finish="2023-02-01" active="Active"> </ModifyOffer>

 <AddNewAccount width="800" height="800"></AddNewAccount>

 <PopupDeleteAccount width="400px" height="200"></PopupDeleteAccount>
  */
 <AddNewProduct width="800" height="800"></AddNewProduct>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
