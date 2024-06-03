const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]

var totalPrice = 0;

document.addEventListener('click', (e)=>{
    if(e.target.dataset.id){


        let orderedName = '';
        let orderedPrice = 0;
        for(let product of menuArray){
            if(product.id === Number(e.target.dataset.id)){
                orderedName = product.name;
                orderedPrice = Number(product.price)
                totalPrice += orderedPrice
            }
        }

        console.log(orderedName)
        console.log(orderedPrice);

        let productInge = document.createElement('p');
        let pricos = document.createElement('div');
        let pricey = document.createElement('p');
        let priceyTotal = document.createElement('p');
        let removal = document.createElement('p');
        let addonP = document.createElement('div');
        let conto = document.createElement('div');
        let newDiv = document.createElement('div');

        productInge.textContent = orderedName;
        pricey.textContent = `$${orderedPrice}`
        priceyTotal.textContent = `$${totalPrice}`;
        removal.textContent = 'Remove'
        removal.setAttribute('class', 'product_removal')
        productInge.setAttribute('class','product_inge')
        
        
        addonP.setAttribute('class', 'fixAdd');
        addonP.append(productInge);
        addonP.append(removal);
        conto.append(pricey);
        pricos.textContent = totalPrice
        pricey.setAttribute('class', 'prico')

        conto.setAttribute('class', 'cone')

        newDiv.append(addonP);
        newDiv.append(conto);
        //document.getElementById('poro').append(addonP);
        //pricos.append(pricey);
        //pricos.setAttribute('class', 'quick');
        //pricey.setAttribute('class', 'pricey');
        //document.getElementById('productos').append(pricos);
        //conto.appendChild(pricos);
        //document.getElementById('productos').append(conto);

        
    

        newDiv.setAttribute('class', 'newFix')
        document.getElementById('productos').append(newDiv);
        document.getElementById('total').innerHTML = `Total price: <div>$${totalPrice}</div>`;
        document.getElementById('total').setAttribute('class', 'fixo');

        removal.addEventListener('click', ()=>{
            removal.parentElement.parentElement.remove();
            totalPrice -= orderedPrice;
            document.getElementById('total').innerHTML = `Total price: <div>$${totalPrice}</div>`;
        })

        
        document.getElementById('ordero').classList.remove('hidden');

        
        
       
    }
})

document.getElementById('ordero_btn').addEventListener('click',()=>{
    document.getElementById('card-details').classList.remove('hidden');
})


document.getElementById('pay_btn').addEventListener('click', ()=>{
    document.getElementById('card-details').classList.add('hidden');
    document.getElementById('ordero').classList.add('hidden');

    let valo = document.getElementById('name').value;

    document.getElementById('onWay').textContent = `Thanks, ${valo}! Your order is on its way!`
    document.getElementById('onWay').classList.add('hidden2');
    document.getElementById('onWay').classList.remove('hidden');
})

/*
let removes = document.getElementsByClassName('product_removal')

console.log(removes)



for(let i = 0; i < removes.length; i++){
    removes[i].addEventListener('click', ()=>{
        console.log("hey");
    })
}

*/




