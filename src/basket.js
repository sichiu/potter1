const basket = (books, coupon) => {
  var total = 0;
  const scannedBooks = [];

  for (let obj of books) {
    if (scannedBooks.includes(obj.name)) total += obj.price / 2;
    else if (!obj.name.includes("Offer")) total += obj.price;

    scannedBooks.push(obj.name);
  }
  if (books.length >= 3) total = (total * 9) / 10;
  if (coupon == "SAVINGMONEY") total = (total * 95) / 100;
  return total;
};

module.exports = {
  basket
};
