"use client";

import React, { useState } from "react";
import { ProductListProps } from "./ProductsProps";
import ProductImage from "@/assets/image.jpg";
import Image from "next/image";

const ProductsDoNot: React.FC<ProductListProps> = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 3, products.length));
      setIsLoading(false);
    }, 1000); // Simulerar en laddningstid på 1 sekund
  };

  return (
    <div className="products">
      <div className="products__container">
        <div className="products__inner">
          <div className="products__list">
            {products.slice(0, visibleCount).map((product) => (
              <div className="products__item" key={product.id}>
                <Image
                  className="products__image"
                  width={360}
                  src={ProductImage}
                  alt={""}
                />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>{product.price} SEK</p>
                <a className="products__link" href="#">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
        {visibleCount < products.length && (
          <div className="products__load-more">
            <p>{isLoading && "Loading..."}</p>
            <button className="products__button" onClick={handleClick}>
              Load More
            </button>
          </div>
        )}
        {visibleCount >= products.length && (
          <div className="products__load-more">
            <p>No more items</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDoNot;
