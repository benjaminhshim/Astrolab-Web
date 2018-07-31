import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Explore.css";
// import ExploreModal from '../../components/ExploreModal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ExploreItem from "../../components/ExploreItem";
import layersList from "../Layers/layers.json";
import exploreList from "../Explore/explore.json";
import API from "../../utils/API";

class Explore extends Component {
    state = {
        search: "",
        location: "",
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
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        console.log('this is submit log', this.props.search, this.state.search, 'and props', this.props.location, this.state.location);

        API.getYelpLocations(this.state.location, this.state.search)
            .then(res => {
                this.setState({ yelpResults: res.data });
                console.log("this is the Yelp Object", this.state.yelpResults)
            })
            .catch(err => console.log(err));

        //   this.setState({search: '', location: ''});
        this.props.onSearchLocation(this.state.search, this.state.location);
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
                    <p className="tc" id="explore-header">
                        Search
          </p>
                    <img
                        src="/assets/images/AstrolabIconImages/FilterMapImg.png"
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
                                src="/assets/images/AstrolabIconImages/FilterMapActive.png"
                                id="explore-filter-active"
                                className="fr w2 h2 absolute top-0"
                                onClick={this.toggleModal}
                            />
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <p>Slide to set search distance</p>
                                <img
                                    src="/assets/images/AstrolabIconImages/ExploreSliderTrack.png"
                                    id="explore-slider-track"
                                    className="fr absolute w-75 top-4"
                                />
                                <img
                                    src="/assets/images/AstrolabIconImages/ExploreSlider.png"
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
                        this.handleFormSubmit(event, this.state.search, this.state.location)
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


// ********** OLD CODE ****************//

// this.setState({search: '', location: ''});
// this.props.onSearchLocation(search, location);

//saves all articles queried to the database using map
// saveArticles = () => {

//     console.log("balls", this.state.recipes)

//     this.state.recipes.map(((recipe, index) => {
//         let myIndex = index
//         console.log("Index is ", index, this.state.isToggleOn);
//         console.log(this.state.isToggleOn.includes({ index: index }))

//         return (API2.saveBook({
//             name: recipe.name,
//             alias: recipe.alias,
//             image_url: recipe.image_url
//         }));

//     }))
// }

// //saves a toggled article
// savemyArticle = index => {
//     let i = index.index;
//     console.log("balls", i)

//     console.log("balls", this.state.recipes[index.index])

//     let myIndex = index
//     console.log("Index is ", index.index, this.state.isToggleOn);
//     console.log(this.state.isToggleOn.includes(index.index))

//     return (API2.saveLocation({
//         name: this.state.recipes[index.index].name,
//         alias: this.state.recipes[index.index].alias,
//         image_url: this.state.recipes[index.index].image_url

//     }));

// }

// loadLocations = () => {
//     API.getLocations()
//         .then(res =>
//             this.setState({ recipes: res.data, term: "", location: "" })
//                 event.preventDefault();
//                 console.log('test');
//                 this.setState({search: '', location: ''});
//                 this.props.onSearchLocation(search, location);
//         )
//         console.log("this is the state", this.state.recipes)

//         .catch(err => console.log(err));
// };

//   onCheckboxBtnClick(selected) {
//     const index = this.state.isToggleOn.indexOf(selected);
//     if (index < 0) {
//       this.state.isToggleOn.push(selected);
//     } else {
//       this.state.isToggleOn.splice(index, 1);
//     }
//     this.setState({ isToggleOn: [...this.state.isToggleOn] });
//     this.savemyArticle(index);;
//   }

// searchMovie = movie => {
//     axios.get(`https://api.giphy.com/v1/gifs/search?q=${movie}&api_key=dc6zaTOxFJmzC&limit=1`)
//     .then(res => this.setState({results: res.data.data[0].title}))
//     .catch(err => console.log(err));
// }

// onSearchLocation = (event, search, location) => {
//     event.preventDefault();
//     console.log('test');
//     this.setState({search: '', location: ''});
//     this.props.onSearchLocation(search, location);
// }

//          removemyArticle = index => {
//     let i = index.index;
//     console.log("rm balls", i)

//     console.log("rm balls", this.state.recipes[index.index])

//     let myIndex = index
//     console.log("Index is ", index.index, this.state.isToggleOn);
//     console.log(this.state.isToggleOn.includes(index.index))

//     return (API2.saveLocation({
//       name: this.state.recipes[index.index].name,
//       alias: this.state.recipes[index.index].alias,
//       image_url: this.state.recipes[index.index].image_url

//     })),     this.loadLocations();
//     ;

//   }

//   removemyArticle = index => {
//     let i = index.index;
//     console.log("rm balls", i)

//     console.log("rm balls", this.state.recipes[index.index]._id)

//     let myIndex = index
//     console.log("Index is ", index.index, this.state.isToggleOn);
//     console.log(this.state.isToggleOn.includes(index.index))

//     return (API2.deleteLocation(this.state.recipes[index.index]._id));

//   }
