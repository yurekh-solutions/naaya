import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  className = ""
}: AnimatedCounterProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <span ref={ref} className={`counter-number ${className}`}>
      {hasAnimated ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          useEasing={true}
          useGrouping={true}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
};

export default AnimatedCounter;