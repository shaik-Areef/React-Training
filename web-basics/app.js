function count(event) {
  console.log('onClick handler') ;
  const counterElement=document.getElementById('counter') ;
  counterElement.innerHTML=(event.target.value.length);
}
function handleKeyDown() {
 console.log("handleKeyDown")   
}
