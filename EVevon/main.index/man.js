// column chính
var index = 0;
changeImage = function () {
    var imgs = ["main.png/slider-2.png", "main.png/slide-1.png", "main.png/slide-3.png"];
    document.getElementById('about__img').src = imgs[index];
    index++;
    if (index==3) {
        index = 0;
    }
}
setInterval(changeImage,2000);

//  menu

var itemListDisplay = function () {
    var header = document.getElementById('link__all-all');
    header.style.display = 'block';
}

var closeItemList = function () {
    var header = document.getElementById('link__all-all');
    header.style.display = 'none';
    event.stopPropagation();
}