// A default export is a special case
// There can only be ONE default export per file
// The way a default export is imported, uses different syntax
// And there's an extra rule to pay attention to.
export default function numberToString(n) {
    switch (n) {
        case 1:
            return "One"
            
        case 2:
            return "Two"
            
        case 3:
            return "Three"
            
        case 4:
            return "Four"
            
        case 5:
            return "Five"
            
        case 6:
            return "Six"
            
        case 7:
            return "Seven"
            
        case 8:
            return "Eight"
            
        case 9:
            return "Nine"            
    
        default:
            return "Zero";
    }
}