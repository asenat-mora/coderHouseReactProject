const products = [
  {
    id: 1,
    title: 'Galaxy S20',
    price: 1000,
    description: 'Samsung Galaxy S20',
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_872101-MLA44172473382_112020-O.webp",
    stock: 20
  },
  {
    id: 2,
    title: 'Galaxy S20+',
    price: 1200,
    description: 'Samsung Galaxy S20+',
    pictureUrl: "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Samsung-galaxy-s20-plus_076ef2f5-e5fa-454f-bc33-6f19acfc5282_1200x1200_crop_center.png?v=1621301848",
    stock: 10
  },
  {
    id: 3,
    title: "Redmi Note 12",
    price: 1400,
    description: "Xiaomi Redmi Note 12",
    pictureUrl: "https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70051653.jpg",
    stock: 15
  },
  {
    id: 4,
    title: "Redmi Note 11 Pro",
    price: 1800,
    description: "Xiaomi Redmi Note 11 Pro",
    pictureUrl: "https://mistoremx.oss-us-east-1.aliyuncs.com/images/202209/goods_img/822_P_1662679240548.jpg",
    stock: 10
  },
  {
    id: 5,
    title: "Iphone 14 pro max",
    price: 2000,
    description: "Iphone 14 Pro Max",
    pictureUrl: "https://ishopmx.vtexassets.com/arquivos/ids/219367/194253379690.jpg?v=1768168898",
    stock: 15
  },
  {
    id: 6,
    title: "Iphone 13",
    price: 1500,
    description: "Iphone 13",
    pictureUrl: "https://elektra.vtexassets.com/arquivos/ids/3245423/31049147-d2.jpg?v=637711500832000000",
    stock: 5
  },
  {
    id: 7,
    title: "Motorola Moto G42",
    price: 1000,
    description: "Motorola Desbloqueado Moto G42 128 GB Rosa",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2838343-1.jpg",
    stock: 8
  },
  {
    id: 8,
    title: "Motorola Moto E20",
    price: 600,
    description: "Motorola Desbloqueado Moto E20 32 GB Azul",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2880623-1.jpg",
    stock: 5
  },
  {
    id: 9,
    title: "Motorola Moto G71",
    price: 900,
    description: "Motorola Moto G71 128 GB Verde",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2726543-1.jpg",
    stock: 8
  },
  {
    id: 10,
    title: "Hisense E50 Lite",
    price: 400,
    description: "Motorola Moto G71 128 GB Verde",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2154723-1.jpg",
    stock: 8
  },
  {
    id: 11,
    title: "Hisense U50",
    price: 200,
    description: "Hisense U50 32 GB Azul",
    pictureUrl: "https://cdn1.coppel.com/images/catalog/pm/2356433-1.jpg",
    stock: 5
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
      const product = products.find(product => product.id === id)
      resolve(product)
    }, 2000)
  });
}

export { getAllProducts, getProductById };
