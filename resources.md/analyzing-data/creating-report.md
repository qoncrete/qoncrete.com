# Creating Report

Steps to create a report:

1. [Preprocessing Data (optional)](#preprocessing-data)
2. [Filters (optional)](#filters)
3. [Group-by (optional)](#group-by)
4. [Operations (required)](#operations)

---

## Preprocessing Data

There are a number of functions you can apply to your data after collection and before analysis.  Preprocessing gives access to a larger set of functions to apply to your data during analysis.

Currently, the supported preprocessing functions include:
* Parse User-Agent
* Parse URL
* Parse ISO Time
* IP to Geodata
* Key Exists
* Value Contains String
* Replace String

The preprocessing function will be applied to the value of each event that contains the (user specified) key.

Each preprocessing function gives the user a unique set of extended subkeys to work on in the data analysis stage.  Below are lists of which keys are added for which function. 

#### Parse User-agent
| Added Keys 
| :--- 
| .userAgent.family 
| .userAgent.version 
| .os.family 
| .os.version 
| .device.family 

#### Parse URL
| Added Keys 
| :--- 
| .url
| .scheme
| .opaque
| .user
| .host
| .path
| .rawPath
| .rawQuery
| .fragment

#### Parse ISO Time
| Added Keys 
| :--- 
| .year
| .month
| .day
| .hour
| .minute
| .day_of_year
| .quarter_of_year
| .part_of_day  // possible values are morning, afternoon, evening, night
| .meridiem     // possible values are ante, post

#### IP to Geodata
| Added Keys 
| :--- 
| .country
| .region
| .city
| .latitude
| .longtitude

#### Key Exists
This function checks if a key exists, and outputs the user specified string for either the positive or negative case.

#### Key Contains String
This function checks if the key contains a particular string, and outputs the user specified string for either the positive or negative case.

#### Replace String
This function outputs a key that is equal input key, but with the specified string replaced.

---

## Filters

After the preprocessing stage, filters can be applied to narrow down the number of events considered for analysis, or to remove unwanted data from the report, without modifying the actual data.

---

## Group-by

Group your event collecitons by different keys.  For example, one group-by can be country, followed by state, then city.  This allows you to "drill down" data to see increasingly specific data sets.

---

#### Operations

All calues are calculated soratable in real time.


##### Average

##### Diff

##### Last

##### First

##### Max

##### Min

##### Sum


##### Count Unique
Counts all unique strings using HyperLogLog algorithm, with an error rate of 0.04%

##### Expression
Allows for a more complex calculations like square root, logarithm, cosine, etc.

###### Examples

```
$0 / $0 * 100
```

```
sqrt($8)
```

```
((2 * 4 - 6 / 3) * (3 * 5 + 8 / 4)) - (2 + 3)
```

##### Supported operators

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

##### Functions
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

