import { useState } from 'react';
import TncModal from './TncModal';
import { Dialog } from '@material-ui/core';




const Button = ({ children, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

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
        <>
            <button style={styleObj} onClick={handleClick}>{text}</button>
            { isOpen ? 

                <Dialog onClose={handleClick} aria-labelledby="tnc-modal" open={isOpen}>
                    <TncModal/>
                </Dialog>
            
            : ''}
        </>
    );
}
 
export default Button;