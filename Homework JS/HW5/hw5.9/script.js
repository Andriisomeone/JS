function displayUsers(users) {
    users.forEach(user => {
        const block = document.createElement('div');

        const userInfo = document.createElement('p');
        userInfo.textContent = `ID: ${user.id} | Name: ${user.name} | Age: ${user.age}`;

        block.appendChild(userInfo);
        document.body.appendChild(block);
    });
}

const usersArray = [
    {id: 1, name: 'Олег', age: 25},
    {id: 2, name: 'Марія', age: 30},
    {id: 3, name: 'Іван', age: 22}
];

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => displayUsers(usersArray));
} else {
    displayUsers(usersArray);
}