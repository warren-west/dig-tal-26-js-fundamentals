const templates = [
    { height: 2, width: 3, texture: "✨" },
    { height: 4, width: 4, texture: "🌿" },
    { height: 4, width: 6, texture: "🔷" },
]

let rectangles = []

// use the map function here to fill the rectangles array

// #region Solution A
// rectangles = templates.map((template) => {
//     let rectangleString = ``

//     /* The goal:
//     ✨✨✨
//     ✨✨✨
//     */

//     // run an outer loop for the rows
//     for (let i = 0; i < template.height; i++) { // 0, 1, finish
        
//         // run an inner loop for the columns
//         for (let j = 0; j < template.width; j++) { // 0, 1, 2
//             rectangleString += template.texture // add an emoji horizontally
//         }

//         rectangleString += "\n" // break to a new line (vertical space)
//     }

//     return rectangleString
// })
// #endregion


// #region Solution B

// one loop, and one .repeat()

rectangles = templates.map((t) => {
    let outputString = ''

    // outer loop to generate each row:
    for (let i = 0; i < t.height; i++) {
        // instead of an inner loop, use the .repeat() function
        outputString += t.texture.repeat(t.width) + "\n"
    }

    return outputString
})

// #endregion


// #region Solution C

// can we achieve this with no loops?

/* goal:
✨✨✨\n✨✨✨\n
✨✨✨\n\n
*/

// rectangles = templates.map(t => t.texture.repeat(t.width).concat("\n").repeat(t.height))
// rectangles = templates.map(t => (t.texture.repeat(t.width) + "\n").repeat(t.height))
// rectangles = templates.map(t => t.texture.repeat(t.width) + "\n".repeat(t.height)) // This doesn't work!

rectangles = templates.map(t => `${t.texture.repeat(t.width)}\n`.repeat(t.height))

// #endregion



// print out all the rectangles in the console:
for (let rect of rectangles) {
    // Print out the current rectangle
    console.log(rect)
}
