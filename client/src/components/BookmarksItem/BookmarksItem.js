import React, { Component } from 'react';
import './BookmarksItem.css';
import API from '../../utils/API';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class BookmarksItem extends Component {
    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };

    render() {
        return (
            <div>
                <article className="dt w-100 b--black-05 pb2 mt3 bookmarks-item" href="#0">

                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns lh-title mv0">{this.props.name} </h1>
                    </div>

                    <div className="dtc v-mid tr">
                        {/* <img className="f6 h-10 b--black-10 dim pointer pv1 black-60" src={this.props.icon} alt="" /> */}
                        <img alt=""
                            className="dim pointer"
                            id="home-modal-save-btn"
                            src='/assets/images/AstrolabIconImages/BookmarksFilledMainNav.png'
                            style={{ width: "20px!important" }}
                            onClick={this.toggleModal}
                            />

                    </div>

                </article>

                <div>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className={this.props.className}
                        id="bookmarks-modal">
                        <ModalBody>
                            <div id="bookmarks-modal-header">
                                <h5>Remove Bookmark?</h5>
                                <p>Please press below to confirm</p>
                                <button 
                                    id="bookmarks-modal-delete-btn" 
                                    className="grow"
                                    style={{marginTop: '50px'}}
                                    onClick={() => {this.props.deleteBookmark(this.props.id); this.setState({modal: false}); this.props.reloadBookmarks}} 

                                    >Remove
                                </button>
                               
                            </div>

                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default BookmarksItem;