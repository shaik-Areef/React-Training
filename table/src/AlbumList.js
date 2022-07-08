import { useState } from "react";
import './AlbumList.css'

function AlbumList() {

    let [photos, setPhtos] = useState([]);
    let [albumid, setalbumid] = useState()


    function onSearch() {
        if (albumid > 0) {
            getphotos();
        }
    }

    async function getphotos() {

        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&albumId=" + albumid)).json();
        console.log(photos);
        setPhtos(photos);
    }
    return (
        <div>
            <h1> Showing Album List in Table Formate </h1>
            <input type='number' placeholder="Enter Album ID" value={albumid} onChange={(e) => setalbumid(e.target.value)} ></input>
            <button onClick={onSearch}>Search</button>
            <table>
                <thead>
                    <td>ID</td>
                    <td>Title</td>
                    <td>URL</td>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) {

                            return <tr>
                                <td>{photo.id}</td>
                                <td>{photo.title}</td>
                                <td><a href={photo.url}>Click</a></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )

} export default AlbumList