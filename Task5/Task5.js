let items = [];

function addItem(item) {
    items.push(item);
    console.log(` Added: ${item}`);
}

function showItems() {
    console.log(" Items List:");
    items.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });
}

function updateItem(index, newItem) {
    if (index >= 0 && index < items.length) {
        console.log(` Updated: ${items[index]} → ${newItem}`);
        items[index] = newItem;
    } else {
        console.log(" Invalid index");
    }
}

function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        console.log(` Deleted: ${items[index]}`);
        items.splice(index, 1);
    } else {
        console.log(" Invalid index");
    }
}

addItem("Apple");
addItem("Banana");
showItems();

updateItem(1, "Mango");
showItems();

deleteItem(0);
showItems();
