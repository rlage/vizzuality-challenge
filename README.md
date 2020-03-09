# vizzuality-challenge

## Features
1. Basic, Gradient and Chorolopleth legends
2. Hide and show layer (legend change only)
3. Show description modal
4. Collapse and expand legends
5. Tooltips

## Decisions
1. Nextjs
2. No chart library (I added d3 there to do the graph if I had the time)
3. Tests with Jest (I did just an example)

## Challenges
1. Nextjs. Never used before, decided to try it out but ran into a lot of problems to deploy, to create and work with tests.
2. Tooltip positioning. Somehow it is easier to position them in the graph, inside the svg. As I decided to create the headline component outside the svg realm (because it was easier to position the elements), it took me a while to solve the tooltip positioning. I even created a different orientation for the tooltip, but it was not reliable enough until the end of the test, so I chose to give some padding so the tooltip appears on all positions.

## Final considerations

The decision of going with next js was interesting, as I learned a lot about a new tool while it held me back a little in what I could deliver. Nevertheless, I had fun with it.
