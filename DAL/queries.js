const dbConPool = require('./dbConfig');

class DALQueries {

    saveMeetings(meeting, cb) {
        var meetingId = meeting.id;
        var meetingParticipants = meeting.participants;
        
        var sql = "INSERT INTO eleos_hw (meeting_id, participants) VALUES ('" + meetingId + "', '" + meetingParticipants + "')";

        dbConPool.query(sql, (error, result) => {
            if (error) {
                console.log("Database Error: " + error.message);
                cb(new Error(error));
            }
            else
            {
                console.log("Meeting Added: " + meeting.id);
                cb(null, "Insert Success");
            }
        });
    }
};

// Export the Queries Module
module.exports = new DALQueries();