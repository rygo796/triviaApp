Answers = new Meteor.Collection("answers");

AnswerSchema = new SimpleSchema({
    answer: {
	type: [String],
	label: "Answer"
    },
    team: {
	type: String,
	label: "Team"
    }
});

Answers.attachSchema(AnswerSchema);
