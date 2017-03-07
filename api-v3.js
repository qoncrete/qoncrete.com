PUT // replace
PATCH // partial update
POST // create
GET // get


// Error format
{code: 3021, text: 'avg func only accepts numbers'}


// Workspace
GET api.qoncrete.com/v3/workspace/:id
DELETE  api.qoncrete.com/v3/workspace/:id
POST api.qoncrete.com/v3/workspace
PUT api.qoncrete.com/v3/workspace/:id
PATCH api.qoncrete.com/v3/workspace/:id
{
	name: '',
	access: [
		{account: 'UUID/email', access: 'view|create'}
	],

}
	> 201 created { workspace: {} } // with id
	> 4XX Error {
		error: {},
		workspace: {},// without id
	}


// Source
GET api.qoncrete.com/v3/source/:id
DELETE  api.qoncrete.com/v3/source/:id
POST api.qoncrete.com/v3/source // create
PUT api.qoncrete.com/v3/source/:id // replace/update
PATCH api.qoncrete.com/v3/source/:id // partial update
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
POST api.qoncrete.com/v3/report // create
PUT api.qoncrete.com/v3/report/:id // replace
PATCH api.qoncrete.com/v3/report/:id // partial update
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
		{func: 'ne', key: 'geo.country', type: 'string', value: 'Japan'},
	],
	groups: [
									  // time.Round("Hour * 12").Format("31/12/2017 24:59")
		{name: '12 Hours', func: 'intreval', args: ['Hour', 12]}, // // Year, Month, Day, Hour, Minute
		{name: 'Country/City', func: 'concat', args: ['geo.country', '/', 'geo.city']},
	],
	operations: [
		{name: 'Price (avg)', func: 'avg', key: 'pruce'},
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
// Token is either read token, or query token
POST api.qoncrete.com/v3/report/:id/query?token=:id
{
	rows: {from: 0, to: 20},
	sort: {column: 1, order: 'desc'},
	// groups: ['2017-02-19', 'China,Beijing', 'David'],
	columns: [1, 4, 5],
	filters: [
		{column: 0, func: 'lt', args: ['now - 1d']},
		{column: 0, func: 'gt', args: ['2017-02-18T07:12:36.085Z']},
		{column: 1, func: 'gte', args: [10]},
		{column: 4, func: 'gte', args: [10]},
		{column: 5, func: 'gte', args: [10]},
	],

	join: [
		{
			joinType: 'left', // default left
			report: 'UUID2',
			columns: [1, 2],
			filters: [
				{column: 2, func: 'gt', args: [10]},
			]
		}
	]
	, save_as_query: true
}
	> 200 OK {
		rows: {
			['2017-02-19', 11, 6, 19, 23, 565],
			['2017-02-19', 11, 6, 19, 23, 565],
			['2017-02-19', 11, 6, 19, 23, 565],
		]
	}
	> 4XX Error {
		error: {}
	}



GET api.qoncrete.com/v3/store/query/:id
DELETE api.qoncrete.com/v3/store/query/:id
POST api.qoncrete.com/v3/store/query
{
	// same as report/query
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
