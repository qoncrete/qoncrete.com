# Importing / Streaming Data via API

When sending data, an [API Token](/resources/common/data-access-api-keys.md) with write permission must be provided, otherwise the request will be rejected with a 402 error. Both the source ID and body must be valid and not empty. An HTTP POST method is usually used for a back-end applications, while an HTTP GET  is commmon  for front-end applications, but it's not fixed. Some browsers limit GET requests in length; a good rule of thumb is that if your JSON is longer than 1024 charachters, use POST.

## POST via cURL
```bash
$> curl -X POST -H 'Content-type: application/json' \
    -d '{"user": "name", "action": "purchase", "price": 99.99}' \
    'https://log.qoncrete.com/<SOURCE_ID>?token=<WRITE_API_TOKEN>'
```

## GET via JavaScript
Qoncrete also provides a complete [JavaScript SDK](/resources/importing-data/javascript-sdk.md) that handles errors, timeouts and more.
```js
var urlEncodedBody= encodeURIComponent('{"user": "name", "action": "purchase", "price": 99.99}')
new Image().src= "http://log.qoncrete.com/<SOURCE_ID>?token=<WRITE_API_TOKEN>&body=" + urlEncodedBody
```

## Bulk POST via cURL (one event per line)
```bash
$> curl -X POST -H 'Content-type: application/json' \
    -d @/path/to/many-events.json \
    'https://log.qoncrete.com/<SOURCE_ID>?token=<WRITE_API_TOKEN>'
```

## Read More
 * [Error Codes](/resources/importing-data/error-codes.md)
 * [Creating Reports from Your Data](/resources/analyzing-data/creating-reports.md)
 * [Query Reports Using API](/resources/report-querying/api.md)