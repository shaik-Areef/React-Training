import { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch, useSelector } from 'react-redux'
import { getAboutUsDetails } from '../../../Redux/Actions/Actions';

function AboutUs() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.aboutUs)
    useEffect(() => {
        fetchAboutUsDeatils();
    }, []);

    const fetchAboutUsDeatils = async () => {
        const result = await getAboutUsDetails();
        if (result?.payload) {
            dispatch(result);
        }
    }

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