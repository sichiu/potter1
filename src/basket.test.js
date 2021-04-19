const { basket } = require("./basket");

describe("Book calculator", () => {
  it("should return 5 for one book", () => {
    const books = [{ name: "Book1", price: 5 }];
    const total = basket(books);
    expect(total).toBe(5);
  });

  it("should return 13 for two different books", () => {
    const books = [
      { name: "Book1", price: 5 },
      { name: "Book2", price: 8 }
    ];
    const total = basket(books);
    expect(total).toBe(13);
  });

  it("should provide 10% discount for three different books", () => {
    const books = [
      { name: "Book1", price: 5 },
      { name: "Book2", price: 8 },
      { name: "Book3", price: 7 }
    ];
    const total = basket(books);
    expect(total).toBe(18);
  });

  it("should discount offer book if name is Offer book", () => {
    const books = [
      { name: "Book1", price: 5 },
      { name: "Offer book", price: 10 }
    ];
    const total = basket(books);
    expect(total).toBe(5);
  });

  it("should provide 5% discount with voucher code SAVINGMONEY", () => {
    const books = [
      { name: "Book1", price: 5 },
      { name: "Book2", price: 8 },
      { name: "Book3", price: 7 }
    ];
    const total = basket(books, "SAVINGMONEY");
    expect(total).toBe(17.1);
  });

  it("should apply BOGOHP for two of the same books", () => {
    const books = [
      { name: "Book1", price: 5 },
      { name: "Book2", price: 8 },
      { name: "Book3", price: 7 },
      { name: "Book2", price: 8 }
    ];
    const total = basket(books);
    expect(total).toBe(21.6);
  });
});
