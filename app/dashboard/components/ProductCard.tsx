"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import BuyNow from "./BuyNow";

interface productData {
  id: number;
  name: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  ticketPrice: number;
}

const ProductCard = ({ product }: productData) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>ticket price : {product.ticketPrice}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
          <p>Number of tickets in cart : {count}</p>
        </CardFooter>
        <div className="flex mb-4 ml-4 mr-4 justify-between">
          <div className="flex gap-4">
            <Button
              className="bg-white text-black hover:bg-gray-200 hover:text-gray-900 border-black border-2"
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              Add to cart
            </Button>
            <Button
              onClick={() => {
                if (count === 0) {
                  return;
                }
                setCount((count) => count - 1);
              }}
            >
              Remove
            </Button>
          </div>

          <div>
            <BuyNow count={count} product={product} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
