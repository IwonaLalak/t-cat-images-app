import React, {Component} from 'react';
import {Form, Col, Row} from "react-bootstrap";
import Select from "react-select";
import reactSelectStyles from './../../utilities/reactSelectStyles/reactSelectStyles'
import staticFilterOptions from "../../utilities/staticFilterOptions/staticFilterOptions";


class ImagesFilterForm extends Component {

    state = {
        orderValue: null,
        typeValue: null,
        categoryValue: null,
        breedValue: null
    }

    componentDidMount() {

        this.setState({
            orderValue: staticFilterOptions.orderOptions.find(i => i.default),
            typeValue: staticFilterOptions.typeOptions.find(i => i.default),
        })
    }

    onChangeSelect = (selected, select) => {
        this.setState({
            [select.name]: selected
        })

        this.prepareFiltersToSend(select.name, selected)
    }

    prepareFiltersToSend(newValueKey, newValue) {

        let obj = Object.assign(this.state)

        obj[newValueKey] = newValue;

        let data = {
            order: obj.orderValue.value,
            type: obj.typeValue.value,
            category: (obj.categoryValue) && obj.categoryValue.id,
            breed: (obj.breedValue) && obj.breedValue.id,
        }

        console.log(data)   // todo: up to HomeView or FavouriteView

    }

    render() {

        let {orderValue, typeValue, categoryValue, breedValue} = this.state;
        const {categories, breeds} = this.props;

        return (
            <Form>
                <Form.Group>
                    <Row>
                        <Col lg={6}>
                            <Form.Label>Order</Form.Label>
                            <Select
                                name={'orderValue'}
                                value={orderValue}
                                options={staticFilterOptions.orderOptions}
                                styles={reactSelectStyles.styles}
                                onChange={this.onChangeSelect}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Type</Form.Label>
                            <Select
                                name={"typeValue"}
                                value={typeValue}
                                options={staticFilterOptions.typeOptions}
                                styles={reactSelectStyles.styles}
                                onChange={this.onChangeSelect}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col lg={6}>
                            <Form.Label>Category</Form.Label>
                            <Select
                                name={"categoryValue"}
                                value={categoryValue}
                                options={categories}
                                getOptionLabel={({name}) => name}
                                getOptionValue={({id}) => id}
                                styles={reactSelectStyles.styles}
                                onChange={this.onChangeSelect}
                                placeholder={'any'}
                            />
                        </Col>
                        <Col lg={6}>
                            <Form.Label>Breed</Form.Label>
                            <Select
                                name={"breedValue"}
                                value={breedValue}
                                options={breeds}
                                getOptionLabel={({name}) => name}
                                getOptionValue={({id}) => id}
                                styles={reactSelectStyles.styles}
                                onChange={this.onChangeSelect}
                                placeholder={'any'}
                            />
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        );
    }
}

export default ImagesFilterForm;