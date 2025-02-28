"use client";

import Image from "next/image";
import { useCart } from "@/lib/context/cart-context";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types/product";
import { getMultipleProducts } from "@/lib/services/product.service";
import { getFileLink } from "@/lib/services/file.service";
import MinusIcon from "@/components/icons/Minus";
import TrashIcon from "@/components/icons/Trash";
import PlusIcon from "@/components/icons/Plus";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Box, TextField } from "@mui/material";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, itemQuantity } = useCart();
  const { data: session } = useSession();

  const [products, setProducts] = useState<Product[]>([]);
  const [productsCost, setProductsCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const shippingCost = 45000;

  const fetchProducts = async () => {
    const productId = cartItems.map((cartItem) => cartItem.productId);
    const result = await getMultipleProducts(productId);
    setProducts(result.products);
  };

  const calcCost = () => {
    let productsCost = 0;
    for (const product of products) {
      productsCost += product.price * itemQuantity(product._id);
    }

    setProductsCost(productsCost);
    setTotalCost(productsCost + shippingCost);
  };

  const payOrder = () => {};

  useEffect(() => {
    calcCost();
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [cartItems]);

  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <div className="bg-white flex-1">
        helloslkdfjslkdfj
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              variant="filled"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              variant="filled"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              variant="standard"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              variant="standard"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </div>
        </Box>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        {products.length === 0 && (
          <div className="text-center text-xl p-32 text-darken-gray">
            سبد خرید شما خالی است
          </div>
        )}
        {products.length > 0 && (
          <div className="flex text-center font-bold border-b p-2">
            <div className="flex-none w-28 p-3">تصویر</div>
            <div className="flex-1 p-3">نام محصول</div>
            <div className="flex-none w-28 p-3">تعداد</div>
            <div className="flex-none w-36 p-3">قیمت</div>
          </div>
        )}
        {products.map((product) => (
          <div
            key={product.slug}
            className="flex items-center text-center font-bold border-b p-2"
          >
            <div className="flex-none w-28">
              <Image
                src={getFileLink(product.imageKey)}
                alt={product.title}
                width={150}
                height={150}
                className="w-full aspect-square"
              />
            </div>
            <div className="flex-1 p-3">{product.title}</div>
            <div className="flex-none w-28 p-3">
              <div className="flex items-centers border rounded-lg bg-dark-gray">
                <button
                  className="size-8 rounded-s-lg flex justify-center items-center"
                  onClick={() => addToCart(product._id, 1)}
                >
                  <PlusIcon className="size-5" />
                </button>

                <div className="size-8 flex items-center justify-center">
                  {itemQuantity(product._id)}
                </div>

                <button
                  className="size-8 rounded-e-lg flex justify-center items-center"
                  onClick={() => removeFromCart(product._id, 1)}
                >
                  {itemQuantity(product._id) === 1 ? (
                    <TrashIcon className="size-5" />
                  ) : (
                    <MinusIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex-none w-36 p-3">
              {product.price.toLocaleString()} تومان
            </div>
          </div>
        ))}
      </div>
      {products.length > 0 && (
        <div className="bg-white w-full lg:w-96 p-3 rounded-lg flex-none h-fit">
          <div className="flex justify-between mb-7">
            <span>قیمت کالاها</span>
            <span>{productsCost.toLocaleString()} تومان</span>
          </div>

          <div className="flex justify-between mb-7">
            <span>هزینه ارسال</span>
            <span>{shippingCost.toLocaleString()} تومان</span>
          </div>

          <div className="flex justify-between mb-7 text-darken-gray">
            <span>مبلغ قابل پرداخت</span>
            <span>{totalCost.toLocaleString()} تومان</span>
          </div>

          {/* {session?.user.name ?} */}
          <Link
            href={"/checkout/shipping"}
            className="bg-black text-white w-full p-4 rounded-lg hover:bg-light-black duration-150"
          >
            تکمیل سفارش
          </Link>

          <button
            className="bg-black text-white w-full p-4 rounded-lg hover:bg-light-black duration-150"
            onClick={payOrder}
          >
            پرداخت سفارش
          </button>
        </div>
      )}
    </div>
  );
}
