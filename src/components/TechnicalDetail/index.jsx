import './style.css';

function TechnicalDetail ({Attrib,AttribVal}){
    return(
        <div className='TechnicalDetail flex'>
            <div className='Brand flex'><p>{Attrib}</p></div>
            <div className='BrandName flex'><p>{AttribVal}</p></div>
        </div>
    );

}

export default TechnicalDetail;