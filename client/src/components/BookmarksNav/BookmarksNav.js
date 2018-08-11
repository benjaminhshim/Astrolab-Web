import React, {Component} from 'react';
import './BookmarksNav.css';

class BookmarksNav extends Component {

    render() {
        return (
            <div className="dt dt--fixed bookmarks-nav center">
                <div className="dtc tc br">
                    Locations
                </div>
                <div className="dtc tc br">
                    Products
                </div>
                <div className="dtc tc">
                    Vouchers
                </div>
            </div>
        )
    }
}

export default BookmarksNav;