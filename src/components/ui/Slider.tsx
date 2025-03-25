"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/utils/cn";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn("relative flex items-center select-none touch-none w-full h-5", className)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full bg-gray-200 rounded-full">
          <SliderPrimitive.Range className="absolute h-full bg-blue-500 rounded-full" />
        </SliderPrimitive.Track>
        {props.value?.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className="block w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
