import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Explore.css";
// import ExploreModal from '../../components/ExploreModal';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ExploreItem from '../../components/ExploreItem';
import layersList from '../Layers/layers.json';
import exploreList from '../Explore/explore.json';
import API from "../../utils/API";

class Explore extends Component {
    state = {
        search: "",
        location: "",
        lat:"",
        lon:"",
        modal: false,
        layersList,
        exploreList,
        results: [],
        yelpResults: []
    };
    // END state declaration, BEGIN FUNCTIONS

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("name, value", name, value);
    };

    // SUBMIT FORM 

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior
        event.preventDefault();
        console.log('this is submit log', this.state.lon, this.state.search, 'and props', this.state.lat, this.state.location);

        API.getYelpLocations(this.state.location, this.state.search)
            .then(res => {
                this.setState({ yelpResults: res.data });
                this.setState({lat: this.state.yelpResults[0].coordinates.latitude, 
                    lon: res.data[0].coordinates.longitude

                })
                this.props.onSearchLocation(this.state.search, this.state.location, this.state.lat, this.state.lon, res.data); //--> FIRES UP A PROP f(x) to send the search query to the map

                console.log("coodinates -->", this.state.lat, this.state.lon, res.data)
            })
            .catch(err => console.log(err));

        //   this.setState({search: '', location: ''});
    };

    //MODAL 
    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };

    // BEGIN RENDERING 


    render() {
        return (
            <div className="explore-body">
                <Nav />
                <div className="relative">
                    <p className="tc" id="explore-header">Search</p>
                    <img  
                        src='/assets/images/AstrolabIconImages/FilterMapImg.png'
                        alt=""

                        id="explore-filter"
                        className="fr w2 h2 absolute top-0"
                        onClick={this.toggleModal}
                    />
                </div>

                <div>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className={this.props.className}
                    >
                        <ModalHeader>
                            Customize Explore
                            <img  
                                src='/assets/images/AstrolabIconImages/FilterMapActive.png'
                                alt=""

                                id="explore-filter-active"
                                className="fr w2 h2 absolute top-0"
                                onClick={this.toggleModal}
                            />
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <p>Slide to set search distance</p>
                                <img 
                                    src='/assets/images/AstrolabIconImages/ExploreSliderTrack.png'
                                    alt=""
                                    id="explore-slider-track"
                                    className="fr absolute w-75 top-4"/>
                                <img 
                                    src='/assets/images/AstrolabIconImages/ExploreSlider.png'
                                    alt=""

                                    id="explore-slider"
                                    className="fr absolute w2"
                                />
                                <span id="explore-distance" className="absolute">
                                    <p>80 mi</p>
                                </span>
                            </div>

                            <br />
                            <br />

                            <div>
                                <p>Sort by</p>
                                <button
                                    class="f6 link ph3 pv2 mb2 dib white bg-black"
                                    id="explore-btn-abc"
                                >
                                    Alphabetical
                </button>
                                <button
                                    class="f6 link ph3 pv2 mb2 dib white bg-black"
                                    id="explore-btn-closest"
                                >
                                    Closest
                </button>
                            </div>

                            <br />

                            <div>
                                <p>Select layers to display</p>
                                <p>Match map layers</p>
                                <div>
                                    {this.state.layersList.map(i => (
                                        <button className="explore-layers-btn">{i.title}</button>
                                    ))}
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>

                <form
                    className="pa4 black-80"
                    onSubmit={event =>
                        this.handleFormSubmit(event, this.state.search, this.state.location, this.state.lat, this.state.lon, this.state.yelpResults)
                    }
                >
                    <div className="measure center">
                        <input
                            id="explore-search"
                            className="input-reset ba b--white pa2 mb2 db w-100 br3"
                            type="text"
                            placeholder="Search"
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange}
                        />
                        <input
                            id="explore-location"
                            className="input-reset ba b--white pa2 mb2 db w-100 br3"
                            type="text"
                            placeholder="Current Location"
                            value={this.state.location}
                            name="location"
                            onChange={this.handleInputChange}
                        />
                        {/* this would be a good place to execute Yelp API Autocomplete */}
                    </div>
                    <button style={{ visibility: "hidden" }}>submit</button>
                </form>


                <div style={{position:"relative"}}>
                    <main className="mw6 center search-results">
                        {this.state.yelpResults.map(i => (
                            <ExploreItem name={i.name} icon={i.categories[0].title} />
                        ))}
                    </main>
                </div>

                <div>{this.state.results}</div>
            </div>
        );
    }
}

export default Explore;

