const menu = [
  {
    id: 1,
    title: "MINESTRONE",
    category: "Appetizers",
    price: 39,
    desc: `Organic VEGETABLE SOUP with Tuscan Kale and beans from a local farm`,
  },
  {
    id: 2,
    title: "FRITTO DI CALAMARI ",
    category: "Appetizers",
    price: 72,
    desc: `Deep FRIED SQUID marinated with lemon, chilli
and sage served with mint yogurt `,
  },
  {
    id: 3,
    title: "BRUSCHETTA DELBOSCO",
    category: "Appetizers",
    price: 49,
    desc: `Grilled crispy rustic bread with BUFFALO RICOTTA
spread and grilled mushrooms`,
  },
  {
    id: 4,
    title: "FAGIOLI",
    category: "Salads",
    price: 49,
    desc: `A combination of BEANS, cucumber, and
apple drizzled with citrus dressing `,
  },
  {
    id: 5,
    title: "POLLO ",
    category: "Salads",
    price: 76,
    desc: `A Keto friendly salad with grilled CHICKEN,
poached egg, kale, avocado, and cheese. `,
  },
  {
    id: 6,
    title: "CAPRINO ",
    category: "Salads",
    price: 62,
    desc: `Organic roasted beetroot, baby spinach,
caramelized orange, and Caprino GOAT CHEESE`,
  },

  {
    id: 7,
    title: "FETTUCCINE AL RAGU BIANCO ",
    category: "Pasta&Pizza",
    price: 89,
    desc: `Homemade fresh pasta tossed with slow cooked VEAL,
AND PORCINI RAGU `,
  },
  {
    id: 8,
    title: "PEPERONI PICCANTE ",
    category: "Pasta&Pizza",
    price: 69,
    desc: `Marinated organic roasted capsicum, anchovy,
capers and chorizo `,
  },
  {
    id: 9,
    title: "MARGHERITA ",
    category: "Pasta&Pizza",
    price: 68,
    desc: `The queen of Italian pizza made with Antonel<br>la tomato sauce,
fior di latte mozzarella and fresh basil`,
  },
  {
    id: 10,
    title: "SALMONE",
    category: "MainCourse",
    price: 92,
    desc: `Grilled fresh SALMON with warm organic
mix beans salad`,
  },
    {
      id: 11,
      title: "POLLO DORATO",
      category: "MainCourse",
      price: 96,
      desc: `Grilled com-fed CHICKEN BREAST with roasted
baby potatoes`,
  },
    {
      id: 12,
      title: "SCALOPPINA AI FUNGHI  ",
      category: "MainCourse",
      price: 129,
      desc: `Thin sliced AUSTRALIAN OYSTER BLADE in a
rich charcoal grilled mushroom sauce`,
  },
    {
      id: 13,
      title: "Tiramisu ",
      category: "Desserts",
      price: 30,
      desc: `Creamy Italian Mascarpone cheese, Savoiardi
biscuit and chocolate shavings`,
  },
    {
      id: 14,
      title: "Tortina Al Limone Di Sorrento ",
      category: "Desserts",
      price: 25,
      desc: `Sorrento lemon tart and Italian menngue`,
  },
    {
      id: 15,
      title: "Millefoglie Alle Fragole",
      category: "Desserts",
      price: 29,
      desc: `Homemade puff pastry, Chantilly cream,
strawberry and fresh mint`,
  },
    {
      id: 16,
      title: "Sorbetto Ai Limoni Di Sorrento",
      category: "Desserts",
      price: 24,
      desc: `Sorrento lemon sorbet`,
  },
  {
  id: 22,
              title: "APPLE & GINGER FIZZ",
              category: "Beverages",
              price: 35,
              desc: `Green apple, ginger bitter droplets, fresh
  lime juice and tonic water`,
    },
     {
              id: 23,
              title: "BASIL SMASH",
              category: "Beverages",
              price: 35,
              desc: `Basil leaves, watermelon puree, fresh lime
  juice and cedrata Tassoni`,
    },
     {
              id: 24,
              title: "GARIBALDI",
              category: "Beverages",
              price: 35,
              desc: `resh orange, mango puree and fresh
  pomegranate juice`,
    },
     {
              id: 16,
              title: "TEA TONIC",
              category: "Beverages",
              price: 35,
              desc: `Hibiscus tea, peach puree, bitter syrup and tonic water`,
  },
   {
        id: 17,
        title: "Lemonade",
        category: "Beverages",
        price: 24,
        desc: ``,
  },
  {
          id: 18,
          title: "Orange juice",
          category: "Beverages",
          price: 24,
          desc: ``,
  },
  {
          id: 19,
          title: "Mango juice",
          category: "Beverages",
          price: 24,
          desc: ``,
  },
  {
          id: 20,
          title: "Pineapple juice",
          category: "Beverages",
          price: 24,
          desc: ``,
  },
  {
          id: 21,
          title: "Strawberry juice",
          category: "Beverages",
          price: 24,
          desc: ``,
  },


   {
            id: 26,
            title: "Acqua Panna",
            category: "Beverages",
            price: 16,
            desc: ``,
  },
   {
            id: 27,
            title: "San Pellegrino",
            category: "Beverages",
            price: 19,
            desc: ``,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {


    return `<article class="menu-item">
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {

        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
