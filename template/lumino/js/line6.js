
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
                url: 'images/line_UI_png/line6.png',
                bounds: [[0, 0], [1200, 2550]],
                crs: L.CRS.Simple,
                markers: [
                    { "name": "车城东路", "lng": 1872.0, "lat": 313.5 },
                    { "name": "江城大道", "lng": 1620.0, "lat": 313.5 },
                    { "name": "老关村", "lng": 1372.5, "lat": 313.5 },
                    { "name": "国博中心南", "lng": 1110.0, "lat": 313.5 },
                    { "name": "国博中心北", "lng": 861.0, "lat": 313.5 },
                    { "name": "前进村", "lng": 612.0, "lat": 313.5 },
                    { "name": "建港", "lng": 363.0, "lat": 313.5 },
                    { "name": "东风公司", "lng": 2151.0, "lat": 313.5 },
                    { "name": "马鹦路", "lng": 181.5, "lat": 499.5 },
                    { "name": "苗栗路", "lng": 2139.0, "lat": 675.0 },
                    { "name": "六渡桥", "lng": 1368.0, "lat": 675.0 },
                    { "name": "汉正街", "lng": 1123.5, "lat": 675.0 },
                    { "name": "武胜路", "lng": 856.5, "lat": 675.0 },
                    { "name": "琴台", "lng": 612.0, "lat": 675.0 },
                    { "name": "江汉路", "lng": 1620.0, "lat": 675.0 },
                    { "name": "大智路", "lng": 1887.0, "lat": 676.5 },
                    { "name": "钟家村", "lng": 378.0, "lat": 676.5 },
                    { "name": "香港路", "lng": 2337.0, "lat": 873.0 },
                    { "name": "三眼桥", "lng": 2164.5, "lat": 1059.0 },
                    { "name": "唐家墩", "lng": 1950.0, "lat": 1059.0 },
                    { "name": "石桥", "lng": 1714.5, "lat": 1059.0 },
                    { "name": "杨汊湖", "lng": 1471.5, "lat": 1059.0 },
                    { "name": "轻工大学", "lng": 1000.5, "lat": 1059.0 },
                    { "name": "金银湖", "lng": 574.5, "lat": 1059.0 },
                    { "name": "金银湖公园", "lng": 370.5, "lat": 1059.0 },
                    { "name": "常青花园", "lng": 1219.5, "lat": 1059.0 },
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