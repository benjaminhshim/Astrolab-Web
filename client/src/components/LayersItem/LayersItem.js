import React, {Component} from 'react';

class LayersItem extends Component {
    render() {
        return (
            <article className="dt w-100 b--black-05 pb2 mt3 layers-item" href="#0">

                <div className="dtc w2 w3-ns v-mid">
                    <input className="mr1" type="checkbox" id="" value="" />
                </div>

                <div className="dtc v-mid pl3">
                    <h1 className="f6 f5-ns lh-title mv0">{this.props.title} </h1>
                </div>

                <div className="dtc v-mid tr">
                    <img className="f6 w-10 h-10 b--black-10 dim pointer pv1 black-60" src={this.props.icon} alt=""/>
                </div>
                
            </article>
        )
    }
}

export default LayersItem;