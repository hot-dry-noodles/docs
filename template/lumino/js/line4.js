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
        center: L.latLng(825, 1275),
        url: 'images/line_UI_png/line4.png',
        bounds: [[0, 0], [1650, 2550]],
        crs: L.CRS.Simple,
        markers: [
            { "name": "新农", "lng": 1606.5, "lat": 370.5 },
            { "name": "集贤", "lng": 2118.0, "lat": 372.0 },
            { "name": "知音", "lng": 1858.5, "lat": 372.0 },
            { "name": "凤凰路", "lng": 1318.5, "lat": 372.0 },
            { "name": "蔡甸广场", "lng": 1041.0, "lat": 372.0 },
            { "name": "临嶂大道", "lng": 807.0, "lat": 372.0 },
            { "name": "新庙村", "lng": 573.0, "lat": 372.0 },
            { "name": "柏林", "lng": 349.5, "lat": 372.0 },
            { "name": "新天", "lng": 2296.5, "lat": 562.5 },
            { "name": "黄金口", "lng": 2118.0, "lat": 756.0 },
            { "name": "永安堂", "lng": 1708.5, "lat": 756.0 },
            { "name": "玉龙路", "lng": 1489.5, "lat": 756.0 },
            { "name": "十里铺", "lng": 979.5, "lat": 756.0 },
            { "name": "汉阳火车站", "lng": 342.0, "lat": 756.0 },
            { "name": "孟家铺", "lng": 1918.5, "lat": 757.5 },
            { "name": "七里庙", "lng": 774.0, "lat": 757.5 },
            { "name": "五里墩", "lng": 555.0, "lat": 757.5 },
            { "name": "王家湾", "lng": 1225.5, "lat": 757.5 },
            { "name": "钟家村", "lng": 169.5, "lat": 943.5 },
            { "name": "梅苑小区", "lng": 1318.5, "lat": 1116.0 },
            { "name": "楚河汉街", "lng": 2118.0, "lat": 1117.5 },
            { "name": "首义路", "lng": 799.5, "lat": 1117.5 },
            { "name": "复兴路", "lng": 573.0, "lat": 1117.5 },
            { "name": "拦江路", "lng": 346.5, "lat": 1117.5 },
            { "name": "洪山广场", "lng": 1866.0, "lat": 1117.5 },
            { "name": "中南路", "lng": 1599.0, "lat": 1117.5 },
            { "name": "武昌火车站", "lng": 1068.0, "lat": 1119.0 },
            { "name": "青鱼嘴", "lng": 2313.0, "lat": 1317.0 },
            { "name": "东亭", "lng": 2145.0, "lat": 1501.5 },
            { "name": "铁机路", "lng": 1687.5, "lat": 1501.5 },
            { "name": "罗家港", "lng": 1452.0, "lat": 1501.5 },
            { "name": "园林路", "lng": 1210.5, "lat": 1501.5 },
            { "name": "仁和路", "lng": 979.5, "lat": 1501.5 },
            { "name": "工业四路", "lng": 757.5, "lat": 1501.5 },
            { "name": "杨春湖", "lng": 553.5, "lat": 1501.5 },
            { "name": "武汉火车站", "lng": 349.5, "lat": 1501.5 },
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