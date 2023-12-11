'use client';
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(res => console.log(res))
    }, [])

    return (<>
    </>)
}
