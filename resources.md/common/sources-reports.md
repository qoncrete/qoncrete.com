# Sources and Reports

## Data Sources

A data source is something that receives a series of [events](events-data-retention.md) to be collected.  Once a data source is populated with events, then any number of reports can be produced from that collection.

As an example, lets discuss the data sources that a mobile game might produce.  A game can produce many different kinds of [events](events-data-retention.md). We can focus on a small subset of possible events for simplicity: user actions, errors, and payment transactions.

A `user_action` event could contain an entry (i.e. key-value pair) for the type of action: registration, game start, button clicks, finger touches/strokes, etc.

An `error` event could include an entry for the general type of error (crash, lost connection, invalid input), and perhaps other entries that give more information about the particulars of the specific error.

A `payment_transaction` event could simply include a success or failure.

A mobile game can produce lots of different kinds of data, so it can be helpful to seperate the data into different "bins", or data sources. This can maintain that the analysis of one data collection not be disturbed by irrellevant or contradictory information.

Organizing different data streams into different their own respective collections allows for easier report creation.

## Reports

A report is the result of applying different functions to a collection of data points and optionally dispalying the result in a graphical way.  A very simple report could just display a single number: a counter of hourly or daily events, for example.  More complicated reports can be generated such as line graphs, pie charts, etc.  Reports can also be combined and compared with each other.

The creation of a report involves setting three options:

 * __Time period__ - the length of time to bundle event data to act as a single data point.  If events are received every minute, they could be bundled together by the hour, or day, giving one the ability to make queries about larger spans of time.  Hourly temperature readings could be averaged over the day so as to make a line graph to spot larger temperature trends over weeks, for example. An additional option called "timeless" allows you to summarize all of your data in a single report, similar to common databases like MySQL or Mongodb. 
 * __Dimension (group-by) fields__ - which keys of the data source's [event](events-data-retention.md) to bundle collections by to act as a single data point.  A `puchase` event, for example, could be grouped by the "store_city" key to generate reports comparing revenue performance based on the store location throughout the country. Qoncrete also supports mulit-level grouping, so an event could be grouped using multiple keys (e.g. country, city, buyer) to easily "drill down" into the data for more fine tuned analysis.  For time is always the first group by, if you define 2 group-bys, you will get 3 group-bys in fact. Traditionally, we also use level to represent the group-by we are focusing on, and level 0 means time group-by.
 * __Metric (value) fields__ - which keys of the data source's [event](events-data-retention.md) to perform the actual calculations on, along with the associated function. For example, a key called "price" could use the sum function to calculate the total revenue per country, city, and user. Qoncrete supports common functions like sum, average, median, unique count, minimum and maximum, first and last value, etc. [Make sure to read about numbers accuracy and precision](accuracy-precision.md).


Reports are always real time, excluding perhaps a very small delay for indexing. Qoncrete indexes all the fields in your report automatically. This allows for real time bi-directional sorting on any field and robust API access to your data. 
