setTimeout(funct,time)
settimeout batata h ki apka function kitne time baad execute hoga aur ye time ms me leta h execution ek hi baar hoga
1000ms => 1s so 5s=>5000

setInterval(fun, time)
setInterval ek certain time ke baad ussi func ko baar baar execute karate jayega ie multiple executions hote h
isko stop karne ke liye clearInterval(idname) pass kar do


functions me jab ham "this" ka use karte h to wo uss obj ke pass jata h jo use execute kara rha h pr
arrow function me jab "this" ka use karte h to ye parent scope ko check karta h mtlb ye dekhta h ki uske parent scope ko kisne bulaya h basically lexical scope ko use karta h