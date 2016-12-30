# Metrics (Values)

All calues are calculated soratable in real time.


## Average

## Diff

## Last

## First

## Max

## Min

## Sum


## Count Unique
Will count all unique strings using HyperLogLog algorithm, with an error rate of 0.04%

## Expression
Expression function allows for a more complex calculations like square root, logarithm, cosine, and more.

### Examples

```
$0 / $0 * 100
```

```
sqrt($8)
```

```
((2 * 4 - 6 / 3) * (3 * 5 + 8 / 4)) - (2 + 3)
```

### Supported operators

| Operator   | Description           |
|:----------:|:---------------------:|
| =          | assignment            |
| +          | addition              |
| -          | subtraction           |
| /          | division              |
| *          | multiply              |
| **         | power                 |
| %          | remainder             |
| &          | bitwise and           |
| \|         | bitwise or            |
| ^          | bitwise xor           |
| <<         | bitwise left shift    |
| >>         | bitwise right shift   |
| ~          | bitwise not           |
| ==         | equal                 |
| !=         | not equal             |
| >          | greater than          |
| >=         | greater than or equal |
| <          | less than             |
| <=         | less than or equal    |

### Functions
Invoked like `max($0, $1)`

| Function     | Arguments   | Description                                                                    |
|:------------:|:-----------:|--------------------------------------------------------------------------------|
| abs          | 1           | returns the absolute value of given number                                     |
| acos         | 1           | returns the arccosine of given number, in radians                              |
| sin          | 1           | returns the sine of given number                                               |
| cos          | 1           | returns the cosine of given number                                             |
| tan          | 1           | returns the tangent of given number                                            |
| asin         | 1           | returns the arcsine of given number                                            |
| acos         | 1           | returns the acosine of given number                                            |
| atan         | 1           | returns the arctangent of given number                                         |
| ceil         | 1           | function returns the smallest integer greater than or equal to a given number  |
| floor        | 1           | returns the largest integer less than or equal to a given number               |
| log          | 1           | returns the natural logarithm of given number                                  |
| max          | 2           | returns the larger of the two given numbers                                    |
| min          | 2           | returns the smaller of the two given numbers                                   |
| sqrt         | 1           | returns the square root of given number                                        |
| rand         | 0           | returns a random float between 0.0 and 1.0                                     |
| fact         | 1           | returns the factorial of  given number                                         |
