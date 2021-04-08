import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilltersForm.defaultProps = {
    onSubmit: null,
}

function PostFilltersForm(props) {
    const { onSubmit } = props;
    const [input, setInput] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleInput (e) {
        setInput(e.target.value);
        if(!onSubmit) return;
        
        if(typingTimeoutRef.curren){
            clearTimeout(typingTimeoutRef.curren);
        }
        typingTimeoutRef.curren = setTimeout(() =>{
            const valuesInput = {
                input:e.target.value
            }
            onSubmit(valuesInput);
        },300)}

    return (
        <div>
            <input type="text" value={input} onChange={handleInput}/>
        </div>
    );
}

export default PostFilltersForm;