"use client";

import React, { useState } from "react";
import { ProductListProps } from "./ProductsProps";
import ProductImage from "@/assets/image.jpg";
import Image from "next/image";
import "./Products.scss";

const ProductsDo: React.FC<ProductListProps> = ({ products }) => {
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
          <h3 id="products">Products</h3>
          <ul
            aria-live="polite"
            className="products__list"
            aria-labelledby="products"
          >
            {products.slice(0, visibleCount).map((product) => (
              <li className="products__item" key={product.id}>
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
                  <span className="a11y-hidden">about {product.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div aria-live="polite" className="products__load-more">
          {visibleCount >= products.length && <p>No more products to show</p>}
          {isLoading && <p>Loading more products</p>}
        </div>
        {visibleCount < products.length && (
          <div className="products__load-more">
            <button className="products__button" onClick={handleClick}>
              Load more products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDo;
