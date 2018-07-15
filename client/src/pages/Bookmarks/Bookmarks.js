import React, {Component} from 'react';
import Nav from '../../components/Nav';
import './Bookmarks.css';

class Bookmarks extends Component {
    render() {
        return (
            <div className="bookmarks-body">
                <Nav />
                <h1>Bookmarks</h1>
            </div>
        )
    }
}

export default Bookmarks;