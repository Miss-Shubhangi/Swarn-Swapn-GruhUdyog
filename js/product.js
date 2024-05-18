
    function ChangeImage(num){
        const MainImage = document.getElementById('Main-Product');
        let productdetails = document.getElementById("product-details")
        if(num==1){
            MainImage.src = "./../imgs/small-sized-shevai.jpg";
            productdetails.innerHTML=`<h5 class="card-title">Small Size Shevai</h5>
            <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
             <div class="total-value">
               <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
             </div>
             <div class="quantity-container py-3">
              <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
              <span class="quantity-value" id="quantity-value"> 1 </span>
              <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
           </div>
           <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
             </div> `
             
            
        }
        else if(num==2){
            MainImage.src = "./../imgs/medium-size-shevai.jpg";
            productdetails.innerHTML=`<h5 class="card-title">Medium Size Shevai</h5>
            <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
             <div class="total-value">
               <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
             </div>
             <div class="quantity-container py-3">
              <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
              <span class="quantity-value" id="quantity-value"> 1 </span>
              <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
           </div>
           <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
             </div>`
        }
        else if(num==3){
            MainImage.src = "./../imgs/thick-size-shevai.jpg";
            productdetails.innerHTML=`<h5 class="card-title">Thik Size Shevai</h5>
            <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
             <div class="total-value">
               <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
             </div>
             <div class="quantity-container py-3">
              <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
              <span class="quantity-value" id="quantity-value"> 1 </span>
              <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
           </div>
           <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
             </div>`
        }
        else if(num==4){
            MainImage.src = "./../imgs/without -flavoured.jpg";
            productdetails.innerHTML=`<h5 class="card-title">Without flavoured</h5>
            <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
             <div class="total-value">
               <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
             </div>
             <div class="quantity-container py-3">
              <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
              <span class="quantity-value" id="quantity-value"> 1 </span>
              <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
           </div>
           <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
             </div>`
        }
        else if(num==5){
            MainImage.src = "./../imgs/coloured-shevai.jpg";
            productdetails.innerHTML=`<h5 class="card-title">Coloured Shevai</h5>
            <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
             <div class="total-value">
               <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
             </div>
             <div class="quantity-container py-3">
              <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
              <span class="quantity-value" id="quantity-value"> 1 </span>
              <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
           </div>
           <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
             </div>`
        }
        else if(num==6){
          MainImage.src = "./../imgs/mango-flavoured.jpg";
          productdetails.innerHTML=`<h5 class="card-title">Mango Flavoured Shevai</h5>
          <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
           <div class="total-value">
             <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
           </div>
           <div class="quantity-container py-3">
            <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
            <span class="quantity-value" id="quantity-value"> 1 </span>
            <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
         </div>
         <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
           </div>`
      }
      else if(num==7){
        MainImage.src = "./../imgs/small-size-noodles.webp";
        productdetails.innerHTML=`<h5 class="card-title">Small Size Noodles</h5>
        <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
         <div class="total-value">
           <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
         </div>
         <div class="quantity-container py-3">
          <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
          <span class="quantity-value" id="quantity-value"> 1 </span>
          <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
       </div>
       <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
         </div>`
    }
    else if(num==8){
      MainImage.src = "./../imgs/unflavoured-medium-size.jpg";
      productdetails.innerHTML=`<h5 class="card-title">Unflavoured Medium Size</h5>
      <p class="price" id="product-price">₹ 100/- per Kg <del>₹ 130</del></p>
       <div class="total-value">
         <span id="quanty"> 1 </span>  X 100 = <span id="quantyTotal"> 100 </span>
       </div>
       <div class="quantity-container py-3">
        <img src="./../icons/minus-button.png" alt="minus" class="minus" id="minus" height="30px" onclick="decQuantity()">
        <span class="quantity-value" id="quantity-value"> 1 </span>
        <img src="./../icons/plus (1).png" alt="plus" class="plus" id="plus" height="30px" onclick="incQuantity()">
     </div>
     <button type="button" class="px-4 py-2 mx-4 rounded bod review-btn">Order Now</button>
       </div>`
  }

        

    }
    function decQuantity(){
      let decValue = document.getElementById("minus")
      let quantityValue =document.getElementById("quantity-value")
      let productprice =document.getElementById("product-price")
      let quantity= parseInt(quantityValue.innerText)
      if(quantity!=0){
      quantityValue.innerText = --quantity
      quanty.innerText= `${quantity}`;
      let totalPrice = document.getElementById("quantyTotal")
      totalPrice.innerText =`${quantity *100}`
      }
      else{
            alert(`You should buy at least 1 product `)
      }
      setQuantity(quantity)
  }
     
  
  function incQuantity(){
      let incValue = document.getElementById("minus")
      let quantityValue =document.getElementById("quantity-value")
      let productprice =document.getElementById("product-price")
      let totalPrice = document.getElementById("quantyTotal")
     
      let quantity= parseInt(quantityValue.innerText)
      if(quantity<20){
      quantityValue.innerText = ++quantity
      
     
      }
      else{
        alert(`Your limit is exceed. You can't add more than 20.`)
      }
      setQuantity(quantity )
  }
  function setQuantity(quantity){
      quanty.innerText= `${quantity}`;
      quantyTotal.innerText=`${quantity * 100 }`
  }

