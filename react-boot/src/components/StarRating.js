import Rating from 'react-rating';
import { StarFill, Star } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

function StarRating({ rating, readOnly, onChange }) {

  if (readOnly) {
    return (
      <Container className='mb-3'>
          <Rating 
          initialRating={rating} 
          emptySymbol={<Star className='success' color='grey' fontSize={'1.8em'}/>} 
          fullSymbol={<StarFill color='gold' fontSize='1.8em'/>} 
          fractions={10} 
          readonly 
          />

      </Container>
    );

  }

  else {
    return (
      <Container className='mb-3'>
          <Rating 
          initialRating={rating} 
          emptySymbol={<Star className='success' color='grey' fontSize={'1.8em'}/>} 
          fullSymbol={<StarFill color='gold' fontSize='1.8em'/>} 
          fractions={2} 
          onChange={onChange}
          />
      </Container>
    );
  }
}


export default StarRating;