import Rating from 'react-rating';
import { StarFill, Star } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

function StarRating({ rating }) {
  return (
    <Container className='mb-3'>
        <Rating 
        initialRating={rating} 
        emptySymbol={<Star className='success' fontSize={'1.8em'}/>} 
        fullSymbol={<StarFill color='gold' fontSize='1.8em'/>} 
        fractions={3} 
        readonly 
        />

    </Container>
  );
}


export default StarRating;