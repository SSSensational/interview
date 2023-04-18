import { waitSeconds } from "./utils";

async function* endlessGenerator() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

/**
 * @param {Promise} fetcher - 任意的异步函数，没有结果时返回null，有结果时可以返回任意非null的值。
 * @param {Number} maxWaitTime - 最大等待时长，以秒为单位，0表示无限等待。
 * @param {Number} interval - 轮询间隔，以秒为单位。
 */
const waitAsyncResult = <T extends () => Promise<any>>({
  fetcher,
  maxWaitTime = 60,
  interval = 3,
}: {
  fetcher: T;
  maxWaitTime?: number;
  interval?: number;
}) => {
  let reject: (reason?: any) => void;
  const stop = () => {
    reject(new Error("Wait async stop"));
  };

  const promise = new Promise<NonNullable<Awaited<ReturnType<T>>>>(
    async (resolve, _reject) => {
      reject = _reject;
      const generator =
        maxWaitTime === 0
          ? endlessGenerator()
          : Array.from({ length: Math.floor(maxWaitTime / interval) });

      for await (const _ of generator) {
        try {
          const res = await fetcher();
          if (res) {
            resolve(res);
            return;
          }
        } catch (_) {
        } finally {
          await waitSeconds(interval);
        }
      }
      reject(new Error("Wait async timeout"));
    }
  );

  return [promise, stop] as const;
};

export default waitAsyncResult;
