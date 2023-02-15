import Card from "react-bootstrap/Card";
import BtnIcon from "./BtnIcon";
import PriceTag from "./PriceTag";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";

function ProductCard(props) {
    const navigate = useNavigate();

    const [selected,setSelected] = useState(props.item.selected);

    const [verify,setVerify] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    function onFavClick(){
        setSelected(!selected)
         let selectedProducts = localStorage.getItem("selectedProducts");
        if(!selectedProducts){
            selectedProducts = []
        }
        else{
            selectedProducts = JSON.parse(selectedProducts);
        }

        const id = props.item._id;
        const index = selectedProducts.indexOf(id);
        if(index == -1){
            selectedProducts.push(props.item._id);
        }
        else{
            selectedProducts.splice(index, 1)
        }

        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
        setTimeout(()=>{
            console.log(localStorage.getItem("selectedProducts"));
        },1000); 
    }
    function onCheckout(productId){
        alert(productId);
    }

    function onEdit(productId){
        navigate("product/" +productId)
    }

    function onDelete(productId){
       //const verify = window.confirm("Are you sure you want to delete this product")
    setVerify(true)
    setDeleteId(productId)
    } 
    function onVerifyClose(result){
        if(!result){
            setVerify(false)
            return
        }
        axios.delete("http://localhost:3001/products/" + deleteId)
        .then((res)=>{
            setVerify(false)
            // window.location.reload() // entire page will reload
            props.reload() //data will reload
            
        })
        .catch((err)=>{
 
        })
    }

    return (
        <>
            <Card className="mb-4">
                <Card.Img variant="top" src={props.item.image} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>{props.item.description}</Card.Text>
                    <PriceTag price={props.item.price} />

                    <div
                        className="btn-group w-100"
                        role="group"
                        aria-label="Basic example"
                    >
                        <BtnIcon icon="shopping_cart_checkout" onClick={()=>onCheckout(props.item._id)} />
                        {
                            ( selected)?
                            <BtnIcon icon="favorite" onClick={onFavClick}/>:
                            <BtnIcon icon="favorite_border" onClick={onFavClick}/>
                        }
                      
                        <BtnIcon icon="compare_arrows" />
                    </div>
                    <div className="btn-group w-100">
                         <BtnIcon icon="edit"  onClick={() => onEdit(props.item._id)}/>
                         <BtnIcon icon="delete"  onClick={() => onDelete(props.item._id)}/>
                    </div>
                </Card.Body>
            </Card>
            {verify ? <ConfirmModal onClose = {onVerifyClose} /> : ""}
        </>
    );
}

export default ProductCard;
