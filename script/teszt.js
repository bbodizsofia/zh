var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var products = [];
function addProduct(name, price) {
    var product = new Product(name, price);
    products.push(product);
    document.getElementById("products").innerHTML += product.name + ": " + product.price + " <br>";
}
function getMinimumValue() {
    var prices = [];
    for (var i = 0; i < products.length; ++i) {
        prices.push(+products[i].price);
    }
    var minimumIndex = prices.indexOf(Math.min.apply(Math, prices));
    document.getElementById("minimumValue").innerHTML = products[minimumIndex].name;
}
function getAveragePrice() {
    var sum = 0;
    for (var i = 0; i < products.length; ++i) {
        sum += +products[i].price;
    }
    return sum / products.length;
}
function printAverage() {
    document.getElementById("average").innerHTML = getAveragePrice().toString();
}
function calculateStandardDeviation() {
    var variance = 0;
    var average = getAveragePrice();
    for (var i = 0; i < products.length; i++) {
        variance += Math.pow(products[i].price - average, 2);
    }
    variance /= products.length - 1;
    document.getElementById("SD").innerHTML = Math.sqrt(variance).toString();
}
