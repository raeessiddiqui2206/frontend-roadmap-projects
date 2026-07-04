function cleanText(text){
    return text.trim();
}

function capitilize(text){
    const cleaned = cleanText(text).toLowerCase();
    
    if(cleaned.length === 0){
        return '';   
    }
    return cleaned[0].toUpperCase() + cleaned.slice(1);
    
}

function formatDisplayName(vale1, value2){
    const cleanFirst = capitilize(vale1);
    const cleanSecond = capitilize(value2)

    return `${cleanFirst} ${cleanSecond}`
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
