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
        url: 'images/line_UI_png/line11.png',
        bounds: [[0, 0], [1200, 2550]],
        crs: L.CRS.Simple,
        markers: [
            { "name": "豹澥", "lng": 1870.5, "lat": 457.5 },
            { "name": "光谷七路", "lng": 1584.0, "lat": 457.5 },
            { "name": "长岭山", "lng": 1309.5, "lat": 457.5 },
            { "name": "未来一路", "lng": 1042.5, "lat": 457.5 },
            { "name": "未来三路", "lng": 768.0, "lat": 457.5 },
            { "name": "左岭", "lng": 501.0, "lat": 457.5 },
            { "name": "光谷六路", "lng": 2032.5, "lat": 684.0 },
            { "name": "光谷五路", "lng": 1876.5, "lat": 924.0 },
            { "name": "光谷生物园", "lng": 1309.5, "lat": 924.0 },
            { "name": "光谷同济医院", "lng": 1042.5, "lat": 924.0 },
            { "name": "湖口", "lng": 768.0, "lat": 924.0 },
            { "name": "光谷四路", "lng": 1584.0, "lat": 927.0 },
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