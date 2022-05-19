import "./style.scss"
 
const count = ({count, increase, dencrease, changeValue, id}) => {
    return ( 
        <div className="count">
            <div className="count__box">
                <input onChange={(e)=>{changeValue(id, e.target.value)}} type="number" className="count__input" min="1" max="100" value={count} /> 
            </div>
            <div className="count__controlls">
                <button type="button" className="count__up" onClick={()=>{increase(id)}} >
                    <img src="./img/icons/icon-up.svg" alt="increase" />
                </button>
                <button type="button" className="count__down"  onClick={()=>{dencrease(id)}} >
                    <img src="./img/icons/icon-down.svg" alt="decrease" />
                </button>
            </div>
        </div>
     );
}
 
export default count;