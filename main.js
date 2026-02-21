// Coffee data with point costs
const coffeeData = {
    bases: [
        // Classic tier (0-30 on style slider)
        { name: "drip coffee", points: 2, styleMin: 0, styleMax: 30, tier: "classic" },
        { name: "americano", points: 3, styleMin: 0, styleMax: 30, tier: "classic" },
        { name: "cold brew", points: 4, styleMin: 0, styleMax: 30, tier: "classic" },
        { name: "french press", points: 5, styleMin: 20, styleMax: 50, tier: "classic" },
        
        // Medium tier (30-70)
        { name: "house blend pour-over", points: 6, styleMin: 30, styleMax: 70, tier: "medium" },
        { name: "colombian roast", points: 6, styleMin: 30, styleMax: 70, tier: "medium" },
        { name: "breakfast blend", points: 5, styleMin: 30, styleMax: 70, tier: "medium" },
        { name: "ethiopian medium roast", points: 8, styleMin: 40, styleMax: 80, tier: "medium" },
        
        // Premium tier (70-100)
        { name: "ethiopian yirgacheffe", points: 12, styleMin: 70, styleMax: 100, tier: "premium" },
        { name: "kenyan AA", points: 11, styleMin: 70, styleMax: 100, tier: "premium" },
        { name: "colombian geisha", points: 15, styleMin: 80, styleMax: 100, tier: "premium" },
        { name: "jamaican blue mountain", points: 18, styleMin: 90, styleMax: 100, tier: "premium" },
        
        // Chaos tier (any style, but weighted to appear at extremes)
        { name: "decaf coffee", points: 2, styleMin: 0, styleMax: 100, tier: "chaos", chaosWeight: 0.3 },
        { name: "chai latte", points: 5, styleMin: 0, styleMax: 100, tier: "chaos", chaosWeight: 0.4 },
        { name: "matcha latte", points: 6, styleMin: 0, styleMax: 100, tier: "chaos", chaosWeight: 0.3 },
        { name: "orange juice", points: 2, styleMin: 0, styleMax: 100, tier: "chaos", chaosWeight: 0.1 }
    ],
    
    milks: [
        { name: "2% milk", points: 1, dairyFree: false },
        { name: "whole milk", points: 1, dairyFree: false },
        { name: "oat milk", points: 2, dairyFree: true },
        { name: "almond milk", points: 2, dairyFree: true },
        { name: "soy milk", points: 2, dairyFree: true },
        { name: "non-dairy creamer", points: 0, dairyFree: true }, // it's free but sad
        { name: "no milk", points: 0, dairyFree: true } // black
    ],
    
    sugars: [
        { level: 0, names: [], points: 0 }, // no sugar
        { level: 1, names: ["one pump vanilla", "one pump caramel", "one pump hazelnut"], points: 1 },
        { level: 2, names: ["two pumps vanilla", "two pumps caramel", "two pumps hazelnut", "white mocha"], points: 2 },
        { level: 3, names: ["three pumps vanilla", "three pumps caramel", "brown sugar syrup", "vietnamese style sweetened"], points: 3 }
    ],
    
    caffeine: [
        { level: 0, names: ["decaf", "half-caf"], points: 0, shots: 0 },
        { level: 1, names: [], points: 0, shots: 1 }, // regular, no extra name
        { level: 2, names: ["extra shot"], points: 2, shots: 2 },
        { level: 3, names: ["triple shot", "two extra shots"], points: 4, shots: 3 }
    ],
    
    extras: [
        { name: "vanilla sweet cream foam", points: 3, dairyFree: false },
        { name: "salted caramel foam", points: 3, dairyFree: false },
        { name: "whipped cream", points: 1, dairyFree: false },
        { name: "light ice", points: 0, dairyFree: true },
        { name: "extra ice", points: 0, dairyFree: true }
    ]
};

// State
let history = [];

// DOM elements
const styleSlider = document.getElementById('styleSlider');
const pointsSlider = document.getElementById('pointsSlider');
const sugarSlider = document.getElementById('sugarSlider');
const caffeineSlider = document.getElementById('caffeineSlider');
const dairyFreeCheck = document.getElementById('dairyFree');
const generateBtn = document.getElementById('generateBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

const styleValue = document.getElementById('styleValue');
const pointsValue = document.getElementById('pointsValue');
const sugarValue = document.getElementById('sugarValue');
const caffeineValue = document.getElementById('caffeineValue');
const orderDisplay = document.getElementById('orderDisplay');
const pointsBreakdown = document.getElementById('pointsBreakdown');
const historyList = document.getElementById('historyList');

// Update displayed values
function updateLabels() {
    const style = parseInt(styleSlider.value);
    const points = parseInt(pointsSlider.value);
    const sugar = parseInt(sugarSlider.value);
    const caffeine = parseInt(caffeineSlider.value);
    
    // Style text
    if (style < 30) styleValue.textContent = 'classic';
    else if (style < 60) styleValue.textContent = 'medium roast';
    else if (style < 85) styleValue.textContent = 'single origin';
    else styleValue.textContent = 'ultra rare';
    
    pointsValue.textContent = `${points} pts`;
    
    // Sugar labels
    const sugarLabels = ['none', 'light', 'medium', 'extra'];
    sugarValue.textContent = sugarLabels[sugar];
    
    // Caffeine labels
    const caffeineLabels = ['decaf', 'regular', 'extra shot', 'triple shot'];
    caffeineValue.textContent = caffeineLabels[caffeine];
}

// Filter coffee bases by style and points
function getEligibleBases(styleValue, maxPoints) {
    let eligible = coffeeData.bases.filter(base => 
        styleValue >= base.styleMin && 
        styleValue <= base.styleMax &&
        base.points <= maxPoints
    );
    
    // Add chaos bias - if style is extreme, chaos items more likely
    if (styleValue < 15 || styleValue > 85) {
        // Duplicate chaos items to increase their weight
        const chaosItems = coffeeData.bases.filter(b => b.tier === 'chaos');
        eligible = [...eligible, ...chaosItems, ...chaosItems];
    }
    
    return eligible;
}

// Get eligible milks based on dairy free preference
function getEligibleMilks(dairyFree, remainingPoints) {
    return coffeeData.milks.filter(milk => 
        (!dairyFree || milk.dairyFree) && 
        milk.points <= remainingPoints
    );
}

// Generate a drink order
function generateDrink() {
    const styleVal = parseInt(styleSlider.value);
    const totalPoints = parseInt(pointsSlider.value);
    const sugarLevel = parseInt(sugarSlider.value);
    const caffeineLevel = parseInt(caffeineSlider.value);
    const dairyFree = dairyFreeCheck.checked;
    
    // Track points spent
    let spentPoints = 0;
    let breakdown = [];
    
    // 1. Choose coffee base
    const eligibleBases = getEligibleBases(styleVal, totalPoints);
    if (eligibleBases.length === 0) {
        orderDisplay.innerHTML = '<p class="placeholder">☹️ no coffees match your parameters</p>';
        pointsBreakdown.textContent = '';
        return;
    }
    
    const coffee = eligibleBases[Math.floor(Math.random() * eligibleBases.length)];
    spentPoints += coffee.points;
    breakdown.push(`${coffee.name} (${coffee.points} pts)`);
    
    let remainingPoints = totalPoints - spentPoints;
    let orderParts = [coffee.name];
    
    // 2. Add milk if points remain
    let milk = null;
    if (remainingPoints > 0) {
        const eligibleMilks = getEligibleMilks(dairyFree, remainingPoints);
        if (eligibleMilks.length > 0) {
            milk = eligibleMilks[Math.floor(Math.random() * eligibleMilks.length)];
            if (milk.name !== 'no milk') {
                orderParts.push(`with ${milk.name}`);
                spentPoints += milk.points;
                remainingPoints -= milk.points;
                breakdown.push(`${milk.name} (${milk.points} pts)`);
            }
        }
    }
    
    // 3. Add sugar if level > 0
    if (sugarLevel > 0 && remainingPoints > 0) {
        const sugarOption = coffeeData.sugars[sugarLevel];
        if (sugarOption.points <= remainingPoints) {
            const syrupChoice = sugarOption.names[Math.floor(Math.random() * sugarOption.names.length)];
            orderParts.push(`with ${syrupChoice}`);
            spentPoints += sugarOption.points;
            remainingPoints -= sugarOption.points;
            breakdown.push(`${syrupChoice} (${sugarOption.points} pts)`);
        }
    }
    
    // 4. Add caffeine if level > 1 (level 1 is regular, no extra cost/name)
    if (caffeineLevel > 1 && remainingPoints > 0) {
        const caffeineOption = coffeeData.caffeine[caffeineLevel];
        if (caffeineOption.points <= remainingPoints) {
            const shotDesc = caffeineOption.names[Math.floor(Math.random() * caffeineOption.names.length)];
            orderParts.push(`with ${shotDesc}`);
            spentPoints += caffeineOption.points;
            remainingPoints -= caffeineOption.points;
            breakdown.push(`${shotDesc} (${caffeineOption.points} pts)`);
        }
    }
    
    // 5. Maybe add a random extra if points remain and we haven't gone too crazy
    if (remainingPoints >= 2 && Math.random() > 0.5 && coffee.tier !== 'premium') {
        const eligibleExtras = coffeeData.extras.filter(e => 
            (!dairyFree || e.dairyFree) && e.points <= remainingPoints
        );
        
        if (eligibleExtras.length > 0) {
            const extra = eligibleExtras[Math.floor(Math.random() * eligibleExtras.length)];
            orderParts.push(`with ${extra.name}`);
            spentPoints += extra.points;
            remainingPoints -= extra.points;
            breakdown.push(`${extra.name} (${extra.points} pts)`);
        }
    }
    
    // Handle special cases: premium coffee with syrups? The beans are crying
    if (coffee.tier === 'premium' && (sugarLevel > 1 || orderParts.some(p => p.includes('pump')))) {
        if (Math.random() > 0.7) {
            orderParts.push('☕ (the barista judges you)');
        }
    }
    
    // Format the order
    let orderText = orderParts.join(' ');
    
    // Add decaf prefix if caffeine level 0
    if (caffeineLevel === 0) {
        orderText = 'decaf ' + orderText;
    }
    
    // Display
    orderDisplay.innerHTML = `<p>${orderText}</p>`;
    
    // Points breakdown
    const pointsUsed = spentPoints;
    const pointsLeft = totalPoints - pointsUsed;
    pointsBreakdown.innerHTML = `📊 ${pointsUsed}/${totalPoints} points used · ${pointsLeft} left ${pointsLeft > 0 ? '✨' : '⚡'}`;
    
    // Add to history
    const orderItem = {
        text: orderText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        points: pointsUsed
    };
    
    history.unshift(orderItem);
    if (history.length > 8) history.pop();
    updateHistory();
}

// Update history display
function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `<span style="color: #8b6f50; font-size: 0.8rem;">${item.time}</span> · ${item.text}`;
        historyList.appendChild(div);
    });
}

// Event listeners
styleSlider.addEventListener('input', updateLabels);
pointsSlider.addEventListener('input', updateLabels);
sugarSlider.addEventListener('input', updateLabels);
caffeineSlider.addEventListener('input', updateLabels);

generateBtn.addEventListener('click', () => {
    generateDrink();
});

clearHistoryBtn.addEventListener('click', () => {
    history = [];
    updateHistory();
});

// Generate on load
window.addEventListener('load', () => {
    updateLabels();
    generateDrink();
});

// Bonus: Keyboard shortcut (spacebar generates)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.target.matches('input, button')) {
        e.preventDefault();
        generateDrink();
    }
});
