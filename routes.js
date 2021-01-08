
// Load the MySQL dbConPool connection
const dbConPool = require("./DAL/dbConfig");
const sqlQueries = require("./DAL/queries");
const secret = require("./secret");
const httpRequest = require("request");

const router = app => {
	
	// Root Route, Invoke the List Meetings Zoom API
	// curl --request GET \
	// --url 'https://api.zoom.us/v2/metrics/meetings?page_size=30&from=2020-01-01&type=live' \
	// --header 'authorization: Bearer <oauth_access_token>'
	// http://localhost:9999/
	app.get('/', (_request, response) => {
		
		var options = {
			method: 'GET',
			url: 'https://api.zoom.us/v2/metrics/meetings',
			qs: {page_size: '30', from: '2020-01-01', type: 'live'},
			headers: {
				authorization: 'Bearer ' + `${process.env.ELEOS_AUTH_KEY}`
			}
		};

		httpRequest(options, function (err, res, data) {
			if (err) throw new Error(err);
			
			console.log("statusCode: " + res.statusCode + "\r\n");
			
			// A common use of JSON is to exchange data to/from a web server.
			// When receiving data from a web server, the data is always a string.
			// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
			var jsonObj = JSON.parse(data);

			console.log("data: " + data + "\r\n");

			// Insert the meeting records into the DB
			const meetings = jsonObj.meetings;
			for (i in meetings) {
				sqlQueries.saveMeetings(meetings[i], function(error, status) {
					if (error) {
						console.log("Failed to update DB");
						// at this point below response.send has been executed, due to the asynchronious behaviour of node.
						// hence can't use the following syntax:
						//return response.send("Failed to update DB: " + error.message);
					}
					else {
						console.log("Data Inserted successfully to Table");
					}
				});
			}

			response.send(data);
		});
	});
	
	// http://localhost:9999/deleteMeeting/<Meeting ID>
	// 	curl --request PUT \
	//   --url https://api.zoom.us/v2/meetings/99744704556/status \
	//   --header 'authorization: Bearer <oauth_access_token>' \
	//   --header 'content-type: application/json' \
	//   --data '{"action":"end"}'
	app.get('/deleteMeeting/:id', (request, response) => {
		
		const id = request.params.id;

		var options = {
			method: 'PUT',
			url: 'https://api.zoom.us/v2/meetings/' + id + '/status',
			headers: {
				'content-type': 'application/json',
				authorization: 'Bearer ' + `${process.env.ELEOS_AUTH_KEY}`
			},
			body: {action: 'end'},
			json: true
		};

		httpRequest(options, function (err, res) {
			if (err) throw new Error(err);
			
			console.log("statusCode: " + res.statusCode + "\r\n");

			response.send(res);
		});
	});
}

// Export the router
module.exports = router;