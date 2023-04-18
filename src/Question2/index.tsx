import React from "react";
import Countdown1 from "./Countdown1";
import CountdownAnswer from "./CountdownAnswer";

const counts = Array.from({ length: 1000 }).fill(0);
const Question2: React.FC = () => {
  return (
    <div>
      <b>Question2: </b>
      <p>
        区块链中，会有很多场景
        指定在区块达到某高度后执行，所以倒计时是个很常见的组件
      </p>
      <p>请补完Countdown1组件, 实现下述例子中 CountdownAnswer 的效果</p>

      <div className="mt-40px flex items-center gap-32px">
        <span>TODO: second</span>
        <Countdown1 type="second" timing={15000} />
      </div>

      <div className="mt-6px flex items-center gap-32px">
        <span>TODO: millisecond</span>
        <Countdown1 type="millisecond" timing={15000} />
      </div>

      <div className="mt-16px flex items-center gap-32px">
        <span>Example seconds: </span>
        <CountdownAnswer
          type="second"
          timing={15000}
          onEnd={() => console.log(1)}
        />
      </div>

      <div className="mb-40px mt-6px flex items-center gap-32px">
        <span>Example millisecond: </span>
        <CountdownAnswer type="millisecond" timing={15000} />
      </div>

      {/* {counts.map((_, index) => (
        <CountdownAnswer
          key={index}
          type="second"
          timing={15000}
          onEnd={() => console.log(1)}
        />
      ))} */}
    </div>
  );
};

export default Question2;
