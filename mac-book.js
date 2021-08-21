// memory  funtion

function totalMemoryCost(memoryInput, memoryCheck) {
    const extraMemoryInput = document.getElementById(memoryInput);
    const extraMemoryCostText = extraMemoryInput.innerText;
    const extraMemoryCost = parseFloat(extraMemoryCostText);
    if (memoryCheck == "memory") {
        extraMemoryInput.innerText = 0;
    }
    else if (memoryCheck == "extra-memory") {
        extraMemoryInput.innerText = 180;
    }
    return extraMemoryCost

}

// storge  funtion

function totalStorgeCost(storgeInput, memoryCheck) {
    const extraStorgeInput = document.getElementById(storgeInput);
    const extraStorgeCostText = extraStorgeInput.innerText;
    const extraStorgeCost = parseFloat(extraStorgeCostText);
    if (memoryCheck == "storge") {
        extraStorgeInput.innerText = 0;
    }
    else if (memoryCheck == "medium-extra-storge") {
        extraStorgeInput.innerText = 100;
    }
    else if (memoryCheck == "high-extra-storge") {
        extraStorgeInput.innerText = 180;
    }
    return extraStorgeCost

}


// delivery  funtion

function totalDeliveryCost(deliveryInput, deliveryCheck) {
    const deliveryCostInput = document.getElementById(deliveryInput);
    const deliveryCostText = deliveryCostInput.innerText;
    const deliveryCost = parseFloat(deliveryCostText);
    if (deliveryCheck == "free") {
        deliveryCostInput.innerText = 0;
    }
    else if (deliveryCheck == "charge") {
        deliveryCostInput.innerText = 20;
    }
    return deliveryCost

}


// memory cost

document.getElementById("8GB-Extra-Memory").addEventListener('click', function () {
    totalMemoryCost("total-memory-cost", "memory")
    calculateMacBookTotal()
})
document.getElementById("16GB-Extra-Memory").addEventListener('click', function () {
    totalMemoryCost("total-memory-cost", "extra-memory")
    calculateMacBookTotal()
})

// storge cost 

document.getElementById("256GB-Extra-Storge").addEventListener('click', function () {
    totalStorgeCost("total-storge-cost", "storge")
    calculateMacBookTotal()
})
document.getElementById("512GB-Extra-Storge").addEventListener('click', function () {
    totalStorgeCost("total-storge-cost", "medium-extra-storge")
    calculateMacBookTotal()
})
document.getElementById("1TB-Extra-Storge").addEventListener('click', function () {
    totalStorgeCost("total-storge-cost", "high-extra-storge")
    calculateMacBookTotal()
})

// delivery Cost 

document.getElementById("free-delivery").addEventListener('click', function () {
    totalDeliveryCost("total-delivery-cost", "free")
    calculateMacBookTotal()
})
document.getElementById("charge-of-delivery").addEventListener('click', function () {
    totalDeliveryCost("total-delivery-cost", "charge")
    calculateMacBookTotal()
})


// total calculate

function calculateMacBookTotal() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const totalMemoryCost = parseFloat(document.getElementById('total-memory-cost').innerText);
    const totalStorgeCost = parseFloat(document.getElementById('total-storge-cost').innerText);
    const totalDeliveryCost = parseFloat(document.getElementById('total-delivery-cost').innerText);



    let totalCost = document.getElementById('total-mac-book-cost');
    totalCost.innerText = bestPrice + totalMemoryCost + totalStorgeCost + totalDeliveryCost;

    const total = document.getElementById("total");
    total.innerText = totalCost.innerText;
}

// pomo code

document.getElementById("btn").addEventListener('click', function () {
    const inputCoponCodeFiled = document.getElementById("display-pin");
    const inputCoponCodeText = inputCoponCodeFiled.value;

    const total = document.getElementById("total");
    const totalText = total.innerText;
    const totalAmount = parseFloat(totalText);

    if (inputCoponCodeFiled.value == "stevekaku") {
        total.innerText = (totalAmount / 100) * 80;
    }

    inputCoponCodeFiled.value = '';

})




