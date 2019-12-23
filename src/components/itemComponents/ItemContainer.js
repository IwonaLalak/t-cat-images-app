import React, {Component} from 'react';
import ItemImage from "./ItemImage";
import ItemActions from "./ItemActions";

class ItemContainer extends Component{

    static ItemImage = ItemImage;
    static ItemActions = ItemActions

    render(){

    let {children} = this.props;

        return (
            <div className={'ItemContainer'}>
                {children}
            </div>
        );
    }
}

export default ItemContainer;