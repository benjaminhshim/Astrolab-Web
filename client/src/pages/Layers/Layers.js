import React, {Component} from 'react';
import Nav from '../../components/Nav';
import './Layers.css';
import LayersItem from '../../components/LayersItem';
import layersList from './layers.json';


const categories = ["Bars", "Cafes", "General", "Home + Garden", "Landmarks", "Nature", "Nightlife", "Restaurants", "Retail", "Transportation"]

class Layers extends Component {
    state = {
        search: "",
        location: "",
        lat:"",
        lon:"",
        modal: false,
        isChecked: false,
        layersList,
        results: [],
        yelpResults: [],

    };
    // END state declaration, BEGIN FUNCTIONS

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
        console.log("name, value", name, value);
    };

    // SUBMIT FORM 

   

    //MODAL 
    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };

    // BEGIN RENDERING 


    render() {
        return (
            <div className="layers-body">
                <Nav />
                <p className="tc" id="layers-header">Layers</p>
                <p className="tc" id="layers-subheader">Specify what you see</p>
                <br />
                <main className="mw6 center">

                {this.state.layersList.map(i => (
                    
                    <LayersItem 
                        title={i.title}
                        icon={i.icon}



                        />
                ))}
                </main>
            </div>
        )
    }
}

export default Layers;