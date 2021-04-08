import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../hooks/useMagicColor';
import '../components/MagicBox.scss';

MagicBox.prototypeProps = {};
function MagicBox(props) {
    const color = useMagicColor();
    return (
        <div
            className="box-color"
            style={{backgroundColor:color}}
        >
            {/* hello */}
        </div>
    );
}

export default MagicBox;