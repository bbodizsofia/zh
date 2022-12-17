class Product { /*nagybetűs dolog: osztály, kisbetűs: objektum */
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

let products: Product[] = [];

function addProduct(name: string, price: number): void {
    let product = new Product(name, price); 
    products.push(product);
    document.getElementById("products").innerHTML += product.name+": " + product.price+" <br>";
}

function getMinimumValue(): void {
    let prices: number[] = []
    for(let i = 0; i < products.length; ++i) {
        prices.push(+products[i].price);
    }
    let minimumIndex: number = prices.indexOf(Math.min(...prices));
    document.getElementById("minimumValue").innerHTML = products[minimumIndex].name;
}
function getAveragePrice(): number {
    let sum:number = 0;
    for(let i = 0; i < products.length; ++i) {
        sum += +products[i].price;
    }
return sum / products.length;
}


function printAverage(): void {
    document.getElementById("average").innerHTML = getAveragePrice().toString();
    
}

function calculateStandardDeviation(): void {
    let variance = 0;
    let average = getAveragePrice();
    for (let i = 0; i < products.length; i++) {
      variance += Math.pow(products[i].price - average, 2);
    }
    variance /= products.length - 1;
    document.getElementById("SD").innerHTML =  Math.sqrt(variance).toString();
  }