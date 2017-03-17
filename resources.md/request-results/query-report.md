# Query Report


Qoncrete has an API to support querying reports. The host for the API is api.qoncrete.com.

Here is an example query that includes all three possible parameters in the request `groups`, `rows`, and `columns`:

**POST /v3/report/:rid/query?token=:tokenId**

```json
{
    "groups": [],
    "rows": {"from": 0, "to": 20 },
    "columns": [
        {
            "index": -1,
            "sort": "desc",
        },
        {
            "index": 0,
            "filters": [
                {
                    "func": "gte",
                    "arg": 10
                }
            ]
        },
        {
            "index": 1,
            "hide": true
        }
    ]
}
```

**Response**

```json
{
	"rows": [
		[ ["key1"], 9,8,2,4,10],
		[ ["key2"], 19,28,32,3,80]
	],
	"hasMore": false
}
```


## Request Struct Parameters

### groups

This parameter signifies the 'group by' key values. 

The length of `groups` identifies which level you are searching for.
For example, to get the time level data, you can use json like below:

```json
{
	"groups": []
}
```



Which will return the latest N records in descendant order of time.

### rows

`rows` indicates the data range you want.
It has two attributes : 'from' and 'to'.

For example, if you want to get last 100 records, you can add a `rows` obj as follows:

```json
{
    "rows": {"from": 0, "to": 100}
}
```

### columns

`columns` allows you to customize the query results.

It has attributes: `index`, `sort`, `hide` and `filters`.

#### index

`index` represents the sequence of the field.

An `index` of -1 represents the 'id', i.e. the key of the record.

An `index` of 0 or 1 represent the two default values: Events Count ($0) and Unique Keys ($1), respectively.

An `index` larger than 1 represent for user-defined values in the report.


#### sort

`sort` defines the order in which to return the results. Valid values are 'asc' (for ascending) or 'desc' (for descending).

#### hide

`hide` indicates columns the user does not want returned.

`hide` is **false** by default.

#### filters

`filters` is used to define conditions under which to return results.  Each condition includes a `func` and `arg`.

##### func

`func` means function.

List of possible functions:
* "lt"( or "<")
* "lte"( or "<=") 
* "gt"( or ">") 
* "gte" (or ">=")
* "eq" (or "=")
* "ne" (or "!=")

##### arg

`arg` defines the value with which to compare.

If searching the time level, `arg` must be a time for a column with index equals -1.

 You can use a UTC time, formatted as **'2017-02-16T16:00:00.000Z'**, or a formula of the form **'now +/-N[mhdWMY]'**. Where 'N' stands for a Natural Number, 'm' for minute, 'h'  for hour, 'd' for day, 'W' for week, 'M' for month, and 'Y' for year.

