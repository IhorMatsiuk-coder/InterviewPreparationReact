import {ChangeEvent, useEffect, useState} from "react";
import useDebounce from "../../hooks/useDebounce";

const URL = 'https://swapi.dev/api/people/'

const FetchAndSearchDebounceExample = () => {
    const [text, setText] = useState<string>("");
    const [people, setPeople] = useState<any[]>([])
    const textDebounce = useDebounce(text, 1300)

    useEffect(() => {
       const getData = async () => {
           try {
                const response = await fetch(URL + '?search=' + textDebounce);
                const json = await response.json();

                return json.results;
           } catch (e) {
               console.error(e)
           }
       }

        getData().then(data => setPeople(data));
    }, [textDebounce])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
            <h1>{textDebounce}</h1>
            <input onChange={onChangeHandler} placeholder="search..." value={text} />
            <div>
                {people.map(user => (
                    <div>
                        <div>name: {user.name}</div>
                        <div>height: {user.height}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchAndSearchDebounceExample;
