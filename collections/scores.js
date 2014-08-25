Scores = new Meteor.Collection("scores", {
    schema: {
	team: {
	    type: String,
	    label: "Team"
	},
	score: {
	    type: Number,
	    label: "Score"
	}
    }
});
