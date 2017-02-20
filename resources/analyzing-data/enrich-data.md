# Enrich Data

## Parse User-agent
Output key will contain new sub-keys:
	* .userAgent.family
	* .userAgent.version
	* .os.family
	* .os.version
	* .device.family

## Parse URL
Output key will contain new sub-keys:
	* .url
	* .scheme
	* .opaque
	* .user
	* .host
	* .path
	* .rawPath
	* .rawQuery
	* .fragment

## Parse ISO Time
Output key will contain new sub-keys:
	* .year
	* .month
	* .day
	* .hour
	* .minute
	* .day_of_year
	* .quarter_of_year
	* .part_of_day // possible values are morning, afternoon, evening, night
	* .meridiem // possible values are ante, post

## IP to Geodata
Output key will contain new sub-keys:
	* .country
	* .region
	* .city
	* .latitude
	* .longtitude

## Key Exists
This preprocessor checks if a key exists, and the output will equal to the "negative" or "positive" string provided.

## Key Contains String
Checks if key contains a string, the output key will equal to the "negative" or "positive" string provided.

## Replace String
Output key will equal to input's key repalced string.

## More to come...