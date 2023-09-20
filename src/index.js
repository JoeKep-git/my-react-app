import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myElement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);

root.render(myElement);