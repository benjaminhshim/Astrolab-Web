import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Layers.css";
import LayersItem from "../../components/LayersItem";
import layersList from "./layers.json";
import API from "../../utils/API"

class Layers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            location: "",
            myString: "",
            lat: "",
            lon: "",
            modal: false,
            isChecked: false,
            layersList,
            results: [],
            yelpResults: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        // END state declaration, BEGIN FUNCTIONS
    }
    handleInputChange = event => {
        const target = event.target;

        console.log("event target -->", target, 'value-->', target.value, target.id, '-- keyid')        // Update the appropriate state

        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = this.state.layersList[target.id];
        console.log("event name -->", name, 'value-->', target.value, this.state.layersList[target.id].isChecked, '-- keyid')        // Update the appropriate state

        var stateCopy = Object.assign({}, this.state);
        stateCopy.layersList[target.id].isChecked = value;
        this.setState(stateCopy);
    }

    componentDidUpdate() {
        var queryObject = Object.assign({}, this.state.layersList);
        console.log("queryObject-->", queryObject)

        var queryArray = Object.keys(queryObject).map(function (key) {
            return Number(key), queryObject[key];
        });

        console.log(queryArray);

        // var queryArray = queryObject[0].categories)
        // console.log("queryArray-->", queryArray)

        var queryString = ""
        console.log("queryString-->", queryString)

        for (let index = 0; index < queryArray.length; index++) {
            console.log("hello loop")
            if (queryObject[index].isChecked) {
                console.log("match --> push to array");
                queryString += queryObject[index].categories.toString()
            }

        }

        this.fireUpYelpSearch(queryString.toString())
    }


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
                            id={i.layersList}
                            balls={this.handleInputChange}
                            isChecked={this.state.layersList[i.title]}
                            myId={i.myId}
                        />
                    ))}
                </main>
            </div>
        );
    }
}
export default Layers;
