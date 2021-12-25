import './App.css';
import Shop from './Shop';
import { useDispatch,useSelector } from 'react-redux';
import { depositMoney,withdrawMoney } from './actions';


function App() {
  const  dispatch = useDispatch()
  const changeMoney  = useSelector(state => state.updateAmount)
  console.log(changeMoney);

  return (
    <div className="App">
      <Shop/>
      <div>
        <button onClick={()=>dispatch(depositMoney(5))} >+</button> 
        <span>Update balance {changeMoney} </span> <button onClick={()=>dispatch(withdrawMoney(5))} >-</button>
      </div>
    </div>
  );
}

export default App;
