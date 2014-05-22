var $draggable = document.getElementById('draggable');
var isDragging = false;
var mouseX, mouseY;

$draggable.addEventListener('mousedown', function(e){
    isDragging = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$draggable.addEventListener('mousemove', function(e){
    var top = $draggable.offsetTop;
    var left = $draggable.offsetLeft;
    if(isDragging === true){
        $draggable.style.top = top + (e.clientY - mouseY) + 'px';
        $draggable.style.left = left + (e.clientX - mouseX) + 'px';
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$draggable.addEventListener('mouseup', function(){
    isDragging = false;
});
