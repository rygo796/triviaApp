Questions = new Meteor.Collection("questions");

QuestionsSchema = new SimpleSchema({
    question: {
	type: [String],
	label: "Question"
    },
    answer: {
	type: [String],
	label: "Answer"
    },
    score: {
	type: [Number]
    }
});


Questions.attachSchema(QuestionsSchema);
