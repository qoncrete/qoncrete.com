# Importing / Streaming Data via API

When sending data an [API Token](/resources/common/data-access-api-keys.md) with write permission must be provided, otherwise the write will be rejected with 402 error. Source ID and body must be valid and not empty. The POST method is usually used for a back-end application, and GET method for front-end application, but it's a personal choice. Also keep in mind that some browser limit GET requests in length, agood rule of thumb is whenever your JSON is longer than 1024 charachters, use POST.

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