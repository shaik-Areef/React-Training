import { useEffect, useState } from 'react';
import './AboutUs.css';
function AboutUs() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("http://localhost:5000/aboutUs")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json)
            })
    }, []);

    return (
        <div id='AboutUsMain'>
            <div id='imgdiv'>
                <img id='AboutUs' src={process.env.PUBLIC_URL + '/Assets/images/About Us.png'} alt="AboutUs" />
            </div>
            
            <h2 className='title'>TagLine :</h2>
            {data.tagLine}

            <h2 className='title'>Company History : </h2>
            <div dangerouslySetInnerHTML={
                { __html: data.history }
            }>
            </div>
        </div>
    )

}
export default AboutUs