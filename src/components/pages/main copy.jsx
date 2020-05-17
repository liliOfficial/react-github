import React from 'react';
import data from '../assets/data/repositories.json';

export default function Main() {
    return(
        <div className="container">
            <div>
                {data.map(e => {
                    return (
                    <div>{e.name}</div>
                    )
                })}
            repository’s Id, name, watchers_count
            </div>
        </div>
    )
}