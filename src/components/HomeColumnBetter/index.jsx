import React from "react";
import { Text, Img } from "./..";

export default function HomeColumnBetter({
  image = "images/img_megaphone.svg",
  text = " Better Visibility",
  text1 = "List your carwash service on Washta, and reach more customers easily. Select the areas in our app covered by your team (such as public, mall, residential parking) and increase your revenue.",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="better" className="h-[72px] w-[72px]" />
      <Text size="lg" as="p" className="ml-[7px] mt-[13px] !font-generalsans !text-black-900 md:ml-0"style={{fontSize:'28px'}} >
        {text}
      </Text>
      <Text size="xs" as="p" className="mt-[5px] w-full !text-black-900_bf" style={{fontSize:'14px'}}>
        {text1}
      </Text>
    </div>
  );
}
