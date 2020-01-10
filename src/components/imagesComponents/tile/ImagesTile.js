import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemContainer from "../../itemComponents/ItemContainer";

const ImagesTile = ({item: {id,fav_id, url, height, width}}) => {
    return (
        <div className={'ImagesTile'}>
            <ItemContainer>
                <ItemContainer.ItemImage url={url} height={height} width={width}/>
                <ItemContainer.ItemActions id={id} fav_id={fav_id} allowUseKeydown={true}/>
            </ItemContainer>
        </div>
    );
};

ImagesTile.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            fav_id: PropTypes.string,
            url: PropTypes.string,
            height: PropTypes.any,
            width: PropTypes.any
        })
    ),
};

export default ImagesTile;