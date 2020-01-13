import React, { Component } from 'react';
import axios from "axios"

//--- 하단은 gis 관련 코드입니다. ---
function markerDisplay(res, map){
    res.data.DATA.some((element, idx) => {
      if(element.xcode && element.ycode){
        let point = latlngToUtmk(element.ycode, element.xcode)
        let marker = new window.olleh.maps.overlay.Marker({
          position: point,
          // caption: '공영주차장',
          map: map
        });
        // marker.setIcon('https://www.gunpopark.or.kr/images/main/about_icon.png');
        marker['attribute'] = element
        marker.onEvent('click', function(e) {
          window.olleh.infoWindowShow(this)
        });
        // clusterer.add(marker);
        // markerArr.push(marker)
      }
    })
  }

function latlngToUtmk(x, y){ 
    let p = window.olleh.maps.UTMK.valueOf(new window.olleh.maps.LatLng(x, y))
    return p
}

function markerArrBound (arr, map){
  let minX = 9999999, minY = 9999999, maxX = -9999999, maxY = -9999999;
  arr.some((markerEle, idx) => {
    let p = markerEle.getPosition()
    p.x<minX ? minX=p.x : minX=minX
    p.y<minY ? minY=p.y : minY=minY
    p.x>maxX ? maxX=p.x : maxX=maxX
    p.y>maxY ? maxY=p.y : maxY=maxY
  })
  var bound = new window.olleh.maps.Bounds(new window.olleh.maps.UTMK(minX, minY), new window.olleh.maps.UTMK(maxX, maxY))
  map.fitBounds(bound);
}
//--- 상단은 gis 관련 코드입니다. ---

class Map extends Component {
    state = {
      isLoading: true,
      currentExhibitions: []
    };
    mapZoomIn = () => {
      console.log('zoomin')
    }
    async componentDidMount() {
        var mapOpts = {
            center: new window.olleh.maps.UTMK(960823.7, 1945435.52),
            zoom: 8,
            mapTypeId: 'ROADMAP'
        };
        var map = new window.olleh.maps.Map(document.getElementById("map_div",),
            mapOpts
        );
        map.setZoom(6);

        // 마커들 한번에 보여주기 위한 코드
        // var lb = new window.olleh.maps.LatLng(36.2886, 127.329); // 좌측 하단 좌표
        // var rt = new window.olleh.maps.LatLng(36.3995, 127.468); // 우측 상단 좌표
        // var bounds = new window.olleh.maps.Bounds(lb, rt);
        // map.panToBounds(bounds);

        

        // var markerArr = []

        // var clusterer = new window.olleh.maps.overlay.MarkerClusterer({
        //   gap: 100,
        //   afterCluster: function (cluster) {
        //     cluster.onEvent('click', function(e){
        //       alert(cluster.getAllMarkers().length);
        //     });
        //   }
        // });

        // for (var i = 0; i < 1000; i++) {
        //   var marker = new window.olleh.maps.overlay.Marker({
        //     position: new window.olleh.maps.UTMK(
        //       960823.7 + Math.random() * 4000, 
        //       1945435.52 + Math.random() * 3000)
        //   });
        //   clusterer.add(marker);
        //    markerArr.push(marker)
        //  }


        axios({
            method:'get',
            url : 'https://kt_map.gitlab.io/data/public_parking.json',
            responseType: 'json',
          }).then(res => {
            markerDisplay(res, map);
          }).catch(err => console.log(err));
          
        //  clusterer.setMap(map);
        //  markerArrBound(markerArr, map)
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