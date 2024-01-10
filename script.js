
const btnELement = document.querySelector(`.btn`)
const foodElement = document.querySelector(`.food`)

let isStarted = false;
let foodList = [
    "McDonald's",
    "Mala",
    "Ban Mian",
    "Cai Fan",
    "Chicken Rice",
    "Starbucks",
    "KFC",
    "Pizza Hut",
    "Subway",
    "Burger King",
    "Dim Sum",
    "Sushi",
    "Pad Thai",
    "Kimchi Stew",
    "Pho",
    "Curry",
    "Tandoori Chicken",
    "Biryani",
    "Falafel",
    "Gyros",
    "Kebab",
    "Shawarma",
    "Pasta",
    "Ramen",
    "Tacos",
    "Burritos",
    "Nasi Goreng",
    "Tom Yum Soup",
    "Laksa",
    "Hainanese Chicken Rice",
    "Chilli Crab",
    "Roti Prata",
    "Satay",
    "Bak Kut Teh",
    "Fish Head Curry",
    "Char Kway Teow",
    "Hokkien Mee",
    "Durian",
    "Kaya Toast",
    "Otak-Otak",
    "Rojak",
    "Mee Siam",
    "Lor Mee",
    "Chwee Kueh",
    "Popiah",
    "Sambal Stingray",
    "Ice Kacang",
    "Tau Huay",
    "Fried Carrot Cake",
    "Nasi Lemak",
    "Murtabak",
    "Teh Tarik",
    "Kopi",
    "Bandung",
    "Bubble Tea",
    "Mango Sticky Rice",
    "Green Curry",
    "Bulgogi",
    "Bibimbap",
    "Sushi Donburi",
    "Udon",
    "Tonkatsu",
    "Gyoza",
    "Peking Duck",
    "Hot Pot",
    "Dumplings",
    "Spring Rolls",
    "Egg Tart",
    "Crepes",
    "Gelato",
    "Tiramisu",
    "Macarons",
    "Cronut",
    "Baguette",
    "Croissant",
    "Paella",
    "Tapas",
    "Churros",
    "Poutine",
    "Fish and Chips",
    "Shepherd's Pie",
    "Beef Stroganoff",
    "Goulash",
    "Ratatouille",
    "Lasagna",
    "Risotto",
    "Carbonara",
    "Fajitas",
    "Enchiladas",
    "Nachos",
    "Quesadilla",
    "Ceviche",
    "Empanadas",
    "Feijoada",
    "Arepas",
    "Pierogi",
    "Schnitzel",
    "Bratwurst",
    "Kimchi",
    "Ssam",
    "Banh Mi",
    "Goi Cuon",
    "Som Tam",
    "Masala Dosa",
    "Butter Chicken",
    "Shahi Paneer",
    "Dal Makhani",
    "Chole Bhature",
    "Vada Pav",
    "salad 🥗"
]

let lastOne = -1;

btnELement.addEventListener('click', function() {
    btnELement.textContent = "No, next one"
    let rand = Math.floor(Math.random() * foodList.length + 1) -1;

    while(rand === lastOne)
    {rand = Math.floor(Math.random() * foodList.length + 1) -1;}

    lastOne = rand;
    console.log(rand);
    foodElement.textContent = foodList[rand];
})