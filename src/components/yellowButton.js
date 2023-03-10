import { Button } from "@nextui-org/react";

const yellowButton = ({ height, width, text, onPress, textSize }) => {
  return (
    <Button
      style={{
        height: height,
        width: width,
        background: "#FDEB8B",
        color: "black",
        fontWeight: "bolder",
        fontSize: textSize,
        borderRadius: "50px",
        minWidth: "0",
      }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default yellowButton;