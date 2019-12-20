function setTicketNum(x) {
    var storage = window.localStorage;
    storage.setItem("ticket-num", x);
}
L.Icon.Default.mergeOptions({
    iconUrl: 'images/marker.svg',
    iconRetinaUrl: 'images/marker.svg',
    shadowUrl: 'images/marker.svg',
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
});