# Qoncrete.com

## Install

```
$ npm run install
```

## Test
```
$ npm install -g http-server
$ http-server -p 8000
```

## Build

```
$ npm run build
```

## New Language

Whenever a new language is added to the site, please modify /.packacge.json
```json
"scripts": {
	"install": "gitbook install resources.md/",
	"build": "gitbook build resources.md/ resources/"
}
```
into
```json
"scripts": {
	"install": "gitbook install resources.md/; gitbook install zh-CN/resources.md/;",
	"build": "gitbook build resources.md/ resources/; gitbook build zh-CN/resources.md/ zh-CN/resources/;"
}
```