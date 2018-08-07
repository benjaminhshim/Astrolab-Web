import React, {Component} from 'react';
import Nav from '../../components/Nav';
import BookmarksNav from '../../components/BookmarksNav';
import './Bookmarks.css';
import bookmarksList from '../Bookmarks/bookmarks.json';
import BookmarksItem from '../../components/BookmarksItem';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";


class Bookmarks extends Component {
    state = {
        search: "",
        location: "",
        lat:"",
        lon:"",
        modal: false,
        results: [],
        yelpResults: []
    };

    componentDidMount() {
        
        this.loadBookmarks();

      };

      loadBookmarks = () => {
        API.getBookmarks()
          .then(res => {

            this.setState({ results: res.data });
            // this.setState({lat: this.state.yelpResults[0].coordinates.latitude, 
            //     lon: res.data[0].coordinates.longitude

            // })

            // this.props.onSearchLocation(this.state.search, this.state.location, this.state.lat, this.state.lon, res.data); //--> FIRES UP A PROP f(x) to send the search query to the map

            console.log("coodinates -->", res.data)
        })
        .catch(err => console.log(err));

      };
    

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="bookmarks-body">
                <Nav />
                <div className="relative">
                    <p className="tc" id="explore-header">Saved</p>
                    <img  
                        src='/assets/images/AstrolabIconImages/BookmarksEditResting.png'
                        alt=""
                        id="explore-filter"
                        className="fr w2 h2 absolute top-0"
                        onClick={this.toggleModal}/>
                </div>

                <BookmarksNav />

                <form className="pa4 black-80">
                    <div className="measure center">
                        <input 
                            id="bookmarks-search" 
                            className="input-reset ba b--white pa2 mb2 db w-100 br3"
                            type="text" 
                            placeholder="Search" 
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange} />
                    </div>
                </form>

                <div>
                    <main className="mw6 center">
                        {this.state.results.map(i => (
                            <BookmarksItem
                                name={i.name}
                                icon={i.icon} 
                                />
                        ))}
                    </main>
                </div>

            </div>
        )
    }
}

export default Bookmarks;