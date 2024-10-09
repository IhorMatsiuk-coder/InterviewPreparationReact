import React, { useEffect, useState } from 'react';

interface IUserData {
    id: string
    name: string
    email: string
    phone: string
}

const GetShowUserList = () => {
    const [users, setUsers] = useState<IUserData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users:IUserData[] =  await response.json();
                setUsers(users)
            } catch (error: unknown) {
                console.error('Error fetching user data:', error)
            } finally {
                setLoading(false)
            }
        };

        getUsers()
    }, []);

    return (
        <div>
            <h1>User Details Table</h1>
            {loading ? (
                <h2 style={{margin: 'auto', width: '60%', textAlign: 'center'}}>Loading...</h2>
            ) : (
                <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}>
                    <thead>
                    <tr style={{ border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.length &&
                        users.map((item) => (
                            <tr key={item.id} style={{ border: '1px solid #ddd', backgroundColor: 'gray', color: 'white' }}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>  
            )}
            
        </div>
    )
}

export default GetShowUserList;
