"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

const LoadMore = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  hasNextPage,
}: Props) => {
  const router = useRouter();
  const handleNavigation = (direction: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    if (direction === "next" && hasNextPage) {
      currentParams.delete("startcursor");
      currentParams.set("endcursor", endCursor);
    } else if (direction === "first" && hasPreviousPage) {
      currentParams.delete("endcursor");
      currentParams.set("startcursor", startCursor);
    }
    const newSearchParams = currentParams.toString();
    const newPathname = `${window.location.pathname}? ${newSearchParams}`;
    router.push(newSearchParams);
  };

  return (
    <div>
      {hasPreviousPage && (
        <Button
          type="button"
          title="First Page"
          handleClick={() => handleNavigation("first")}
        />
      )}
      {hasNextPage && (
        <Button
          type="button"
          title="First Page"
          handleClick={() => handleNavigation("next")}
        />
      )}
    </div>
  );
};

export default LoadMore;
