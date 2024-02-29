const excludeField = (data, keys) => {
  return data.map((item) => {
    for (const key of keys) {
      delete item[key];
    }
    return item;
  });
};

export default excludeField;
