import {useEffect, useRef, useState} from "react";

const SearchDebounceFunction = () => {
    const controllerRef = useRef<AbortController>()
    const [usersData, setUsersData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredUser, setFilteredUser] = useState<any>({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("fetched data", data);
                setUsersData(data);
            })
            .catch((error) => {
                console.log("Errror While fetching user data");
            });
    }, []);

    useEffect(() => {
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal

        const fetchUsingAsyncAwaitWithFetchApi = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchText}`, { signal }); // Fetch data based on the current page
                const data = await response.json();
                setFilteredUser(data[0]);
            } catch (error: any) {
                if (error.name === "AbortError") {
                    console.log("Fetch aborted"); // Log a message when the request is intentionally aborted
                    return; // Exit the function to prevent further error handling
                }
            }
        };
        const filterTimer = setTimeout(() => { fetchUsingAsyncAwaitWithFetchApi()}, 300);

        return () => {
            if(controllerRef.current) {
                controllerRef.current?.abort();
            }
            clearTimeout(filterTimer);
        };
    }, [searchText]);

    const handleSearch = (value: any) => {
        setSearchText(value);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h4>Users Data</h4>
            <input
                type="text"
                placeholder="Search by username"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
            />

            <table
                style={{
                    borderCollapse: "collapse",
                    margin: "auto",
                    border: "1px solid red",
                }}
            >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                </thead>

                <tbody>
                {usersData &&
                    usersData.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h4>Search Result</h4>
                {filteredUser && filteredUser.name}
            </div>
        </div>
    );
}

export default SearchDebounceFunction;
