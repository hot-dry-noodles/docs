
function add_li(station_index, text, station_num, interchange) {
    var ul = document.getElementById("subway-ul");
    var x_coord = 14;
    if (station_num / 2 == 0) //两两对称
    {
        x_coord = 12;
        var x_offset = (station_index - (station_num / 2 - 1)) * 6;
        x_coord = x_coord + x_offset;
    }
    else {
        var x_offset = (station_index - (station_num - 1) / 2) * 6;
        x_coord = x_coord + x_offset;
    }
    //添加 li
    var li = document.createElement("li");
    //设置 li 属性，如 id
    li.setAttribute("data-coords", x_coord + ",2");
    li.innerHTML = text;
    if (interchange == 1)
        li.setAttribute("data-marker", "interchange")
    ul.appendChild(li);
}


function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}
var storage = window.localStorage;
var result;

function success(text) {
    result = JSON.parse(text);
    var route = result.results[0].route;
    var stations_temp = route.split(" ");

    var stations = new Array();
    var interchange = new Array();
    for (var i = 1; i < stations_temp.length; i++) {
        var station = stations_temp[i];
        console.log(station);
        console.log(station.charAt(0));
        if (station.charAt(0) <= '9' && station.charAt(0) >= '0') //一条线, 表示前一个站是中转站
        {

            var new_station = stations_temp[i - 1].concat("(").concat(station).concat(")");
            stations.push(new_station);

        }
    }
    stations.push(stations_temp[stations_temp.length - 1]);


    for (var i = 0; i < stations.length; i++) {
        if (i == 0 || i == stations.length - 1)
            add_li(i, stations[i], stations.length, 1);
        else
            add_li(i, stations[i], stations.length, 0);
    }

    var ticket = document.getElementById("ticket-amount");
    ticket.innerHTML = storage.getItem("ticket-num");
    var price = document.getElementById("price");
    var single_price = parseInt(result.results[0].price);
    var ticket_num = parseInt(storage.getItem("ticket-num"));
    price.innerHTML = single_price * ticket_num;
    var time = document.getElementById("time");
    time.innerHTML = result.results[0].time;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
// 发送请求:
const apiBase = 'http://47.100.78.173:8000'
var url = apiBase + "/api/routes/?begin=" + storage.getItem("depature") + "&end=" + storage.getItem("destination");
request.open('GET', url);
request.send();

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        console.log(request.readyState);
    }
}
