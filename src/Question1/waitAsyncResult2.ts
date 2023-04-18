/**
 * @param {Promise} fetcher - 任意的异步函数，没有结果时返回null，有结果时可以返回任意非null的值。
 * @param {Number} maxWaitTime - 最大等待时长，以秒为单位，0表示无限等待。
 * @param {Number} interval - 轮询间隔，以秒为单位。
 * 
 * @return stop - 用于停止轮询，promise直接reject的函数。
 */
const waitAsyncResult2 = <T extends () => Promise<any>>({
  fetcher,
  maxWaitTime = 60,
  interval = 3,
}: {
  fetcher: T;
  maxWaitTime?: number;
  interval?: number;
}) => {
  const stop = () => {};
  const promise = new Promise<NonNullable<Awaited<ReturnType<T>>>>(() => {});

  return [promise, stop] as const;
};

export default waitAsyncResult2;
