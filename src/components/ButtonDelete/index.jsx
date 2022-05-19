const ButtonDelete = ({deleteProduct, id}) => {
    return ( 
        <button type='button' onClick={()=>{deleteProduct(id)}}>
            <img src="./img/icons/cross.svg" alt="delete" />
        </button>
     );
}
 
export default ButtonDelete;