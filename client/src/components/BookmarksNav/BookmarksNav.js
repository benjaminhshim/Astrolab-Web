import React, {Component} from 'react';
import './BookmarksNav.css';

class BookmarksNav extends Component {

    render() {
        return (
            <div className="dt dt--fixed bookmarks-nav center">
                <div className="dtc tc pv3 br">
                    Locations
                </div>
                <div className="dtc tc pv3 br">
                    Products
                </div>
                <div className="dtc tc pv3">
                    Vouchers
                </div>
            </div>
        )
    }
}

export default BookmarksNav;