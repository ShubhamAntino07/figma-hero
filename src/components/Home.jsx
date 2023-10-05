import React, { useState } from 'react'

import staticImg from "../assets/static-image.jpg"
import image1 from "../assets/Image_1.webp"
import image2 from "../assets/Image_2.webp"
import image3 from "../assets/Image_3.webp"
import image4 from "../assets/Image_4.webp"
import image5 from "../assets/Image_5.webp"
import "../App.css"


const Home = () => {


    const [bgImage, setBgImage] = useState(staticImg)

    const handleHoverButton = (image, key) => {
        setBgImage(image)
        console.log(key, "image ka namm");
        const heading = document.getElementById("main-heading")
        const subHeading = document.getElementById("sub-heading")
        switch (key) {
            case 1:
                heading.innerText = "Add a little stark to your files."
                subHeading.innerText = "Dream big with these portfolios, presenttions, mockups and more."
                break;
            case 2:
                heading.innerText = "Add a little fun to your files."
                subHeading.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium temporibus obcaecati eius laboriosam."
                break;
            case 3:
                heading.innerText = "Add a little Struture to your files."
                subHeading.innerText ="lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio molestias id eum quae veritatis."
                break;
            case 4:
                heading.innerText = "Add a little life to your files."
                subHeading.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium temporibus obcaecati eius laboriosam."
                break;
            case 5:
                heading.innerText = "Add a little power to your files."
                subHeading.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium temporibus obcaecati eius laboriosam."
                break;
            default:
                break;
        }
    }


    const handleMouseLeave =()=>{
        setBgImage(staticImg)

        const heading = document.getElementById("main-heading")
        const subHeading = document.getElementById("sub-heading")

        heading.innerText = "Welcome to the Figma Community."
        subHeading.innerText = "Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea."

    }
    return (
        <>
            <div className='Hero' style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "#2C2C2C"
            }}>

                <div className="container" style={{
                    margin: "auto",
                    width: "80%",
                    height: "80%",
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",


                }}>


                    <div className='text-container'>

                        <h2 className='main-heading' id='main-heading'>Welcome to the Figma Community</h2>
                        <h3 className="sub-heading" id="sub-heading" >Explore thousands of free and paid templates, plugins, and UI kits to kickstart your next big idea</h3>

                    </div>


                    <div className='buttons-container'>
                        <button className="button-12" id='button-1' role="button" onMouseEnter={() => handleHoverButton(image1, 1)} onMouseLeave={handleMouseLeave}>Inspiration</button>
                        <button className="button-12" id='button-2' role="button" onMouseEnter={() => handleHoverButton(image2,2)} onMouseLeave={handleMouseLeave}>Team Syncs</button>
                        <button className="button-12" id='button-3' role="button" onMouseEnter={() => handleHoverButton(image3,3)} onMouseLeave={handleMouseLeave}>Design System</button>
                        <button className="button-12" id='button-4' role="button" onMouseEnter={() => handleHoverButton(image4,4)} onMouseLeave={handleMouseLeave}>Visual assets</button>
                        <button className="button-12" id='button-5' role="button" onMouseEnter={() => handleHoverButton(image5,5)} onMouseLeave={handleMouseLeave}>Development</button>



                    </div>





                </div>

            </div>
        </>
    )
}

export default Home