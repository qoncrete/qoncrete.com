## Example Queries


### Get the first 20 entries of data for specific day

```json
{
    "rows": {"from": 0, "to": 20 },
    "groups": [["2017-02-16T16:00:00.000Z"]]
}
```

### Get the first 100 entries on or after 4PM on Feb. 16, 2017 and yesterday

```json
{
    "rows": {"from": 0, "to": 100 },
    "columns": [
        {
            "index": -1,
            "filters": [
                {
                    "func": "gte",
                    "arg": "2017-02-16T16:00:00.000Z"
                },
                {
                    "func": "lt",
                    "arg": "now - 1d"
                }
            ]
        }
    ]
}
```

### Get all (report third level) entries from 1) 4pm on Feb 2, 2017 where 2) the country is "US" and 3) the city is "Chicago".

```json
{
    "groups": [["2017-02-16T16:00:00.000Z"], ["US"],["Chicago"]],
    "columns": [
        {
            "index": -1
        }
    ]
}
```

Response

```json
{
  "rows": [
    [
      [
        "Adults"
      ],
      50,
      48,
      9000
    ],
    [
      [
        "Children"
      ],
      50,
      2,
      1000
    ]
  ],
  "hasMore": false
}
```

### Get all (report second level) entries from 1) 4pm on Feb 2, 2017 where 2) the country is "US", and return only those entries where the city is "Chicago".

```json
{
    "groups": [["2017-02-16T16:00:00.000Z"], ["US"]],
    "columns": [
        {
            "index": -1,
            "filters": [
                { 
                  "func": "eq",
                  "arg": ["Chicago"]
                }
            ]
        }
    ]
}
```

Response

```json
{
  "rows": [
    [
      [
        "Chicago"
      ],
      100,
      50,
      10000
    ]
  ],
  "hasMore": false
}
```

### Return first 20 entries minus column corresponding to "Unique Keys"

```json
{
    "rows": {"from": 0, "to": 20 },
    "columns": [
        {
            "index": 1,
            "hide": true
        }
    ]
}
```

