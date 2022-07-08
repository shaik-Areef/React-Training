import React, { useState, useEffect } from 'react'
import './table.css'
function Table() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res)

            })
    }, []);

    return (
        <div>
            <h1>SHOWING DATA USING GET API CALL</h1>
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Album Id</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Thumbnail Url</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => <tr key={item.id}>
                            <td>{item.albumId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><img src={item.url} width="100px" height='30px'></img></td>
                            <td><img src={item.thumbnailUrl} width="100px" height='30px'></img></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table
