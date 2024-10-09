import {ChangeEvent, useEffect, useState} from "react";

interface IUserData {
    id: string
    name: string
}

const SearchFunction = () => {
    const [users, setUsers] = useState<IUserData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // Получение данных о пользователях из заданной конечной точки
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Search by username"
                value={searchTerm}
                onChange={onchangeHandler}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchFunction;
