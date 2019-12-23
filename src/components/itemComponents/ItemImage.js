import React from 'react';
import PropTypes from 'prop-types';

const ItemImage = ({url}) => {
    return (
        <div className={'ItemImage'}>
            <img src={url} alt={url} />
        </div>
    );
};

ItemImage.propTypes = {
    url:PropTypes.string
};

export default ItemImage;