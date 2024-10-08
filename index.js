var _a;
var items = [];
(_a = document.getElementById('add-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var input = document.getElementById('new-item');
    if (input.value.trim() !== '') {
        items.push({ name: input.value, purchased: false });
        input.value = '';
        renderItems();
    }
    else {
        alert('Por favor, adicione um item válido.');
    }
});
function renderItems() {
    var itemsList = document.getElementById('items-list');
    var purchasedItemsList = document.getElementById('purchased-items-list');
    itemsList.innerHTML = '';
    purchasedItemsList.innerHTML = '';
    items.forEach(function (item, index) {
        var li = document.createElement('li');
 
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.purchased; 
        checkbox.addEventListener('change', function () {
            item.purchased = checkbox.checked; 
            renderItems(); 
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(item.name));

        var editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        editButton.addEventListener('click', function () {
            var newName = prompt('Editar item:', item.name);
            if (newName) {
                item.name = newName;
                renderItems();
            }
        });

        var removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeButton.addEventListener('click', function () {
            items.splice(index, 1);
            renderItems();
        });

        li.appendChild(editButton);
        li.appendChild(removeButton);
        if (item.purchased) {
            purchasedItemsList.appendChild(li); 
        }
        else {
            itemsList.appendChild(li); 
        }
    });
}