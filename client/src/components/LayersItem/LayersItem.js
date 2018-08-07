import React, { Component } from 'react';
import API from "../../utils/API"
class LayersItem extends Component {

        // this.handleInputChange = this.handleInputChange.bind(this);
    

    // handleInputChange(event) {
    //     const target = event.target;
    //     console.log("this is the event target -->" , event.target)
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    //     console.log(this.state.isGoing)

    // }


    fireUpYelpSearch = event => {

        console.log('this is layers checked log');

        API.getCategoriesLocations("los angeles", this.props.id)
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

    render() {
        return (
            <article className="dt w-100 b--black-05 pb2 mt3 layers-item" href="#0">

                <div className="dtc w2 w3-ns v-mid">
                    <input className="mr1"
                        name={[this.props.title]}
                        // yelpCats={this.props.id[this.props.title]}
                        type="checkbox"
                        onChange={this.props.balls}
                    />
                </div>

                <div className="dtc v-mid pl3">
                    <h1 className="f6 f5-ns lh-title mv0">{this.props.title} </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 w-10 h-10 b--black-10 dim pointer pv1 black-60" src={this.props.icon} alt="" />
                </div>

            </article>
        )
    }
}

export default LayersItem;