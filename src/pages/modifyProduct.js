import React from "react";
import { Modal, Button, Text, Grid, Input, Row, Checkbox, Spacer } from "@nextui-org/react";
import YellowButton from "./../components/yellowButton";
import OrangeButton from "./../components/orangeButton";
import TextField from "./../components/textField";
import DisabledTextField from "./../components/disabledTextField";
import SelectNumber from "./../components/selectNumber";
import SelectCategory from "./../components/selectCategory";
import DisabledSelectActive from "./../components/disabledDropdown";

export default function ModifyProduct({width,height,name,description,price,quantity,category,boolActive,
    kcal,fats,satured_fats,carbohydrates,sugars,proteins,fibers,salt}) 
{
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const handleChange = (event) => {
    console.log(event.target.value);}

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");}

  return (
    <div>
      <YellowButton 
          height="30px"
          width="80px"
          text="Modify"
          textSize={12}
          auto shadow
          onPress={handler}>
      </YellowButton>

    
      <Modal style={{ height:`${height}px`}}
      width={width}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Text size={24} weight="bold" >Modify Product</Text>
        <Modal.Body>
          <Row justify="center" xs={12} alignItems='baseline'> 
        <TextField label="Name" width="300px" initialValue={name} handleChange={handleChange}/>
        <Spacer x='6'/>
        <TextField label="Description" width="300px" initialValue={description} handleChange={handleChange}/>

      </Row>
      <Row justify="center" xs={12} alignItems='center'> 
        <TextField label="Price(€)" width="300px" initialValue={price} handleChange={handleChange}/>
        <Spacer x='6'/>
        <SelectNumber width="300px" height="40px" label="Quantity" quantity={quantity} />
      </Row>
      <Spacer y='0.3'/>
      <Row justify="center" xs={12} alignItems='baseline'> 
       <SelectCategory width="330px" height="40px" category={category}/>
        <Spacer x='6'/>
        <DisabledSelectActive width="330px"height="40px" boolActive={boolActive}/>
      </Row>

    <Row justify="center" xs={12} alignItems='baseline'>
    <Text size={20} weight="bold" >Nutritional Values</Text>
    </Row>
    <Row justify="center" xs={12} alignItems='baseline'>
    <DisabledTextField label="Kcal" width="100px" placeholder={kcal}/>
        <Spacer x='3'/>
        <DisabledTextField label="Fats" width="100px" placeholder={fats}/>
        <Spacer x='3'/>
        <DisabledTextField label="Satured Fats" width="100px" placeholder={satured_fats}/>
        <Spacer x='3'/>
        <DisabledTextField label="Carbohydrates" width="100px" placeholder={carbohydrates}/>

    </Row>
    <Spacer y='0.3'/>
    <Row justify="center" xs={12} alignItems='baseline'>
    <DisabledTextField label="Sugars" width="100px" placeholder={sugars} />
        <Spacer x='3'/>
        <DisabledTextField label="Proteins" width="100px" placeholder={proteins}/>
        <Spacer x='3'/>
        <DisabledTextField label="Fibers" width="100px" placeholder={fibers}/>
        <Spacer x='3'/>
        <DisabledTextField label="Salt" width="100px" placeholder={salt}/>

    </Row>

        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingLeft:'4vw',paddingBottom:'3vw'}} >
          <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
          <OrangeButton height='60px' width="120px" text="Submit" textsize='20' onPress={closeHandler}/>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
