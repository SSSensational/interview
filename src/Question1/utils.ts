import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
dayjs.extend(durationPlugin);

const randomWaitInfoMap = new Map<
  string,
  { start: number; duration: number }
>();
export const isTransactionReceipt = async (transactionHash: string) => {
  await waitSeconds(getRandomIntInclusive(1, 2));
  const randomWaitInfo = randomWaitInfoMap.get(transactionHash);
  if (randomWaitInfo) {
    return dayjs().isAfter(
      dayjs(randomWaitInfo.start).add(randomWaitInfo.duration, "second")
    );
  } else {
    randomWaitInfoMap.set(transactionHash, {
      start: dayjs().valueOf(),
      duration: getRandomIntInclusive(5, 10),
    });
    return false;
  }
};

export const waitSeconds = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
