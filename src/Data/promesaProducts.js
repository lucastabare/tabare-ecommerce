const isProducts = true;

const promesaProducts = (espera, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isProducts) {
        resolve(res);
      } else {
        reject("Error en the promesaProducts");
      }
    }, espera);
  });
};
export default promesaProducts;
