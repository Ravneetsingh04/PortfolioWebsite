
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/image/meter1.svg';
import meter2 from '../assets/image/meter2.svg';
import meter3 from '../assets/image/meter3.svg';
import colorSharp from '../assets/image/color-sharp.png';

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className='skill' id='skills'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis et necessitatibus alias itaque voluptatibus earum consectetur maxime aliquid odit ratione. Nostrum maiores non odit doloremque ipsam rem dolor nulla enim?</p>
                        <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                            <div className="item">
                                <img src={meter1} alt='Image1'/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt='Image2'/>
                                <h5> C++ & Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt='Image3'/>
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt='Image4'/>
                                <h5>SalesForce Development</h5>
                            </div>
                        </Carousel>
                        </div>
                        </div>
                </div>
            </div>
            <img className='background-image-left' src={colorSharp} alt='img'/>
        </section>
      )
}