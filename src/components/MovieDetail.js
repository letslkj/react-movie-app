function MovieDetail({
  title,
  year,
  rating,
  language,
  img,
  description,
  genres,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{year}</span> /{" "}
      {genres.map((genre, index) => (
        <span key={index}>{genre}. </span>
      ))}{" "}
      / <span>{rating}</span>
      <hr />
      <img src={img} alt={title} />
      <div>{description}</div>
    </div>
  );
}

export default MovieDetail;
