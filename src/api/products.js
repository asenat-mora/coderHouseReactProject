//Mock api asincrono

const brands = {
  "samsung": 1,
  "xiaomi": 2,
  "apple": 3,
  "motorola": 4,
  "hisense": 5
}

const products = [
  //marca samsung
  {
    id: 1,
    title: 'Galaxy S20',
    price: 1000,
    description: 'Samsung Galaxy S20',
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_872101-MLA44172473382_112020-O.webp",
    brand: brands.samsung,
    stock: 20
  },
  {
    id: 2,
    title: 'Galaxy S20+',
    price: 1200,
    description: 'Samsung Galaxy S20+',
    pictureUrl: "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Samsung-galaxy-s20-plus_076ef2f5-e5fa-454f-bc33-6f19acfc5282_1200x1200_crop_center.png?v=1621301848",
    brand: brands.samsung,
    stock: 10
  },
  {
    id: 3,
    title: 'Galaxy A53 128',
    price: 4499,
    description: 'Samsung Desbloqueado Galaxy A53 128 GB Negro',
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2695723-1.jpg",
    brand: brands.samsung,
    stock: 4
  },
  {
    id: 4,
    title: 'Galaxy S23 Ultra',
    price: 2482,
    description: 'Galaxy S23 Ultra Silicone Coverreacondicionado',
    pictureUrl: "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Samsung-galaxy-s20-plus_076ef2f5-e5fa-454f-bc33-6f19acfc5282_1200x1200_crop_center.png?v=1621301848",
    brand: brands.samsung,
    stock: 2
  },
//marca xiaomi
  {
    id: 5,
    title: "Redmi Note 12",
    price: 1400,
    description: "Xiaomi Redmi Note 12",
    pictureUrl: "https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70051653.jpg",
    brand: brands.xiaomi,
    stock: 15
  },
  {
    id: 6,
    title: "Redmi Note 11 Pro",
    price: 1800,
    description: "Xiaomi Redmi Note 11 Pro",
    pictureUrl: "https://mistoremx.oss-us-east-1.aliyuncs.com/images/202209/goods_img/822_P_1662679240548.jpg",
    brand: brands.xiaomi,
    stock: 10
  },
  {
    id: 7,
    title: "Xiaomi Redmi Note 11S",
    price: 1800,
    description: "Xiaomi Redmi Note 11S 128 GB Gris",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2725493-1.jpg",
    brand: brands.xiaomi,
    stock: 3
  },
  {
    id: 8,
    title: "Xiaomi Redmi Note 11S B",
    price: 1900,
    description: "Xiaomi Redmi Note 11S 128 GB Blanco",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2725223-1.jpg",
    brand: brands.xiaomi,
    stock: 4
  },
//apple
  {
    id: 9,
    title: "Iphone 14 pro max",
    price: 2000,
    description: "Iphone 14 Pro Max",
    pictureUrl: "https://ishopmx.vtexassets.com/arquivos/ids/219367/194253379690.jpg?v=1768168898",
    brand: brands.apple,
    stock: 15
  },
  {
    id: 10,
    title: "Iphone 13",
    price: 1500,
    description: "Iphone 13",
    pictureUrl: "https://elektra.vtexassets.com/arquivos/ids/3245423/31049147-d2.jpg?v=637711500832000000",
    brand: brands.apple,
    stock: 5
  },
  {
    id: 11,
    title: "IPhone 11 64 GB",
    price: 7000,
    description: "IPhone 11 64 GB Black",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2332993-1.jpg",
    brand: brands.apple,
    stock: 2
  },
  {
    id: 12,
    title: "IPhone 12 128 GB",
    price: 1500,
    description: "IPhone 12 128 GB Blanco",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2944943-1.jpg",
    brand: brands.apple,
    stock: 2
  },
//motorola
  {
    id: 13,
    title: "Motorola Moto G42",
    price: 1000,
    description: "Motorola Desbloqueado Moto G42 128 GB Rosa",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2838343-1.jpg",
    brand: brands.motorola,
    stock: 8
  },
  {
    id: 14,
    title: "Motorola Moto E20",
    price: 600,
    description: "Motorola Desbloqueado Moto E20 32 GB Azul",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2880623-1.jpg",
    brand: brands.motorola,
    stock: 5
  },
  {
    id: 15,
    title: "Motorola G31 128 GB",
    price: 200,
    description: "Motorola Desbloqueado Moto G31 128 GB Gris",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2662123-1.jpg",
    brand: brands.motorola,
    stock: 8
  },
  {
    id: 16,
    title: "Motorola Moto G71",
    price: 900,
    description: "Motorola Moto G71 128 GB Verde",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2726543-1.jpg",
    brand: brands.motorola,
    stock: 4
  },
  //hisense
  {
    id: 17,
    title: "Hisense E50 Lite",
    price: 400,
    description: "Motorola Moto G71 128 GB Verde",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2154723-1.jpg",
    brand: brands.hisense,
    stock: 8
  },
  {
    id: 18,
    title: "Hisense U50",
    price: 200,
    description: "Hisense U50 32 GB Azul",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2356433-1.jpg",
    brand: brands.hisense,
    stock: 5
  },
  {
    id: 19,
    title: "Hisense U30",
    price: 600,
    description: "Hisense U30 32 GB Azul",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2711193-1.jpg",
    brand: brands.hisense,
    stock: 3
  },
  {
    id: 20,
    title: "Hisense E20S",
    price: 300,
    description: "Hisense E20S 32 GB Azul",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2682153-1.jpg",
    brand: brands.hisense,
    stock: 8
  },
]

function getAllProducts(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  });
}

function getProductById(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(product => product.id == id) //iterar sobre el arreglo de productos y encontrar el producto con el id que se recibe como parametro
      resolve(product)
    }, 1000)
  });
}

function getProductsByBrand(brandId){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.filter(product => product.brand == brandId) //iterar sobre el arreglo de productos y encontrar el producto con el id que se recibe como parametro
      resolve(product)
    }, 1000)
  });
}

export { getAllProducts, getProductById, getProductsByBrand };
