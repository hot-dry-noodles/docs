let mapApp = new Vue({
    el: '#map-app',
    data() {
        return {
            zoom: -1,
            minZoom: -1,
            maxZoom: -1,
            center: L.latLng(600, 1275),
            url: 'images/line_UI_png/line1.png',
            bounds: [[0, 0], [1200, 2550]],
            crs: L.CRS.Simple,
            markers: [
                { "name": "滠口新城", "lng": 1954.5, "lat": 313.5 },
                { "name": "藤子岗", "lng": 1756.5, "lat": 313.5 },
                { "name": "堤角", "lng": 1558.5, "lat": 313.5 },
                { "name": "新荣", "lng": 1368.0, "lat": 313.5 },
                { "name": "丹水池", "lng": 1162.5, "lat": 313.5 },
                { "name": "徐洲新村", "lng": 964.5, "lat": 313.5 },
                { "name": "二七路", "lng": 766.5, "lat": 313.5 },
                { "name": "头道街", "lng": 568.5, "lat": 313.5 },
                { "name": "汉口北", "lng": 2151.0, "lat": 321.0 },
                { "name": "黄浦路", "lng": 378.0, "lat": 321.0 },
                { "name": "三阳路", "lng": 174.0, "lat": 489.0 },
                { "name": "古田四路", "lng": 2154.0, "lat": 675.0 },
                { "name": "汉西一路", "lng": 1954.5, "lat": 675.0 },
                { "name": "太平洋", "lng": 1558.5, "lat": 675.0 },
                { "name": "硚口路", "lng": 1368.0, "lat": 675.0 },
                { "name": "崇仁路", "lng": 1162.5, "lat": 676.5 },
                { "name": "利济北路", "lng": 964.5, "lat": 676.5 },
                { "name": "友谊路", "lng": 766.5, "lat": 676.5 },
                { "name": "宗关", "lng": 1756.5, "lat": 676.5 },
                { "name": "循礼门", "lng": 568.5, "lat": 676.5 },
                { "name": "大智路", "lng": 378.0, "lat": 676.5 },
                { "name": "古田三路", "lng": 2328.0, "lat": 874.5 },
                { "name": "古田二路", "lng": 2164.5, "lat": 1059.0 },
                { "name": "古田一路", "lng": 1954.5, "lat": 1059.0 },
                { "name": "舵落口", "lng": 1756.5, "lat": 1059.0 },
                { "name": "竹叶海", "lng": 1558.5, "lat": 1059.0 },
                { "name": "额头湾", "lng": 1360.5, "lat": 1059.0 },
                { "name": "五环大道", "lng": 1162.5, "lat": 1059.0 },
                { "name": "东吴大道", "lng": 964.5, "lat": 1059.0 },
                { "name": "码头潭公园", "lng": 766.5, "lat": 1059.0 },
                { "name": "三店", "lng": 568.5, "lat": 1059.0 },
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
        setTicketNum(x) {
            let storage = window.localStorage;
            storage.setItem("ticket-num", x);
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