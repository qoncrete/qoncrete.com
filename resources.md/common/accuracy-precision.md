# Accuracy and Precision

## Accuracy

Funcions like summary, average, minimum, maximum, first and last values are always correct. The only one with a slight error rate is unique count. Because unique counts can easily go into the millions and billions we are using an algorithm called HyperLogLog which allows for faster, more efficient calculations of unique items. Said that, you could always use the API to list out all group-by keys and create precise number.

## Precision

Qoncrete uses IEEE-754 64-bit floating-point to store all the numbers (that's 2^53 or 9,007,199,254,740,992).