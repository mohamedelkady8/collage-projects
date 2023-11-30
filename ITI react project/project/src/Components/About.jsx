import React from "react";
import Style from'../Style/About.module.css'
const About = () => {
    return (
        <div className={Style.about}>
            <div className={Style.par}>
                <h2 className={Style.h}>About Us</h2>
                <p className={Style.p}>
                Welcome to our furniture store! We are passionate about providing high-quality 
                furniture that enhances the beauty and comfort of your home. With a wide range of designs, 
                materials, and styles, we aim to cater to every individual's unique tastes and preferences.
                Our team of skilled craftsmen meticulously handcraft each piece of furniture, 
                ensuring attention to detail and durability. We use only the finest materials to create 
                furniture that stands the test of time.Whether you're looking for modern and sleek designs 
                or classic and timeless pieces, we have something for everyone. Browse through our collection 
                and find the perfect furniture to transform your living space into a haven of style and comfort.
                </p>
            </div>
        </div>
    )
}
export default About