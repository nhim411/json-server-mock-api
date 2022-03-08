const faker = require('@faker-js/faker/locale/vi');
const fs = require('fs');

const randomCategoryList = (n) => {
  if (n <= 0) return;
  const categoryList = [];
  //Loop and push category
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    categoryList.push(category);
  });
  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return;
  const productList = [];
  //Loop and push category
  for (const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        categoryId: category.id,
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        material: faker.commerce.productMaterial(),
        price: faker.datatype.number({ max: 100 }),
        description: faker.commerce.productDescription(),
        thumbnailURL: faker.image.imageUrl(400, 400),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      productList.push(product);
    });
  }
  return productList;
};

(() => {
  let db = {
    categories: [],
    products: [],
    profile: { name: 'foo' },
  };
  //read db.json
  // fs.readFile('db1.json', function (err, data) {
  //   if (err) throw err;
  //   db = JSON.parse(data);
  // });
  //random data
  const categoryList = randomCategoryList(5);
  db.categories = db.categories.concat(categoryList);
  const productList = randomProductList(categoryList, 5);
  db.products = db.products.concat(productList);
  //prepare db object

  //white db object to db json
  fs.writeFile('db1.json', JSON.stringify(db), () => {
    console.log('Generate data successfully');
  });
})();
