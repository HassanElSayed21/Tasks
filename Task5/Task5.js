let items = [];

function add(item) {
  items.push(item);
}

function show() {
  console.log(items);
}

function edit(index, newItem) {
  items[index] = newItem;
}

function remove(index) {
  items.splice(index, 1);
}

add("Apple");
add("Banana");
show();

edit(1, "Orange");
show();

add("Grapes");
remove(0);
show();

