import React from "react";
import { Modal, Button, Text, Grid, Input, Row, Checkbox, Spacer } from "@nextui-org/react";
import YellowButton from "./../components/yellowButton";
import OrangeButton from "./../components/orangeButton";
import TextField from "./../components/textField";
import SelectNumber from "./../components/selectNumber";
import SelectActive from "./../components/select";
import DateInput from "../components/dateInput";
import SelectMultipleProducts from "./../components/selectMultipleProducts";

export default function CreateOffer({width,height}) 
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
          text="Create"
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
        <Text size={24} weight="bold" >Create Offer</Text>
        <Modal.Body>
          <Row justify="center" xs={12} alignItems='baseline'> 
        <TextField label="Name" width="300px" handleChange={handleChange}/>
        <Spacer x='6'/>
        <TextField label="Description" width="300px" handleChange={handleChange}/>
      </Row>
      <Spacer y="1"/>
      <Row justify="center" xs={12} display='flex' alignItems='center' align="top"> 
        <TextField label="Price(€)" width="300px" handleChange={handleChange}/>
        <Spacer x='6'/>
        <SelectNumber width="300px" height="40px" label="Quantity"  />
      </Row>
      <Spacer y='1'/>
      <Row justify="center" xs={12} display='flex' alignItems='center'> 
      <Spacer x='4'/>
        <DateInput width="300px" height="40px" label="Start"/>
        <Spacer x='14'/>
        <DateInput width="300px"height="40px" label="Finish"/>
        <Spacer x='10'/>
      </Row>
      <Spacer y='1.5'/>

    <Row justify="center" xs={12} alignItems="center">
    <SelectActive width="330px"height="40px" boolActive="Active"/>
    <Spacer x="6"/>
    <SelectMultipleProducts width="330px"height="40px" product="Panino al salame" />

    </Row>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingLeft:'4vw', paddingBottom:'5vw'}} >
          <div style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
          <OrangeButton height='60px' width="120px" text="Submit" textsize='20' onPress={closeHandler}/>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
