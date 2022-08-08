import './AboutUs.css';
function AboutUs() {
    return (
        <div id='AboutUsMain'>
            <div id='imgdiv'>
            <img id='AboutUs' src={process.env.PUBLIC_URL + '/Assets/images/About Us.png'} alt="AboutUs" /> 
            </div>
            

            <h2>About Us  Tagline</h2>
            “We have the capabilities and experience to deliver the products you need to move forward.”

            <h2>The History</h2>
            <p>The story of Spark Clothings started in Bangalore in the year 2000 with wholesale of hosiery and woven garments,
                catering to the needs of various wholesalers and retailers across India. Bangalore textiles industry
                stands at USD 4.2 billion in 2012 and is globally famous for its hosiery products.
                The City has more than 5,000 garment manufacturing units and job work units,and is one of the most organised
                processing and finishing garment clusters in India.</p>

            <p>The firm came into existence in the year 2005 as a Sole Proprietorship concern in Bangalore, Tamil Nadu.
                In the year 2007 it started as family enterprise with a tiny shop selling Men's apparel at much lesser price than market and expanded to full men's wear during next six months.
                The journey continued and in 2011 launched its first exclusively brand store in Bangalore with bigger retailing space for Men's wear,
                Women's wear and Kids clothing.Spark Clothings is engaged into multiple business activities which include manufacturing,
                supplying and trading in a wide array of clothing products which include Women's Wear,Polo T-Shirt, Girls T-Shirt and many more.</p>

            <p>The range offered is well acknowledged for their availability in stylish pattern, perfect finish and comfort in wearing.
                Products are developed after careful attention and hard work of Spark team. It aspires to render quality striven products which guarantee cheerfulness of end customer.</p>
        </div>
    )

}
export default AboutUs