import './App.css'
import Button from "./components/Button"
import Card from "./components/Card"
import Table from "./components/Table"

function App() {

  const columns = ["Name", "Price", "Category"]; 
  const products = [ { Name: "Laptop", Price: "$1200", Category: "Electronics", }, { Name: "Headphones", Price: "$150", Category: "Accessories", }, { Name: "Keyboard", Price: "$80", Category: "Accessories", }, { Name: "Monitor", Price: "$300", Category: "Electronics", }, ];

  return (
    <div className='p-5'>
    <h1 className='text-5xl'>
      Huma Volve
    </h1>
    <Button text={"Click me"} variant={"secondary"} onClick={()=> window.alert("Huma Volve 🌟 🌟 ✨")}/>
    
    <hr className='my-6'/>
    <Card imageSrc = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  altImage = "card-image"
  cardTitle = "Nike Sneaker"
  cardContent = "MJ's 8th signature shoe first debuted during the '92-'93 championship season, but the colorway didn't emerge until its retro release a decade later in 2003."/>

    <hr className='my-6'/>

<Table columns={columns}  data={products} striped={true}/>
    </div>
  )
}

export default App
