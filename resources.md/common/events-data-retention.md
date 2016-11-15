# Events and Data Retention

## Events

Just like in real life an event is a record of something that happened: final score of a football game, a goal, a kick, ticket purchase, morning alarm, sunrise. All of those events can be described, stored, analyzed and eventually visualized on a graph. Trillions of trillions of tiny events happening everyday, for example an average person makes 5,000 steps per day, with 7.5 Billion people in the world, the total numbers of those daily "step" events is just under 40 trillion.

Of course seeing a single graph with number of steps isn't really interesting, that's why companies are deciding to track more and more properties of those events. A property could be something like the physical length of each step, the speed at which each leg is raised, the times when direction is changed, standing still times, GPS location and more... trillions of trillions of events, containing countless data points.

Because there's so many events happening all the time, we need systems that allow for efficient way to collect, store, organize, analyze, predict and visualize those data points. A trillion of events could easily use a terabyte of storage space, but then there's backup, retention, analytic capabilities, maintainers, servers, data centers, and more to consider. Qoncrete solves all of those problems.

## Data Retention

Whenever you store an event, you could decide to store it forever, for example collecting daily data center (or per server) temperature for many years, would eventually allow you to predict when to power off or slow down your cooling systems, and as a result reduce costs. Of course you also could decide that the event is useless and there's no need to store it long term. This is data retention. Qoncrete allows to configure data retention per data source. You could store some data forever, while discarding other data immediately.

[Read about data sources and reports here](sources-reports.md)
