const productos = [
  {
    title: "Nike Dunk Low Retro White Black Panda",
    id: 1,
    price: 100,
    discount: 10,
    img: "https://i.ibb.co/895B74t/nike-dunk-low-retro.jpg",
    category: "trends",
    stock: 10,
    description: "The Nike Dunk Low Retro in White Black Panda colorway is a classic sneaker with a stylish and versatile design."
  },
  {
    title: "Nike SB Dunk High Pro PRM",
    id: 2,
    price: 60,
    discount: null,
    img: "https://i.ibb.co/19RkmWb/Nike-SB-Dunk-High-Pro-PRM.webp",
    category: "trends",
    stock: 5,
    description: "The Nike SB Dunk High Pro PRM offers excellent skateboarding performance with a sleek and modern look."
  },
  {
    title: "Adidas Forum Low x Bad Bunny Brown",
    id: 3,
    price: 150,
    discount: 5,
    img: "https://i.ibb.co/PCC7gh4/Adidas-Forum-Low-x-Bad-Bunny-Brown.webp",
    category: "sale",
    stock: 8,
    description: "The Adidas Forum Low x Bad Bunny Brown edition brings a unique collaboration with stylish colorways."
  },
  {
    title: "Adidas Forum Low x Bad Bunny Easter Egg",
    id: 4,
    price: 150,
    discount: 15,
    img: "https://i.ibb.co/s5T2fp2/520765b31-e11443e8f3613bb5c016239419409406-640-0.jpg",
    category: "sale",
    stock: 8,
    description: "The Adidas Forum Low x Bad Bunny Easter Egg edition features a limited Easter-themed color scheme."
  },
  {
    title: "Airforce 1",
    id: 5,
    price: 150,
    discount: null,
    img: "https://i.ibb.co/R2tCdg8/Air-Force1.webp",
    category: "sale",
    stock: 8,
    description: "The Airforce 1 is a classic sneaker that never goes out of style, suitable for casual and streetwear looks."
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