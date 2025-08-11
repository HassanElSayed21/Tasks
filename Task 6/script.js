let productList = [];
let productId = 1;
let editProductId = null; 

document.getElementById('addBtn').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let cat = document.getElementById('cat').value;

    if (!name || !desc ) {
        alert('Please fill in all fields.');
        return;
    }

    if (editProductId !== null) {
        let product = productList.find(p => p.id === editProductId);
        if (product) {
            product.name = name;
            product.desc = desc;
            product.cat = cat;
        }
        editProductId = null;
        this.textContent = 'Add';
    } else {
        let product = {
            id: productId++,
            name: name,
            desc: desc,
            cat: cat,
        };
        productList.push(product);
    }
    renderTable();
    clearForm();
});

function renderTable() {
    let tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';

    productList.forEach(product => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.desc}</td>
            <td>${product.cat}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${product.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editProduct(id) {
    let product = productList.find(p => p.id === id);
    if (product) {
        document.getElementById('name').value = product.name;
        document.getElementById('desc').value = product.desc;
        document.getElementById('cat').value = product.cat;
        document.getElementById('addBtn').textContent = 'Update';
        editProductId = id;
    }
}

function deleteProduct(id) {
    productList = productList.filter(p => p.id !== id);
    renderTable();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('cat').selectedIndex = 0;
    editProductId = null;
    document.getElementById('addBtn').textContent = 'Add';
}
