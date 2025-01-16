let e=[];async function t(t){try{let r=await fetch(t);if(!r.ok)throw Error(`HTTP error! Status: ${r.status}`);let i=await r.json();console.log("Products:",i.products),e=i.products,o(e)}catch(e){console.error("Error fetching JSON data:",e)}}function o(e){let t=document.getElementById("items");t.innerHTML="",e.forEach(e=>{let o=`  
                <div class="bg-blue-400 w-[85vw] h-[30vh] rounded-3xl flex items-center p-[20px] gap-5 overflow-hidden">  
                    <div class="h-[100%] w-[180px] bg-white rounded-xl">  
                        <img class="object-cover size-[100%]"  
                            src="${e.thumbnail||"https://via.placeholder.com/180"}"  
                            alt="${e.name}">  
                    </div>  
                    <div class="flex flex-col w-[100%] h-[100%]">  
                        <p class="font-bold">${e.title}</p>  
                        <p>Description: ${e.description||"No description available."}</p>  
                        <p>Category: ${e.category||"Uncategorized"}</p>  
                        <p>Price: ${e.price}$</p>  
                        <p>Rating: ${e.rating||"No ratings available"}</p>  
                    </div>  
                </div>`;t.innerHTML+=o})}document.getElementById("search-button").addEventListener("click",function(){let t=document.getElementById("search-input").value.toLowerCase(),r=parseFloat(document.getElementById("upper-limit").value)||1/0,i=parseFloat(document.getElementById("lower-limit").value)||0,l=parseFloat(document.getElementById("rating-input").value)||0;o(e.filter(e=>{let o=e.title.toLowerCase().includes(t),a=e.price>=i&&e.price<=r,n=e.rating>=l;return o&&a&&n}))}),t("https://dummyjson.com/products");
//# sourceMappingURL=index.8aa430f7.js.map
