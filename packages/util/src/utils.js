export const generateOrderNumber = function (provider, stationNo) {
  const timestamp = Math.floor(Date.now() / 1000)
    .toString(36)
    .toUpperCase()
    .padStart(6, '0');

  // 2. Generate two random characters

  const randomPart = generateRandomString(2);

  // 3. Combine order number
  return `${timestamp}${randomPart}${provider}${stationNo}`;
};

export const now = () => new Date().toISOString();

export const generateRandomString = function (length) {
  const randomChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array(length)
    .fill(0)
    .map(() => randomChars[Math.floor(Math.random() * randomChars.length)])
    .join('');
};

export const sleep = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getDefaultCurrency = (value) => {
  return {
    code: 'CAD',
    symbol: '$',
    value: value.toFixed(2),
  };
};
