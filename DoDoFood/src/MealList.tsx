import React, { useEffect, useState } from "react";

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Recetas</h2>

      {meals.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                margin: "1rem",
                padding: "1rem",
                width: "220px",
                textAlign: "center",
              }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealList;