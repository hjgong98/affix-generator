// Coffee data
const coffeeData = {
    types: [
        // CLASSIC TIER (0-25) - classic espresso-based drinks
        { name: "cappuccino", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "latte", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "mocha", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 1, baseSyrups: 1 },
        { name: "americano", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 2, baseSyrups: 0 },
        { name: "cafe au lait", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "flat white", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 2, baseSyrups: 0 },
        { name: "cortado", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 2, baseSyrups: 0 },
        { name: "macchiato", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "turkish coffee", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: false, baseShots: 0, baseSyrups: 0 },
        { name: "caffe crema", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: false, baseShots: 1, baseSyrups: 0 },
        { name: "cafe cubano", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 2, baseSyrups: 2 },
        { name: "vietnamese coffee", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 2, baseSyrups: 2 },
        { name: "cafe de olla", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: false, baseShots: 0, baseSyrups: 2 },
        { name: "affogato", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: true, baseShots: 1, baseSyrups: 2 },
        { name: "einspänner", typeMin: 0, typeMax: 25, tier: "classic", category: "coffee", iced: false, baseShots: 2, baseSyrups: 0 },
        
        // BLENDS TIER (25-50) - signature coffee blends
        { name: "breakfast blend", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "belle espresso (klatch)", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "counter culture hologram", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "french roast blend", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "holiday blend", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "mocha java blend", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "major dickason's blend", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "peet's off the grid", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "stumptown hair bender", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "verve sermon blend", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "lavazza super crema", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 1, baseSyrups: 0 },
        { name: "kicking horse three sisters", typeMin: 25, typeMax: 50, tier: "blends", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0 },
        
        // PREMIUM TIER (50-75) - single origin - BLACK ONLY with roast and brew options
        { name: "ethiopian yirgacheffe", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["light", "medium-light"], brewMethods: ["pour-over", "aeropress", "cold brew", "filter"] },
        { name: "guatemala acatenango", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["light", "medium-light"], brewMethods: ["pour-over", "french press", "cold brew"] },
        { name: "kenya karumandi", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["light", "super light"], brewMethods: ["pour-over", "aeropress", "french press"] },
        { name: "colombian huila", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["light", "medium"], brewMethods: ["french press", "pour-over", "auto drip", "aeropress"] },
        { name: "maui mokka", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["medium-light"], brewMethods: ["pour-over", "french press", "aeropress"] },
        { name: "tanzanian peaberry", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["light", "medium"], brewMethods: ["french press", "pour-over", "espresso"] },
        { name: "jamaican blue mountain", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["medium", "light"], brewMethods: ["pour-over", "french press", "drip"] },
        { name: "colombian geisha", typeMin: 50, typeMax: 75, tier: "premium", category: "coffee", iced: true, baseShots: 0, baseSyrups: 0, blackOnly: true,
          roasts: ["light", "medium"], brewMethods: ["pour-over", "aeropress"] },
        
        // UNIQUE TIER (75-90) - curveball
        // Teas
        { name: "matcha latte", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 1 },
        { name: "chai latte", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 1 },
        { name: "london fog", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 1 },
        { name: "milk tea", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 1 },
        { name: "earl grey tea", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "black tea", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "oolong tea", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 0 },
        { name: "jasmine tea", typeMin: 75, typeMax: 90, tier: "unique", category: "tea", iced: true, baseShots: 0, baseSyrups: 0 },
        
        // Juices
        { name: "apple juice", typeMin: 75, typeMax: 90, tier: "unique", category: "juice", iced: true, noMods: true },
        { name: "orange juice", typeMin: 75, typeMax: 90, tier: "unique", category: "juice", iced: true, noMods: true },
        
        // Other
        { name: "hot chocolate", typeMin: 75, typeMax: 90, tier: "unique", category: "other", iced: false, baseShots: 0, baseSyrups: 2 },
        { name: "water", typeMin: 75, typeMax: 90, tier: "unique", category: "water", iced: true, noMods: true }
    ],
    
    milks: [
        { name: "whole milk", dairyFree: false },
        { name: "2% milk", dairyFree: false },
        { name: "skim milk", dairyFree: false },
        { name: "oat milk", dairyFree: true },
        { name: "almond milk", dairyFree: true },
        { name: "soy milk", dairyFree: true },
        { name: "coconut milk", dairyFree: true }
    ],
    
    syrups: [
        { name: "vanilla" },
        { name: "caramel" },
        { name: "hazelnut" },
        { name: "toffee nut" },
        { name: "white mocha" },
        { name: "mocha" },
        { name: "cinnamon dolce" },
        { name: "brown sugar" },
        { name: "honey" }
    ],
    
    espresso: [
        { name: "ristretto", type: "short" },
        { name: "single", type: "standard" },
        { name: "doppio", type: "double" },
        { name: "espresso", type: "standard" },
        { name: "lungo", type: "long" }
    ],
    
    toppings: [
        { name: "whipped cream" },
        { name: "caramel drizzle" },
        { name: "mocha drizzle" },
        { name: "sweet cream cold foam" },
        { name: "cinnamon powder" },
        { name: "chocolate powder" }
    ],
    
    // Hidden special orders
    hiddenDrinks: [
        {
            name: "The Friend Order",
            description: "Your friend's signature drink",
            recipe: "Iced white mocha with blonde espresso, 4 pumps toffee nut, extra caramel drizzle, and sweet cream cold foam",
            trigger: { type: "specialty", base: "white mocha", sugar: 4, caffeine: 2, toppings: 2, dairyFree: false }
        },
        {
            name: "Birthday Special",
            description: "Your birthday frappe creation",
            recipe: "Blended iced latte with hazelnut, toffee nut, caramel, vanilla, and mocha, 2 shots espresso affogato, topped with whipped cream, caramel and mocha drizzle",
            trigger: { type: "classic", base: "latte", sugar: 4, caffeine: 3, toppings: 3, dairyFree: false, blended: true }
        },
        {
            name: "Pedro Pascal Special",
            description: "For when you need to stay awake",
            recipe: "Quad espresso with 6 shots",
            trigger: { type: "classic", base: "espresso", sugar: 0, caffeine: 4, toppings: 0, dairyFree: true }
        },
        {
            name: "The Coconut Hazelnut",
            description: "Another friend's favorite",
            recipe: "Double espresso with coconut milk, 2 pumps hazelnut, and 1 pump vanilla",
            trigger: { type: "classic", base: "espresso", sugar: 3, caffeine: 2, toppings: 0, dairyFree: true }
        }
    ]
};

// State
let history = [];

// DOM elements
const typeSlider = document.getElementById('typeSlider');
const sugarSlider = document.getElementById('sugarSlider');
const caffeineSlider = document.getElementById('caffeineSlider');
const toppingsSlider = document.getElementById('toppingsSlider');
const dairyFreeCheck = document.getElementById('dairyFree');
const generateBtn = document.getElementById('generateBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

const typeValue = document.getElementById('typeValue');
const sugarValue = document.getElementById('sugarValue');
const caffeineValue = document.getElementById('caffeineValue');
const toppingsValue = document.getElementById('toppingsValue');
const orderDisplay = document.getElementById('orderDisplay');
const historyList = document.getElementById('historyList');

// Update displayed values
function updateLabels() {
    const type = parseInt(typeSlider.value);
    const sugar = parseInt(sugarSlider.value);
    const caffeine = parseInt(caffeineSlider.value);
    const toppings = parseInt(toppingsSlider.value);
    
    // Type text - now with blends instead of specialty
    if (type < 25) typeValue.textContent = 'classic';
    else if (type < 50) typeValue.textContent = 'blends';
    else if (type < 75) typeValue.textContent = 'premium';
    else if (type < 90) typeValue.textContent = 'unique';
    else typeValue.textContent = 'wildcard';
    
    const sugarLabels = ['none', 'light', 'medium', 'extra', 'go ham'];
    sugarValue.textContent = sugarLabels[sugar];
    
    const caffeineLabels = ['none', 'single', 'double', 'triple', 'go ham'];
    caffeineValue.textContent = caffeineLabels[caffeine];
    
    const toppingsLabels = ['none', 'one', 'two', 'three', 'go ham'];
    toppingsValue.textContent = toppingsLabels[toppings];
}

// Helper functions for counts
function getPumpCount(sugarLevel) {
    switch(sugarLevel) {
        case 0: return 0;
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return Math.floor(Math.random() * 17) + 4;
        default: return 1;
    }
}

function getShotCount(caffeineLevel) {
    switch(caffeineLevel) {
        case 0: return 0;
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return Math.floor(Math.random() * 17) + 4;
        default: return 1;
    }
}

function getToppingCount(toppingsLevel) {
    switch(toppingsLevel) {
        case 0: return 0;
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return Math.floor(Math.random() * 17) + 4;
        default: return 1;
    }
}

// Check for hidden drinks
function checkHiddenDrink(typeVal, baseName, sugar, caffeine, toppings, dairyFree, isBlended) {
    let typeCategory = 'classic';
    if (typeVal >= 25 && typeVal < 50) typeCategory = 'blends';
    else if (typeVal >= 50 && typeVal < 75) typeCategory = 'premium';
    else if (typeVal >= 75 && typeVal < 90) typeCategory = 'unique';
    else if (typeVal >= 90) typeCategory = 'wildcard';
    
    return coffeeData.hiddenDrinks.find(drink => {
        const t = drink.trigger;
        if (t.base && t.base !== baseName) return false;
        if (t.type && t.type !== typeCategory) return false;
        if (t.blended !== undefined && t.blended !== isBlended) return false;
        if (t.sugar !== undefined && t.sugar !== sugar) return false;
        if (t.caffeine !== undefined && t.caffeine !== caffeine) return false;
        if (t.toppings !== undefined && t.toppings !== toppings) return false;
        if (t.dairyFree !== undefined && t.dairyFree !== dairyFree) return false;
        return true;
    });
}

// Generate drink
function generateDrink() {
    const typeVal = parseInt(typeSlider.value);
    const sugarLevel = parseInt(sugarSlider.value);
    const caffeineLevel = parseInt(caffeineSlider.value);
    const toppingsLevel = parseInt(toppingsSlider.value);
    const dairyFree = dairyFreeCheck.checked;
    
    // For wildcard tier (90-100), select from ALL drinks
    let eligibleBases;
    if (typeVal >= 90) {
        // Wildcard - include everything
        eligibleBases = coffeeData.types;
    } else {
        // Normal filtering by type range
        eligibleBases = coffeeData.types.filter(base => 
            typeVal >= base.typeMin && typeVal <= base.typeMax
        );
    }
    
    if (eligibleBases.length === 0) {
        orderDisplay.innerHTML = '<p class="placeholder">☕ adjust parameters and generate →</p>';
        return;
    }
    
    const base = eligibleBases[Math.floor(Math.random() * eligibleBases.length)];
    
    // Special handling for water
    if (base.name === "water") {
        const isIced = Math.random() > 0.5;
        orderDisplay.innerHTML = isIced 
            ? `<p>💧 a glass of iced water for hydration</p>`
            : `<p>💧 a glass of water for hydration</p>`;
        
        const orderItem = {
            text: isIced ? "iced water for hydration" : "water for hydration",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        history.unshift(orderItem);
        if (history.length > 8) history.pop();
        updateHistory();
        return;
    }
    
    const isJuice = base.category === 'juice';
    const isTea = base.category === 'tea';
    const isCoffee = base.category === 'coffee';
    
    // Determine if drink should be iced and/or blended
    const isIced = !isJuice && Math.random() > 0.4;
    const isBlended = isIced && Math.random() < 0.15; // 15% chance for iced drinks to be blended
    
    // Check for hidden drinks
    const hiddenDrink = checkHiddenDrink(
        typeVal, base.name, sugarLevel, caffeineLevel, toppingsLevel, dairyFree, isBlended
    );
    
    if (hiddenDrink) {
        orderDisplay.innerHTML = `
            <p>🌟 <strong>${hiddenDrink.name}</strong><br>
            <span style="font-size: 1rem; color: #8b6f50;">${hiddenDrink.description}</span><br>
            <span style="font-size: 1.2rem;">"${hiddenDrink.recipe}"</span>
            </p>
        `;
        
        const orderItem = {
            text: `${hiddenDrink.name} - ${hiddenDrink.recipe}`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            hidden: true
        };
        
        history.unshift(orderItem);
        if (history.length > 8) history.pop();
        updateHistory();
        return;
    }
    
    // Special handling for premium black-only coffees with roast and brew options
    if (base.blackOnly) {
        // Select random roast level from available options
        const roastLevel = base.roasts ? base.roasts[Math.floor(Math.random() * base.roasts.length)] : "light";
        
        // Select random brew method from available options
        const brewMethod = base.brewMethods ? base.brewMethods[Math.floor(Math.random() * base.brewMethods.length)] : "pour-over";
        
        // Build the premium drink name - simplified!
        let premiumDrinkName = `${roastLevel} roast ${base.name} ${brewMethod}`;
        
        // Add temperature if iced (cold brew is already cold, so this handles that)
        if (isIced && !brewMethod.includes("cold brew")) {
            premiumDrinkName = `iced ${premiumDrinkName}`;
        }
        
        orderDisplay.innerHTML = `<p>☕ ${premiumDrinkName}</p>`;
        
        const orderItem = {
            text: premiumDrinkName,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        history.unshift(orderItem);
        if (history.length > 8) history.pop();
        updateHistory();
        return;
    }
    
    // Regular drink generation
    let orderParts = [];
    
    // Temperature logic
    if (isJuice) {
        orderParts.push(`${base.name}`);
    } else if (isTea) {
        const teaIsIced = Math.random() > 0.5;
        if (teaIsIced) {
            orderParts.push(`iced ${base.name}`);
        } else {
            orderParts.push(`${base.name}`);
        }
    } else {
        // Coffee drinks
        if (isBlended) {
            orderParts.push(`blended iced ${base.name}`);
        } else if (isIced) {
            orderParts.push(`iced ${base.name}`);
        } else {
            orderParts.push(`${base.name}`);
        }
    }
    
    // Skip modifiers for juice
    if (isJuice) {
        const orderText = orderParts.join(' ');
        orderDisplay.innerHTML = `<p>🧃 ${orderText}</p>`;
        
        const orderItem = {
            text: orderText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        history.unshift(orderItem);
        if (history.length > 8) history.pop();
        updateHistory();
        return;
    }
    
    // Add milk
    if ((isCoffee || isTea) && !isBlended && Math.random() > 0.3) {
        const hasMilkInName = 
            base.name.includes("milk") || 
            base.name.includes("latte") ||
            base.name.includes("flat white") ||
            base.name.includes("cappuccino") ||
            base.name.includes("cortado") ||
            base.name.includes("macchiato");
        
        if (!hasMilkInName) {
            const eligibleMilks = coffeeData.milks.filter(m => !dairyFree || m.dairyFree);
            const milkOptions = eligibleMilks.filter(m => m.name !== "no milk");
            if (milkOptions.length > 0) {
                const milk = milkOptions[Math.floor(Math.random() * milkOptions.length)];
                orderParts.push(`with ${milk.name}`);
            }
        } else if (dairyFree) {
            const baseHasDairyMilk = 
                (base.name.includes("milk") ||
                base.name.includes("latte") ||
                base.name.includes("flat white") ||
                base.name.includes("cappuccino") ||
                base.name.includes("cortado") ||
                base.name.includes("macchiato"));
            
            if (baseHasDairyMilk) {
                const dairyFreeMilks = coffeeData.milks.filter(m => m.dairyFree && m.name !== "no milk");
                if (dairyFreeMilks.length > 0) {
                    const milk = dairyFreeMilks[Math.floor(Math.random() * dairyFreeMilks.length)];
                    orderParts.push(`with ${milk.name} (dairy-free)`);
                }
            }
        }
    }
    
    // Add sugar
    if (sugarLevel > 0 && (isCoffee || isTea)) {
        const baseSyrups = base.baseSyrups || 0;
        const totalDesiredPumps = getPumpCount(sugarLevel);
        
        if (totalDesiredPumps > baseSyrups) {
            const additionalPumps = totalDesiredPumps - baseSyrups;
            const syrup = coffeeData.syrups[Math.floor(Math.random() * coffeeData.syrups.length)];
            
            if (additionalPumps === 1) {
                orderParts.push(`with 1 pump of ${syrup.name}`);
            } else {
                orderParts.push(`with ${additionalPumps} pumps of ${syrup.name}`);
            }
            
            if (sugarLevel === 4 && Math.random() > 0.5) {
                const secondSyrup = coffeeData.syrups[Math.floor(Math.random() * coffeeData.syrups.length)];
                if (secondSyrup.name !== syrup.name) {
                    orderParts.push(`and ${getPumpCount(2)} pumps of ${secondSyrup.name}`);
                }
            }
        }
    }
    
    // Add caffeine with espresso options
    if (caffeineLevel > 0) {
        const totalShots = getShotCount(caffeineLevel);
        
        // Espresso drinks
        if (base.name === "espresso") {
            if (totalShots === 1) {
                orderParts = [Math.random() > 0.5 ? "single espresso" : "espresso"];
            } else if (totalShots === 2) {
                orderParts = [Math.random() > 0.5 ? "doppio" : "double espresso"];
            } else if (totalShots === 3) {
                orderParts = ["triple espresso"];
            } else {
                orderParts = [`espresso with ${totalShots} shots`];
            }
        }
        // Orange juice + espresso
        else if (base.name === "orange juice" && totalShots > 0) {
            orderParts = totalShots === 1 
                ? [`espresso orange sunrise`]
                : [`${totalShots}-shot espresso orange sunrise`];
        }
        // Teas + espresso = "dirty"
        else if ((base.category === "tea" || base.name.includes("tea")) && totalShots > 0) {
            orderParts[0] = totalShots === 1 
                ? `dirty ${orderParts[0]}`
                : `dirty ${orderParts[0]} (${totalShots} shots)`;
        }
        // Drinks with base shots
        else if (base.baseShots > 0) {
            const extraShots = totalShots - base.baseShots;
            if (extraShots > 0) {
                if (extraShots === 1) {
                    if (Math.random() > 0.7) {
                        const shotType = coffeeData.espresso[Math.floor(Math.random() * coffeeData.espresso.length)];
                        orderParts.push(`with an extra ${shotType.name} shot`);
                    } else {
                        orderParts.push(`with an extra shot`);
                    }
                } else {
                    orderParts.push(`with ${extraShots} extra shots`);
                }
            }
        }
        // Drinks with no base shots
        else if (!base.noMods) {
            if (totalShots === 1) {
                if (Math.random() > 0.5) {
                    const shotType = coffeeData.espresso[Math.floor(Math.random() * coffeeData.espresso.length)];
                    orderParts.push(`with a ${shotType.name} shot`);
                } else {
                    orderParts.push(`with a shot of espresso`);
                }
            } else {
                if (Math.random() > 0.5) {
                    const shotType = coffeeData.espresso[Math.floor(Math.random() * coffeeData.espresso.length)];
                    orderParts.push(`with ${totalShots} ${shotType.name} shots`);
                } else {
                    orderParts.push(`with ${totalShots} shots of espresso`);
                }
            }
        }
    } else if (caffeineLevel === 0 && isCoffee && !base.name.includes("decaf")) {
        orderParts[0] = "decaf " + orderParts[0];
    }
    
    // Add toppings
    if (toppingsLevel > 0 && (isCoffee || isTea)) {
        const toppingCount = getToppingCount(toppingsLevel);
        
        const selectedToppings = [];
        const availableToppings = [...coffeeData.toppings];
        
        for (let i = 0; i < toppingCount; i++) {
            if (availableToppings.length === 0) break;
            
            const randomIndex = Math.floor(Math.random() * availableToppings.length);
            const topping = availableToppings[randomIndex];
            
            selectedToppings.push(topping.name);
            
            if (toppingsLevel < 4) {
                availableToppings.splice(randomIndex, 1);
            }
        }
        
        if (selectedToppings.length === 1) {
            orderParts.push(`with ${selectedToppings[0]}`);
        } else {
            orderParts.push(`with toppings:${selectedToppings.join('|')}`);
        }
    }
    
    // Format order
    let orderText = orderParts[0];
    const modifiers = [];
    
    for (let i = 1; i < orderParts.length; i++) {
        const part = orderParts[i];
        
        if (part.startsWith('with toppings:')) {
            const toppings = part.substring(14).split('|');
            toppings.forEach(topping => modifiers.push(topping));
        } else if (part.startsWith('with ')) {
            modifiers.push(part.substring(5));
        } else if (part.startsWith('and ')) {
            modifiers.push(part.substring(4));
        } else {
            modifiers.push(part);
        }
    }
    
    if (modifiers.length === 1) {
        orderText += ` with ${modifiers[0]}`;
    } else if (modifiers.length === 2) {
        orderText += ` with ${modifiers[0]} and ${modifiers[1]}`;
    } else if (modifiers.length > 2) {
        const lastModifier = modifiers.pop();
        orderText += ` with ${modifiers.join(', ')}, and ${lastModifier}`;
    }
    
    orderText = orderText.replace(/\s+/g, ' ');
    orderDisplay.innerHTML = `<p>☕ ${orderText}</p>`;
    
    const orderItem = {
        text: orderText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    history.unshift(orderItem);
    if (history.length > 8) history.pop();
    updateHistory();
}

// Update history
function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        
        const hiddenEmoji = item.hidden ? '🌟 ' : '';
        div.innerHTML = `<span style="color: #8b6f50; font-size: 0.8rem;">${item.time}</span> · ${hiddenEmoji}${item.text.substring(0, 40)}${item.text.length > 40 ? '...' : ''}`;
        historyList.appendChild(div);
    });
}

// Event listeners
typeSlider.addEventListener('input', updateLabels);
sugarSlider.addEventListener('input', updateLabels);
caffeineSlider.addEventListener('input', updateLabels);
toppingsSlider.addEventListener('input', updateLabels);

generateBtn.addEventListener('click', generateDrink);
clearHistoryBtn.addEventListener('click', () => {
    history = [];
    updateHistory();
});

window.addEventListener('load', () => {
    updateLabels();
    generateDrink();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.target.matches('input, button')) {
        e.preventDefault();
        generateDrink();
    }
});
