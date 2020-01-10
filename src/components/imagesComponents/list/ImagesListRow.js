import React from 'react';
import PropTypes from 'prop-types';
import ItemContainer from "../../itemComponents/ItemContainer";

const ImagesListRow = ({item: {id, fav_id, url, height, width}}) => {
    return (
        <div className={'ImagesListRow'}>
            <ItemContainer>
                <ItemContainer.ItemImage url={url} height={height} width={width}/>
                <ItemContainer.ItemActions id={id} fav_id={fav_id}/>
            </ItemContainer>
        </div>
    );
};

ImagesListRow.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            fav_id: PropTypes.string,
            url: PropTypes.string,
            height: PropTypes.number,
            width: PropTypes.number,
        })
    )
};

export default ImagesListRow;