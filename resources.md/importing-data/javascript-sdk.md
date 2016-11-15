# Importing / Streaming Data via JavaScript SDK



```js
var qsdk= new Qoncrete({sourceID: "SOURCE_ID", apiToken: "WRITE_API_TOKEN"})
qsdk.send({"user": "name", "action": "purchase", "price": 99.99})
	.onError(function(errorCode){alert('Error, error code' + errorCode)})
	.onSuccess(function(){alert('Success')})
```

## Full documentation coming soon


## Read More
 * [Error Codes](/resources/importing-data/error-codes.md)
 * [Creating Reports from Your Data](/resources/analyzing-data/creating-reports.md)
 * [Query Reports Using API](/resources/report-querying/api.md)