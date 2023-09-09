import { useState, useEffect } from 'react';
 


// The text you want to animate

const TypingTextAnimation = ({ textType }) => {

    const textToType = textType;
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < textToType.length) {
                setText((prevText) => prevText + textToType.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setText('');
                setIndex(0);
            }
        }, 400); //
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="typing-text-animation">
            <span style={{textAlign:'center'}} >{text}</span>
        </div>
    );
};

export default TypingTextAnimation;