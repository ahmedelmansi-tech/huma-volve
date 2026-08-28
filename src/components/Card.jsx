const Card = ({
  imageSrc = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  altImage = "card-image",
  cardTitle = "Card Title",
  cardContent = "A card component has a figure, a body part, and inside body there are title and actions parts",
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-md mx-auto">
      <figure>
        <img src={imageSrc} alt={altImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardContent}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
