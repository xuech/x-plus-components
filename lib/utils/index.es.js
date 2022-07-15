const toLine = (val) => {
  return val.replace(/(A-Z)g/, "-$1").toLowerCase();
};
export { toLine };
