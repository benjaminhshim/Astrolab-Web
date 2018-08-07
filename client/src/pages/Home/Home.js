import React, { Component } from 'react';
import Nav from '../../components/Nav';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';

import './Home.css';
import StreetView from '../../components/MapPOV/StreetView';
import MapView from "../../components/MapPOV/MapView"
class Home extends Component {
    state = {
        modal: false,
        selectedMarker: []
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
        this.props.selectLocation;
    };

    onMarkerClick = data => {
        console.log(data)
        this.setState({selectedMarker: data});
        this.toggleModal();
        this.props.setMarkerModal(data);
    }

    saveItem = data => {
        console.log(data.name);
        console.log(data.alias);
        axios.post('/bookmarksApi', {
            name: data.name,
            alias: data.alias
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {

        console.log('results: ', this.props);

        if (this.props.yelpResults.length === 0) {
            return (
                <div className="home-body">
                
                    <Nav />
                    <p className="tc" id="home-header">Home</p>
                    
                    <div>
                        <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggleModal}
                            className={this.props.className}
                            id="home-modal"
                        >
                            <ModalHeader>
                                <div id="home-modal-header">
                                    <h5>Name</h5>
                                    <div id="home-modal-address">
                                        <p>
                                            <span>Address Line 1</span>
                                            <span>Address Line 2</span>
                                        </p>
                                
                                        <p>Address Line 3</p>
                                    </div>
                                    <button id="home-modal-open-btn">Open</button>
                                    <div id="home-modal-action-div">
                                        <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-save-btn" 
                                                src='/assets/images/AstrolabIconImages/BookmarksFilledMainNav.png'
                                                style={{width: "20px!important"}}/>
                                            <p>Save</p>
                                        </div>
                                        <div className="home-modal-action-btn">
                                        <img alt=""
                                            id="home-modal-call-btn" 
                                            src='/assets/images/AstrolabIconImages/Call.png'/>
                                            <p>Call</p>
                                        </div>
                                        <div className="home-modal-action-btn">
                                        <img alt=""
                                            id="home-modal-review-btn" 
                                            src='/assets/images/AstrolabIconImages/AddReview.png'/>
                                            <p>Review</p>
                                        </div>
                                        <div className="home-modal-action-btn">
                                        <img alt=""
                                            id="home-modal-directions-btn" 
                                            src='/assets/images/AstrolabIconImages/Directions.png'/>
                                            <p>Direction</p>
                                        </div>
                                    </div>
                                </div>
    
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <p>Reviews</p>
                                    <p>* * * * * </p>
                                </div>                                
    
                                <div>
                                    <p>Popular Products</p>
                                    
                                </div>
    
                                <br />
    
                               
                            </ModalBody>
                        </Modal>
                    </div>
    
                
                    {/* {/{this.props.googleMapsResult}+${this.props.googleMapsLocation}`} */}
                    {/* <iframe 
                        id="google-maps-display"
                        width="450"
                        height="575"
                        frameBorder="0" 
                        style={{border:0}} 
                        className="embed-responsive-item center d-block mt-5"
                        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBhSBjmU-q9Jf9qFxhho_cfQjWwo2aJcYs&zoom=14&q=${this.props.googleMapsResult}+${this.props.googleMapsLocation}`}
                        allowFullScreen
                        title="Google Maps">
    
                    </iframe> */}
    
                </div>
            )
        } else {
            return (
                <div className="home-body">
                
                    <Nav />
                    <p className="tc" id="home-header">Home</p>
    
                    {this.props.selectedLocation ? 
                        <StreetView
                        search={this.props.googleMapsResult}
                        location={this.props.googleMapsLocation}
                        lat={this.props.googleMapsLat}
                        lon={this.props.googleMapsLon}
                        yelpResults={this.props.yelpResults} />
                        :
                        <MapView
                        search={this.props.googleMapsResult}
                        location={this.props.googleMapsLocation}
                        lat={this.props.googleMapsLat}
                        lon={this.props.googleMapsLon}
                        yelpResults={this.props.yelpResults} 
                        // selectLocation={this.props.selectLocation}
                        selectLocation={this.toggleModal}
                        // markerClick={this.props.markerClick}
                        onMarkerClick={this.onMarkerClick}
                        />
                }
                    
                    <div>
                        <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggleModal}
                            className={this.props.className}
                            id="home-modal"
                        >
                            <ModalHeader>

                                <div id="home-modal-header">
                                    <h5>{this.props.markerResults.name}</h5>
                                    <div id="home-modal-address">
                                    {this.props.markerResults && this.props.markerResults.location &&
                                        <div>
                                            <p>
                                                {this.props.markerResults.location.display_address[0]}
                                            </p>
                                            <p>
                                                {this.props.markerResults.location.display_address[1]}
                                            </p>
                                        </div>
                                    }
                                
                                    </div>
                                    <button id="home-modal-open-btn">Open</button>
                                    <div id="home-modal-action-div">
                                        <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-save-btn" 
                                                src='/assets/images/AstrolabIconImages/BookmarksFilledMainNav.png'
                                                style={{width: "20px!important"}}
                                                onClick={() => this.saveItem(this.props.markerResults)}/>
                                            <p>Save</p>
                                        </div>
                                        <div className="home-modal-action-btn">
                                        <img alt=""
                                            id="home-modal-call-btn" 
                                            src='/assets/images/AstrolabIconImages/Call.png'/>
                                            <p>Call</p>
                                        </div>
                                        <div className="home-modal-action-btn">
                                        <img alt=""
                                            id="home-modal-review-btn" 
                                            src='/assets/images/AstrolabIconImages/AddReview.png'/>
                                            <p>Review</p>
                                        </div>
                                        <div className="home-modal-action-btn">
                                        <img alt=""
                                            id="home-modal-directions-btn" 
                                            src='/assets/images/AstrolabIconImages/Directions.png'/>
                                            <p>Direction</p>
                                        </div>
                                    </div>
                                </div>
    
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <p>Reviews</p>
                                    <p>* * * * * </p>
                                </div>                                
    
                                <div>
                                    <p>Popular Products</p>
                                    
                                </div>
    
                                <br />
    
                                <br />
    
                               
                            </ModalBody>
                        </Modal>
                    </div>
    
                
                    {/* {/{this.props.googleMapsResult}+${this.props.googleMapsLocation}`} */}
                    {/* <iframe 
                        id="google-maps-display"
                        width="450"
                        height="575"
                        frameBorder="0" 
                        style={{border:0}} 
                        className="embed-responsive-item center d-block mt-5"
                        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBhSBjmU-q9Jf9qFxhho_cfQjWwo2aJcYs&zoom=14&q=${this.props.googleMapsResult}+${this.props.googleMapsLocation}`}
                        allowFullScreen
                        title="Google Maps">
    
                    </iframe> */}
    
                </div>
            )
        }
        
    }
}

export default Home;