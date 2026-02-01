// Припустимо, що у вас є такий масив користувачів (з попереднього запиту):
let users = [
    {id: 1, name: 'vasya', username: 'leo', email: 'vasya@gmail.com', phone: '123-456-7890', address: {city: 'Kyiv', street: 'Main St', suite: 'Apt 1', zipcode: '01001'}},
    {id: 2, name: 'petya', username: 'lion', email: 'petya@gmail.com', phone: '098-765-4321', address: {city: 'Lviv', street: 'Side St', suite: 'Suite 2', zipcode: '79001'}},
    {id: 3, name: 'kolya', username: 'tiger', email: 'kolya@gmail.com', phone: '111-222-3333', address: {city: 'Kharkiv', street: 'Central Ave', suite: 'Penthouse 3', zipcode: '61001'}},
    {id: 4, name: 'olya', username: 'cheetah', email: 'olya@gmail.com', phone: '444-555-6666', address: {city: 'Odesa', street: 'Beach Blvd', suite: 'Room 4', zipcode: '65001'}}

];

const usersContainer = document.getElementById('users-container');


const usersHtml = users.map(user => `
    <div class="user-block">
        <h2>ID – ${user.id} – ${user.name} – ${user.username}</h2>
        <h3>${user.email} – ${user.phone}</h3>
        <div class="address-block">
            <p>City – ${user.address.city}</p>
            <p>Street – ${user.address.street}</p>
            <p>Suite – ${user.address.suite}</p>
            <p>Zip code – ${user.address.zipcode}</p>
        </div>
    </div>
`).join('');у


usersContainer.innerHTML = usersHtml;
