let mapApp = new Vue({
    el: '#map-app',
    data() {
        return {
            zoom: -1,
            minZoom: -1,
            maxZoom: -1,
            center: L.latLng(600, 1275),
            url: 'images/line_UI_png/line7.png',
            bounds: [[0, 0], [1200, 2550]],
            crs: L.CRS.Simple,
            markers: [
                { "name": "纸坊大街", "lng": 1872.0, "lat": 313.5 },
                { "name": "江夏客厅", "lng": 1110.0, "lat": 313.5 },
                { "name": "大花岭", "lng": 861.0, "lat": 313.5 },
                { "name": "新路村", "lng": 612.0, "lat": 313.5 },
                { "name": "青龙山地铁小镇", "lng": 2139.0, "lat": 315.0 },
                { "name": "北华街", "lng": 1620.0, "lat": 315.0 },
                { "name": "谭鑫培公园", "lng": 1372.5, "lat": 315.0 },
                { "name": "野芷湖", "lng": 360.0, "lat": 321.0 },
                { "name": "板桥", "lng": 169.5, "lat": 499.5 },
                { "name": "小东门", "lng": 1368.0, "lat": 669.0 },
                { "name": "湖北大学", "lng": 2139.0, "lat": 675.0 },
                { "name": "新河街", "lng": 1872.0, "lat": 675.0 },
                { "name": "瑞安街", "lng": 856.5, "lat": 675.0 },
                { "name": "建安街", "lng": 612.0, "lat": 679.5 },
                { "name": "湖工大", "lng": 370.5, "lat": 679.5 },
                { "name": "螃蟹岬", "lng": 1620.0, "lat": 675.0 },
                { "name": "武昌火车站", "lng": 1108.5, "lat": 675.0 },
                { "name": "徐家棚", "lng": 2337.0, "lat": 873.0 },
                { "name": "取水楼", "lng": 1620.0, "lat": 1059.0 },
                { "name": "常码头", "lng": 856.5, "lat": 1059.0 },
                { "name": "园博园", "lng": 612.0, "lat": 1059.0 },
                { "name": "三阳路", "lng": 2131.5, "lat": 1059.0 },
                { "name": "香港路", "lng": 1872.0, "lat": 1059.0 },
                { "name": "王家墩东", "lng": 1368.0, "lat": 1059.0 },
                { "name": "武汉商务区", "lng": 1108.5, "lat": 1059.0 },
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