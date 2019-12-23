import React, {Component} from 'react';
import {Accordion, Button, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import ImagesFilterForm from "./ImagesFilterForm";
import CategoriesService from "../../services/CategoriesService";
import BreedsService from "../../services/BreedsService";

class ImagesFilter extends Component {

    state = {
        categories: [],
        breeds: []
    }

    componentDidMount() {
        this.getCategories()
        this.getBreeds()
    }

    getCategories() {
        CategoriesService.getAllCategories().then(({data}) => {

            this.setState({categories:data})

        }).catch((err) => {

        })
    }

    getBreeds(){
        BreedsService.getAllBreeds().then(({data}) => {

            this.setState({breeds:data})

        }).catch((err) => {

        })
    }

    render() {

        const {categories,breeds} = this.state;

        return (
            <div id={'ImagesFilter'}>
                <Accordion>
                    <Accordion.Toggle as={Button} variant={"button"} eventKey={0}>
                        <FontAwesomeIcon icon={faFilter}/> set filters
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={0}>
                        <ImagesFilterForm categories={categories} breeds={breeds}/>
                    </Accordion.Collapse>
                </Accordion>
            </div>
        );
    }
}

export default ImagesFilter;