// weather API key: 34061ce86bfda355e56b98b6d018e56c

//Problem: Application needs functionality added so user can acquire weather information based on city, state.
//Solution: Add functionality to get the user the weather information based on the city, state they enter.

//1. User enters city,state into an input field
  //make a request to openweather api to get data
  //parse returned data
//2. when user 'clicks' search button the user receives weather info based on city, state entered.





// DOM helper function
function build(element, width, height) {
    //  element ? element = element : throw "insert an argument";
    var newElement = document.createElement(element);
    document.body.appendChild(newElement);
    newElement.style.width = width + "px";
    newElement.style.height = height + "px";
    newElement.style.backgroundColor = '#ddd';
    newElement.style.margin = '10px';
    return newElement;
}

// create a hundred boxes
var boxes = [];
for (var i = 0; i < artists.length; i++) {
    var ele = build("div", "60", "60");

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

    boxes[currentEle].innerHTML = "<h3>" + artists[currentEle] + "<h3>";

    console.log(boxes[currentEle]);

}


function detract(currentEle) {
    boxes[currentEle].style.width = "50px";
    boxes[currentEle].innerHTML = " ";
}

function gallery(currentEle) {
    boxes[currentEle].style.width = window.innerWidth + "px";
    boxes[currentEle].innerHTML = "workkkkkkkkkk and more work";
}
