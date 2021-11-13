import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Explore.css'


const Explore = ({ explore }) => {
    const { _id, name, img, description, price } = explore;
    return (
        <div className="explore my-5">


            <Container>
                <img className="w-75" src={img} alt="" />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{description?.slice(0, 50)}</small>
                <h6 className="price-text"><p>{price}</p></h6>

                <Link to={`/booking/${_id}`}><button className="btn btn-secondary  mb-5">Buy Now <i className="fas fa-angle-double-right"></i></button> </Link>

            </Container>

        </div>
    );
};

export default Explore;