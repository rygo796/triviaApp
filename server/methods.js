Meteor.methods({
    createAdmin: function(userID){
	if (Meteor.users.find({username:'mikestrivia'}).fetch()[0].username){
	    Meteor.users.update({username:'mikestrivia'},{$set:{admin:true}});
	} else {
	    Meteor.users.update({_id:userID},{$set:{admin:false}});
	}

    },
    checkAnswer: function(answer,teamID){
	var curQuestion = Controller.findOne().questionNumber;
	var correctAnswer = Questions.findOne().answer[curQuestion-1];
	if(answer===correctAnswer){
	    if (Scores.find({team:teamID}).fetch().length === 0){
		Scores.insert({team:teamID,score:1});
	    } else{
		Scores.update({team:teamID},{$inc: {score:1}});
	    }
	} else {
    	    if (Scores.find({team:teamID}).fetch().length === 0){
		Scores.insert({team:teamID,score:0});
	    }
	    var controlID = Controller.findOne()._id;
	    ManualGrades.insert({
		team: teamID,
		answer: answer
		});
	    return false;
	}
    },
})
