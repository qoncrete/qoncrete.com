PUT // replace
PATCH // partial update
POST // create
GET // get


// Error format
{code: 3021, text: 'avg func only accepts numbers'}


// Workspace
GET api.qoncrete.com/v3/workspace/:id
DELETE  api.qoncrete.com/v3/workspace/:id
PUT api.qoncrete.com/v3/workspace/:id
PATCH api.qoncrete.com/v3/workspace/:id

POST api.qoncrete.com/v3/workspace
{
	name: '',
	// ???
}
	> 201 created { workspace: {} } // with id
	> 4XX Error {
		error: {},
		workspace: {},// without id
	}


// Workspace access
GET api.qoncrete.com/v3/workspace/:id
DELETE  api.qoncrete.com/v3/workspace/:id
POST api.qoncrete.com/v3/workspace
{
	grant_access_to: 'user@host.com',
	access_type: 'read-only' // read-only | unlimited 
}

// Source
GET api.qoncrete.com/v3/source/:id
DELETE  api.qoncrete.com/v3/source/:id
PUT api.qoncrete.com/v3/source/:id
PATCH api.qoncrete.com/v3/source/:id

POST api.qoncrete.com/v3/source // create
{
	workspace: 'UUID',
	name: '',
	retention: '',
	// ... ?
	forward: 'http://example.com/?secondary-backend',
	pool: {
		address: '',
		credentials: '',
	},
}
	> 201 Created { source: {} } // with id
	> 4XX Error {
		error: {},
		source: {}, // withoud id
	}


// Report
GET api.qoncrete.com/v3/report/:id
DELETE  api.qoncrete.com/v3/report/:id
PUT api.qoncrete.com/v3/report/:id
PATCH api.qoncrete.com/v3/report/:id
POST api.qoncrete.com/v3/report
{
	source: 'UUID',
	name: 'test', // updating name only, doesn't require rebuild
	retention: [
		{func: 'lt', type: 'time', args: ['_qtime', '2017-02-18T07:12:36.085Z']},
		{func: 'gte', type: 'time', args: ['_qtime', '2017-02-18T07:12:36.085Z']},
	],
	preprocesses: [
		{func: 'ip2geo', args: ['ip', 'geo']},
	],
	filters: [
		{func: 'gt', type: 'time', args: ['_qtime', '2017-02-18T07:12:36.085Z']},
		{func: 'gt', type: 'time', args: ['_qtime', 'now - 10d']},
		{func: 'ne', type: 'string', agrs: ['geo.country', 'Japan']},
	],
	groups: [
									  // time.Round("Hour * 12").Format("31/12/2017 24:59")
		{name: '12 Hours', func: 'intreval', args: ['Hour', 12]}, // Year, Month, Day, Hour, Minute
		{name: 'Country/City', func: 'concat', args: ['/', 'geo.country', 'geo.city']},
		{name: 'Country/City', func: 'string', args: ['geo.country']},
	],
	operations: [
		// default, event count
		// default, unique sub-group count
		{name: 'Price (avg)', func: 'avg', args: ['price']},
	],
	predictions: [
		{model: 'simple_linear_regression', args: []},
	],
}

	> 201 Created { report: {} } // with id
	> 4XX Error {
		error: {},
		report: {}, // without id
	}





// Query
// Token is either master_read token, or query token
POST api.qoncrete.com/v3/report/:id/query?token=:id
{
	rows: {from: 0, to: 20},
	//groups: ['31/12/2017 24:00', ['China,Beijing'], ['David']],
	columns: [
		{
			index: -1,
			sort: 'desc',
			filters: [
				{func: 'lte', arg: 'now'},
				{func: 'gte', arg: 'now - 1d'}
			]
		},
		{
			index: 0,
			filters: [
				{func: 'gt', arg: 0},
				{func: 'lt', arg: 100}
			]
		},
		{
			index: 1,
			hide: true
		}
	],


	// join: [
	// 	{
	// 		joinType: 'left', // default left
	// 		report: 'UUID2',

	// 	}
	// ]
}
	> 200 OK {
		rows: [
			[['2017-02-19'], 11, 6, 19, 23, 565],
			[['2017-02-20'], 101, 61, 109, 123, 5.65],
			[['2017-02-21'], 110, 16, 190, 213, 56.5],
		],
		hasMore: false
	}
	> 4XX Error {
		error: {
		
		}
	}



GET api.qoncrete.com/v3/store/query/:id
DELETE api.qoncrete.com/v3/store/query/:id
POST api.qoncrete.com/v3/store/query
{
	name: 'query token name'
	// query config, same as api/report/:id/query
}


POST api.qoncrete.com/v3/token?token=:token
{
	grant_access_to: 'UUID/email',
	access_type: 'read', // read, write, any

	workspace: 'UUID',
	source: 'UUID', // optional


}
	> {
		error: null,
		token: {}
	}
