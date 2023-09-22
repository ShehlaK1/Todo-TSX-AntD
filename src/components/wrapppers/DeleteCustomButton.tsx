import { Button } from "antd";
import DeleteCustomIcon from "./DeleteCustomIcon";

interface ButtonProps {
    type?: "primary" | "dashed" | "default";
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
}

const defaultProps: ButtonProps = {
  type: "default",
  onClick: () => {},
  style: {},
}

const styleProps : React.CSSProperties = {
    color: "white",
    backgroundColor: "#670ab7",
    border: "1px solid #670ab7",
    float: "right",
    padding: "0px 0px 0px 0px",
}
const DeleteCustomButton = ({type, onClick, }: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick} style={styleProps}>
        <DeleteCustomIcon/>
    </Button>
  )
}

DeleteCustomButton.defaultProps = defaultProps;
export default DeleteCustomButton