import { DeleteOutlined } from "@ant-design/icons"

interface DeleteIconProps {
    style: React.CSSProperties
}

const defaultProps: DeleteIconProps = {
style : {}
}

const styleProps: React.CSSProperties  ={
    color: "white",
    backgroundColor: "#670ab7",
    fontSize: "30px",
    border: "1px solid 670ab7",
}

const DeleteCustomIcon = () => {
  return (
    <div> <DeleteOutlined style={styleProps} />
    </div>
  )
}

DeleteCustomIcon.defaultProps = defaultProps;
export default DeleteCustomIcon