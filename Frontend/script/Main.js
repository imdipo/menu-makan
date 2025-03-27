// Fitur pencarian menu
 document.getElementById('filter-input').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
     const menuItems = document.querySelectorAll('.menu-item');
     let found = false;
            
    menuItems.forEach(item => {
        const itemName = item.querySelector('.menu-item-name').textContent.toLowerCase();
        const itemDescription = item.querySelector('.menu-item-description').textContent.toLowerCase();
                
        if (itemName.includes(filterValue) || itemDescription.includes(filterValue)) {
            item.style.display = 'flex';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });
     const warningElement = document.getElementById("kosong");
     if (filterValue === '') {
         warningElement.innerHTML = '';
     } else if (!found) {
         warningElement.innerHTML = '<h3>Menu Tidak Ditemukan</h3>'
     } else {
         warningElement.innerHTML = '';
     }
     
     
});