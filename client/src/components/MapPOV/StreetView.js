import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import {
    withScriptjs, withGoogleMap, GoogleMap, StreetViewPanorama, OverlayView, Marker
} from 'react-google-maps';

const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
})

class StreetView extends Component {

    render() {

        const GoogleMapExample = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBLABLHosCgujr2vQuUKO-c0d4oEmMx35o&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div className="embed-responsive-item center d-block mt-5" id='google-maps-display' frameborder="0" style={{ height: `575px`, width: '450px', border: 0, }} />,
                mapElement: <div style={{ height: `100%` }} />,
                center: { lat: this.props.lat, lng: this.props.lon } || { lat: 34.032744, lng: -118.419917 },
                pov: {
                    heading: 34,
                    pitch: 10
                },
            }),
            withScriptjs,
            withGoogleMap
        )(props =>
            <GoogleMap defaultZoom={14} defaultCenter={props.center}>
                <StreetViewPanorama defaultPosition={props.center} visible>
                    {this.props.yelpResults.map(i => (
                    
                        <Marker
                            position={{ lat: i.coordinates.latitude, lng: i.coordinates.longitude }}
                            label={i.name}
                            onClick={console.log("yo yo ", i.name)}
                        />
                        // <ExploreItem name={i.name} icon={i.categories[0].title} />
                        ))}


                    {/* <OverlayView
                        position={{ lat: 34.032744, lng: -118.419917 }}
                        mapPaneName={OverlayView.OVERLAY_LAYER}
                        getPixelPositionOffset={getPixelPositionOffset}
                    >
                        <div style={{ background: `red`, color: `white`, padding: 5, borderRadius: `50%` }}>
                            OverlayView
                  </div>
                    </OverlayView> */}
                </StreetViewPanorama>
                

            </GoogleMap>

        );

        return (
            <div>
                <GoogleMapExample
                />
            </div>
        );
    }
};
export default StreetView;


