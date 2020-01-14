// import React, { Component } from 'react';
// import axios from "axios"

// function latlngToUtmk(x, y){ 
//     let p = window.olleh.maps.UTMK.valueOf(new window.olleh.maps.LatLng(x, y))
//     return p
// }

// class Map extends Component {
//     state = {
//       isLoading: true,
//       currentExhibitions: [],
//       map: Map
//     };

//     markers = []
//     displayMarker = (map, exhibitions) => {
//       this.markers.some((marker, index) => {
//         marker.erase();
//       })
//       this.markers = null
//       this.markers = []
      
//       exhibitions.some((element, idx) => {
//         let point = latlngToUtmk(element.longitude, element.latitude)
//         let marker = new window.olleh.maps.overlay.Marker({
//           position: point
//         });
//         marker.setMap(map);        
//         marker['attribute'] = element
//         this.markers.push(marker)
//         })
      
//       var latitudes = []
//       var longitudes = []
//       exhibitions.some((element) => {
//         latitudes.push(element.latitude);
//         longitudes.push(element.longitude);
//       })

//       var top = Math.max.apply(null, latitudes)
//       var bottom = Math.min.apply(null, latitudes)
//       var right = Math.max.apply(null, longitudes)
//       var left = Math.min.apply(null, longitudes)

//       var lb = new window.olleh.maps.LatLng(left, bottom); // 좌측 하단 좌표
//       var rt = new window.olleh.maps.LatLng(right, top); // 우측 상단 좌표
//       var bounds = new window.olleh.maps.Bounds(lb, rt);
      
//       exhibitions.some((element) => {
//         map.panToBounds(bounds);
//         // map.setZoom(1)
//       })
//     }

//     async componentDidMount() {
//         console.log('map_componentDidMount()')
//         var mapOpts = {
//           center: new window.olleh.maps.UTMK(960823.7, 1945435.52),
//           zoom: 8,
//           mapTypeId: 'ROADMAP',
//           panControl: true,
//           disableDefaultUI: true,
//           zoomControl: true
//         };
//         var map = new window.olleh.maps.Map(document.getElementById("map_div",),
//             mapOpts
//         );
//         this.setState({map: map})
//     }

//     render() {
//       const { map } = this.state;

//       this.displayMarker(map, this.props.exhibitions);

//       return (
//           <div id='map_div' style={{
//               width:'100%',
//               height:'100%'
//           }}>
//           </div>
//       );
//     }
// }

// export default Map;