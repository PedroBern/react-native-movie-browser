function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}

export const lowercaseKeys = object => {
  const finalResult = {};

  Object.keys(object).forEach(key => {
    const lowerKey = key.charAt(0).toLowerCase() + key.substring(1);

    if (isObject(object[key]))
      finalResult[lowerKey] = lowercaseKeys(object[key]);
    else if (Array.isArray(object[key])) {
      finalResult[lowerKey] = object[key].map(el =>
        isObject(el) ? lowercaseKeys(el) : el
      );
    } else {
      finalResult[lowerKey] = object[key];
    }
  });

  return { ...finalResult };
};
