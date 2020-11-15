import { images } from './ImageURL';

const Profiles = {
    vs_compare: require('./images/Navigation_Icons/VS1.png'),
    vs_compare_select: require('./images/Navigation_Icons/VSb.png'),
    meats: require('./images/Beef.png'),
    everyday_food: require('./images/hamburger.jpg'),
    seeds: require('./images/sunflower_seeds.png'),
    drinks_all: require('./images/coffee_small.png'),
    fruits: require('./images/apple.png'),
    everyday_items: require('./images/jeans.png'),
    grains: require('./images/rye.png'),
    alcoholic_drinks: require('./images/wine.png'),
    vegetables: require('./images/broccolli.png'),
    nuts_beans: require('./images/pistachios.png'),
    oils: require('./images/sesame_oil_small.png'),
    non_alcoholic_drinks: require('./images/milk.png'),
    landing_image: require('./images/LandingPage_Image_2x.png'),
    logo: require('./images/SiitchLogo_large.png'),
    alpha: require('./images/alpha.png'),
    calculator: require('./images/Calculator.png'),
    water_drops: require('./images/water_drops.png'),
    water: require('./images/WaterDrop_BLUE.png'),
    learn_more: require('./images/learn-more.png'),
    calculator: require('./images/Calculator.png'),
    'gray water': require('./images/gray_water_3.png'),
    'blue water': require('./images/blue_water_3.png'),
    'green water': require('./images/green_water_3.png'),
    Beef: require('./images/Image_new/Meats/beef.png'),
    Lamb: require('./images/Image_new/Meats/lamb.png'),
    Pork: require('./images/Image_new/Meats/pork.png'),
    Goat: require('./images/Image_new/Meats/goat.png'),
    Chicken: require('./images/Image_new/Meats/chicken.png'),
    'Chilis peppers': require('./images/Image_new/Fruits/chili_peppers.png'),
    Figs: require('./images/Image_new/Fruits/figs.png'),
    Olives: require('./images/Image_new/Fruits/olives.png'),
    Dates: require('./images/Image_new/Fruits/dates.png'),
    Plums: require('./images/Image_new/Fruits/plums.png'),
    Apricots: require('./images/Image_new/Fruits/apricot.png'),
    Guavas: require('./images/Image_new/Fruits/guava.png'),
    Mangoes: require('./images/Image_new/Fruits/mango.png'),
    Cherries: require('./images/Image_new/Fruits/cherries.png'),
    Papayas: require('./images/Image_new/Fruits/papaya.png'),
    'Apricots fresh': require('./images/Image_new/Fruits/apricot.png'),
    Coconut: require('./images/Image_new/Fruits/coconut.png'),
    Avocado: require('./images/Image_new/Fruits/avocado.png'),
    Pears: require('./images/Image_new/Fruits/pear.png'),
    Nectarines: require('./images/Image_new/Fruits/nectarine.png'),
    Peaches: require('./images/Image_new/Fruits/peach.png'),
    Apple: require('./images/Image_new/Fruits/apple.png'),
    Bananas: require('./images/Image_new/Fruits/bananas.png'),
    Plantains: require('./images/Image_new/Fruits/plaintain.png'),
    Mandarins: require('./images/Image_new/Fruits/mandarin.png'),
    Lemons: require('./images/Image_new/Fruits/lemon.png'),
    Limes: require('./images/Image_new/Fruits/lime.png'),
    Grapes: require('./images/Image_new/Fruits/grapes_black.png'),
    Peas: require('./images/Image_new/Fruits/peas.png'),
    Okra: require('./images/Image_new/Fruits/okra.png'),
    'Green beans': require('./images/Image_new/Fruits/green_beans.png'),
    Oranges: require('./images/Image_new/Fruits/orange.png'),
    Gooseberries: require('./images/Image_new/Fruits/gooseberries.png'),
    'Kiwi fruit': require('./images/Image_new/Fruits/kiwi_fruit.png'),
    Grapefruit: require('./images/Image_new/Fruits/grapefruit.png'),
    Currants: require('./images/Image_new/Fruits/currants.png'),
    Papayas: require('./images/Image_new/Fruits/papaya.png'),
    Blackberries: require('./images/Image_new/Fruits/blackberries.png'),
    Rasberries: require('./images/Image_new/Fruits/rasberries.png'),
    Mulberries: require('./images/Image_new/Fruits/mulberries.png'),
    Loganberries: require('./images/Image_new/Fruits/loganberries.png'),
    Peppers: require('./images/Image_new/Fruits/peppers.png'),
    Eggplants: require('./images/Image_new/Fruits/eggplant.png'),
    Strawberry: require('./images/Image_new/Fruits/strawberries.png'),
    Cucumber: require('./images/Image_new/Fruits/cucumber.png'),
    Squash: require('./images/Image_new/Fruits/squash.png'),
    Zucchini: require('./images/Image_new/Fruits/zucchini.png'),
    Pumpkin: require('./images/Image_new/Fruits/pumpkin.png'),
    Cranberries: require('./images/Image_new/Fruits/cranberries.png'),
    Pineapple: require('./images/Image_new/Fruits/pineapple.png'),
    Watermelon: require('./images/Image_new/Fruits/watermelon.png'),
    Tomato: require('./images/Image_new/Fruits/tomato.png'),
    Asparagus: require('./images/Image_new/Vegetables/asparagus.png'),
    Ginger: require('./images/Image_new/Vegetables/ginger.png'),
    Artichokes: require('./images/Image_new/Vegetables/artichoke.png'),
    Corn: require('./images/Image_new/Vegetables/corn.png'),
    Garlic: require('./images/Image_new/Vegetables/garlic.png'),
    'Sweet potato': require('./images/Image_new/Vegetables/sweet_potato.png'),
    Spinach: require('./images/Image_new/Vegetables/spinach.png'),
    Potato: require('./images/Image_new/Vegetables/potato.png'),
    Broccoli: require('./images/Image_new/Vegetables/broccoli.png'),
    'Brussel sprouts': require('./images/Image_new/Vegetables/brussel_sprouts.png'),
    Cauliflower: require('./images/Image_new/Vegetables/cauliflower.png'),
    Cabbage: require('./images/Image_new/Vegetables/cabbage.png'),
    Kale: require('./images/Image_new/Vegetables/kale.png'),
    Onions: require('./images/Image_new/Vegetables/onion.png'),
    Lettuce: require('./images/Image_new/Vegetables/lettuce.png'),
    Celery: require('./images/Image_new/Vegetables/celery.png'),
    Carrots: require('./images/Image_new/Vegetables/carrot.png'),
    Butter: require('./images/Image_new/Everyday_Foods/butter.png'),
    Hamburger: require('./images/Image_new/Everyday_Foods/hamburger.png'),
    Cheese: require('./images/Image_new/Everyday_Foods/cheese.png'),
    Pizza: require('./images/Image_new/Everyday_Foods/pizza.png'),
    Tofu: require('./images/Image_new/Everyday_Foods/tofu.png'),
    Rice: require('./images/Image_new/Grains/rice_white.png'),
    Pasta: require('./images/Image_new/Everyday_Foods/pasta.png'),
    Bread: require('./images/Image_new/Everyday_Foods/bread.png'),
    'Greek yogurt': require('./images/Image_new/Everyday_Foods/greek_yogurt.png'),
    'Tomato ketchup': require('./images/Image_new/Everyday_Foods/ketchup.png'),
    Egg: require('./images/Image_new/Everyday_Foods/egg.png'),
    'Potato chips': require('./images/Image_new/Everyday_Foods/potato_chips.png'),
    Icecream: require('./images/Image_new/Everyday_Foods/icecream_one_scoop.png'),
    'Cheese slice': require('./images/Image_new/Everyday_Foods/cheese_slice.png'),
    Yogurt: require('./images/Image_new/Everyday_Foods/yogurt.png'),
    Salad: require('./images/Image_new/Everyday_Foods/salad.png'),
    Toast: require('./images/Image_new/Everyday_Foods/toast.png'),
    Chocolate: require('./images/Image_new/Everyday_Foods/chocolate.png'),
    'Sugar cane': require('./images/Image_new/Everyday_Foods/sugar.png'), 
    'Soy sauce': require('./images/Image_new/Everyday_Foods/soy_sauce.png'),
    Car: require('./images/Image_new/Everyday_Items/Water_Items/car_pix.png'),
    'Leather shoes': require('./images/Image_new/Everyday_Items/Water_Items/leather_shoes.png'),
    Jeans: require('./images/Image_new/Everyday_Items/Water_Items/jeans.png'),
    'Suede shoes': require('./images/Image_new/Everyday_Items/Water_Items/suede-shoes.png'),
    'Cotton shirt': require('./images/Image_new/Everyday_Items/Water_Items/T-shirt.png'),
    Socks: require('./images/Image_new/Everyday_Items/Water_Items/socks_2.png'),
    Diapers: require('./images/Image_new/Everyday_Items/Water_Items/diaper_disposable.png'),
    'Diapers cloth': require('./images/Image_new/Everyday_Items/Water_Items/diaper_cloth.png'),
    'Glass bottle': require('./images/Image_new/Everyday_Items/Time_to_decompose/glass_bottle_2.png'),
    'Plastic bag': require('./images/Image_new/Everyday_Items/Time_to_decompose/plastic_bag.png'),
    'Fishing line': require('./images/Image_new/Everyday_Items/Time_to_decompose/fishing_line.png'),
    'Foam cup': require('./images/Image_new/Everyday_Items/Time_to_decompose/foam_cup.png'),
    'Plastic cup': require('./images/Image_new/Everyday_Items/Time_to_decompose/plastic_cup.png'),
    'Water bottle': require('./images/Image_new/Everyday_Items/Time_to_decompose/plastic_bottle.png'),
    Toothbrush: require('./images/Image_new/Everyday_Items/Time_to_decompose/toothbrush.png'),
    'Aluminum can': require('./images/Image_new/Everyday_Items/Time_to_decompose/aluminum_can.png'),
    'Juice box': require('./images/Image_new/Everyday_Items/Time_to_decompose/juice_box.png'),
    'Plastic straw': require('./images/Image_new/Everyday_Items/Time_to_decompose/plastic_straw.png'),
    'Tin can': require('./images/Image_new/Everyday_Items/Time_to_decompose/tin-can.png'),
    'Plastic holder': require('./images/Image_new/Everyday_Items/Time_to_decompose/6_pack_plastic_holder.png'),
    Tires: require('./images/Image_new/Everyday_Items/Time_to_decompose/tires.png'),
    'Paper coffee cup': require('./images/Image_new/Everyday_Items/Time_to_decompose/paper_coffee_cup.png'),
    'Milk carton': require('./images/Image_new/Everyday_Items/Time_to_decompose/milk_carton.png'),
    Cigarette: require('./images/Image_new/Everyday_Items/Time_to_decompose/cigarette.png'),
    'Paper towel': require('./images/Image_new/Everyday_Items/Time_to_decompose/paper_towel.png'),
    'Pet food dry': require('./images/Image_new/Everyday_Items/Water_Items/pet_food_dry.png'),
    'Pet food wet': require('./images/Image_new/Everyday_Items/Water_Items/pet_food_wet.png'),
    Pen: require('./images/Image_new/Everyday_Items/Water_Items/pen_pix.png'),
    Pencil: require('./images/Image_new/Everyday_Items/Water_Items/pencil_pix.png'),
    'Vanilla beans': require('./images/Image_new/Nuts_&_Beans/vanilla.png'),
    'Cocoa beans': require('./images/Image_new/Nuts_&_Beans/cocoa_beans.png'),
    Almond: require('./images/Image_new/Nuts_&_Beans/almonds.png'),
    Cashews: require('./images/Image_new/Nuts_&_Beans/cashews.png'),
    Pistachios: require('./images/Image_new/Nuts_&_Beans/pistachios.png'),
    Hazelnuts: require('./images/Image_new/Nuts_&_Beans/hazelnuts.png'),
    Walnuts: require('./images/Image_new/Nuts_&_Beans/walnuts.png'),
    Lentils: require('./images/Image_new/Nuts_&_Beans/lentils.png'),
    Chickpeas: require('./images/Image_new/Nuts_&_Beans/chickpeas.png'),
    Peanuts: require('./images/Image_new/Nuts_&_Beans/peanuts.png'),
    Chestnuts: require('./images/Image_new/Nuts_&_Beans/chestnuts.png'),
    'Soy beans': require('./images/Image_new/Nuts_&_Beans/soybeans.png'),
    'Sesame seeds': require('./images/Image_new/Seeds/sesame_seeds.png'),
    'Safflower seeds': require('./images/Image_new/Seeds/safflower_seeds.png'),
    'Sunflower seeds': require('./images/Image_new/Seeds/sunflower_seeds.png'),
    'Mustard seeds': require('./images/Image_new/Seeds/mustard_seeds.png'),
    'Poppy seeds': require('./images/Image_new/Seeds/poppy_seeds.png'),
    Millet: require('./images/Image_new/Grains/millet.png'),
    Sorghum: require('./images/Image_new/Grains/sorghum.png'),
    'Rice flour': require('./images/Image_new/Grains/rice_flour.png'),
    'Rice white': require('./images/Image_new/Grains/rice_white.png'),
    'Rice brown': require('./images/Image_new/Grains/rice_brown.png'),
    'Rolled oats': require('./images/Image_new/Grains/oats.png'),
    'Rye flour': require('./images/Image_new/Grains/rye_flour.png'),
    'Wheat flour': require('./images/Image_new/Grains/wheat_flour.png'),
    Rye: require('./images/Image_new/Grains/rye.png'),
    Barley: require('./images/Image_new/Grains/barley.png'),
    'Cocoa butter': require('./images/Image_new/Oils/cocoa_butter.png'),
    'Castor oil': require('./images/Image_new/Oils/castor_oil.png'),
    'Sesame oil': require('./images/Image_new/Oils/sesame_oil.png'),
    'Olive oil': require('./images/Image_new/Oils/olive_oil.png'),
    'Peanut oil': require('./images/Image_new/Oils/peanut_oil.png'),
    'Sunflower seed oil': require('./images/Image_new/Oils/sunflower_seed_oil.png'),
    'Palm oil': require('./images/Image_new/Oils/palm_oil.png'),
    'Cocunut oil': require('./images/Image_new/Oils/coconut_oil.png'),
    'Rapeseed oil': require('./images/Image_new/Oils/rapeseed_oil.png'),
    'Corn oil': require('./images/Image_new/Oils/corn_oil.png'),
    Wine: require('./images/Image_new/Drinks_Alcoholic/Larger_units/wine_gallon.png'),
    Whiskey: require('./images/Image_new/Drinks_Alcoholic/Larger_units/whiskey_bottle.png'),
    'Beer gallon': require('./images/Image_new/Drinks_Alcoholic/Larger_units/beer_gallon.png'),
    'Wine 750 mL bottle': require('./images/Image_new/Drinks_Alcoholic/Larger_units/wine_bottle.png'),
    'Gin 750 mL bottle': require('./images/Image_new/Drinks_Alcoholic/Larger_units/gin_bottle.png'),
    'Vodka 750 mL bottle': require('./images/Image_new/Drinks_Alcoholic/Larger_units/vodka_bottle.png'),
    Gin: require('./images/Image_new/Drinks_Alcoholic/Larger_units/gin_bottle.png'),
    Vodka: require('./images/Image_new/Drinks_Alcoholic/Single_units/vodka_glass.png'),
    'Pineapple juice': require('./images/Image_new/Drinks_Non_Alcoholic/pineapple_juice.png'),
    Milk: require('./images/Image_new/Drinks_Non_Alcoholic/milk.png'),
    'Apple juice': require('./images/Image_new/Drinks_Non_Alcoholic/apple_juice.png'),
    Soda: require('./images/Image_new/Drinks_Non_Alcoholic/soda.png'),
    'Orange juice': require('./images/Image_new/Drinks_Non_Alcoholic/orange_juice.png'),
    'Grape juice': require('./images/Image_new/Drinks_Non_Alcoholic/grape_juice.png'),
    'Wine 5 ounces': require('./images/Image_new/Drinks_Alcoholic/Single_units/wine_glass.png'),
    Coffee: require('./images/Image_new/Drinks_Non_Alcoholic/coffee.png'),
    'Grapefruit juice': require('./images/Image_new/Drinks_Non_Alcoholic/grapefruit_juice.png'),
    Beer: require('./images/Image_new/Drinks_Alcoholic/Single_units/beer_glass.png'),
    'Whiskey one and half ounce': require('./images/Image_new/Drinks_Alcoholic/Single_units/whiskey_glass.png'),
    'Tomato juice': require('./images/Image_new/Drinks_Non_Alcoholic/tomato_juice.png'),
    Tea: require('./images/Image_new/Drinks_Non_Alcoholic/tea.png'),
    'Gin one and a half ounce': require('./images/Image_new/Drinks_Alcoholic/Single_units/gin_glass.png'),
    'Vodka one and a half ounce': require('./images/Image_new/Drinks_Alcoholic/Single_units/vodka_glass.png'),
  };
  export default Profiles;
  