import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import YellowButton from "./yellowButton";

export default function Popup({text,heigth}) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <YellowButton auto shadow onClick={handler} height={heigth} >
        {text}
      </YellowButton>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Text size={14}>Do you want to delete this account?</Text>
        <Modal.Body>
          <Row justify="space-between">
          </Row>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center', display:'flex', paddingLeft:'4vw'}} >
          <div style={{justifyContent:'center', display:'flex'}}>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          </div>
          <Button auto onPress={closeHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
