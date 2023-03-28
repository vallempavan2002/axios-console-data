import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App(){

axios.get("https://jsonplaceholder.typicode.com/users/")
.then(res=> console.log(res.data))
return(
<h1>hellow</h1>

)
}
export default App;
