# Menu Restoran 

## Deskripsi Proyek
Website menu restoran sederhana dengan desain responsif dan fitur pencarian dinamis menggunakan HTML, CSS, dan JavaScript.

## Fitur
- Desain responsif
- Tiga kategori menu (Appetizer, Main Course, Dessert)
- Fitur pencarian real-time
- Tampilan gambar untuk setiap hidangan
- Hover effect pada item menu


## Cara Penggunaan
1. Unduh atau clone repository
2. Buka file `index.html` di browser
3. Gunakan kolom pencarian untuk menemukan hidangan tertentu

### Fitur Pencarian
Fitur pencarian memungkinkan Anda menemukan hidangan dengan cepat:

- Ketik nama atau deskripsi makanan di kolom pencarian
- Pencarian bersifat real-time (langsung mengupdate hasil)
- Pencarian tidak bersifat case-sensitive
- Mendukung pencarian sebagian kata

#### Contoh Penggunaan Pencarian:
- Mencari "goreng" akan menampilkan "Nasi Goreng" dan "Pisang Goreng"
- Mencari "ayam" akan menampilkan hidangan yang mengandung ayam
- Pencarian berlaku di nama dan deskripsi hidangan

#### Cara Kerja Fitur Pencarian
```javascript
document.getElementById('filter-input').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemName = item.querySelector('.menu-item-name').textContent.toLowerCase();
        const itemDescription = item.querySelector('.menu-item-description').textContent.toLowerCase();
        
        if (itemName.includes(filterValue) || itemDescription.includes(filterValue)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});
```

## Cara Menambahkan Menu Baru
Untuk menambahkan item menu baru:

1. Tambahkan di dalam kategori yang sesuai
2. Gunakan struktur HTML berikut:
```html
<div class="menu-item">
    <div class="menu-item-content">
        <img src="/path/to/image" alt="Nama Makanan" class="menu-item-image">
        <div class="menu-item-details">
            <div class="menu-item-name">Nama Makanan</div>
            <div class="menu-item-description">Deskripsi makanan</div>
        </div>
    </div>
    <div class="menu-item-price">Rp XX.000</div>
</div>
```

## Teknologi yang Digunakan
- HTML5
- CSS3
- Vanilla JavaScript
