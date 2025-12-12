import { Descriptions, Flex, Typography, Tag } from "antd";
import { useParams } from "react-router-dom";
import "./MoviePage.css";
import { useEffect, useState } from "react";
import { getMovie } from "../../utils/requests";

const MoviePage = () => {
  const { id } = useParams();
  
  const [movie, setMovie] = useState({
    id: 1,
    title: {
      ru: "Загрузка",
      en: "Loading",
    },
    rating: "?",
    details: {
      year: "?",
      director: "?",
      screenwriter: "?",
      genres: [],
      country: "?",
      description: "?",
    },
    poster: "",
    actors: [],
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
	getMovie(id)
	  .then((res) => {
		setMovie(res.data.data);
	  })
	  .catch((e) => console.warn(e));
  }, []);

  useEffect(() => {
	setItems([
		{ label: "год", children: movie.details.year },
		{
		label: "режиссер",
		children: movie.details.director,
		},
		{
		label: "сценарист",
		children: movie.details.screenwriter,
		},
		{
		label: "жанр",
		children: (
			<>
			{movie.details.genres.map((genre) => (
				<Tag color="#FF7A85" key={genre}>
				{genre}
				</Tag>
			))}
			</>
		),
		},
		{
		label: "страна",
		children: movie.details.country,
		},
		{
		label: "описание",
		children: movie.details.description,
		span: 3,
		},
	]);
  }, [movie]);

  return (
    movie !== undefined ? <div id="movie-page">
      <div className="content-movie-container">
        <Flex gap={30} align="center">
          <Typography.Title className="movie-title" level={4}>
            {movie.title.ru}
          </Typography.Title>
          <Typography.Title className="movie-title light" level={4}>
            {movie.title.en}
          </Typography.Title>
        </Flex>
      </div>
      <div className="content-movie-container">
        <Flex gap={90}>
          <img className="movie-img" src={movie.poster}></img>
          <div className="movie-info-container">
            <Flex></Flex>
            <Descriptions
              column={1}
              colon={false}
              title={"О фильме"}
              bordered
              items={items}
            ></Descriptions>
          </div>
        </Flex>
      </div>
      <div className="content-movie-container"></div>
    </div> : <></>
  );
};

export default MoviePage;
