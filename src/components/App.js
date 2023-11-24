import React, { useState } from 'react';

export default function App() {
    const [names, setNames] = useState(['Ivan', 'Monika', 'Pesho', 'Nokolai', 'Todor']);

    function deleteName(name) {
        const updatedNames = names.filter(n => n !== name);
        setNames(updatedNames);
    }

    return (
        <div>
            <ul>
                {names.map((name, index) => (
                    <li
                        key={index}
                        onClick={() => deleteName(name)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}