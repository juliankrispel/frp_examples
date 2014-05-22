var $draggable = document.getElementById('draggable');

var subtractVector = function(a, b){
    return [b[0] - a[0], b[1] - a[1]];
};

var mapToVector = function(e){ 
    return [e.clientX, e.clientY]; 
};

var moveElement = function(el, vector){
    el.style.left = el.offsetLeft + vector[0] + 'px';
    el.style.top = el.offsetTop + vector[1] + 'px';
};

var mouseDown = Bacon.fromEventTarget($draggable, 'mousedown').map(true);
var mouseUp = Bacon.fromEventTarget($draggable, 'mouseup').map(false);
var dragend = Bacon.fromEventTarget($draggable, 'mouseleave').map(false).merge(mouseUp);
var isDragging = mouseDown.merge(dragend).toProperty();

var cursorMovement = Bacon.fromEventTarget($draggable, 'mousemove')
                          .map(mapToVector)
                          .filter(isDragging)
                          .diff([0,0], subtractVector)
                          .skip(1);

cursorMovement.assign(moveElement, $draggable);
