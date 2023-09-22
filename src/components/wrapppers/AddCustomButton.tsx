import { Button } from "antd";

interface ButtonProps {
  type?: "primary" | "dashed" | "default";
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
  text?: string;
}

const defaultProps: ButtonProps = {
  type: "default",
  onClick: () => {},
  style: {},
  text: "Add",
};

const styleProps: React.CSSProperties = {
  background:
    "radial-gradient(circle, rgba(212,167,249,0.9473039215686274) 0%, rgba(219,195,240,1) 99%)",
  padding: "0px 28px 19px 28px",
  height: "5vh",
  textAlign: "center",
  textDecoration: "none",
  position: "relative",
  left: "46%",
  opacity: "1",
  borderColor: "#27005D",
  borderRadius: "10px",
  marginBottom: "10px",
  fontSize: "19px",
  color: "#670ab7",
};
export const AddCustomButton = ({ type, onClick, text}: ButtonProps
): React.ReactElement => {
  return (
    <div>
      <Button type={type} style={styleProps} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
};

AddCustomButton.defaultProps = defaultProps;
export default AddCustomButton;
