let mapApp = new Vue({
    el: '#map-app',
    data() {
        return {
            zoom: -1,
            minZoom: -1,
            maxZoom: -1,
            center: L.latLng(600, 1275),
            url: 'images/line_UI_png/line8.png',
            bounds: [[0, 0], [1200, 2550]],
            crs: L.CRS.Simple,
            markers: [
                { "name": "黄家湖地铁小镇", "lng": 1872.0, "lat": 313.5 },
                { "name": "军运村", "lng": 2139.0, "lat": 315.0 },
                { "name": "野芷湖", "lng": 1597.5, "lat": 321.0 },
                { "name": "汪家墩", "lng": 2139.0, "lat": 675.0 },
                { "name": "梨园", "lng": 1605.0, "lat": 675.0 },
                { "name": "岳家嘴", "lng": 1872.0, "lat": 675.0 },
                { "name": "徐东", "lng": 2325.0, "lat": 876.0 },
                { "name": "竹叶山", "lng": 1360.5, "lat": 1059.0 },
                { "name": "中一路", "lng": 1116.0, "lat": 1059.0 },
                { "name": "塔子湖", "lng": 856.5, "lat": 1059.0 },
                { "name": "金潭路", "lng": 366.0, "lat": 1059.0 },
                { "name": "徐家棚", "lng": 2131.5, "lat": 1059.0 },
                { "name": "黄浦路", "lng": 1872.0, "lat": 1059.0 },
                { "name": "赵家条", "lng": 1612.5, "lat": 1059.0 },
            ]
        };
    },
    methods: {
        setAsDepature(name) {
            document.getElementById('form-text-depature').value = name;
            var storage = window.localStorage;
            storage.setItem("depature", name);
        },
        setAsDestination(name) {
            document.getElementById('form-text-destination').value = name;
            var storage = window.localStorage;
            storage.setItem("destination", name);
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

            setTicketNum(1);
            let storage = window.localStorage;
            let depature = storage.getItem("depature");
            if (typeof (depature) != "undefined") {
                document.getElementById('form-text-depature').value = depature;
            }
            let destination = storage.getItem("destination");
            if (typeof (destination) != "undefined") {
                document.getElementById('form-text-destination').value = destination;
            }
        })
    }
})