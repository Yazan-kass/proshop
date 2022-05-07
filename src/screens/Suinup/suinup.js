import './style.css'
import Form from "../../components/Form";
import Button from "../../components/Button";
import Group421 from "../../assets/Group 421.png"
import Header from '../../components/Header';
function SuinUp() {
    return(
    <>
    <Header/>
    <div className="container flex">
        <div className="login-box flex">
              <div className='login-align'>
                  <div className='login-detail'>
                    <h1 className='login'>Signup.</h1>
                    <p className='prgraph-login'>Sign up and get exclusive offers from us</p>
                    <Form text='Name' type='text' placeholder='Your name'/>
                    <Form text='Enter your email address' type='text' placeholder='name@example.com'/>
                    <Form text='Enter your password' type='password' placeholder='********'/>
                    <Form text='Confirm your password' type='password' placeholder='********'/>
                    <Button className='button-login'>Login</Button>
                    <div className="line"></div>
                    
                    <p className='have-account'>Have an account ?<span> Login</span></p>
                
                 </div>
            </div>  
            <div className="flex img">
              <img src={Group421} alt="suinUp" />
            </div>

        </div>
           
    </div>
    </>);
}
export default SuinUp;