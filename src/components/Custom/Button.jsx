
const ButtonWithModal = ({ data }) => {
    const { text, style } = data; 

    const styleObj = {
        width: style?.width,
        height: style?.height,
        margin: style?.margin,
        padding: style?.padding,
        border: style?.border,
        borderRadius: style?.borderRadius,
        color: style?.textColor,
        fontSize: style?.fontSize,
        fontWeight: style?.fontWeight,
        backgroundColor: style?.backgroundColor,
    };

    return ( 
        <button style={styleObj} >{text}</button>
    );
}
 
export default ButtonWithModal;