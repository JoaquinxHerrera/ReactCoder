const productos = [
  {
    title: "Airforce 1",
    id: 1,
    price:100,
    img:"https://i.ibb.co/8NYSVpf/a10c3935790cef0729ba3c485cf43d794b619d0de9bb70adfa65d5a33e52901910306.jpg",
    category:"trends",
    stock: 10
  },
  {
    title: "Buzo rosa KoK",
    id: 2,
    price:60,
    img:"https://i.ibb.co/8NYSVpf/a10c3935790cef0729ba3c485cf43d794b619d0de9bb70adfa65d5a33e52901910306.jpg",
    category:"trends",
    stock: 5
  },
  {
    title: "Jordan dunk",
    id: 3,
    price:150,
    img:"https://i.ibb.co/8NYSVpf/a10c3935790cef0729ba3c485cf43d794b619d0de9bb70adfa65d5a33e52901910306.jpg",
    category:"sale",
    stock: 8
  },
];


function getData() {
  return new Promise((resolve, reject)=>{
    

    setTimeout(()=> {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 2000)
    
  })

}

export function getProductData(idURL) {
  return new Promise((resolve, reject)=>{

    const productRequested = productos.find((item) => item.id=== parseInt(idURL));

    setTimeout(()=> {
      resolve(productRequested);
    }, 2000);
    
  });

}

export function getCategoryData (categoryURL) {
  return new Promise ((resolve, reject) => {

    const categoryRequested = productos.filter(item => {
      return (item.category.toLowerCase() === categoryURL.toLowerCase())
    });

    setTimeout(()=> {
      resolve(categoryRequested);
    },2000);
  });

}

export default getData;
