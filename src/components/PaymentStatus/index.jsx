import Button from '../Button';
import './style.css';
function PaymentSuccess({
    OrderNumber,
    ShippingAddress,
    OrderItems
}) {
    return(
    
        <div className='container'>
            <div className='payment'>
                <p className='payment-success'>Payment Success !</p>
                <div className='flex'>
                    <p className='payment-titel'>Order number</p>
                    <p className='payment-item'>{OrderNumber}</p>
                </div>
                <div className='flex'>
                    <p className='payment-titel'>Shipping Address</p>
                    <p className='payment-item'>{ShippingAddress}</p>
                </div>
                <div className='flex'>
                    <p className='payment-titel'>Order Items</p>
                    <p className='payment-item'>{OrderItems}</p>
                </div>
                <p className='email-addres'>An email will be sent to your email address contains order confirmation and tacking code.</p>
            </div>
            <Button inPayment={true}>Keep Shopping</Button>
        </div>
    
    );
}
export default PaymentSuccess;