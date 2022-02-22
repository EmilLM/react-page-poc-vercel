const Container = ({ children, data }) => {

    const styleObj = {
        width: data.style?.width,
        height: data.style?.height,
        margin: data.style?.margin,
        padding: data.style?.padding,
        border: data.style?.border,
        borderRadius: data.style?.borderRadius,
        color: data.style?.textColor,
        backgroundColor: data.style?.backgroundColor,
    }

    return ( 
        <div style={styleObj}>
            {children}
        </div>
    );
}
 
export default Container;