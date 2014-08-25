Meteor.subscribe('answers');
Meteor.subscribe('questions');
Meteor.subscribe('controller');
Meteor.subscribe('userData');
Meteor.subscribe('scores');
Meteor.subscribe('manualgrades');

Session.setDefault('currentTeam','Team 1');
Session.setDefault('activeRound',false)

Deps.autorun(function(){
    Meteor.call('createAdmin',Meteor.userId());
});


Template.submitAnswer.helpers({
    question: function(){
	return Questions.findOne().question[Controller.findOne().questionNumber-1]
    }
});

Template.submitAnswer.events({
    'click #submitAnswer': function(){
	var answerVal = document.getElementById('answerBox').value;
	var teamID = Answers.find({team:Session.get('currentTeam')}).fetch()[0]._id
	Answers.update({_id:teamID},{$push: {answer: answerVal}});
	Meteor.call('checkAnswer',answerVal,Session.get('currentTeam'));
	Session.set('waiting',true);
	return null;
    }
});

Template.contents.helpers({
    waiting: function(){
	return Session.get('waiting');
    },
    questionNumber: function(){	
	Session.set('curQuestion',Controller.findOne().questionNumber);
	return 	Controller.findOne().questionNumber;
    },
    questionController: function(){
	var controlNum = Controller.findOne().controlValue;
	if (controlNum === 1 && Session.equals('activeRound',false)){
	    Session.set('waiting',false);
	    Session.set('activeRound',true);
	} else if (controlNum === 2) {
	    Session.set('waiting',true);
	    Session.set('activeRound',false)
	}
	return Session.get('waiting')
    }

});

Template.triviaMaster.events({ 
    'click #nextQuestion': function(){
	var controlID = Controller.findOne()._id;
	if (Controller.findOne().controlValue === 2){
	    Controller.update({_id: controlID},{$set: {controlValue: 1}});
	    Controller.update({_id: controlID},{$inc: {questionNumber: 1}});		
	}
    },
    'click #finishRound': function(){
	var controlID = Controller.findOne()._id;
	Controller.update({_id: controlID},{$set: {controlValue: 2}});
    },
    'click #acceptAnswer': function(){
	var teamID = ManualGrades.findOne({_id:this._id}).team;	
	if (Scores.find({team:teamID}).fetch().length === 0){
	    Scores.insert({team:teamID,score:1});
	} else{
	    var teamIDID = Scores.findOne({team:teamID})._id;
	    Scores.update({_id:teamIDID},{$inc: {score:1}});
	}
	ManualGrades.remove({_id:this._id});
    },
    'click #denyAnswer': function(){
	var teamID = ManualGrades.findOne({_id:this._id}).team;	
	if (Scores.find({team:teamID}).fetch().length === 0){
	    Scores.insert({team:teamID,score:0});
	}
	ManualGrades.remove({_id:this._id});
    }
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});


Template.bodyTemplate.helpers({
    loggedIn: function(){
	return Meteor.userId();
    },
    triviaAdmin: function(){
	return Meteor.user().admin;
    }
})

Template.triviaMaster.helpers({
    teams: function(){
	return Meteor.users.find();
    },
    scores: function(){
	return Scores.find();
    },
    manualGraded: function(){
	return ManualGrades.find();
    }
})
