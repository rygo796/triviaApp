if (Questions.find().count() === 0) {
    Questions.insert({
	question: ['The answer is alpha',
		   'What bee prominently features a pledge of quality followed by the number 33 on every bottle?',
		   'What revolutionary war general came up with the phrase “Live Free or Die”, which became the motto for the state of New Hampshire?',
		   'What food is traditionally made from cooked, mashed chickpeas, blended with tahini, oil, lemon and garlic?',
		  'What martial art gets its name from the Japanese for “Gentle Way” or “Way of Softness”?',
		  'The act of “somnambulism” is better known by what name? ',
		   'What comic-strip character had a cast of villains that included such colorful characters as Prune-Face, Flattop, Big-Boy Caprice and The Mole?',
		  'What car company was surprised when 44,000 of its customers showed up to a “Homecoming” event held at their Spring Hill, Tennessee plant in 1994?',
		  'In June of 1942, the US Navy won a major victory over Japanese fleet in what battle, which is often referred to as “the turning point of the Pacific”?'],
	answer: ['alpha',
		 'rolling rock',
		 'john stark',
		 'hummus',
		 'judo',
		 'sleepwalking',
		 'dick tracy',
		 'saturn',
		 'battle of midway'],
	score: [1,2,3,4,1,2,3,4,1]
    });

}

if (Answers.find().count() === 0) {
    Answers.insert({
	answer: ['Default Answer'],
	team: 'Team 1'
    });    
}

if (Controller.find().count() === 0) {
    Controller.insert({
	questionNumber: 1,
	controlValue: 1
    });    
}
