var array = ['Jack', 'Phil', 'Brendan', 'James', 'Nick', 'Harriet', 'Will', 'Gail'];
var addedToList = [];
var $input = document.getElementById('typeahead');
var $dropdown = document.createElement('ul');
var $selectedValues = document.getElementById('selectedValues');

$dropdown.classList.add('dropdown');
document.body.appendChild($dropdown);

/*
 * All our state
 */
var isInputFocused = false;
var isDropdownFocused = false;

/*
 * Our events
 */
$input.addEventListener('focus', function(e){
    $dropdown.classList.add('active');
});

$input.addEventListener('blur', function(e){
    setTimeout(function(){
        $dropdown.classList.remove('active');
    }, 100);
});

$input.addEventListener('keyup', function(e){
    renderDropdown(array, $input.value);
});

$dropdown.addEventListener('click', function(e){
    addedToList.push(e.target.textContent);
    $input.value = '';
    renderDropdown(array);
    renderList(addedToList);
});

renderDropdown(array);
positionDropdown();

function renderList(array){
    var listHtml = '';
    array.forEach(function(item){
        listHtml+= '<li>' + item + '</li>';
    });
    $selectedValues.innerHTML = listHtml;
}

function renderDropdown(array, filter){
    if(filter && filter.length > 0){
        var filteredArray = [];
        array.forEach(function(item){
            if(item.indexOf(filter) > -1){
                filteredArray.push(item);
            }
        });
        array = filteredArray;
    }

    if(addedToList.length > 0){
        var filteredSelected = [];
        array.forEach(function(item){
            if(addedToList.indexOf(item) < 0){
                filteredSelected.push(item);
            }
        });
        array = filteredSelected;
    }

    var dropdownHtml = '';
    array.forEach(function(item){
        dropdownHtml+= '<li>' + item + '</li>';
    });
    $dropdown.innerHTML = dropdownHtml;
}

function positionDropdown(){
    var inputClientRect = $input.getBoundingClientRect();
    $dropdown.style.top =  '' + (inputClientRect.top + inputClientRect.height) + 'px';
    $dropdown.style.left =  '' + inputClientRect.left + 'px';
    $dropdown.style.width =  '' + inputClientRect.width + 'px';
}
