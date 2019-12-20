function setTicketNum(x)
{
    var storage=window.localStorage;
    storage.setItem("ticket-num",x);
}
window.onload = function()
{
setTicketNum(1);
var storage=window.localStorage;
var depa = storage.getItem("depature");
if(typeof(depa) != "undefined")
{
    document.getElementById('form-text-depature').value = depa;
}
var dest = storage.getItem("destination");
if(typeof(dest) != "undefined")
    document.getElementById('form-text-destination').value = dest;

}
L.Icon.Default.mergeOptions({
iconUrl: 'images/marker.svg',
iconRetinaUrl: 'images/marker.svg',
shadowUrl: 'images/marker.svg',
iconAnchor: [0, 0],
popupAnchor: [0, 0],
});
let mapApp = new Vue({
el: '#map-app',
data() {
    return {
        zoom: -1,
        minZoom: -1,
        maxZoom: -1,
        center: L.latLng(600, 1275),
        url: 'images/line_UI_png/line21.png',
        bounds: [[0, 0], [1200, 2550]],
        crs: L.CRS.Simple,
        markers: [
            { "name": "施岗", "lng": 1548.0, "lat": 298.5 },
            { "name": "阳逻开发区", "lng": 1299.0, "lat": 298.5 },
            { "name": "阳逻", "lng": 1050.0, "lat": 298.5 },
            { "name": "武生院", "lng": 808.5, "lat": 298.5 },
            { "name": "金台", "lng": 1810.5, "lat": 300.0 },
            { "name": "军民村", "lng": 607.5, "lat": 484.5 },
            { "name": "青龙", "lng": 1810.5, "lat": 664.5 },
            { "name": "高车", "lng": 1470.0, "lat": 664.5 },
            { "name": "武湖", "lng": 1149.0, "lat": 664.5 },
            { "name": "沙口", "lng": 808.5, "lat": 664.5 },
            { "name": "谌家矶", "lng": 1993.5, "lat": 849.0 },
            { "name": "朱家河", "lng": 1816.5, "lat": 1044.0 },
            { "name": "新荣客运站", "lng": 1299.0, "lat": 1044.0 },
            { "name": "百步亭花园路", "lng": 1050.0, "lat": 1044.0 },
            { "name": "幸福湾", "lng": 1548.0, "lat": 1047.0 },

        ]
    };
},
methods: {
        setAsDepature(name) {
            document.getElementById('form-text-depature').value = name;
            var storage=window.localStorage;
            storage.setItem("depature",name);
        },
        setAsDestination(name) {
            document.getElementById('form-text-destination').value = name;
            var storage=window.localStorage;
            storage.setItem("destination",name);
        },

    },
components: {
    'l-map': window.Vue2Leaflet.LMap,
    'l-image-overlay': window.Vue2Leaflet.LImageOverlay,
    'l-marker': window.Vue2Leaflet.LMarker,
    'l-popup': window.Vue2Leaflet.LPopup,
},
mounted() {
    this.$nextTick(() => {
        const map = this.$refs.metroMap.mapObject;
        map.setMaxBounds(this.$data.bounds);
    })
}
})		function setTicketNum(x)
{
    var storage=window.localStorage;
    storage.setItem("ticket-num",x);
}
window.onload = function()
{
setTicketNum(1);
var storage=window.localStorage;
var depa = storage.getItem("depature");
if(typeof(depa) != "undefined")
{
    document.getElementById('form-text-depature').value = depa;
}
var dest = storage.getItem("destination");
if(typeof(dest) != "undefined")
    document.getElementById('form-text-destination').value = dest;

}
L.Icon.Default.mergeOptions({
iconUrl: 'images/marker.svg',
iconRetinaUrl: 'images/marker.svg',
shadowUrl: 'images/marker.svg',
iconAnchor: [0, 0],
popupAnchor: [0, 0],
});
let mapApp = new Vue({
el: '#map-app',
data() {
    return {
        zoom: -1,
        minZoom: -1,
        maxZoom: -1,
        center: L.latLng(600, 1275),
        url: 'images/line_UI_png/line21.png',
        bounds: [[0, 0], [1200, 2550]],
        crs: L.CRS.Simple,
        markers: [
            { "name": "施岗", "lng": 1548.0, "lat": 298.5 },
            { "name": "阳逻开发区", "lng": 1299.0, "lat": 298.5 },
            { "name": "阳逻", "lng": 1050.0, "lat": 298.5 },
            { "name": "武生院", "lng": 808.5, "lat": 298.5 },
            { "name": "金台", "lng": 1810.5, "lat": 300.0 },
            { "name": "军民村", "lng": 607.5, "lat": 484.5 },
            { "name": "青龙", "lng": 1810.5, "lat": 664.5 },
            { "name": "高车", "lng": 1470.0, "lat": 664.5 },
            { "name": "武湖", "lng": 1149.0, "lat": 664.5 },
            { "name": "沙口", "lng": 808.5, "lat": 664.5 },
            { "name": "谌家矶", "lng": 1993.5, "lat": 849.0 },
            { "name": "朱家河", "lng": 1816.5, "lat": 1044.0 },
            { "name": "新荣客运站", "lng": 1299.0, "lat": 1044.0 },
            { "name": "百步亭花园路", "lng": 1050.0, "lat": 1044.0 },
            { "name": "幸福湾", "lng": 1548.0, "lat": 1047.0 },

        ]
    };
},
methods: {
        setAsDepature(name) {
            document.getElementById('form-text-depature').value = name;
            var storage=window.localStorage;
            storage.setItem("depature",name);
        },
        setAsDestination(name) {
            document.getElementById('form-text-destination').value = name;
            var storage=window.localStorage;
            storage.setItem("destination",name);
        },

    },
components: {
    'l-map': window.Vue2Leaflet.LMap,
    'l-image-overlay': window.Vue2Leaflet.LImageOverlay,
    'l-marker': window.Vue2Leaflet.LMarker,
    'l-popup': window.Vue2Leaflet.LPopup,
},
mounted() {
    this.$nextTick(() => {
        const map = this.$refs.metroMap.mapObject;
        map.setMaxBounds(this.$data.bounds);
    })
}
})		function setTicketNum(x)
{
    var storage=window.localStorage;
    storage.setItem("ticket-num",x);
}
window.onload = function()
{
setTicketNum(1);
var storage=window.localStorage;
var depa = storage.getItem("depature");
if(typeof(depa) != "undefined")
{
    document.getElementById('form-text-depature').value = depa;
}
var dest = storage.getItem("destination");
if(typeof(dest) != "undefined")
    document.getElementById('form-text-destination').value = dest;

}
L.Icon.Default.mergeOptions({
iconUrl: 'images/marker.svg',
iconRetinaUrl: 'images/marker.svg',
shadowUrl: 'images/marker.svg',
iconAnchor: [0, 0],
popupAnchor: [0, 0],
});
let mapApp = new Vue({
el: '#map-app',
data() {
    return {
        zoom: -1,
        minZoom: -1,
        maxZoom: -1,
        center: L.latLng(600, 1275),
        url: 'images/line_UI_png/line21.png',
        bounds: [[0, 0], [1200, 2550]],
        crs: L.CRS.Simple,
        markers: [
            { "name": "施岗", "lng": 1548.0, "lat": 298.5 },
            { "name": "阳逻开发区", "lng": 1299.0, "lat": 298.5 },
            { "name": "阳逻", "lng": 1050.0, "lat": 298.5 },
            { "name": "武生院", "lng": 808.5, "lat": 298.5 },
            { "name": "金台", "lng": 1810.5, "lat": 300.0 },
            { "name": "军民村", "lng": 607.5, "lat": 484.5 },
            { "name": "青龙", "lng": 1810.5, "lat": 664.5 },
            { "name": "高车", "lng": 1470.0, "lat": 664.5 },
            { "name": "武湖", "lng": 1149.0, "lat": 664.5 },
            { "name": "沙口", "lng": 808.5, "lat": 664.5 },
            { "name": "谌家矶", "lng": 1993.5, "lat": 849.0 },
            { "name": "朱家河", "lng": 1816.5, "lat": 1044.0 },
            { "name": "新荣客运站", "lng": 1299.0, "lat": 1044.0 },
            { "name": "百步亭花园路", "lng": 1050.0, "lat": 1044.0 },
            { "name": "幸福湾", "lng": 1548.0, "lat": 1047.0 },

        ]
    };
},
methods: {
        setAsDepature(name) {
            document.getElementById('form-text-depature').value = name;
            var storage=window.localStorage;
            storage.setItem("depature",name);
        },
        setAsDestination(name) {
            document.getElementById('form-text-destination').value = name;
            var storage=window.localStorage;
            storage.setItem("destination",name);
        },

    },
components: {
    'l-map': window.Vue2Leaflet.LMap,
    'l-image-overlay': window.Vue2Leaflet.LImageOverlay,
    'l-marker': window.Vue2Leaflet.LMarker,
    'l-popup': window.Vue2Leaflet.LPopup,
},
mounted() {
    this.$nextTick(() => {
        const map = this.$refs.metroMap.mapObject;
        map.setMaxBounds(this.$data.bounds);
    })
}
})