import Button from 'react-bootstrap/Button';

function CustomCard(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://hub.docker.com/api/media/repos_logo/v1/library%2Fmysql
            " alt='.'/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button variant="primary">Go somewhere</Button>
            </div>
        </div>
    )
}

export default CustomCard;