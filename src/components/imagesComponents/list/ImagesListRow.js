import React from 'react';
import PropTypes from 'prop-types';
import ItemContainer from "../../itemComponents/ItemContainer";

const ImagesListRow = ({item: {id, url}}) => {
    return (
        <div className={'ImagesListRow'}>
            <ItemContainer>
                <ItemContainer.ItemImage url={url}/>
                <ItemContainer.ItemActions id={id}/>
            </ItemContainer>
        </div>
    );
};

ImagesListRow.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
        })
    )
};

export default ImagesListRow;