import './style.css'

function Category({title,ImgUrl}) {
  return (
    <div className='Category flex'>
        <div className='CtgImg flex'>
            <img src={ImgUrl}/>
        </div>
        <h4>{title}</h4>
    </div>
  );
}

export default Category;