import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'

function Carousels() {
return (
    <Carousel className='car'>
    <Carousel.Item>
        <Carousel.Caption>
            <h3>Some images of our gym</h3>
        </Carousel.Caption>

        <img
        className="d-block w-100"
        src="https://www.atelierservices.ch/wp-content/uploads/2019/04/fitness-protection-angle-650x530.jpg"
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
    <Carousel.Caption>
            <h3>Some images of our gym</h3>
        </Carousel.Caption>
        <img
        className="d-block w-100"
        src="https://blog.japanwondertravel.com/wp-content/uploads/2022/07/anytime-fitness-gym-1200x800.jpg"
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
    <Carousel.Caption>
            <h3>Some images of our gym</h3>
        </Carousel.Caption>
        <img
        className="d-block w-100"
        src="https://images.rtl.fr/~c/2000v2000/rtl/www/1378338-une-salle-de-sport-a-lyon-illustration.jpg"
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default Carousels;