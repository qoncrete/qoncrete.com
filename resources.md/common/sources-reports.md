# Sources and Reports

## Data Sources

A game is a good example to explain the concept of a data source. Let's say, for simplicity's sake, that our mobile game produces 3 kinds of events: user's action, errors and payment transactions. User actions can contain events such as: registration, game start, click/touch locations, etc. Errors are events that happen when something goes wrong: a crash, lost connection to server, invalid input and more. Payment transactions could be confirmation or failure of a payment. Three different types of events, each one is a unique data source.

It is of course also possible to place all three in a single collection, but it would make report creation for you and your non-technical people harder. Basically data source is a way to organize different data streams into a single collection that allows easy report creation.

## Reports

A report is a collection of data points, one or a billion, that allows to understand the bigger picture in a nice graph or a table. A simplest kind of report could be a counter of hourly or daily number of events inside a data source. Reports have a 3 key options:

 * __Time period__ - group data in a single time frame together, for example your report could show daily purchases, that's a period of one day. Qoncrete supports common periods starting from 10 minutes, hour, day, month and more. There's an additional option called "timeless" - it allows you to summarize all of your data in a single report, works similar to a common database like MySQL or Mongodb. 
 * __Dimension (group-by) fields__ - break down reports by creating groups within reports, for example you could group data by country, city, user name, etc. Qoncrete supports multi-level grouping, so you could group-by using all three (country, city, user name) and then easily view data on each level instantly.
 * __Metric (value) fields__ - fields containing the actual data for the calculations, for example a field called "price" could be summarized into a single daily value per country, city and user. Qoncrete support common functionalities like summary, average, unique count, minimum and maximum, first and last value, median and more. [Make sure to read about numbers accuracy and precision](accuracy-precision.md).


Reports are always real time, with sometimes a tiny delay of a second or two for indexing. Qoncrete indexes all the fields in your report automatically, this allows for real time bi-directional sorting on any field as well extremely fast API access to your data, allowing you to create programatic products with data-driven decision making processes.


Qoncrete also allows to combine multiple reports into a single table or a graph, [read more about panels here](panels-dashboards.md).
