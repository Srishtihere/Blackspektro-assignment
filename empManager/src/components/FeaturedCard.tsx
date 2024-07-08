import React from "react";
import { Link } from "react-router-dom";

interface FeatureCardData {
  href: string;
  id: number;
  title: string;
  description?: string;
}

const FeaturedCard: React.FC<FeatureCardData> = ({
  href,
  id,
  title,
  description,
}) => {
  return (
    <Link to={href} className="text-decoration-none w-50">
      <div
        className={`card m-2 ${
          id % 2 === 0 ? "text-bg-dark" : "text-bg-light border-dark border-3"
        } `}
      >
        <div className="card-body">
          <h5>{title}</h5>
          {description && (
            <p className={id % 2 === 0 ? "text-white" : "text-muted"}>
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
