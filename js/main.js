
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}

function ready(){
    /** REMOVE OS ITENS DO CARRINHO */
    const removeProdutosButtons = document.getElementsByClassName("remove");
    for(var i = 0; i < removeProdutosButtons.length; i++){
      removeProdutosButtons[i].addEventListener("click", removeProduct);
    }
}

function removeProduct(){
  event.target.parentElement.parentElement.remove();
  updateTotal();
}

/** QUANTIDADE DETALHES DO PRODUTO */
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", ()=>{
  a++;
  num.innerText = a;
  console.log(a);
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    num.innerText = a;
  }
});

/** QUANTIDADE DOS PRODUTOS DO CARRINHO */


/** SOMA O VALOR FINAL DOS PRODUTOS DO CARRINHO */


    let totalAmount = 0;
    const cartProduct = document.getElementsByClassName("cart-product");
    for(var i = 0; i < cartProduct.length; i++){
      const productPrice = cartProduct[i].getElementsByClassName("price")[0].innerText.replace("R$", "").replace(",", ".");
      console.log(productPrice);
      const productQty = cartProduct[i].getElementsByClassName("num")[0].innerText;
    
      //Faz o calculo
      totalAmount += productPrice * productQty;
    }
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace(".", ",");
    document.querySelector(".total .valor").innerText = "R$" + totalAmount;


    /**SUBTOTAL
     * 
     *       let subTotal = 0;
    const carrinho = document.getElementsByClassName("cart-product");
    for(var i = 0; i < carrinho.length; i++){
      const productSub = carrinho[i].getElementsByClassName("price")[0].innerText.replace("R$", "").replace(",", ".");
      console.log(productSub);
      const productQty = carrinho[i].getElementsByClassName("num")[0].innerText;
    
      //Faz o calculo
      subTotal += productSub * productQty;
    }
    subTotal = subTotal.toFixed(2);
    subTotal = subTotal.replace(".", ",");
    document.querySelector(".sub-tot").innerText = "R$" + subTotal;
     * 
     * 
    */