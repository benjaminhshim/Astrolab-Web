import React, {Component} from 'react';
import Nav from '../../components/Nav';
import './Layers.css';
import LayersItem from '../../components/LayersItem';
import layersList from './layers.json';

class Layers extends Component {
    state = {
        layersList
    }

    render() {
        return (
            <div className="layers-body">
                <Nav />
                <p className="tc" id="layers-header">Layers</p>
                <p className="tc" id="layers-subheader">Specify what you see</p>
                <br />
                <main className="mw6 center">

                {this.state.layersList.map(i => (
                    <LayersItem 
                        title={i.title}
                        icon={i.icon}/>
                ))}

                </main>
            </div>
        )
    }
}

export default Layers;