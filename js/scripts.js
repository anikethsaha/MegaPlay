// Get the modal
var modal = document.getElementById('Canavas1');
var modal1 = document.getElementById('Canavas2');


// Get the button that opens the modal
var btn = document.getElementById("front");
var btn1 = document.getElementById("back");
btn.disabled = true;

btn.onclick = function() {
    modal.style.display = "block";
    modal1.style.display = "none";
    btn.disabled=true;
    btn1.disabled = false;
}
btn1.onclick = function() {
    modal.style.display = "none";
    modal1.style.display = "block";
    btn.disabled = false;
    btn1.disabled = true;
}