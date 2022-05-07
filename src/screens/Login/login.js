import './style.css'
import Button from "../../components/Button";
import Form from "../../components/Form";
import Group240 from "../../assets/Group 240.png";
import Header from '../../components/Header';
function Login() {
    return(
    <>

    <Header/>
    <div className="container flex">
        <div className="login-box flex">
              <div className='login-align'>
                  <div className='login-detail'>
                    <h1 className='login'>Login.</h1>
                    <p className='prgraph-login'>Login with your data that you entered during registration</p>
                    <Form text='Enter your email address' type='text' placeholder='name@example.com'/>
                    <Form text='Enter your password' type='password' placeholder='********'/>
                    <Button>Login</Button>
                    <input className ='check' type='checkbox' checked/>
                    <p className='remember'>Remember me</p>
                    <p className='forget'>Forgot your password?</p>
                    <div className="line"></div>
                    <p className='sing'>Sign up now</p>
                 </div>
            </div>  
              <img src={"gh"} alt="login" />

        </div>
           
    </div>
    </>
    );
}
export default Login;