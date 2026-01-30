import { Route , Routes} from 'react-router-dom'
import './style.css';
import './Pages/ProductManagement.css';
import Welcome from './Pages/Welcome'
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage';
import AdminPage from './Pages/AdminPage';
import CustomerPage from './Pages/CustomerPage';
import ProductManage from './Pages/ProductManage';
import UserManage from './Pages/UserManage';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import ViewCart from './Pages/ViewCart';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/SignUpPage' element={<SignUpPage/>}></Route>
        <Route path='/SignInPage' element={<SignInPage/>}></Route>
        <Route path='/adminPage' element={<AdminPage/>}></Route>
        <Route path='/customerPage' element={<CustomerPage/>}></Route>
        
        <Route path='/ProductManage' element={<ProductManage/>}></Route>
        <Route path='/UserManage' element={<UserManage/>}></Route>
        
        <Route path='/AddProduct' element={<AddProduct/>}></Route>
        <Route path='/UpdateProduct' element={<UpdateProduct/>}></Route>

        <Route path='/viewCart' element={<ViewCart/>}></Route>

      </Routes>
    </div>
  );
}

export default App
