import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Explore.css";
// import ExploreModal from '../../components/ExploreModal';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ExploreItem from '../../components/ExploreItem';
import layersList from '../Layers/layers.json';
import exploreList from '../Explore/explore.json';
import API from "../../utils/API";
import axios from 'axios';



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
        yelpResults: [],
<<<<<<< HEAD
        categoryAlias: '',
        icon:""
            };
    // END state declaration, BEGIN FUNCTIONS
    // componentDidMount() {
    //     this.setState({
    //         search: 'coffee',
    //         location: 'los angeles'
    //     })
    // }
=======
        categoryIcon: '',
        faded: 'bookmarked'
    };
>>>>>>> master

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior
        event.preventDefault();
<<<<<<< HEAD
        // this.setState({categoryAlias: this.state.search})
// icon logic to be applied prior to passing it in
=======
        // this.setState({categoryIcon: this.state.search})
        this.props.setCategoryIcon(this.state.search);

>>>>>>> master
        API.getYelpLocations(this.state.location, this.state.search)
            .then(res => {
                this.setState({ yelpResults: res.data });
                console.log(res.data)
                this.setState({
                    lat: this.state.yelpResults[0].coordinates.latitude, 
                    lon: res.data[0].coordinates.longitude,
                    categoryAlias: res.data[0].categories[0].alias
                })

                this.props.onSearchLocation(this.state.search, this.state.location, this.state.lat, this.state.lon, res.data); //--> FIRES UP A PROP f(x) to send the search query to the map

                console.log("coodinates -->", this.state.categoryAlias, this.state.lon, res.data)
        
            })
            .catch(err => console.log(err));

        //   this.setState({search: '', location: ''});
    };

<<<<<<< HEAD

    handlePicChange = (alias) => {
        // const { name, value } = event.target;
        let searchIcon = "";
        
        console.log("this is the log for render  -->", alias, layersList[7].categories.includes(alias), "<--")
        if (layersList[0].categories.includes(alias)) 
         {
           return searchIcon = '../../assets/images/AstrolabIconImages/Bars.png';
                // break;
        } 
        
        else if (layersList[1].categories.includes(alias)) {
            console.log("this is the log for render  -->", alias, layersList[1].categories.includes(alias), "<--")

            return searchIcon = '../../assets/images/AstrolabIconImages/Cafe.png';
            // break;
        } 
        else if (layersList[2].categories.includes(alias)) {
            console.log("this is the log for render  -->", alias, layersList[2].categories.includes(alias), "<--")

            return searchIcon = '../../assets/images/AstrolabIconImages/General.png';
            // break;
        } 
        else if (layersList[3].categories.includes(alias)) {
            return searchIcon = '../../assets/images/AstrolabIconImages/Hammer.png';
            // break;
        } 
        else if (layersList[4].categories.includes(alias)) {
            return searchIcon = '../../assets/images/AstrolabIconImages/Landmark.png';
            // break;
        } 
        else if (layersList[5].categories.includes(alias)) {
            console.log("this is the log for render  -->", alias, layersList[5].categories.includes(alias), "<--")

            return searchIcon = '../../assets/images/AstrolabIconImages/MtnFlag.png';
            // break;
        } 
        else if (layersList[6].categories.includes(alias)) {
            return searchIcon = '../../assets/images/AstrolabIconImages/Disco.png';
            // break;
        } 
        else if (layersList[7].categories.includes(alias)) {
            console.log("this is the log for render  -->", alias, layersList[7].categories.includes(alias), "<--")

            console.log("match restaurants")
            searchIcon = layersList[7].icon;
           return searchIcon
            // break;
        } 
        else if (layersList[8].categories.includes(alias)) {
            return searchIcon = '../../assets/images/AstrolabIconImages/Retail.png';
            // break;
        } 
        else if (layersList[9].categories.includes(alias)) {
            console.log("this is the log for render  -->", alias, layersList[9].categories.includes(alias), "<--")

            return searchIcon = '../../assets/images/AstrolabIconImages/Transpo.png';
            // break;
        } 
        else {
            return searchIcon = '../../assets/images/AstrolabIconImages/General.png';
        }

    };
    // SUBMIT FORM 



    //MODAL 
=======
>>>>>>> master
    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };

    fadeBookmark = data => {
        if (this.state.bookmarkArray.indexOf(data) === -1) {
            this.setState({bookmarkArray: [...this.state.bookmarkArray, data]})

        }
    }


    render() {
<<<<<<< HEAD




        // switch(this.state.categoryAlias) {
        //     case (layersList[0].categories.includes(this.state.categoryAlias)):
        //         searchIcon = '../../assets/images/AstrolabIconImages/Bars.png';
        //         break;
        //     case 'cafe':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Cafe.png';
        //         break;
        //     case 'general':
        //         searchIcon = '../../assets/images/AstrolabIconImages/General.png';
        //         break;
        //     case 'home':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Hammer.png';
        //         break;
        //     case 'landmark':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Landmark.png';
        //         break;
        //     case 'nature':
        //         searchIcon = '../../assets/images/AstrolabIconImages/MtnFlag.png';
        //         break;
        //     case 'club':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Disco.png';
        //         break;
        //     case 'restaurant':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Fork.png';
        //         break;
        //     case 'retail':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Retail.png';
        //         break;
        //     case 'transportation':
        //         searchIcon = '../../assets/images/AstrolabIconImages/Transpo.png';
        //         break;
        // }
=======
        let searchIcon = '';

        switch(this.props.categoryIcon) {
            case 'bars':
                searchIcon = '../../assets/images/AstrolabIconImages/Bars.png';
                break;
            case 'cafe':
                searchIcon = '../../assets/images/AstrolabIconImages/Cafe.png';
                break;
            case 'general':
                searchIcon = '../../assets/images/AstrolabIconImages/General.png';
                break;
            case 'home':
                searchIcon = '../../assets/images/AstrolabIconImages/Hammer.png';
                break;
            case 'landmark':
                searchIcon = '../../assets/images/AstrolabIconImages/Landmark.png';
                break;
            case 'nature':
                searchIcon = '../../assets/images/AstrolabIconImages/MtnFlag.png';
                break;
            case 'club':
                searchIcon = '../../assets/images/AstrolabIconImages/Disco.png';
                break;
            case 'restaurant':
                searchIcon = '../../assets/images/AstrolabIconImages/Fork.png';
                break;
            case 'retail':
                searchIcon = '../../assets/images/AstrolabIconImages/Retail.png';
                break;
            case 'transportation':
                searchIcon = '../../assets/images/AstrolabIconImages/Transpo.png';
                break;
        }
>>>>>>> master


        return (
            <div className="explore-body">
                <Nav />
                <div className=" explore-header-div">
                    <p className="tc" id="explore-header">Search</p>
                    <img  
                        src='/assets/images/AstrolabIconImages/FilterMapImg.png'
                        alt=""

                        id="explore-filter"
                        className="fr w2 h2 grow top-0"
                        onClick={this.toggleModal}
                    />
                </div>

                <div>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className={this.props.className}
                        id="explore-modal"
                    >
                        <ModalHeader>
                            <h1>Customize Explore</h1>
                            <img  
                                src='/assets/images/AstrolabIconImages/FilterMapActive.png'
                                alt=""

                                id="explore-filter-active"
                                className="fr w2 h2 absolute grow top-0"
                                onClick={this.toggleModal}
                            />
                        </ModalHeader>
                        <ModalBody>
                            {/* <div>
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
                            <br /> */}

                            <div>
                                <p>Sort by</p>
                                <button
                                    className="f6 link ph3 pv2 mb2 dib white bg-black grow"
                                    id="explore-btn-abc">

                                    Alphabetical
                                </button>
                                <button
                                    className="f6 link ph3 pv2 mb2 dib white bg-black grow"
                                    id="explore-btn-closest">
                                    Closest
                                </button>
                            </div>

                            <br />
                
                            <div>
                                <p>Select layers to display</p>
                                <p id="map-match">Match map layers</p>
                                <div>
                                    {this.state.layersList.map(i => (
                                        <button 
                                            key={i.title}
                                            className="explore-layers-btn">{i.title}</button>
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
                            autoComplete="off"
                            onFocus={e => e.target.placeholder = ""} 
                            onBlur={e => e.target.placeholder = "Search"}
                            onChange={this.handleInputChange}
                        />
                        <input
                            id="explore-location"
                            className="input-reset ba b--white pa2 mb2 db w-100 br3"
                            type="text"
                            placeholder="Current Location"
                            value={this.state.location}
                            name="location"
                            autoComplete="off"
                            onFocus={e => e.target.placeholder = ""} 
                            onBlur={e => e.target.placeholder = "Current Location"}
                            onChange={this.handleInputChange}
                        />
                        {/* this would be a good place to execute Yelp API Autocomplete */}
                    </div>
                    <button style={{ visibility: "hidden" }}>submit</button>
                </form>

<<<<<<< HEAD

                <div style={{position:"relative"}}>
                    <main className="mw6 center search-results">
                        {this.state.yelpResults.map(i => (
                            <ExploreItem 
                                name={i.name} 
                                key={i.alias}
                                catAlias={this.state.categoryAlias}
                                icon={this.state.icon} 
                                bookmarkData={i}
                                bookmarkThis={this.bookmarkThis}
                                onMarkerClick={this.onMarkerClick}
                                generatePic={this.handlePicChange(this.state.categoryAlias)}
                                />
                        ))}
                    </main>
                </div>
=======
                {this.props.yelpResults.length > 0 &&
                    <div style={{position:"relative"}}>
                        <main className="mw6 center search-results">
                            {this.props.yelpResults.map(i => (
                                this.props.bookmarkArray.includes(i.name) ?
                                    <ExploreItem 
                                        name={i.name} 
                                        key={i.alias}
                                        // icon={i.categories[0].title}
                                        icon={searchIcon} 
                                        bookmarkData={i}
                                        bookmarkThis={this.bookmarkThis}
                                        onMarkerClick={this.onMarkerClick}
                                        isBookmarked={this.fadeBookmark}
                                        yelpResults={this.props.yelpResults}
                                        bookmarkArray={this.props.bookmarkArray}
                                        faded={this.state.faded}
                                    />
                                :
                                    <ExploreItem 
                                        name={i.name} 
                                        key={i.alias}
                                        // icon={i.categories[0].title}
                                        icon={searchIcon} 
                                        bookmarkData={i}
                                        bookmarkThis={this.bookmarkThis}
                                        onMarkerClick={this.onMarkerClick}
                                        isBookmarked={this.props.isBookmarked}
                                        yelpResults={this.props.yelpResults}
                                        bookmarkArray={this.props.bookmarkArray}
                                        
                                    />                                
                                
                            ))}
                        </main>
                    </div>
                }
                
>>>>>>> master

                <div>{this.state.results}</div>
            </div>
        );
    }
}

export default Explore;

