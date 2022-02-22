import { useState } from 'react';

const CustomImage = ({ children, data }) => {
    const [showOffer, setShowOffer] = useState(false);
    const { boxStyle, imgStyle } = data; 

    const boxStylesObj = {
        width: boxStyle?.width,
        height: boxStyle?.height,
        margin: boxStyle?.margin,
        padding: boxStyle?.padding,
        border: boxStyle?.border,
        borderRadius: boxStyle?.borderRadius,
        display: showOffer?'block': 'flex', 
        flexDirection: boxStyle?.flexDirection,
        justifyContent: boxStyle?.justifyContent,
        alignItems: boxStyle?.alignItems
        
    };

    const imgStyleObj = {
        width: imgStyle?.width,
        height: imgStyle?.height,
    };

    const imgSrc = {
        src: data?.src || '/pack_element.png'
    }

    return (  
        <div style={boxStylesObj}  >
            {!showOffer 
                ? <img src={imgSrc.src} alt="test" style={imgStyleObj} onClick={()=>setShowOffer(true)} />
                : <>{children}</>
            }
        </div>
    );
}
 
export default CustomImage;