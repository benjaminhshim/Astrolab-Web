import React, { Component } from 'react';
import './BookmarksItem.css';
class BookmarksItem extends Component {
    render() {
        return (
            <article className="dt w-100 b--black-05 pb2 mt3 bookmarks-item" href="#0">

                <div className="dtc v-mid pl3">
                    <h1 className="f6 f5-ns lh-title mv0">{this.props.name} </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 h-10 b--black-10 dim pointer pv1 black-60" src={this.props.icon} alt="" />
                    <img alt=""
                        id="home-modal-save-btn"
                        src='/assets/images/AstrolabIconImages/BookmarksFilledMainNav.png'
                        style={{ width: "20px!important" }}
                        onClick={() => this.saveItem(this.props.markerResults)} />
                    <p>Delete</p>

                </div>

            </article>
        )
    }
}

export default BookmarksItem;