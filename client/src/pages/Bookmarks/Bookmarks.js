import React, {Component} from 'react';
import Nav from '../../components/Nav';
import BookmarksNav from '../../components/BookmarksNav';
import './Bookmarks.css';
import bookmarksList from '../Bookmarks/bookmarks.json';
import BookmarksItem from '../../components/BookmarksItem';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import axios from 'axios';



class Bookmarks extends Component {
    state = {
        search: "",
        location: "",
        lat:"",
        lon:"",
        results: [],
        yelpResults: [],
        bookmarkSearch: null,
        bookmarkSearchResults: [],
    };

    componentDidMount() {
        this.loadBookmarks();
      };

      loadBookmarks = () => {
        API.getBookmarks()
          .then(res => {
            this.setState({ results: res.data });
            // console.log("coodinates -->", res.data)
        })
        .catch(err => console.log(err));
      };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });

        if (this.state.search === '') {
            this.setState({bookmarkSearchResults: [], bookmarkSearch: false})
        }
    }
    
    handleSubmit = (event, search) => {
        event.preventDefault();

        if (this.state.search === '') {
            this.setState({bookmarkSearch: false});
        } else {
            this.setState({bookmarkSearch: true});
        }

        const bookmarkArray = [];
        this.state.results.forEach(i => {
            if (i.name.toLowerCase().includes(this.state.search) || i.name.includes(this.state.search)) {
                bookmarkArray.push(i)
            }
        })
        this.setState({bookmarkSearchResults: bookmarkArray})
    }

    deleteBookmark = id => {
        API.deleteBookmark(id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        this.state.results.forEach(i => {
            let bookmarkIndex = 0;
            if (i._id === id) {
                bookmarkIndex = this.state.results.indexOf(i);
                console.log(bookmarkIndex);
                this.state.results.splice(bookmarkIndex, 1);
                this.setState({
                    results: this.state.results
                });
            };
        })
    }



    render() {
        return (
            <div className="bookmarks-body">
                <Nav />
                <div className="relative">
                    <p className="tc" id="explore-header">Saved</p>
                    {/* <img  
                        src='/assets/images/AstrolabIconImages/BookmarksEditResting.png'
                        alt=""
                        id="explore-filter"
                        className="fr w2 h2 absolute top-0"
                        onClick={this.toggleModal}/> */}
                </div>

                <BookmarksNav />

                <form className="pa4 black-80" onSubmit={event => this.handleSubmit(event, this.state.search)}>
                    <div className="measure center">
                        <input 
                            id="bookmarks-search" 
                            className="input-reset ba b--white pa2 mb2 db w-100 br3"
                            type="text" 
                            placeholder="Search" 
                            value={this.state.search}
                            onfocus="this.placeholder=''"
                            name="search"
                            autoComplete="off"
                            onFocus={e => e.target.placeholder = ""} 
                            onBlur={e => e.target.placeholder = "Search"}
                            onChange={this.handleInputChange} />
                    </div>
                </form>

                <div>
                    <main className="mw6 center bookmark-results">
                        {this.state.bookmarkSearch &&
                        this.state.search !== ''
                            ? 
                                this.state.bookmarkSearchResults.map(i => (
                                    <BookmarksItem
                                        name={i.name}
                                        icon={i.icon} 
                                        id={i._id}
                                        deleteBookmark={this.deleteBookmark}
                                        reloadBookmarks={this.loadBookmarks}
                                        />
                                ))
                            :
                                this.state.results.map(i => (
                                    <BookmarksItem
                                        name={i.name}
                                        icon={i.icon} 
                                        id={i._id}
                                        deleteBookmark={this.deleteBookmark}
                                        reloadBookmarks={this.loadBookmarks}
                                        />
                                ))
                        }

                    </main>
                </div>

            </div>
        )
    }
}

export default Bookmarks;