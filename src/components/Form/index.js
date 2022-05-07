import './style.css'
function Form({text,type,placeholder}) {
    return(
        <>
         <label className='label-login'>{text}</label>
         <input className='input-login' type={type} placeholder={placeholder}/>
        </> 
    );
}
export default Form;