function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}, {title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}, {title: 'phone', price: 987654}])
];

const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);