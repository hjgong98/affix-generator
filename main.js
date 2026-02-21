// Coffee data
const coffeeData = {
  types: [
    // CLASSIC TIER (0-30) - only coffee drinks
    {
      name: 'drip coffee',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'americano',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 2,
      baseSyrups: 0,
    },
    {
      name: 'cold brew',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'dark roast',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'light roast',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'latte',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 1,
      baseSyrups: 0,
    },
    {
      name: 'cappuccino',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: false,
      baseShots: 1,
      baseSyrups: 0,
    },
    {
      name: 'espresso',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: false,
      baseShots: 1,
      baseSyrups: 0,
    },
    {
      name: 'flat white',
      typeMin: 0,
      typeMax: 30,
      tier: 'classic',
      category: 'coffee',
      iced: true,
      baseShots: 2,
      baseSyrups: 0,
    },

    // SPECIALTY TIER (30-60) - signature coffee drinks (many have built-in syrups)
    {
      name: 'white mocha',
      typeMin: 30,
      typeMax: 60,
      tier: 'specialty',
      category: 'coffee',
      iced: true,
      baseShots: 1,
      baseSyrups: 1,
    },
    {
      name: 'caramel macchiato',
      typeMin: 30,
      typeMax: 60,
      tier: 'specialty',
      category: 'coffee',
      iced: true,
      baseShots: 1,
      baseSyrups: 1,
    },
    {
      name: 'honey almondmilk flat white',
      typeMin: 40,
      typeMax: 60,
      tier: 'specialty',
      category: 'coffee',
      iced: true,
      baseShots: 2,
      baseSyrups: 1,
    },
    {
      name: 'cinnamon dolce latte',
      typeMin: 30,
      typeMax: 60,
      tier: 'specialty',
      category: 'coffee',
      iced: true,
      baseShots: 1,
      baseSyrups: 1,
    },
    {
      name: 'mocha latte',
      typeMin: 30,
      typeMax: 60,
      tier: 'specialty',
      category: 'coffee',
      iced: true,
      baseShots: 1,
      baseSyrups: 1,
    },

    // PREMIUM TIER (60-85) - single origin (no built-in syrups)
    {
      name: 'single origin pour-over',
      typeMin: 60,
      typeMax: 85,
      tier: 'premium',
      category: 'coffee',
      iced: false,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'single origin cold brew',
      typeMin: 60,
      typeMax: 85,
      tier: 'premium',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'ethiopian yirgacheffe',
      typeMin: 70,
      typeMax: 85,
      tier: 'premium',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'colombian geisha',
      typeMin: 75,
      typeMax: 85,
      tier: 'premium',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },
    {
      name: 'kenyan AA',
      typeMin: 65,
      typeMax: 85,
      tier: 'premium',
      category: 'coffee',
      iced: true,
      baseShots: 0,
      baseSyrups: 0,
    },

    // UNIQUE TIER (85-100) - curveball (non-coffee)
    {
      name: 'matcha latte',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'tea',
      iced: true,
      baseShots: 0,
      baseSyrups: 1,
    }, // matcha is sweetened
    {
      name: 'chai latte',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'tea',
      iced: true,
      baseShots: 0,
      baseSyrups: 1,
    }, // chai is spiced/sweet
    {
      name: 'london fog',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'tea',
      iced: true,
      baseShots: 0,
      baseSyrups: 1,
    }, // vanilla syrup
    {
      name: 'fresh orange juice',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'juice',
      iced: true,
      noMods: true,
    },
    {
      name: 'apple juice',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'juice',
      iced: true,
      noMods: true,
    },
    {
      name: 'hot chocolate',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'other',
      iced: false,
      baseShots: 0,
      baseSyrups: 2,
    }, // chocolate syrup
    {
      name: 'water',
      typeMin: 85,
      typeMax: 100,
      tier: 'unique',
      category: 'other',
      iced: true,
      noMods: true,
    },

    // Frappe (available across tiers but rare)
    {
      name: 'coffee frappe',
      typeMin: 0,
      typeMax: 100,
      tier: 'frappe',
      category: 'blended',
      iced: true,
      blended: true,
      baseShots: 1,
      baseSyrups: 2,
    },
    {
      name: 'creme frappe',
      typeMin: 0,
      typeMax: 100,
      tier: 'frappe',
      category: 'blended',
      iced: true,
      blended: true,
      baseShots: 0,
      baseSyrups: 2,
    },
  ],

  milks: [
    { name: 'whole milk', dairyFree: false },
    { name: '2% milk', dairyFree: false },
    { name: 'skim milk', dairyFree: false },
    { name: 'oat milk', dairyFree: true },
    { name: 'almond milk', dairyFree: true },
    { name: 'soy milk', dairyFree: true },
    { name: 'coconut milk', dairyFree: true },
  ],

  syrups: [
    { name: 'vanilla' },
    { name: 'caramel' },
    { name: 'hazelnut' },
    { name: 'toffee nut' },
    { name: 'white mocha' },
    { name: 'mocha' },
    { name: 'cinnamon dolce' },
    { name: 'brown sugar' },
  ],

  espresso: [
    { name: 'espresso' },
    { name: 'blonde espresso' },
    { name: 'ristretto' },
  ],

  toppings: [
    { name: 'whipped cream' },
    { name: 'caramel drizzle' },
    { name: 'mocha drizzle' },
    { name: 'sweet cream cold foam' },
    { name: 'cinnamon powder' },
    { name: 'chocolate powder' },
  ],

  // Hidden special orders
  hiddenDrinks: [
    {
      name: 'The Friend Order',
      description: "Your friend's signature drink",
      recipe:
        'Iced white mocha with blonde espresso, 4 pumps toffee nut, extra caramel drizzle, and sweet cream cold foam',
      trigger: {
        type: 'specialty',
        base: 'white mocha',
        sugar: 4,
        caffeine: 2,
        toppings: 2,
        dairyFree: false,
      },
    },
    {
      name: 'Birthday Special',
      description: 'Your birthday frappe creation',
      recipe:
        'Blended latte with hazelnut, toffee nut, caramel, vanilla, and mocha, 2 shots espresso affogato, topped with whipped cream, caramel and mocha drizzle',
      trigger: {
        type: 'classic',
        base: 'latte',
        sugar: 4,
        caffeine: 3,
        toppings: 3,
        dairyFree: false,
        blended: true,
      },
    },
    {
      name: 'Pedro Pascal Special',
      description: 'For when you need to stay awake',
      recipe: 'Quad espresso with 6 shots (live dangerously!)',
      trigger: {
        type: 'classic',
        base: 'espresso',
        sugar: 0,
        caffeine: 4,
        toppings: 0,
        dairyFree: true,
      },
    },
  ],
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

  // Type text
  if (type < 30) typeValue.textContent = 'classic';
  else if (type < 60) typeValue.textContent = 'specialty';
  else if (type < 85) typeValue.textContent = 'premium';
  else typeValue.textContent = 'unique';

  // Sugar display
  const sugarLabels = ['none', 'light', 'medium', 'extra', 'go ham'];
  sugarValue.textContent = sugarLabels[sugar];

  // Caffeine display
  const caffeineLabels = ['none', 'single', 'double', 'triple', 'go ham'];
  caffeineValue.textContent = caffeineLabels[caffeine];

  // Toppings display
  const toppingsLabels = ['none', 'one', 'two', 'three', 'go ham'];
  toppingsValue.textContent = toppingsLabels[toppings];
}

// Helper functions for counts
function getPumpCount(sugarLevel) {
  switch (sugarLevel) {
    case 0:
      return 0;
    case 1:
      return 1; // light = exactly 1 pump
    case 2:
      return 2; // medium = exactly 2 pumps
    case 3:
      return Math.floor(Math.random() * 2) + 3; // extra = 3-4 pumps
    case 4:
      return Math.floor(Math.random() * 4) + 5; // go ham = 5-8 pumps
    default:
      return 1;
  }
}

function getShotCount(caffeineLevel, baseShots) {
  if (caffeineLevel === 0) return 0;

  switch (caffeineLevel) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return Math.floor(Math.random() * 4) + 4; // go ham = 4-7 shots
    default:
      return 1;
  }
}

function getToppingCount(toppingsLevel) {
  switch (toppingsLevel) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3; // exactly 3 toppings for "three"
    case 4:
      return Math.floor(Math.random() * 4) + 3; // go ham = 3-6 toppings
    default:
      return 1;
  }
}

// Check for hidden drinks
function checkHiddenDrink(
  typeVal,
  baseName,
  sugar,
  caffeine,
  toppings,
  dairyFree,
  isBlended,
) {
  let typeCategory = 'classic';
  if (typeVal >= 30 && typeVal < 60) typeCategory = 'specialty';
  else if (typeVal >= 60 && typeVal < 85) typeCategory = 'premium';
  else if (typeVal >= 85) typeCategory = 'unique';

  for (const drink of coffeeData.hiddenDrinks) {
    const trigger = drink.trigger;

    if (trigger.base && trigger.base !== baseName) continue;
    if (trigger.type && trigger.type !== typeCategory) continue;
    if (trigger.blended !== undefined && trigger.blended !== isBlended) {
      continue;
    }
    if (trigger.sugar !== undefined && trigger.sugar !== sugar) continue;
    if (trigger.caffeine !== undefined && trigger.caffeine !== caffeine) {
      continue;
    }
    if (trigger.toppings !== undefined && trigger.toppings !== toppings) {
      continue;
    }
    if (trigger.dairyFree !== undefined && trigger.dairyFree !== dairyFree) {
      continue;
    }

    return drink;
  }
  return null;
}

// Generate drink
function generateDrink() {
  const typeVal = parseInt(typeSlider.value);
  const sugarLevel = parseInt(sugarSlider.value);
  const caffeineLevel = parseInt(caffeineSlider.value);
  const toppingsLevel = parseInt(toppingsSlider.value);
  const dairyFree = dairyFreeCheck.checked;

  // Determine if drink should be blended (5% chance)
  const isBlended = Math.random() < 0.05;

  // Filter bases by type range
  const eligibleBases = coffeeData.types.filter((base) =>
    typeVal >= base.typeMin && typeVal <= base.typeMax
  );

  if (eligibleBases.length === 0) {
    orderDisplay.innerHTML =
      '<p class="placeholder">☕ adjust parameters and generate →</p>';
    return;
  }

  const base = eligibleBases[Math.floor(Math.random() * eligibleBases.length)];

  // Check for hidden drinks
  const hiddenDrink = checkHiddenDrink(
    typeVal,
    base.name,
    sugarLevel,
    caffeineLevel,
    toppingsLevel,
    dairyFree,
    isBlended,
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
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      hidden: true,
    };

    history.unshift(orderItem);
    if (history.length > 8) history.pop();
    updateHistory();
    return;
  }

  // Regular drink generation
  let orderParts = [];

  // Handle different categories
  const isJuice = base.category === 'juice';
  const isTea = base.category === 'tea';
  const isCoffee = base.category === 'coffee';
  const isBlendedDrink = base.category === 'blended' || isBlended;

  // Temperature logic - only specify if iced or blended
  if (isJuice) {
    // Juice is just juice (implied cold)
    orderParts.push(`${base.name}`);
  } else if (isTea) {
    // Tea can be hot (default) or iced
    const isIced = Math.random() > 0.5;
    if (isIced) {
      orderParts.push(`iced ${base.name}`);
    } else {
      orderParts.push(`${base.name}`); // hot is default
    }
  } else if (isBlendedDrink) {
    orderParts.push(`blended ${base.name}`);
  } else {
    // Coffee drinks
    const isIced = Math.random() > 0.4;
    if (isIced) {
      orderParts.push(`iced ${base.name}`);
    } else {
      orderParts.push(`${base.name}`); // hot is default
    }
  }

  // Skip modifiers for juice
  if (isJuice) {
    let orderText = orderParts.join(' ');
    orderDisplay.innerHTML = `<p>☕ ${orderText}</p>`;

    const orderItem = {
      text: orderText,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    history.unshift(orderItem);
    if (history.length > 8) history.pop();
    updateHistory();
    return;
  }

  // Add milk for coffee and tea
  if ((isCoffee || isTea) && !isBlendedDrink && Math.random() > 0.3) {
    const eligibleMilks = coffeeData.milks.filter((m) =>
      !dairyFree || m.dairyFree
    );
    if (eligibleMilks.length > 0) {
      const milk =
        eligibleMilks[Math.floor(Math.random() * eligibleMilks.length)];
      orderParts.push(`with ${milk.name}`);
    }
  }

  // Add sugar (available for coffee and tea) - accounting for base syrups
  if (sugarLevel > 0 && (isCoffee || isTea)) {
    const baseSyrups = base.baseSyrups || 0;
    const totalDesiredPumps = getPumpCount(sugarLevel);

    // Only add additional pumps if we want more than the base
    if (totalDesiredPumps > baseSyrups) {
      const additionalPumps = totalDesiredPumps - baseSyrups;
      const syrup =
        coffeeData.syrups[Math.floor(Math.random() * coffeeData.syrups.length)];

      if (additionalPumps === 1) {
        orderParts.push(`with 1 pump of ${syrup.name}`);
      } else {
        orderParts.push(`with ${additionalPumps} pumps of ${syrup.name}`);
      }

      // Go ham might add second syrup
      if (sugarLevel === 4 && Math.random() > 0.5) {
        const secondSyrup = coffeeData
          .syrups[Math.floor(Math.random() * coffeeData.syrups.length)];
        if (secondSyrup.name !== syrup.name) {
          orderParts.push(
            `and ${getPumpCount(2)} pumps of ${secondSyrup.name}`,
          );
        }
      }
    }
    // If totalDesiredPumps <= baseSyrups, we don't add any extra syrup
    // The drink already has its built-in sweetness
  }

  // Add caffeine (available for coffee and tea)
  if (caffeineLevel > 0 && (isCoffee || isTea)) {
    const totalShots = getShotCount(caffeineLevel, base.baseShots || 0);
    const extraShots = totalShots - (base.baseShots || 0);

    // Special case: espresso drinks
    if (base.name === 'espresso') {
      if (totalShots === 1) orderParts = ['espresso'];
      else if (totalShots === 2) orderParts = ['double espresso'];
      else if (totalShots === 3) orderParts = ['triple espresso'];
      else orderParts = [`espresso with ${totalShots} shots`];
    } // For drinks with base shots
    else if (base.baseShots > 0) {
      if (extraShots > 0) {
        if (extraShots === 1) {
          orderParts.push(`with an extra shot`);
        } else {
          orderParts.push(`with ${extraShots} extra shots`);
        }
      }
    } // For drinks with no base shots
    else {
      if (totalShots === 1) {
        orderParts.push(`with a shot of espresso`);
      } else {
        const espressoType = coffeeData
          .espresso[Math.floor(Math.random() * coffeeData.espresso.length)];
        orderParts.push(`with ${totalShots} shots of ${espressoType.name}`);
      }
    }

    // Go ham on caffeine gets the "live dangerously" tag
    if (caffeineLevel === 4 && totalShots >= 4) {
      orderParts.push(`(live dangerously!)`);
    }
  } else if (caffeineLevel === 0 && isCoffee && !base.name.includes('decaf')) {
    orderParts[0] = 'decaf ' + orderParts[0];
  }

  // Add toppings (available for coffee and tea)
  if (toppingsLevel > 0 && (isCoffee || isTea)) {
    const toppingCount = getToppingCount(toppingsLevel);

    const selectedToppings = [];
    const availableToppings = [...coffeeData.toppings];

    for (let i = 0; i < toppingCount; i++) {
      if (availableToppings.length === 0) break;

      const randomIndex = Math.floor(Math.random() * availableToppings.length);
      const topping = availableToppings[randomIndex];

      selectedToppings.push(topping.name);

      // Remove selected topping to avoid duplicates (unless go ham)
      if (toppingsLevel < 4) {
        availableToppings.splice(randomIndex, 1);
      }
    }

    // Add toppings to order parts with a special marker for later formatting
    if (selectedToppings.length === 1) {
      orderParts.push(`with ${selectedToppings[0]}`);
    } else {
      orderParts.push(`with toppings:${selectedToppings.join('|')}`);
    }
  }

  // Format order with proper comma placement
  let orderText = '';
  orderText = orderParts[0];

  let modifiers = [];
  for (let i = 1; i < orderParts.length; i++) {
    let part = orderParts[i];

    // Handle special toppings format
    if (part.startsWith('with toppings:')) {
      const toppings = part.substring(14).split('|');
      toppings.forEach((topping) => {
        modifiers.push(topping);
      });
    } // Handle regular with/and parts
    else if (part.startsWith('with ')) {
      modifiers.push(part.substring(5));
    } else if (part.startsWith('and ')) {
      modifiers.push(part.substring(4));
    } else {
      modifiers.push(part);
    }
  }

  // Join modifiers with commas and final "and"
  if (modifiers.length === 1) {
    orderText += ` with ${modifiers[0]}`;
  } else if (modifiers.length === 2) {
    orderText += ` with ${modifiers[0]} and ${modifiers[1]}`;
  } else if (modifiers.length > 2) {
    const lastModifier = modifiers.pop();
    orderText += ` with ${modifiers.join(', ')}, and ${lastModifier}`;
  }

  // Clean up any double spaces
  orderText = orderText.replace(/\s+/g, ' ');

  orderDisplay.innerHTML = `<p>☕ ${orderText}</p>`;

  // Add to history
  const orderItem = {
    text: orderText,
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };

  history.unshift(orderItem);
  if (history.length > 8) history.pop();
  updateHistory();
}

// Update history
function updateHistory() {
  historyList.innerHTML = '';
  history.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'history-item';

    const hiddenEmoji = item.hidden ? '🌟 ' : '';
    div.innerHTML =
      `<span style="color: #8b6f50; font-size: 0.8rem;">${item.time}</span> · ${hiddenEmoji}${
        item.text.substring(0, 40)
      }${item.text.length > 40 ? '...' : ''}`;
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

// Generate on load
window.addEventListener('load', () => {
  updateLabels();
  generateDrink();
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !e.target.matches('input, button')) {
    e.preventDefault();
    generateDrink();
  }
});
