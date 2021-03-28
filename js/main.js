// REFERENZE
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
// è una sorta array, quindi ho bisogno del loop
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');

var coupons = ['1234QW', '0987PO', '7890MN'];


// add cliccabili
for (var i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];

    add.addEventListener('click', function(){
        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = ! thisCheckbox.checked;
        }
    )
}

//calcola il prezzo al click del btn
btn.addEventListener( 'click', 
    function() {
        var nameBurger = burgerName.value.trim().toLowerCase();

        //il nome del burger è obbligatorio
        if(nameBurger.length < 1) {
            alert('inserisci un nome valido');
        } else {
            // aggiunta prezzo ingredienti
            var price = 50;
            
            for( var i = 0; i < ingredients.length; i++ ) {
                var ingredientCheck = ingredients[i];

                if(ingredientCheck.checked){
                    price += parseInt( ingredientCheck.value );
                }
            }
            
            //coupon
            var couponCode = coupon.value;
            // controllare se il coupon inserito è presente nella lista dei coupon validi 
            if(coupons.includes(couponCode) ) {
                //console.log('sconto applicato');
                //sconto del 20%
                price -= price * 0.2;
            }

            //stampa il prezzo
            displayPrice.innerHTML = price.toFixed(2);


        }
        console.log(nameBurger);
    }
)