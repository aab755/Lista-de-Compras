document.getElementById('addItemForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const newItem = document.getElementById('newItem').value.trim();
    if (newItem === "") return; 
  
    addItemToList(newItem, false);  
    document.getElementById('newItem').value = ''; 
  });
  
  function addItemToList(itemName, isBought) {
    const list = isBought ? document.getElementById('boughtItems') : document.getElementById('notBoughtItems');
    const li = document.createElement('li');
  
    const checkbox = document.createElement('span');
    checkbox.classList.add('checkbox');
    checkbox.classList.add(isBought ? 'checked' : 'unchecked');
    checkbox.addEventListener('click', function () {
      list.removeChild(li);
      addItemToList(itemName, !isBought);
    });
    li.appendChild(checkbox);
  
    const itemText = document.createElement('span');
    itemText.textContent = itemName;
    li.appendChild(itemText);

    const editBtn = document.createElement('span');
    editBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-9.793 9.793a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9.793-9.793zm-9.793 10.5L1.5 14.5l3.854-1.646 8.293-8.293-2.207-2.207-8.293 8.293zm9.086-9.793L10.5 2.207l2.293 2.293 1.293-1.293-2.293-2.293z"/>
      </svg>
    `;
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', function () {
      const newName = prompt('Editar item:', itemName);
      if (newName) itemText.textContent = newName;
    });
    li.appendChild(editBtn);
  
    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7zM5 4v-.5a1.5.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 11 3.5V4h3.5a.5.5 0 0 1 0 1h-1v9.5A1.5 1.5 0 0 1 12 16H4a1.5 1.5 0 0 1-1.5-1.5V5h-1a.5.5 0 0 1 0-1H5zm1-.5V4h4v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5z"/>
      </svg>
    `;
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function () {
      list.removeChild(li);
    });
    li.appendChild(deleteBtn);
  
    if (isBought) {
      li.classList.add('bought');
      checkbox.classList.add('checked');
    } else {
      li.classList.remove('bought');
      checkbox.classList.add('unchecked');
    }
  
    list.appendChild(li);
  }  