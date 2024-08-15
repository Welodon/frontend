import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Post from "./component/Post"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./component/Nav"
import Todo from "./component/Todo"
import Products from "./component/Products"

const App = () => {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="posts" element = {<Post />}/>
        <Route path="todos" element = {<Todo />}/>
        <Route path="products" element = {<Products />}/>
      </Routes>
    </div>
  )
}

export default App
