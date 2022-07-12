function allowDrop(ev) { ev.preventDefault();
console.log(ev) }
function drag(ev) { 
    console.log("---------->>>>");
    console.log(ev.target);
    ev.dataTransfer.setData("text/html", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    ev.target.appendChild(document.getElementById(data));
}