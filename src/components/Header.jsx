import Container from "react-bootstrap/esm/Container";
import nbalogo from "../helper/nba-logo.png";
import Image from "react-bootstrap/Image"; 


const Header = () => {
    return(
        <Container>
            <Image src={nbalogo} width="200px"></Image>
            <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
            
        </Container>
    )
}

export default Header