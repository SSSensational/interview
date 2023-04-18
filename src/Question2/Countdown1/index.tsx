import React, { useRef, useEffect } from "react";

interface Props {
  /** 倒计时时间，单位秒 */
  timing: number;
  /** 倒计时类型 */
  type: "second" | "millisecond";
  onEnd?: () => void;
}
const Countdown1: React.FC<Props> = ({ type, timing, onEnd }) => {
  const remainTimeDOM = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!remainTimeDOM.current) return;

    return () => {
    };
  }, [type, timing, onEnd]);

  return <div className="text-20px" ref={remainTimeDOM} />;
};

export default Countdown1;
