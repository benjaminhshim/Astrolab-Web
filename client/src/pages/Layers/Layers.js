import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Layers.css";
import LayersItem from "../../components/LayersItem";
import layersList from "./layers.json";
import API from "../../utils/API"

class Layers extends Component {
    state = {
        search: "",
        location: "",
        categories: {
            Bars: false,
            Cafés: false,
            General: false,
            Home: false,
            Landmarks: false,
            Nature: false,
            Nightlife: false,
            Restaurants: false,
            Retail: false,
            Transportation: false
        },
        lat: "",
        lon: "",
        modal: false,
        isChecked: false,
        layersList,
        results: [],
        yelpResults: []
    };
    // END state declaration, BEGIN FUNCTIONS

    handleInputChange = event => {

        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        let queryString = "";
        const target = event.target;
        //grabs checkbox input with category "name"

        console.log("this is the event target -->", event.target, "this is checked --", target.checked);

        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        // define consts value 
        this.setState(prevState => ({
            categories: {
                ...prevState.categories, // research exactly what's going on here, toggles categories ON ?? 
                [name]: value
            }
        }));

        const cats = this.state.categories // assigns state object to cats, containing boolean true for each toggled
        // cat

        console.log('this is cats', cats)
        //these should be exactly the same 
        console.log('selesctedCats', this.state.categories)

        // This contains nested loops which could be avoided by refactoring json data
        // to object instead of array, but not necessary.

        for (let index = 0; index < layersList.length; index++) {
            console.log(index, 'this is the index')
            for (var key in this.state.categories) {
                console.log(key, 'this is the key', this.state.categories, 'and categories from state!')

                let i = this.state.categories[key];
                console.log("this is i ", i, 'and the state cat key --- ', this.state.categories[key])
                
                console.log("this is the boolean -->", key, layersList[index].title);
                if(this.state.categories[key]){
                    console.log("this is the this.state.cats[keys] -->", this.state.categories[key]);

                    if (key === layersList[index].title) {
                        console.log('matched');
                        console.log('this is querystring', queryString, 'and the addition', layersList[index].categories)
                        queryString += layersList[index].categories
                        console.log('this is querystring', queryString, 'and the addition', layersList[index].categories)

                    }
                }
            }
            // console.log ("this is the key", key, layersList.length, this.state.categories.key)
            console.log("finsined sting s-- - >> ", queryString);
        }

        console.log("finsined sting s-- - >> ", queryString);
        this.fireUpYelpSearch (queryString)

    };

    // Handle STRING FORM
    fireUpYelpSearch = (query) => {

        console.log('this is layers checked log');

        API.getCategoriesLocations("los angeles", query)
            .then(res => {
                // this.setState({ yelpResults: res.data });
                console.log("this is the Yelp data -->>", res.data);
                // this.setState({lat: this.state.yelpResults[0].coordinates.latitude, 
                //     lon: res.data[0].coordinates.longitude

                // })
                // this.props.onSearchLocation(this.state.search, this.state.location, this.state.lat, this.state.lon, res.data); //--> FIRES UP A PROP f(x) to send the search query to the map

                // console.log("coodinates -->", this.state.lat, this.state.lon, res.data)
            })
            .catch(err => console.log(err));

        //   this.setState({search: '', location: ''});
    };

    // BEGIN RENDERING

    render() {
        return (
            <div className="layers-body">
                <Nav />
                <p className="tc" id="layers-header">
                    Layers
        </p>
                <p className="tc" id="layers-subheader">
                    Specify what you see
        </p>
                <br />
                <main className="mw6 center">
                    {this.state.layersList.map(i => (
                        <LayersItem
                            title={i.title}
                            icon={i.icon}
                            id={i.categories}
                            balls={this.handleInputChange}
                            isChecked={this.state.categories[i.title]}
                        />
                    ))}
                </main>
            </div>
        );
    }
}

export default Layers;
