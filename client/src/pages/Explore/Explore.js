import React, {Component} from 'react';
import Nav from '../../components/Nav';
import './Explore.css';
// import ExploreModal from '../../components/ExploreModal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ExploreItem from '../../components/ExploreItem';
import layersList from '../Layers/layers.json';
import exploreList from '../Explore/explore.json';
import axios from 'axios';

class Explore extends Component {
    
    state = {
        search: '',
        location: '',
        modal: false,
        layersList,
        exploreList,
        results: []
    }

    
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    // searchMovie = movie => {
    //     axios.get(`https://api.giphy.com/v1/gifs/search?q=${movie}&api_key=dc6zaTOxFJmzC&limit=1`)
    //     .then(res => this.setState({results: res.data.data[0].title}))
    //     .catch(err => console.log(err));
    // }

    onSearchLocation = (event, search, location) => {
        event.preventDefault();
        console.log('test');
        this.setState({search: '', location: ''});
        this.props.onSearchLocation(search, location);
    }

    render() {
        return (
            <div className="explore-body">
                <Nav />
                <div className="relative">
                    <p className="tc" id="explore-header">Explore</p>
                    <img  
                        src='/assets/images/AstrolabIconImages/FilterMapImg.png'
                        id="explore-filter"
                        className="fr w2 h2 absolute top-0"
                        onClick={this.toggleModal}/>
                </div>

                <div>
                    <Modal 
                        isOpen={this.state.modal} 
                        toggle={this.toggleModal} 
                        className={this.props.className}>
                        <ModalHeader>
                            Customize Explore
                            <img  
                                src='/assets/images/AstrolabIconImages/FilterMapActive.png'
                                id="explore-filter-active"
                                className="fr w2 h2 absolute top-0"
                                onClick={this.toggleModal}/>
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <p>Slide to set search distance</p>
                                <img 
                                    src='/assets/images/AstrolabIconImages/ExploreSliderTrack.png'
                                    id="explore-slider-track"
                                    className="fr absolute w-75 top-4"/>
                                <img 
                                    src='/assets/images/AstrolabIconImages/ExploreSlider.png'
                                    id="explore-slider"
                                    className="fr absolute w2"/>
                                <span 
                                    id="explore-distance"
                                    className="absolute">
                                        <p>80 mi</p>
                                </span>
                            </div>

                            <br />
                            <br />

                            <div>
                                <p>Sort by</p>
                                <button 
                                    class="f6 link ph3 pv2 mb2 dib white bg-black" id="explore-btn-abc">Alphabetical</button>
                                <button 
                                    class="f6 link ph3 pv2 mb2 dib white bg-black" id="explore-btn-closest">Closest</button>
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
                    onSubmit={event => this.onSearchLocation(event, this.state.search, this.state.location)}
                    >
                    <div className="measure center">
                        <input 
                            id="explore-search" 
                            className="input-reset ba b--white pa2 mb2 db w-100 br3"
                            type="text" 
                            placeholder="Search" 
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange} />
                        <input 
                            id="explore-location" 
                            className="input-reset ba b--white pa2 mb2 db w-100 br3" 
                            type="text" 
                            placeholder="Current Location" 
                            value={this.state.location}
                            name="location"
                            onChange={this.handleInputChange} />
                    </div>
                    <button style={{visibility: "hidden"}}>submit</button>
                </form>

                <div>
                    <main className="mw6 center">

                        {this.state.exploreList.map(i => (
                            <ExploreItem 
                                name={i.name}
                                icon={i.icon}/>
                        ))}

                    </main>
                </div>

                <div>{this.state.results}</div>
            </div>
        )
    }
}



export default Explore;