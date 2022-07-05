async function save(ent) {
    ent.preventDefault();
    console.log(ent);
    const data = {
        item: document.getElementById("item").value,
        price: document.getElementById("price").value,
        OrderDate : document.getElementById("date").value
    }
    console.log(data);
    await fetch("http://localhost:3000/orders", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" }
    })

}

(async function () {

    generateOrderList()
    generateCategoryDropbox()

    async function generateCategoryDropbox() {
        const categories = await (await fetch("http://localhost:3000/categories")).json();
        const list = document.getElementById("dropdown");
        console.log(categories);
        categories.forEach(category => {
            const categoryTag = document.createElement('option');
            categoryTag.text = category.label;
            categoryTag.value = category.id;
            list.appendChild(categoryTag);
        });
        list.addEventListener('change', function (event) {
            console.log("clicked", list.value);
            const result = { category: list.value }
            fetch("http://localhost:3000/orders", {
                method: 'POST',
                body: JSON.stringify(result),
                headers: { "Content-type": "application/json" }
            })
        })

    }


    async function generateOrderList() {
        const Response = await fetch("http://localhost:3000/orders");
        console.log(Response);
        const orders = await Response.json();
        const list = document.getElementById("orderlist");
        console.log(orders);
        orders.forEach(order => {
            const row = document.createElement('li');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'delete';
            deleteBtn.addEventListener('click', function () {
                fetch("http://localhost:3000/orders/" + order.id, { method: "DELETE" });
            })
            row.textContent = order.item + "," + order.price;
            row.appendChild(deleteBtn);
            list.appendChild(row);
        });
    }




})();

