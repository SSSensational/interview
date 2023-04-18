import React, { useCallback, useState, useRef } from "react";
import { uniqueId } from "lodash-es";
import { isTransactionReceipt } from "./utils";
import waitAsyncResult1 from "./waitAsyncResult1";
import waitAsyncResult2 from "./waitAsyncResult2";
import waitAsyncResultAnswer from "./waitAsyncResultAnswer";

const Question1: React.FC = () => {
  const [inWaiting, setInWating] = useState(false);
  const stopFunc = useRef<Function | null>(null);

  const sendTranscation = useCallback(async () => {
    const uniqueTxHash = uniqueId("txHash");
    try {
      const [receiptPromise, stop] = waitAsyncResultAnswer({
        fetcher: () => isTransactionReceipt(uniqueTxHash),
      });
      setInWating(true);
      stopFunc.current = stop;
      await receiptPromise;
    } catch (_) {
    } finally {
      setInWating(false);
      stopFunc.current = null;
    }
  }, []);

  return (
    <div>
      <b>Question1: </b>
      <p>区块链中，会有很多场景需要等待一笔交易上链执行完成。</p>
      <p>
        1.请补完 waitAsyncResult1 函数，实现 等待、轮询
        直到异步函数有返回值的效果。
      </p>
      <p>2.在 1 的基础上，进一步完善该函数，详情请看waitAsyncResult2。</p>

      <div className="mt-60px">
        <button onClick={sendTranscation} disabled={inWaiting} className="block mb-8px">
          {inWaiting ? "Waiting block-chain confirm......" : "Send Transaction"}
        </button>
        <button onClick={() => stopFunc.current?.()} disabled={!inWaiting}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Question1;
