ManualGrades = new Meteor.Collection('manualgrades');

ManualGradesSchema = new SimpleSchema({
    team: {
	type: String,
    },
    answer:{
	type: String
    }
});

ManualGrades.attachSchema(ManualGradesSchema);
