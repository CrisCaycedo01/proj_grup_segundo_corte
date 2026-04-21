import React from "react";


interface Meal {
  strMeal: string;
  strMealThumb: string;
}

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  if (!meal) return null;

  return (
    <div className="meal-card">
      <img
        src={meal.strMealThumb || ""}
        alt={meal.strMeal || "Meal image"}
        className="meal-card__image"
      />
      <h3 className="meal-card__title">
        {meal.strMeal || "Sin nombre"}
      </h3>
    </div>
  );
};

export default MealCard;