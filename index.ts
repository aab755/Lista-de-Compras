interface Item {
    name: string;
    purchased: boolean;
  }
  
  let items: Item[] = [];
  
  document.getElementById('add-button')?.addEventListener('click', () => {
    const input = document.getElementById('new-item') as HTMLInputElement;
    if (input.value.trim() !== '') {
      items.push({ name: input.value, purchased: false });
      input.value = '';
      renderItems();
    } else {
      alert('Por favor, adicione um item válido.');
    }
  });
  
  function renderItems() {
    const itemsList = document.getElementById('items-list') as HTMLUListElement;
    const purchasedItemsList = document.getElementById('purchased-items-list') as HTMLUListElement;
  
    itemsList.innerHTML = '';
    purchasedItemsList.innerHTML = '';
  
    items.forEach((item, index) => {
      const li = document.createElement('li');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.purchased; 
      checkbox.addEventListener('change', () => {
        item.purchased = checkbox.checked; 
        renderItems(); 
      });
  
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(item.name));
  
      const editButton = document.createElement('button');
      editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
      editButton.addEventListener('click', () => {
        const newName = prompt('Editar item:', item.name);
        if (newName) {
          item.name = newName;
          renderItems();
        }
      });
  
      const removeButton = document.createElement('button');
      removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      removeButton.addEventListener('click', () => {
        items.splice(index, 1);
        renderItems();
      });
  
      li.appendChild(editButton);
      li.appendChild(removeButton);
      if (item.purchased) {
        purchasedItemsList.appendChild(li); 
      } else {
        itemsList.appendChild(li); 
      }
    });
  }