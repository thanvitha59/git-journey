const poshtikMenu = [
    { name: "Jonna Rotte Wrap", price: 60 },
    { name: "Sajja Roti Wrap", price: 60 },
    { name: "Ragi Dosa", price: 80 },
    { name: "Millet Idli", price: 70 },
    { name: "Paneer Millet Bowl", price: 120 },
    { name: "Veggie Salad", price: 90 },
    { name: "Jowar Pizza", price: 150 },
    { name: "Ragi Pasta", price: 130 },
    { name: "Healthy Fruit Bowl", price: 100 },
    { name: "Millet Protein Shake", price: 40 }
];

for (let i = 0; i < poshtikMenu.length; i++) {
    console.log(poshtikMenu[i].name + " costs Rs. " + poshtikMenu[i].price);
}

console.log("dishes on the menu:", poshtikMenu.length);