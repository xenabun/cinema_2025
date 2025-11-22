import { Card } from "antd";

function MovieCard(props) {
  return (
    <Card
		hoverable
		style={{ width: 250 }}
		cover={<img draggable={false}
				alt={props.title}
				src={props.img}/>}
	>
      <Card.Meta title={props.title} description={props.year} />
    </Card>
  );
}

export default MovieCard;
