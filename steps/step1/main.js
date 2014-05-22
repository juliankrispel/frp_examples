/*
 * Dom Bindings
 */
var $todoInput = document.querySelector('input');
var $todoList = document.querySelector('ul');

/*
 * By listening to all click events and later just filtering the events by
 * target attributes or something else, we are ensuring that the programm doesn't
 * care about elements being removed from the dom.
 */
var clickEvents = Bacon.fromEventTarget(document, 'click');


/*
 * But the click we need right now are only for the button so let's use that
 */
clickEvents.filter(function(e){
    return e.target.nodeName == 'BUTTON';
}).onValue(function(e){
    var $newTodo = document.createElement('li');
    $newTodo.innerHTML = '<p>' + $todoInput.value + '</p>';
    $todoInput.value = '';
    $todoList.appendChild($newTodo);
});
