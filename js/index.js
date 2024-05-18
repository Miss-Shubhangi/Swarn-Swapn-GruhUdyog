         
              function details(num) {
                let img;
                let content;
            
                if (num == 1) {
                    img = document.getElementById("sm-size");
                    img.innerHTML = `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/small-sized-shevai.jpg);
                    background-position: center;
                    background-size: cover; ">
                      <p class="fs-6">Name: Small Size Shevai</p>
                      <p class="fs-6">Flavour: Un-flavoured</p>
                      <p class="fs-6">Color: No Color</p>
                      <p class="fs-6">Packaging Type: Plastic Package</p>
                      <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                      <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                      <button type="button" class="px-3 py-2 rounded border bag review-btn">
                          <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                      </button>
                    </div>`;
                } 
                else if (num == 2) {
                    img = document.getElementById("md-size");
                    img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/medium-size-shevai.jpg);
                    background-position: center;
                    background-size: cover; ">
                      <p class="fs-6">Name: Medium Size Shevai</p>
                      <p class="fs-6">Flavour: Un-flavoured</p>
                      <p class="fs-6">Color: No Color</p>
                      <p class="fs-6">Packaging Type: Plastic Package</p>
                      <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                      <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                      <button type="button" class="px-3 py-2 rounded border bag review-btn">
                          <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                      </button>
                    </div>`;
                } else if (num == 3) {
                    img = document.getElementById("lg-size");
                    img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/thick-size-shevai.jpg);
                    background-position: center;
                    background-size: cover; ">
                      <p class="fs-6">Name: Large Size Shevai</p>
                      <p class="fs-6">Flavour: Un-flavoured</p>
                      <p class="fs-6">Color: No Color</p>
                      <p class="fs-6">Packaging Type: Plastic Package</p>
                      <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                      <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                      <button type="button" class="px-3 py-2 rounded border bag review-btn">
                          <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                      </button>
                    </div>`;
                } else if (num == 4) {
                    img = document.getElementById("unflavoured");
                    img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/unflavoured-medium-size.jpg);
                    background-position: center;
                    background-size: cover; ">
                      <p class="fs-6">Name: Small Size Shevai</p>
                      <p class="fs-6">Flavour: Un-flavoured</p>
                      <p class="fs-6">Color: No Color</p>
                      <p class="fs-6">Packaging Type: Plastic Package</p>
                      <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                      <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                      <button type="button" class="px-3 py-2 rounded border bag review-btn">
                          <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                      </button>
                    </div>`;
                } else if (num == 5) {
                    img = document.getElementById("mango-flavour");
                    img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/mango-flavoured.jpg);
                    background-position: center;
                    background-size: cover; ">
                      <p class="fs-6">Name: Small Size Shevai</p>
                      <p class="fs-6">Flavour: Mango flavoured</p>
                      <p class="fs-6">Color: No Color</p>
                      <p class="fs-6">Packaging Type: Plastic Package</p>
                      <p class="fs-6">Price: ₹ 110 per Kg <del>₹150</del></p><br>
                      <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                      <button type="button" class="px-3 py-2 rounded border bag review-btn">
                          <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                      </button>
                    </div>`;
                } else if (num == 6) {
                    img = document.getElementById("coloured");
                    img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/coloured-shevai.jpg);
                    background-position: center;
                    background-size: cover; ">
                      <p class="fs-6">Name: Medium Size Shevai</p>
                      <p class="fs-6">Flavour: Un-flavoured</p>
                      <p class="fs-6">Color: Colored</p>
                      <p class="fs-6">Packaging Type: Plastic Package</p>
                      <p class="fs-6">Price: ₹ 110 per Kg <del>₹150</del></p><br>
                      <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                      <button type="button" class="px-3 py-2 rounded border bag review-btn">
                          <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                      </button>
                    </div>`;
                }
            
               
            }
            
            function cancel(num) {
              let img1;
              
          
              if (num == 1) {
                  img1 = document.getElementById("sm-size");
                  img1 = '<img src="./imgs/small-sized-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
              } else if (num == 2) {
                  img1 = document.getElementById("md-size");
                  img1 = '<img src="./imgs/medium-sized-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
              } else if (num == 3) {
                  img1 = document.getElementById("lg-size");
                  img1 = '<img src="./imgs/large-sized-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
              } else if (num == 4) {
                  img1 = document.getElementById("unflavoured");
                  img1 = '<img src="./imgs/unflavoured-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
              } else if (num == 5) {
                  img1 = document.getElementById("mango-flavour");
                  img1 = '<img src="./imgs/mango-flavour-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
              } else if (num == 6) {
                  img1 = document.getElementById("coloured");
                  img1 = '<img src="./imgs/coloured-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
              }
          
              if (img1) {
                  img1.innerHTML = img1;
              }
          }
          
          
            
            
          /*function details(num){
              if(num==1){
                 let img1 =document.getElementById("sm-size")
                 
                 img1.innerHTML=`<div class="container border p-4 " id="i-1" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                  <p class="fs-6">Name :Small Size Shevai</p> 
                  <p class="fs-6">Flavour : Un-flavoured </p> 
                  <p class="fs-6">Color : No Color </p> 
                  <p class="fs-6">Packaging Type : Plastic Package</p> 
                  <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                  <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                  <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                     <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                  </button> 
                </div>`
                
              }
              else if(num==2){
                let img2 =document.getElementById("md-size")
                img1.innerHTML=`<div class="container border p-4 " id="i-2" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                  <p class="fs-6">Name :Small Size Shevai</p> 
                  <p class="fs-6">Flavour : Un-flavoured </p> 
                  <p class="fs-6">Color : No Color </p> 
                  <p class="fs-6">Packaging Type : Plastic Package</p> 
                  <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                  <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                  <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                     <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                  </button> 
                </div>`
                
              }
              else if(num==3){
                let img3 =document.getElementById("lg-size")
                img1.innerHTML=`<div class="container border p-4 " id="i-3" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                  <p class="fs-6">Name :Small Size Shevai</p> 
                  <p class="fs-6">Flavour : Un-flavoured </p> 
                  <p class="fs-6">Color : No Color </p> 
                  <p class="fs-6">Packaging Type : Plastic Package</p> 
                  <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                  <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                  <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                     <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                  </button> 
                </div>`
                
              }
              else if(num==4){
                let img4 =document.getElementById("unflavoured") 
                img1.innerHTML=`<div class="container border p-4 " id="i-4" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                  <p class="fs-6">Name :Small Size Shevai</p> 
                  <p class="fs-6">Flavour : Un-flavoured </p> 
                  <p class="fs-6">Color : No Color </p> 
                  <p class="fs-6">Packaging Type : Plastic Package</p> 
                  <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                  <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                  <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                     <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                  </button> 
                </div>`
                
              }
              else if(num==5){
                let img5 =document.getElementById("mango-flavour")
                img1.innerHTML=`<div class="container border p-4 " id="i-5" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                  <p class="fs-6">Name :Small Size Shevai</p> 
                  <p class="fs-6">Flavour : Un-flavoured </p> 
                  <p class="fs-6">Color : No Color </p> 
                  <p class="fs-6">Packaging Type : Plastic Package</p> 
                  <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                  <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                  <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                     <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                  </button> 
                </div>`
                
              }
              else if(num==5){
                let img6 =document.getElementById("coloured")
                img1.innerHTML=`<div class="container border p-4 " id="i-6" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                  <p class="fs-6">Name :Small Size Shevai</p> 
                  <p class="fs-6">Flavour : Un-flavoured </p> 
                  <p class="fs-6">Color : No Color </p> 
                  <p class="fs-6">Packaging Type : Plastic Package</p> 
                  <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                  <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                  <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                     <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                  </button> 
                </div>`
                
              }
              
  
          }
          function cancel(){
            let i1 =document.getElementById("i-1")
            i1.innerHTML=`<img src="./imgs/small-sized-shevai.jpg" class="rounded  d-block "  height="340px" width="300px" alt="...">`
            
          }*/

           /*   function details(num) {
                  let img;
                  let content;
              
                  if (num == 1) {
                      img = document.getElementById("sm-size");
                      img.innerHTML = `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/small-sized-shevai.jpg);
                      background-position: center;
                      background-size: cover; ">
                        <p class="fs-6">Name: Small Size Shevai</p>
                        <p class="fs-6">Flavour: Un-flavoured</p>
                        <p class="fs-6">Color: No Color</p>
                        <p class="fs-6">Packaging Type: Plastic Package</p>
                        <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                        <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                        <button type="button" class="px-3 py-2 rounded border bag review-btn">
                            <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                        </button>
                      </div>`;
                  } 
                  else if (num == 2) {
                      img = document.getElementById("md-size");
                      img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/medium-size-shevai.jpg);
                      background-position: center;
                      background-size: cover; ">
                        <p class="fs-6">Name: Medium Size Shevai</p>
                        <p class="fs-6">Flavour: Un-flavoured</p>
                        <p class="fs-6">Color: No Color</p>
                        <p class="fs-6">Packaging Type: Plastic Package</p>
                        <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                        <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                        <button type="button" class="px-3 py-2 rounded border bag review-btn">
                            <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                        </button>
                      </div>`;
                  } else if (num == 3) {
                      img = document.getElementById("lg-size");
                      img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/thick-size-shevai.jpg);
                      background-position: center;
                      background-size: cover; ">
                        <p class="fs-6">Name: Large Size Shevai</p>
                        <p class="fs-6">Flavour: Un-flavoured</p>
                        <p class="fs-6">Color: No Color</p>
                        <p class="fs-6">Packaging Type: Plastic Package</p>
                        <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                        <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                        <button type="button" class="px-3 py-2 rounded border bag review-btn">
                            <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                        </button>
                      </div>`;
                  } else if (num == 4) {
                      img = document.getElementById("unflavoured");
                      img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/unflavoured-medium-size.jpg);
                      background-position: center;
                      background-size: cover; ">
                        <p class="fs-6">Name: Small Size Shevai</p>
                        <p class="fs-6">Flavour: Un-flavoured</p>
                        <p class="fs-6">Color: No Color</p>
                        <p class="fs-6">Packaging Type: Plastic Package</p>
                        <p class="fs-6">Price: ₹ 100 per Kg <del>₹130</del></p><br>
                        <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                        <button type="button" class="px-3 py-2 rounded border bag review-btn">
                            <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                        </button>
                      </div>`;
                  } else if (num == 5) {
                      img = document.getElementById("mango-flavour");
                      img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/mango-flavoured.jpg);
                      background-position: center;
                      background-size: cover; ">
                        <p class="fs-6">Name: Small Size Shevai</p>
                        <p class="fs-6">Flavour: Mango flavoured</p>
                        <p class="fs-6">Color: No Color</p>
                        <p class="fs-6">Packaging Type: Plastic Package</p>
                        <p class="fs-6">Price: ₹ 110 per Kg <del>₹150</del></p><br>
                        <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                        <button type="button" class="px-3 py-2 rounded border bag review-btn">
                            <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                        </button>
                      </div>`;
                  } else if (num == 6) {
                      img = document.getElementById("coloured");
                      img.innerHTML= `<div class="container border p-4 text-muted text-body-emphasis" style=" background-image: url(./imgs/coloured-shevai.jpg);
                      background-position: center;
                      background-size: cover; ">
                        <p class="fs-6">Name: Medium Size Shevai</p>
                        <p class="fs-6">Flavour: Un-flavoured</p>
                        <p class="fs-6">Color: Colored</p>
                        <p class="fs-6">Packaging Type: Plastic Package</p>
                        <p class="fs-6">Price: ₹ 110 per Kg <del>₹150</del></p><br>
                        <button type="button" class="px-4 py-2 rounded border review-btn" onclick="cancel(${num})">&nbsp; Cancel &nbsp;</button>
                        <button type="button" class="px-3 py-2 rounded border bag review-btn">
                            <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                        </button>
                      </div>`;
                  }
              
                 
              }
              
              function cancel(num) {
                let img1;
                
            
                if (num == 1) {
                    img1 = document.getElementById("sm-size");
                    img1 = '<img src="./imgs/small-sized-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
                } else if (num == 2) {
                    img1 = document.getElementById("md-size");
                    img1 = '<img src="./imgs/medium-sized-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
                } else if (num == 3) {
                    img1 = document.getElementById("lg-size");
                    img1 = '<img src="./imgs/large-sized-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
                } else if (num == 4) {
                    img1 = document.getElementById("unflavoured");
                    img1 = '<img src="./imgs/unflavoured-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
                } else if (num == 5) {
                    img1 = document.getElementById("mango-flavour");
                    img1 = '<img src="./imgs/mango-flavour-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
                } else if (num == 6) {
                    img1 = document.getElementById("coloured");
                    img1 = '<img src="./imgs/coloured-shevai.jpg" class="rounded d-block" height="340px" width="300px" alt="...">';
                }
            
                if (img1) {
                    img1.innerHTML = img1;
                }
            }*/
            
            
              
              
            /*function details(num){
                if(num==1){
                   let img1 =document.getElementById("sm-size")
                   
                   img1.innerHTML=`<div class="container border p-4 " id="i-1" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                    <p class="fs-6">Name :Small Size Shevai</p> 
                    <p class="fs-6">Flavour : Un-flavoured </p> 
                    <p class="fs-6">Color : No Color </p> 
                    <p class="fs-6">Packaging Type : Plastic Package</p> 
                    <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                    <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                    <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                       <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                    </button> 
                  </div>`
                  
                }
                else if(num==2){
                  let img2 =document.getElementById("md-size")
                  img1.innerHTML=`<div class="container border p-4 " id="i-2" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                    <p class="fs-6">Name :Small Size Shevai</p> 
                    <p class="fs-6">Flavour : Un-flavoured </p> 
                    <p class="fs-6">Color : No Color </p> 
                    <p class="fs-6">Packaging Type : Plastic Package</p> 
                    <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                    <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                    <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                       <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                    </button> 
                  </div>`
                  
                }
                else if(num==3){
                  let img3 =document.getElementById("lg-size")
                  img1.innerHTML=`<div class="container border p-4 " id="i-3" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                    <p class="fs-6">Name :Small Size Shevai</p> 
                    <p class="fs-6">Flavour : Un-flavoured </p> 
                    <p class="fs-6">Color : No Color </p> 
                    <p class="fs-6">Packaging Type : Plastic Package</p> 
                    <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                    <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                    <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                       <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                    </button> 
                  </div>`
                  
                }
                else if(num==4){
                  let img4 =document.getElementById("unflavoured") 
                  img1.innerHTML=`<div class="container border p-4 " id="i-4" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                    <p class="fs-6">Name :Small Size Shevai</p> 
                    <p class="fs-6">Flavour : Un-flavoured </p> 
                    <p class="fs-6">Color : No Color </p> 
                    <p class="fs-6">Packaging Type : Plastic Package</p> 
                    <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                    <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                    <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                       <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                    </button> 
                  </div>`
                  
                }
                else if(num==5){
                  let img5 =document.getElementById("mango-flavour")
                  img1.innerHTML=`<div class="container border p-4 " id="i-5" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                    <p class="fs-6">Name :Small Size Shevai</p> 
                    <p class="fs-6">Flavour : Un-flavoured </p> 
                    <p class="fs-6">Color : No Color </p> 
                    <p class="fs-6">Packaging Type : Plastic Package</p> 
                    <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                    <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                    <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                       <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                    </button> 
                  </div>`
                  
                }
                else if(num==5){
                  let img6 =document.getElementById("coloured")
                  img1.innerHTML=`<div class="container border p-4 " id="i-6" style=" max-width:100px ;background-color: rgba(0, 0, 0, 0.4);">
                    <p class="fs-6">Name :Small Size Shevai</p> 
                    <p class="fs-6">Flavour : Un-flavoured </p> 
                    <p class="fs-6">Color : No Color </p> 
                    <p class="fs-6">Packaging Type : Plastic Package</p> 
                    <p class="fs-6">Price : ₹ 100 per Kg <del > ₹130 </del></p> <br>
                    <button type="button" class="px-4 py-2  rounded border review-btn" onclick="cancel()">&nbsp; Cancel &nbsp;</button>
                    <button type="button" class="px-3 py-2 rounded border bag review-btn" >
                       <a href="./pages/products.html" style="text-decoration: none; color: black;">View More</a>
                    </button> 
                  </div>`
                  
                }
                
    
            }
            function cancel(){
              let i1 =document.getElementById("i-1")
              i1.innerHTML=`<img src="./imgs/small-sized-shevai.jpg" class="rounded  d-block "  height="340px" width="300px" alt="...">`
              
            }*/