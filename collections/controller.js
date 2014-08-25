Controller = new Meteor.Collection('controller');

ControllerSchema = new SimpleSchema({
    questionNumber: {
	type: Number,
	label: "QuestionNumber"
    },
    controlValue:{
	type: Number
    }
});

Controller.attachSchema(ControllerSchema);
