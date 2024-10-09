import {useEffect, useState} from "react";

interface IUser {
    id: string
    username: string
}

const SortNameFunction = () => {
    const [usersData, setUsersData] = useState<IUser[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsersData(data);
            })
            .catch((error) => {
                throw error;
            });
    }, []);

    const handleAscendingSort = () => {
        const users = [...usersData].sort((a,b) => {
            if ( a.username < b.username ){
                return -1;
            }
            if ( a.username > b.username ){
                return 1;
            }
            return 0;
        })

        setUsersData(users)
    }

    const handleDescendingSort = () => {
        const users = [...usersData].sort((a,b) => {
            if ( a.username > b.username ){
                return -1;
            }
            if ( a.username < b.username ){
                return 1;
            }
            return 0;
        })

        setUsersData(users)
    }

    return <div className="App">
        <h1>Example of short by username</h1>
        <button onClick={handleAscendingSort}>
            Short by Ascending
        </button>
        <button onClick={handleDescendingSort}>
            Short by Descending
        </button>
        {usersData &&
            usersData.map((user) => (
                <div key={user.id}>
                    <p>{user.username}</p>
                </div>
            ))}
    </div>
}

export default SortNameFunction;
