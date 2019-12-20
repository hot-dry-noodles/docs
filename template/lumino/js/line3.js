let mapApp = new Vue({
    el: '#map-app',
    data() {
        return {
            zoom: -1,
            minZoom: -1,
            maxZoom: -1,
            center: L.latLng(600, 1275),
            url: 'images/line_UI_png/line3.png',
            bounds: [[0, 0], [1200, 2550]],
            crs: L.CRS.Simple,
            markers: [
                { "name": "四新大道", "lng": 657.0, "lat": 313.5 },
                { "name": "沌阳大道", "lng": 2139.0, "lat": 315.0 },
                { "name": "体育中心", "lng": 1560.0, "lat": 315.0 },
                { "name": "三角湖", "lng": 1273.5, "lat": 315.0 },
                { "name": "汉阳客运站", "lng": 946.5, "lat": 315.0 },
                { "name": "陶家岭", "lng": 360.0, "lat": 315.0 },
                { "name": "东风公司", "lng": 1849.5, "lat": 321.0 },
                { "name": "龙阳村", "lng": 181.5, "lat": 499.5 },
                { "name": "菱角湖路", "lng": 2139.0, "lat": 675.0 },
                { "name": "云飞路", "lng": 1560.0, "lat": 675.0 },
                { "name": "双墩", "lng": 946.5, "lat": 684.0 },
                { "name": "范湖", "lng": 1849.5, "lat": 679.5 },
                { "name": "武汉商务区", "lng": 1270.5, "lat": 679.5 },
                { "name": "宗关", "lng": 657.0, "lat": 679.5 },
                { "name": "王家湾", "lng": 360.0, "lat": 679.5 },
                { "name": "香港路", "lng": 2337.0, "lat": 873.0 },
                { "name": "惠济二路", "lng": 2139.0, "lat": 1059.0 },
                { "name": "罗家庄", "lng": 1605.0, "lat": 1059.0 },
                { "name": "二七小路", "lng": 1360.5, "lat": 1059.0 },
                { "name": "兴业路", "lng": 1116.0, "lat": 1059.0 },
                { "name": "市民之家", "lng": 612.0, "lat": 1059.0 },
                { "name": "后湖大道", "lng": 864.0, "lat": 1057.5 },
                { "name": "赵家条", "lng": 1872.0, "lat": 1059.0 },
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