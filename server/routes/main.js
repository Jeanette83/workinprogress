const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//GET : HOME

router.get('', async (req, res) => {
    const locals = {
        title: "Jen's Bloggy-blog",
        description: "Cool things I love"
    }
    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    
    } catch(error) {
        console.log(error);
    }
   
});


//GET: Individual Post

router.get('/post/:id', async (req, res) => {
 
    try {
        let slug = req.params.id;

        const data = await Post.findById({_id: slug});

        res.render('post', {data});
        
    
    } catch(error) {
        console.log(error);
    }

    
});

/*function insertPostData () {
    Post.insertMany([
        {
            image: "https://storage.cloud.google.com/pippinsbucket/bluebutterfly.jpg",
            title: "Let's Learn About Blue Butterflies",
            description: "Make muffins. Side-eyes your other hand while being petted stare at guinea pigs catch small lizards, bring them into house, then unable to find them on carpet. Car rides are evil walk on a keyboard for decide to want nothing to do with my owner today and play time, for hate dogs or hopped up on catnip, or thug cat ."
        },
        {
            image: "https://storage.cloud.google.com/pippinsbucket/gnomehouse.jpg",
            title: "A Cute Little Gnome House",
            description: "Meow meow pee in shoe. Dont wait for the storm to pass, dance in the rain pretend not to be evil morning beauty routine of licking self meow in empty rooms, thinking longingly about tuna brine behind the couch. Run at 3am under the bed nya nya nyan i will ruin the couch with my claws or chase imaginary bugs. Furrier and even more furrier hairball lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back or check cat door for ambush 10 times before coming in and catasstrophe cough shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff and meeeeouw. Gnaw the corn cob toilet paper attack claws fluff everywhere meow miao french ciao litterbox and chase dog then run away for my slave human didn't give me any food so i pooped on the floor yet i do no work yet get food, shelter, and lots of stuff just like man who lives with us. "

        },
        {   
            image: "https://storage.cloud.google.com/pippinsbucket/hobbit.jpg",
            title: "Come to Hobbiton for Second Breakfast",
            description: "Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye pretend not to be evil sleep on dog bed, force dog to sleep on floor milk the cow thinking longingly about tuna brine have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat for i like big cats and i can not lie. Hey! you there, with the hands eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap leave buried treasure in the sandbox for the toddlers. Please stop looking at your phone and pet me fight own tail yet i shredded your linens for you i love cuddles i shall purr myself to sleep."

        },
        {
            image: "https://storage.cloud.google.com/pippinsbucket/flowerface.jpg",
            title: "She Was So Beautiful When She Was Herself",
            description: "Meoooow dismember a mouse and then regurgitate parts of it on the family room floor knock over christmas tree but hell is other people playing with balls of wool yet so you're just gonna scroll by without saying meowdy?. Fall asleep on the washing machine attack curtains i am the best, but attack the dog then pretend like nothing happened. Flee in terror at cucumber discovered on floor side-eyes your other hand while being petted intently stare at the same spot, yet skid on floor, crash into wall and climb a tree, wait for a fireman jump to fireman then scratch his face. Shred all toilet paper and spread around the house sweet beast claws in your leg. Get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over step on your keyboard while you're gaming and then turn in a circle climb a tree, wait for a fireman jump to fireman then scratch his face fish i must find my red catnip fishy fish. Trip owner up in kitchen i want food lick the other cats yet dismember a mouse and then regurgitate parts of it on the family room floor. Carrying out surveillance on the neighbour's dog hide head under blanket so no one can see, get scared by doggo also cucumerro so purrrrrr but head nudges . "

        },
        {
            image: "https://storage.cloud.google.com/pippinsbucket/fullmoon.jpg",
            title: "The Kind of Night That Makes Sense",
            description: "Sleep over your phone and make cute snoring noises. Chew the plant this is the day meow to be let in my left donut is missing, as is my right yet under the bed oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. If it fits, i sits chew the plant and have secret plans sit on human they not getting up ever. Is good you understand your place in my world eat fish on floor so jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back good morning sunshine and sleeps on my head making bread on the bathrobe sit on the laptop. Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye. Play riveting piece on synthesizer keyboard sleep all day whilst slave is at work, play all night whilst slave is sleeping hate dog. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Nap all day munch, munch, chomp, chomp chase ball of string stare out cat door then go back inside but mew mew or chirp at birds or i is playing on your console hooman."
        },
        {
            image: "https://storage.cloud.google.com/pippinsbucket/cherryblossoms.jpg",
            title: "It's A Beautiful Day in the Neighbourhood",
            description: "Weigh eight pounds but take up a full-size bed my cat stared at me he was sipping his tea, too but open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! for it's 3am, time to create some chaos and being gorgeous with belly side up and present belly, scratch hand when stroked paw at beetle and eat it before it gets away. Making bread on the bathrobe play with twist ties i see a bird i stare at it i meow at it i do a wiggle come here birdy shake treat bag find a way to fit in tiny box let me in let me out let me in let me out let me in let me out who broke this door anyway but put toy mouse in food bowl run out of litter box at full speed . Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard all of a sudden cat goes crazy, so making sure that fluff gets into the owner's eyes or don't nosh on the birds. I dreamt about fish yum! scream for no reason at 4 am for taco cat backwards spells taco cat i just saw other cats inside the house and nobody ask me before using my litter box yet i like big cats and i can not lie. Chase laser so you're just gonna scroll by without saying meowdy?"
        }
    ])
}


insertPostData();*/
module.exports = router;
