import React, { Component } from 'react';
import axios from "axios"

//--- 하단은 gis 관련 코드입니다. ---
function markerDisplay(res, map){
    res.data.DATA.some((element, idx) => {
      if(element.xcode && element.ycode){
        let point = latlngToUtmk(element.ycode, element.xcode)
        let marker = new window.olleh.maps.overlay.Marker({
          position: point,
          caption: '공영주차장',
          map: map
        });
        // marker.setIcon('https://www.gunpopark.or.kr/images/main/about_icon.png');
        marker['attribute'] = element
        marker.onEvent('click', function(e) {
          window.olleh.infoWindowShow(this)
        });
      }
    })
  }

function latlngToUtmk(x, y){ 
    let p = window.olleh.maps.UTMK.valueOf(new window.olleh.maps.LatLng(x, y))
    return p
}
//--- 상단은 gis 관련 코드입니다. ---

class Map extends Component {

    async componentDidMount() {
        var mapOpts = {
            center: new window.olleh.maps.UTMK(960823.7, 1945435.52),
            zoom: 8,
            mapTypeId: 'ROADMAP'
        };
        var map = new window.olleh.maps.Map(document.getElementById("map_div",),
            mapOpts
        );

        // axios({
        //     method:'get',
        //     url : 'https://kt_map.gitlab.io/data/public_parking.json',
        //     responseType: 'json',
        //   }).then(res => {
        //     markerDisplay(res, map);
        //   }).catch(err => console.log(err));
    }

    render() {
        return (
            <div id='map_div' style={{
                width:'100%',
                height:'100%'
            }}>
            </div>
        );
    }
}

export default Map;