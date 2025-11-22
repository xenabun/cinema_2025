import { Col, Descriptions, Flex, Row, Typography } from "antd"
import MovieCard from "../../components/MovieCard/MovieCard"
import "./UserPage.css"

export default function() {
	const userInfo = [
		{
			'key': 1,
			'label': <span className="user-info-label">имя</span>,
			'children': 'Ксения Цыгулева'
		},
		{
			'key': 2,
			'label': <span className="user-info-label">почта</span>,
			'children': 'example@mail.ru'
		},
		{
			'key': 3,
			'label': <span className="user-info-label">роль</span>,
			'children': 'критик'
		},
		{
			'key': 4,
			'label': <span className="user-info-label">любимые жанры</span>,
			'children': 'драма, боевик, фантастика'
		}
	]

	const savedMovies = [
		{
			'img': 'https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg',
			'title': 'Дюна: Часть вторая',
			'year': 2024,
		},
		{
			'img': 'https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg',
			'title': 'Дюна: Часть вторая',
			'year': 2024,
		},
		{
			'img': 'https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg',
			'title': 'Дюна: Часть вторая',
			'year': 2024,
		},
		{
			'img': 'https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg',
			'title': 'Дюна: Часть вторая',
			'year': 2024,
		},
		{
			'img': 'https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg',
			'title': 'Дюна: Часть вторая',
			'year': 2024,
		},
		{
			'img': 'https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg',
			'title': 'Дюна: Часть вторая',
			'year': 2024,
		},
	]

	return (<>
		<div className="user-page-container">
			<Descriptions
				colon={false}
				column={1}
				title={<Typography.Title level={1}>Обо мне</Typography.Title>}
				items={userInfo}
			/>
			<Typography.Title level={1}>Сохраненные фильмы</Typography.Title>
			<Row
				gutter={[80, 20]}
				justify={'center'}
			>
				{savedMovies.map(movieData => {
					return <Col>
						<MovieCard
							img={movieData.img}
							title={movieData.title}
							year={movieData.year}
						/>
					</Col>
				})}
			</Row>
		</div>
	</>)
}