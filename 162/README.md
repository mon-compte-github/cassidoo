This week’s question:

**Given an array of integers representing asteroids in a row, for each asteroid, the absolute value represents its size,**
**and the sign represents its direction (positive = right, negative = left). Return the state of the asteroids after all**
**collisions (assuming they are moving at the same speed). If two asteroids meet, the smaller one will explode.**
**When they are the same size, they both explode. Asteroids moving in the same direction will never meet.**

Example:

```
$ asteroids([5, 8, -5])
$ [5, 8] // The 8 and -5 collide, 8 wins. The 5 and 8 never collide.
$ asteroids([10, -10]) 
$ [] // The 10 and -10 collide and they both explode.
```
