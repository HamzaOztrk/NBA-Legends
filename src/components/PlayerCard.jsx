import Card from "react-bootstrap/Card";
import { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);

  return (
    <Card onClick={()=>setShowImage(!showImage)} className="rounded-2 m-auto player-card" role="button">
      {showImage ? (
        <Card.Img className="player-logo" variant="top" src={img} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => {
            return <li key={index} className= "h5 text-start list-unstyled"> 🏀{item}</li>;
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};
export default PlayerCard;
