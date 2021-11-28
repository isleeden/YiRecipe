import React, { useState } from "react";
import styles from "./RecipeImages.module.scss";

export default function RecipeImages({ imgs }) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className={styles.recipeImages}>
      <div className={styles.imgWrapper}>
        <img src={imgs[currentImg]} alt="recipe_img" />
      </div>
      <div className={styles.imgList}>
        {imgs.map((img, index) => {
          return (
            <div key={`${item}${index}`} className={styles.secImgWrapper}>
              <img
                onClick={() => {
                  setCurrentImg(index);
                }}
                src={img}
                alt="recipe_img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
