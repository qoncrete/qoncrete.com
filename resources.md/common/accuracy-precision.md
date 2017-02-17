# Accuracy and Precision

## Accuracy

Funcions like sum, average, minimum, maximum, first and last values are always correct, minus any floating point restrictions. However, __unique counts__ may have a small error (e.g. less than 0.1%). For faster, more efficiant calculations over event collections that number into the millions or billions, Qoncrete makes use of [a version of HyperLogLog](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/40671.pdf) for counting the number of unique items. If an exact number is required, the API can be used to list out all group-by keys allowing for the calculation of a precise number.

## Precision

Qoncrete uses IEEE-754 64-bit floating-point to store all the numbers (that's 2^53 or 9,007,199,254,740,992).