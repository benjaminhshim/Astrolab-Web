import React, { Component } from 'react';
import Nav from '../../components/Nav';
import { Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';

import './Home.css';
import StreetView from '../../components/MapPOV/StreetView';
import MapView from "../../components/MapPOV/MapView"
class Home extends Component {
    state = {
        modal: false,
        selectedMarker: [],
        redirectTo: null
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
        if (this.state.redirectTo === "bookmarks") {
            return <Redirect to={{pathname: "/bookmarks"}} />
        } else {
            if (this.props.yelpResults.length === 1) {
                return (
                    <div className="home-body">
                        <Nav />
                        <p className="tc" id="home-header">Home</p>
                        <MapView
                            search={this.props.googleMapsResult}
                            location={this.props.googleMapsLocation}
                            lat={this.props.googleMapsLat}
                            lon={this.props.googleMapsLon}
                            yelpResults={this.props.yelpResults} 
                            onMarkerClick={this.onMarkerClick}/>

                        <div>
                            <Modal
                                isOpen={this.state.modal}
                                toggle={this.toggleModal}
                                className={this.props.className}
                                id="home-modal">
                                <ModalHeader>
                                    <div id="home-modal-header">
                                        <h5>{this.props.yelpResults[0].default_name}</h5>
                                        <div id="home-modal-address">
                                       
                                            <div>
                                                <p>
                                                    {this.props.yelpResults[0].address1}
                                                </p>
                                                <p>
                                                    {this.props.yelpResults[0].address2}
                                                </p>
                                               
                                            </div>
                                        
                                    
                                        </div>
                                        <button id="home-modal-open-btn" className="grow" style={{marginTop: '15px'}}>Open</button>
                                        <div id="home-modal-action-div">
                                            <div className="home-modal-action-btn">
                                                <img alt=""
                                                    id="home-modal-save-btn" 
                                                    className="grow" 
                                                    src='/assets/images/AstrolabIconImages/BookmarksFilledMainNav.png'
                                                    style={{width: "15px!important"}}/>
                                                <p>Save</p>
                                            </div>
                                            <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-call-btn" 
                                                className="grow" 
                                                src='/assets/images/AstrolabIconImages/Call.png'/>
                                                <p>Call</p>
                                            </div>
                                            <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-review-btn" 
                                                className="grow" 
                                                src='/assets/images/AstrolabIconImages/AddReview.png'/>
                                                <p>Review</p>
                                            </div>
                                            <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-directions-btn" 
                                                className="grow" 
                                                src='/assets/images/AstrolabIconImages/Directions.png'/>
                                                <p>Directions</p>
                                            </div>
                                        </div>
                                    </div>
        
                                </ModalHeader>
                                {/* <ModalBody>
                                    <div>
                                        <p>Reviews</p>
                                        <p>* * * * * </p>
                                    </div>                                
        
                                    <div>
                                        <p>Popular Products</p>
                                        
                                    </div>
        
                                    <br />
        
                                    <br />
        
                                   
                                </ModalBody> */}
                            </Modal>
                        </div>
        
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
                                                <p>
                                                    {this.props.markerResults.display_phone}
                                                </p>
                                            </div>
                                        }
                                    
                                        </div>
                                        <button id="home-modal-open-btn" className="grow" style={{marginTop: '15px'}}>Open</button>
                                        <div id="home-modal-action-div">
                                            <div className="home-modal-action-btn">
                                                <img alt=""
                                                    id="home-modal-save-btn" 
                                                    className="grow" 
                                                    src='/assets/images/AstrolabIconImages/BookmarksFilledMainNav.png'
                                                    style={{width: "15px!important"}}
                                                    onClick={() => {this.saveItem(this.props.markerResults); this.setState({redirectTo: 'bookmarks'})}}/>
                                                <p>Save</p>
                                            </div>
                                            <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-call-btn" 
                                                className="grow" 
                                                src='/assets/images/AstrolabIconImages/Call.png'/>
                                                <p>Call</p>
                                            </div>
                                            <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-review-btn" 
                                                className="grow" 
                                                src='/assets/images/AstrolabIconImages/AddReview.png'/>
                                                <p>Review</p>
                                            </div>
                                            <div className="home-modal-action-btn">
                                            <img alt=""
                                                id="home-modal-directions-btn" 
                                                className="grow" 
                                                src='/assets/images/AstrolabIconImages/Directions.png'/>
                                                <p>Directions</p>
                                            </div>
                                        </div>
                                    </div>
        
                                </ModalHeader>
                                {/* <ModalBody>
                                    <div>
                                        <p>Reviews</p>
                                        <p>* * * * * </p>
                                    </div>                                
        
                                    <div>
                                        <p>Popular Products</p>
                                        
                                    </div>
        
                                    <br />
        
                                    <br />
        
                                   
                                </ModalBody> */}
                            </Modal>
                        </div>
        
                    </div>
                )
            }
        }

        
        
    }
}

export default Home;
