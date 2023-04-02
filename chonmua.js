const gh = document.querySelectorAll(".buton")
// console.log(gh)
gh.forEach(function(buton,index){
    // console.log(buton, index)
    buton.addEventListener('click',function(event){{
        var ghitem = event.target
        var product = ghitem.parentElement.parentElement
        // console.log(product)
        var productimg = product.querySelector("img").src
        var productname = product.querySelector(".name").innerText
        var productprice = product.querySelector(".price").innerText
        addgh(productimg,productname,productprice)
    }})
})
function addgh(productimg,productname,productprice){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td><img src="'+productimg+'" style="width:80px" alt=""></td><td class="name">'+productname+'</td><td class="price">'+productprice+'</td><td><input style="width:90px;outline:none;color:black;" type="number" value="1" min="1"></td><td><input type="button" value="xóa" class="buton"></td></tr>'
    addtr.innerHTML = trcontent
    var ghtable = document.querySelector(".gh")
    ghtable.append(addtr)
    ghtotal() 
}

function ghtotal(){
    var sum = document.querySelectorAll(".ds tr")
    // console.log(sum.length)
    for(var i=0;i<sum.length;i++){
        console.log(i)
        var inputgh = sum[i].querySelector("input")
        var productprice = sum[i].querySelector(".price")
        console.log(productprice, inputgh)
    }
}