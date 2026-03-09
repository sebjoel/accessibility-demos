"use client";

import React, { useState, useRef, useEffect } from "react";
import { ProductListProps } from "./ProductsProps";
import ProductImage from "@/assets/image.jpg";
import Image from "next/image";
import "./Products.scss";

const ProductsDo: React.FC<ProductListProps> = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const firstNewIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (firstNewIndexRef.current !== null && listRef.current) {
      const firstNewItem = listRef.current.children[firstNewIndexRef.current];
      const focusTarget = firstNewItem?.querySelector<HTMLElement>("a, button, [tabindex]");
      focusTarget?.focus();
      firstNewIndexRef.current = null;
    }
  }, [visibleCount]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => {
        firstNewIndexRef.current = prevCount; // index of first new item
        return Math.min(prevCount + 3, products.length);
      });
      setIsLoading(false);
    }, 1000); // Simulerar en laddningstid på 1 sekund
  };
  return (
    <section className="products">
      <div className="products__container">
        <h2 className="products__label products__label--green">Better</h2>
        <div className="products__inner">
          <h3 className="products__heading" id="products">
            Products
          </h3>
          <span aria-live="polite" className="a11y-hidden">
            {visibleCount} of {products.length} products shown
          </span>
          <ul
            className="products__list"
            aria-labelledby="products"
            ref={listRef}
          >
            {products.slice(0, visibleCount).map((product) => (
              <li className="products__item" key={product.id}>
                <Image
                  className="products__image"
                  width={360}
                  src={ProductImage}
                  alt={product.name}
                />
                <div className="products__info">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p>{product.price} SEK</p>
                  <a className="products__link" href={`/products/${product.id}`}>
                    Read more
                    <span className="a11y-hidden">about {product.name}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div role="status" aria-live="polite" className="products__load-more">
          {visibleCount >= products.length && <p>No more products to show</p>}
          {isLoading && <p>Loading more products...</p>}
        </div>
        {visibleCount < products.length && (
          <div className="products__load-more">
            <button className="products__button" onClick={handleClick}>
              Load more products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsDo;
