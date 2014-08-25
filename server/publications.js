Meteor.publish('answers', function() {
  return Answers.find();
});

Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('controller', function() {
  return Controller.find();
});

Meteor.publish('scores',function(){
    return Scores.find();
});

Meteor.publish('manualgrades',function(){
    return ManualGrades.find();
});

Meteor.publish('userData',function(){
    if (this.userId){
	if(Meteor.users.findOne({_id:this.userId}).admin){
	    return Meteor.users.find();
	}else{
	return Meteor.users.find({_id:this.userId},{fields: {'admin':1}});
	}
    } else {
	this.ready();
    }

});
