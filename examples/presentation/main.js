var keyUps = Bacon.fromEventTarget(document, 'keyup');
var right = [39, 76];
keyUps.assign(function(e){
    console.log(e);
});
