import Card from "react-bootstrap/Card";

function ColorCards() {
  const cardtitles = ["First Card", "Second Card", "Third Card", "Fourth Card"];
  return (
    <div className="card-container">
      {["Primary", "Warning", "Success", "Danger"].map((variant, index) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          style={{ width: "13rem" }}
          className="mb-2"
        >
          <div className="card-item">
            <Card.Header>{cardtitles[index]}</Card.Header>
            <Card.Header>View Details</Card.Header>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ColorCards;