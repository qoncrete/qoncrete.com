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
`groups` is **[]** by default.

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
`rows` is **{"from": 0, "to": 20}** by default.

For example, if you want to get latest 100 records, you can add a `rows` obj as follows:

```json
{
    "rows": {"from": 0, "to": 100}
}
```

### columns

`columns` allows you to customize the query results.  
`columns` is **[]** by default.

It has attributes: `index`, `sort`, `hide` and `filters`.

#### index

`index` represents the sequence of the field. 
`index` is **0** by default. For it is very very important, please keep in mind to **set the index correctly**.

An `index` of -1 represents the 'id', i.e. the key of the record. 

An `index` of 0 represents the Events Count ($0) 

And `index` of 1 represents the Unique Keys ($1).

An `index` larger than 1 represents the value user defined in the report.


#### sort

`sort` defines the order in which to return the results. Valid values are 'asc' (for ascending) or 'desc' (for descending).

`sort` is **"desc"** by default.

#### hide

`hide` indicates columns the user does not want returned.

`hide` is **false** by default.

#### filters

`filters` is used to define conditions under which to return results.  Each condition includes a `func` and `arg`. 

`filters` is **[]** by default.

##### func

`func` means function.
`func` is **"="** by default.

List of possible functions:
* "lt"( or "<")
* "lte"( or "<=") 
* "gt"( or ">") 
* "gte" (or ">=")
* "eq" (or "=")
* "ne" (or "!=")

##### arg

`arg` defines the value with which to compare.
`arg` has no default value, must be filled in by user.

If you want to set a time for 'arg', you can use a UTC time, formatted as **'2017-02-16T16:00:00.000Z'**, or a formula of the form **'now +/-N[mhdWMY]'**. Where 'N' stands for a Natural Number, 'm' for minute, 'h'  for hour, 'd' for day, 'W' for week, 'M' for month, and 'Y' for year.



## id column

Column with index equals to -1 is the 'id' column. 

**It has the group-by value for each level**. So when you are searching on the time level (level 0, groups is []), you could set 'arg' to a time in filters.  If on other levels (groups not empty), you should change the 'arg' accordingly. 

