import React, { Component } from 'react';
import { compose, withProps, withState, withHandlers } from "recompose";
import {
    withScriptjs, withGoogleMap, GoogleMap, InfoWindow, OverlayView, Marker
} from 'react-google-maps';



class MapView extends Component {


    render() {
        console.log(this.props.yelpResults);
        const GoogleMapExample2 = compose(
            withProps({
              googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBLABLHosCgujr2vQuUKO-c0d4oEmMx35o&v=3.exp&libraries=geometry,drawing,places",
              loadingElement: <div style={{ height: `100%` }} />,
              containerElement: <div className="embed-responsive-item center d-block mt-5" id='google-maps-display' frameBorder="0" style={{ height: `575px`, width: '450px' }} />,
              mapElement: <div style={{ height: `100%` }} />,
            }),
            withState('zoom', 'onZoomChange', 8),
            withHandlers(() => {
              const refs = {
                map: undefined,
              }
              return {
                onMapMounted: () => ref => {
                  refs.map = ref
                },
                onZoomChanged: ({ onZoomChange }) => () => {
                  onZoomChange(refs.map.getZoom())
                }
              }
            }),
            withScriptjs,
            withGoogleMap
          )(props =>
            // <div>
            <GoogleMap
              defaultCenter={ {lat: this.props.lat, lng: this.props.lon } || { lat: 34.032744, lng: -118.419917 }}
              zoom={14}
              width="450"
              height="575"              
              ref={props.onMapMounted}
              onZoomChanged={props.onZoomChanged}
              panorama={props.getStreetView}
            >
              {this.props.yelpResults.map(j => (
                      
                  <Marker
                      position={{ lat: j.coordinates.latitude, lng: j.coordinates.longitude }}                      
                      title={j.id}
                      key={j.alias}
                      onClick={() => this.props.onMarkerClick(j)}
                  />
                  // <ExploreItem name={i.name} icon={i.categories[0].title} />
              ))}
            </GoogleMap>


          );

        return (
            <div>
                <GoogleMapExample2/>
            </div>
        );
    }
};
export default MapView;


