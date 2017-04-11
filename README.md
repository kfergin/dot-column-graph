# Dot Column Graph

This is just a simple dot-column (name?) graph with optional data transitions. It also changes the opacity of the dots based on a rudimentary "dot-concentration" calculation to show overlap.

### Demo
`src/scripts/index.js`: displays a graph with six columns and refreshes the data every 3 seconds.

### Props
* `data`: **Array<{name: String, values:Array&lt;Number>}>** Your data should be an array of objects, each representing a column.
* `colors`: **Array&lt;String>** An array of hex colors. `Default: Array with six colors`
* `width`: **Number** The ratio of width to height. If you want the graph area to be a square, this should be `1`. `Default: 1.8`
* `xLabel`: **String** The x-axis label. `Default: ''`
* `yLabel`: **String** The y-axis label. `Default: ''`
* `min`: **Number** The value the bottom of the graph represents. `Default: 0`
* `max`: **Number** The value the top of the graph represents. `Default: 1`
* `dividers`: **Number** The number of lines *not including min and max* you'd like your graph to have. `Default: 3`
* `dividerLabels`: **Boolean | String** If you would like to show a value and optional appended String (like %) next to each graph line. If you just want the value, set to `true`. If you want something like 25%, set to `'%'`. `Default: false`
* `showExtremes`: **Boolean** Show or hide graph lines for min and max. `Default: false`
* `dataTransitions`: **Boolean** If your data changes and you'd like it to transition between sets. Obviously, not a good idea if you're working with a lot of data. If that's the case, I'd look for something that uses [PixiJS](http://www.pixijs.com/). `Default: false`

#### TODO:
* Refine "dot-concentration" calculation (maybe). Probably use quartiles...