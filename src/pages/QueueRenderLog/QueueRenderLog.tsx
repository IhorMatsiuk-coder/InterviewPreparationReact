import {FC, PropsWithChildren, useEffect, useInsertionEffect, useLayoutEffect} from "react";

const FirstComponent:FC<PropsWithChildren> = ({children}) => {
    console.log('1', '1'); //1

    useEffect(() => {
        console.log('2', '10') //10
    }, []);

    return (
        <header>
            <h1>FirstComponent text</h1>
            {children}
        </header>
    )
}

const SecondComponent: FC = () => {
    console.log('3', '2') //2

    useEffect(() => {
        console.log('4', '9') //9
    }, []);

    useLayoutEffect(() => {
        console.log('5', '6') //6
    }, []);

    return (
        <h3
            ref={() => {
                console.log('6', '5') //5
            }}
        >
            SecondComponent text
        </h3>
    )
}

const ThirdComponent: FC = () => {
    console.log('7', '3') //3

    useEffect(() => {
        console.log('8', '11') //11
    }, []);

    useLayoutEffect(() => {
        console.log('9', '7') //7
    }, []);

    return (
        <div>
            <p>ThirdComponent text</p>
        </div>
    )
}


const QueueRenderLog: FC = () => {
    useInsertionEffect(() => {
        console.log('10', '4') //4
    }, []);

    return (
        <main
            className="app"
            ref={() => {
                console.log('11', '8') //8
            }}
        >
            <FirstComponent>
                <SecondComponent />
            </FirstComponent>
            <ThirdComponent />
        </main>
    )
}

export default QueueRenderLog;
