const toggleSwitch = document.querySelector("input[type=checkbox]")
const cards        = document.querySelectorAll(".card")
const Prices       = document.querySelectorAll(".card .price")

function priceMonthly() {
    cards.forEach(card => {
        if(card.classList.contains("card1")) {
            Prices[0].textContent = "$19.99"
        }
        if(card.classList.contains("card2")) {
            Prices[1].textContent = "$24.99"
        }
        if(card.classList.contains("card3")) {
            Prices[2].textContent = "$39.99"
        }
    })
}

function priceAnually() {
    cards.forEach(card => {
        if(card.classList.contains("card1")) {
            Prices[0].textContent = "$199.99"
        }
        if(card.classList.contains("card2")) {
            Prices[1].textContent = "$249.99"
        }
        if(card.classList.contains("card3")) {
            Prices[2].textContent = "$399.99"
        }
    })
}

toggleSwitch.addEventListener("change" , ()=> {
    if(toggleSwitch.checked) {
        priceMonthly()
    } else {
        priceAnually()
    }
})
