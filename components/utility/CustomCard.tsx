import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CustomCardProps {
    value: number;
    title: string;
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CustomCard = ({ value, title }: CustomCardProps) => {
    const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      setReset(true); // Reset animation
      setCount(0); // Restart count
    } else {
      setReset(false); // Stop animation when out of view
    }
  }, [inView]);

  useEffect(() => {
    if (!reset) return;

    let start = 0;
    const animationDuration = 2000; // Animation duration in ms
    const increment = Math.ceil(value / (animationDuration / 10)); // Update every 10ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value); // Ensure the final value is exact
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [reset, value]);


    return (
         <Card ref={ref} className="w-full lg:w-[250px] service-card">
      <CardHeader>
        <CardTitle className="flex justify-center text-3xl">
          {count}
        </CardTitle>
        <CardDescription className="flex justify-center text-xl">
          {reset && (
            <motion.span
              key={title} 
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              {title}
            </motion.span>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
    )
}

export default CustomCard;