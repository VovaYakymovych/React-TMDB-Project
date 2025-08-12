import "./StarRating.css";
import type {FC} from "react";

type StarRatingProps = {
    rating: number;
};

const StarRating:FC<StarRatingProps> = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 10; i++) {
        if (rating >= i) {
            stars.push(<span key={i} className="star full">★</span>);
        } else if (rating >= i - 0.5) {
            stars.push(<span key={i} className="star half">★</span>);
        } else {
            stars.push(<span key={i} className="star empty">★</span>);
        }
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
