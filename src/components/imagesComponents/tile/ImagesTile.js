import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemContainer from "../../itemComponents/ItemContainer";

const ImagesTile = ({item: {id, url, height, width}}) => {
    return (
            <div className={'ImagesTile'}>
                <ItemContainer>
                    <ItemContainer.ItemImage url={url} height={height} width={width}/>
                    <ItemContainer.ItemActions id={id}/>
                </ItemContainer>
            </div>
    );
};

ImagesTile.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
        })
    )
};

export default ImagesTile;