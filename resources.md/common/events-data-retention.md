# Events and Data Retention

## Events

From a high level perspective, an event is a record of something that happened.  Events can take many forms: a score in a game, a temperature reading, a ticket purchase, a user view, or the current price of a stock, for example.

In Qoncrete, an event is an object: a collection of key-value entries, represented in the JSON format.  Because an object can have many keys, an event can have many properties.  For example, a point of sale device could generate a `purchase` event that includes the name of the buyer, the items being purchased, which coupons were used, who is the service rep for the sale, etc.

Example `purchase` event:
```json
{
    "_qtime":"2016-04-09T00:00:00.000Z",
    "buyer":"Bill Brigsby",
    "items":[
        {"amount":12, "item": roses, "price": 14.99}, 
        {"amount": 1, "item": "20 pc chocolate", "price": 9.99}, 
        {"amount": 99, "item": "problems", "price": 0.99}
    ],
    "coupons":[],
    "service_rep":"Mary Davis",
    "store_add":"1234 Real St."
    "store_city":"New York"
}
```

Tracking buyer behavior in this way could allow a store owner to ask and answer many useful questions. Is this buyer coming to the store for the first time, or are they a frequent customer? Which sales rep pulls in the most sales? Has increased spending on advertising coupons had a measurable effect? 

Events are defined by the user, whatever properties are important can be included and logged to Qoncrete.

After obtaining a collection of events, Qoncrete allows you to organize, analyze, and visualize those collections.  A collection of `purchase` events could produce a pie graph of the distribution of goods sold; a heat map of store locations around the country with the largest growth; or a line graph of the number of items bought throughout the day, or week, or year.

## Data Retention

Some data is better to have over long periods of time, and other data can be disregarded after a few weeks or months.  The length of time to hold on to the data is the data retention period.

Each data source (collection of events) can be configured with its own period of data retention.

No matter if the application is spotting trends over the years of meteorological activity, or just recording/quickly analyzing error logs that can be disregarded immediately, Qoncrete allows you to flexibly and reliably retain your data.

[Read about data sources and reports here](sources-reports.md)
