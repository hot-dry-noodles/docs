let mapApp = new Vue({
    el: '#map-app',
    data() {
        return {
            zoom: -1,
            minZoom: -1,
            maxZoom: -1,
            center: L.latLng(825, 1275),
            url: 'images/line_UI_png/line2.png',
            bounds: [[0, 0], [1650, 2550]],
            crs: L.CRS.Simple,
            markers: [
                { "name": "华中科技大学", "lng": 2118.0, "lat": 367.5 },
                { "name": "光谷大道", "lng": 1918.5, "lat": 367.5 },
                { "name": "金融港北", "lng": 976.5, "lat": 367.5 },
                { "name": "秀湖", "lng": 757.5, "lat": 367.5 },
                { "name": "佳园路", "lng": 1693.5, "lat": 372.0 },
                { "name": "黄龙山路", "lng": 1210.5, "lat": 372.0 },
                { "name": "藏龙东街", "lng": 538.5, "lat": 372.0 },
                { "name": "佛祖岭", "lng": 349.5, "lat": 372.0 },
                { "name": "光谷火车站", "lng": 1449.0, "lat": 366.0 },
                { "name": "珞雄路", "lng": 2296.5, "lat": 562.5 },
                { "name": "光谷广场", "lng": 2118.0, "lat": 756.0 },
                { "name": "虎泉", "lng": 1708.5, "lat": 756.0 },
                { "name": "广埠屯", "lng": 1456.5, "lat": 756.0 },
                { "name": "街道口", "lng": 1210.5, "lat": 756.0 },
                { "name": "宝通寺", "lng": 979.5, "lat": 756.0 },
                { "name": "小龟山", "lng": 342.0, "lat": 756.0 },
                { "name": "杨家湾", "lng": 1918.5, "lat": 757.5 },
                { "name": "中南路", "lng": 750.0, "lat": 756.0 },
                { "name": "洪山广场", "lng": 528.0, "lat": 756.0 },
                { "name": "螃蟹岬", "lng": 169.5, "lat": 943.5 },
                { "name": "汉口火车站", "lng": 2118.0, "lat": 1117.5 },
                { "name": "青年路", "lng": 1347.0, "lat": 1117.5 },
                { "name": "中山公园", "lng": 1102.5, "lat": 1117.5 },
                { "name": "积玉桥", "lng": 346.5, "lat": 1117.5 },
                { "name": "范湖", "lng": 1866.0, "lat": 1117.5 },
                { "name": "王家墩东", "lng": 1599.0, "lat": 1117.5 },
                { "name": "循礼门", "lng": 840.0, "lat": 1117.5 },
                { "name": "江汉路", "lng": 583.5, "lat": 1117.5 },
                { "name": "长港路", "lng": 2313.0, "lat": 1317.0 },
                { "name": "金银潭", "lng": 1918.5, "lat": 1501.5 },
                { "name": "常青城", "lng": 1693.5, "lat": 1501.5 },
                { "name": "盘龙城", "lng": 1210.5, "lat": 1501.5 },
                { "name": "巨龙大道", "lng": 979.5, "lat": 1501.5 },
                { "name": "宋家岗", "lng": 757.5, "lat": 1501.5 },
                { "name": "航空总部", "lng": 553.5, "lat": 1501.5 },
                { "name": "天河机场", "lng": 349.5, "lat": 1501.5 },
                { "name": "常青花园", "lng": 2137.5, "lat": 1501.5 },
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
    },    mounted() {
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