import React, { Component } from 'react';
import './ExploreItem.css';
import axios from 'axios';


class ExploreItem extends Component {

    state = {
        selectedMarker: [],
        name: ""
    }

    saveItem = data => {
        console.log(data)
        axios.post('/bookmarksApi', {
            name: data,
            alias: "data.alias",
            image_url: "TEST"
            
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });

        if (this.props.bookmarkArray.indexOf(data) === -1) {
            this.props.isBookmarked(data);
        }
    }

    
    render() {
        return (
            
            <div>
                {this.props.faded === 'bookmarked' ?
                    <article style={{opacity: 0.5}} className="dt w-100 b--black-05 pb2 mt3 explore-item" href="#0">

                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns lh-title mv0">{this.props.name} </h1>
                        </div>
                        <div className="dtc v-mid tr">
                        {this.props.categoryIcon.length > 0 ? 
                            <img className="f6 h-10 b--black-10 dim pointer pv1 black-60" 
                                src={this.props.icon} alt="" 
                                onClick={() => this.saveItem(this.props.name)} />
                        :
                            <img className="f6 h-10 b--black-10 dim pointer pv1 black-60 dn" 
                                src={this.props.icon} alt="" 
                                onClick={() => this.saveItem(this.props.name)} />
                        }
                            

                        </div>
                    </article>

                :
                    <article className="dt w-100 b--black-05 pb2 mt3 explore-item" href="#0">

                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns lh-title mv0">{this.props.name} </h1>
                        </div>
                        <div className="dtc v-mid tr">
                        {this.props.categoryIcon.length > 0 ? 
                            <img className="f6 h-10 b--black-10 dim pointer pv1 black-60" 
                                src={this.props.icon} alt="" 
                                onClick={() => this.saveItem(this.props.name)} />
                        :
                            <img className="f6 h-10 b--black-10 dim pointer pv1 black-60 dn" 
                                src={this.props.icon} alt="" 
                                onClick={() => this.saveItem(this.props.name)} />
                        }
                        </div>
                    </article>
                }
            </div>
        )
    }
}

export default ExploreItem;

