"use client";

import { usePathname } from "next/navigation"

export default function NotFound(){

    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h2>review {reviewId} not found in product {productId}</h2>
            <p>could not find resource</p>
        </div>
    )
}