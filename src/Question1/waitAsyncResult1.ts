/**
 * @param {Promise} fetcher - 任意的异步函数，没有结果时返回null，有结果时可以返回任意非null的值。
 */
const waitAsyncResult1 = <T extends () => Promise<any>>({
  fetcher,
}: {
  fetcher: T;
}) => {
  const promise = new Promise<NonNullable<Awaited<ReturnType<T>>>>(() => {});

  return [promise, () => {}] as const;
};

export default waitAsyncResult1;
