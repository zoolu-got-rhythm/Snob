
// DOM helper function
function build(element, width, height) {
    //  element ? element = element : throw "insert an argument";
    var newElement = document.createElement(element);

    // client-side
    if(width && height){
        newElement.style.width = width + "px";
        newElement.style.height = height + "px";
        newElement.style.backgroundColor = '#ddd';
        newElement.style.borderRadius = "4px";
        newElement.style.margin = '5px';
    }
    return newElement;
}

// create a hundred boxes
var boxes = [];

    var ul = build("ul");
    document.body.appendChild(ul);

for (var i = 0; i < 8; i++) {
    var ele = build("li", 60, 60);
    ul.appendChild(ele)
    boxes.push(ele)
    // boxes[i].addEventListener("mouseover", function(){ expand(ele, i) });
    boxes[i].onmouseover = expand.bind(this, (i));
    boxes[i].onmouseout = detract.bind(this, (i));
    boxes[i].onclick = gallery.bind(this, (i));
}

console.log(boxes);

function expand(currentEle) {
    boxes[currentEle].style.width = "100px";
    boxes[currentEle].style.cursor = "pointer";

    boxes[currentEle].innerHTML = currentEle;
    console.log(boxes[currentEle]);
}


function detract(currentEle) {
    boxes[currentEle].style.width = "60px";
    boxes[currentEle].innerHTML = " ";
}

function gallery(currentEle) {
    boxes[currentEle].style.width = window.innerWidth + "px";
    boxes[currentEle].innerHTML = "workkkkkkkkkk and more work";
}
