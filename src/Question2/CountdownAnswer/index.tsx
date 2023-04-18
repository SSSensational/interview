import React, { useRef, useEffect } from "react";
import timerNotifier from "./timerNotifier";

interface Props {
  /** 倒计时时间，单位秒 */
  timing: number;
  /** 倒计时类型 */
  type: "second" | "millisecond";
  onEnd?: () => void;
}
const CountdownAnswer: React.FC<Props> = ({ type, timing, onEnd }) => {
  const remainTimeDOM = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!remainTimeDOM.current) return;
    timerNotifier.addUnit({
      key: "countdown-remainTime",
      type,
      update: (remainTime) => {
        if (!remainTimeDOM.current) return;
        if (type === 'second') {
          remainTimeDOM.current.innerText = `${+remainTime.seconds + (+remainTime.milliseconds > 500 ? 1 : 0)}`;
        } else {
          remainTimeDOM.current.innerText = `${remainTime.seconds}:${remainTime.milliseconds}`;
        }
      },
      timing,
      onEnd
    });

    return () => {
      timerNotifier.deleteUnit("renew-success-remainTime");
    };
  }, [type, timing, onEnd]);

  return <div className="text-20px" ref={remainTimeDOM} />;
};

export default CountdownAnswer;
