import { useState } from "react";
import './AlbumList.css'

function AlbumList() {

    let [photos, setPhtos] = useState([]);

    if (!photos.length) {
        getphotos();
    }

    async function getphotos() {

        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1")).json();
        console.log(photos);
        setPhtos(photos);
    }
    return (
        <div>
            <h1> Album List</h1>
            <table>
                <thead>
                    <td>Title</td>
                    <td>URL</td>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) {

                            return <tr><td>{photo.title}</td>
                                <td>{photo.url}</td></tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )

} export default AlbumList