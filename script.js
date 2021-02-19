// Add class to highlight optional items based on button click 
// (change the CSS style of at least one element)
const highlight_button = document.getElementById('highlight_button');
highlight_button.addEventListener('click', function(){
    let spans = document.querySelectorAll( '#todo_list span' );
    Array.from(spans).forEach(function(span) {
        if (span.textContent.includes('ptional') ) {
            span.classList.toggle('optional');
        }
})
})

// Add class to strikethough checked items
// (change the CSS style of at least one element)
const boxes = document.getElementsByClassName('checkbox');

toggled_checked = function(){
        let span_element = this.parentElement.childNodes[1];
        span_element.classList.toggle('checked');
    }

Array.from(boxes).forEach(function(box) {
    box.addEventListener('click', toggled_checked)
})

// Add a new item 
// (modify the DOM structure)
// (load content from an <input /> or <textarea /> element)
const add_new_item = document.getElementById('add_new_item');
add_new_item.addEventListener('click', function(ev){
    let new_item = document.getElementById('new_item');
    new_text = new_item.value;
    text = document.createElement('span');
    text.appendChild(document.createTextNode(new_text));

    let list = document.getElementById('todo_list');

    let box = document.createElement("input");
    box.type = "checkbox";
    box.className = "checkbox";

    let entry = document.createElement('li');
    entry.appendChild(box);
    entry.appendChild(text);
    
    list.appendChild(entry)
    box.addEventListener('click', toggled_checked);

})

