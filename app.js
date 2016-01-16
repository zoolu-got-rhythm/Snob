
// DOM helper function: create a new node
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
    var li = build("li", 60, 60);
    ul.appendChild(li);
    boxes.push(li);
    // boxes[i].addEventListener("mouseover", function(){ expand(li, i) });
    boxes[i].onmouseover = expand.bind(this, (i));
    boxes[i].onmouseout = detract.bind(this, (i));
    boxes[i].onclick = gallery.bind(this, (i));
}

console.log(boxes);

function expand(currentEle) {
    boxes[currentEle].style.width = "100px";
    boxes[currentEle].style.cursor = "pointer";

    boxes[currentEle].innerHTML = "GET request " + currentEle;
    console.log(boxes[currentEle]);
}


function detract(currentEle) {
    boxes[currentEle].style.width = "60px";
      boxes[currentEle].style.height = "60px";
    boxes[currentEle].innerHTML = " ";
}

function gallery(currentEle) {
    // var data = makeRequest("/api/data");
    // makes an ajax request and returns data
    // do something with data inside currentEle, populate and manipulate.
    boxes[currentEle].style.width = window.innerWidth / 2 + "px";
    boxes[currentEle].style.height = window.innerHeight / 2 + "px";
    boxes[currentEle].innerHTML = "workkkkkkkkkk and more work";
}
