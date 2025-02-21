// Функция, возвращающая Promise для получения данных пользователя
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://reqres.in/api/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                reject('Ошибка получения данных');
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Использование
getUserData(2)
    .then(user => {
        console.log('Данные пользователя:', user);
    })
    .catch(error => {
        console.log('Ошибка:', error);
    });