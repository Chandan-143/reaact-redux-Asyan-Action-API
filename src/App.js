// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUserData } from './actionCreaters';

function App() {



  let dispatch = useDispatch();
  const storeObject = useSelector((store)=>{return store})

    return (
        <>

        {
          console.log(storeObject)
        }
        <button onClick={()=>{dispatch(getUserData())}}>Click Me</button>
        <ul>
        {
          storeObject && storeObject.map((cv,index , arr)=>{
            return <li key={index}>{cv.first_name}</li>
          })
        }
          
        </ul>
        
        </>
    );
}

export default App;
