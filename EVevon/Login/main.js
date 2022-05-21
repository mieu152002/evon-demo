
var itemListDisplay = function () {
    var header = document.getElementById('link__all-all');
    header.style.display = 'block';
}

var closeItemList = function () {
    var header = document.getElementById('link__all-all');
    header.style.display = 'none';
    event.stopPropagation();
}