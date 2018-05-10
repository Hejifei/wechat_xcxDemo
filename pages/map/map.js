Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 31.2751500000,
      longitude: 120.6280900000,
      width: 50,
      height: 50
    }],
    circles:[{
      latitude: 31.2730600000,
      longitude: 120.6280400000,
      radius:30,
      color: 'yellow',
      fillColor:'yellow',
      strokeWidth:0
    }],
    polyline: [{
      points: [{
        longitude: 120.6280400000,
        latitude: 31.2730600000
      }, {
          longitude: 120.6250400000,
        latitude: 31.2730600000
        }, {
          longitude: 120.6250400000,
          latitude: 31.2780600000
        }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})