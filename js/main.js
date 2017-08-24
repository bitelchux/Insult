// word lists from: Jerry Maguire at Center Grove High School in Greenwood Indiana 
// http://www.pangloss.com/seidel/shake_rule.html

window.onload = function () {
    // TODO:: Do your initialization job
	var words = [
	             ["artless","bawdy","beslubbering","bootless","churlish","cockered","clouted","craven","currish","dankish","dissembling","droning","errant","fawning","fobbing","froward","frothy","gleeking","goatish","gorbellied","impertinent","infectious","jarring","loggerheaded","lumpish","mammering","mangled","mewling","paunchy","pribbling","puking","puny","qualling","rank","reeky","roguish","ruttish","saucy","spleeny","spongy","surly","tottering","unmuzzled","vain","venomed","villainous","warped","wayward","weedy","yeasty"],
	             ["base-court","bat-fowling","beef-witted","beetle-headed","boil-brained","clapper-clawed","clay-brained","common-kissing","crook-pated","dismal-dreaming","dizzy-eyed","doghearted","dread-bolted","earth-vexing","elf-skinned","fat-kidneyed","fen-sucked","flap-mouthed","fly-bitten","folly-fallen","fool-born","full-gorged","guts-griping","half-faced","hasty-witted","hedge-born","hell-hated","idle-headed","ill-breeding","ill-nurtured","knotty-pated","milk-livered","motley-minded","onion-eyed","plume-plucked","pottle-deep","pox-marked","reeling-ripe","rough-hewn","rude-growing","rump-fed","shard-borne","sheep-biting","spur-galled","swag-bellied","tardy-gaited","tickle-brained","toad-spotted","unchin-snouted","weather-bitten"],
	             ["apple-john","baggage","barnacle","bladder","boar-pig","bugbear","bum-bailey","canker-blossom","clack-dish","clotpole","coxcomb","codpiece","death-token","dewberry","flap-dragon","flax-wench","flirt-gill","foot-licker","fustilarian","giglet","gudgeon","haggard","harpy","hedge-pig","horn-beast","hugger-mugger","joithead","lewdster","lout","maggot-pie","malt-worm","mammet","measle","minnow","miscreant","moldwarp","mumble-news","nut-hook","pigeon-egg","pignut","puttock","pumpion","ratsbane","scut","skainsmate","strumpet","varlot","vassal","whey-face","wagtail"]
	];
	
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
    	document.querySelector("#textbox").innerText = e.keyName;
        if(e.keyName === "back") {
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});

    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	var box = document.querySelector('#textbox');
    	box.innerText = "Thou " + words[0][parseInt(Math.random()*50,10)] + " " + words[1][parseInt(Math.random()*50,10)] + " " + words[2][parseInt(Math.random()*50,10)];
    	box.style.color = "#00FF00";
    });
    
    document.addEventListener("rotarydetent", function(event){
    	var box = document.querySelector('#textbox');
    	box.innerText = "Thou " + words[0][parseInt(Math.random()*50,10)] + " " + words[1][parseInt(Math.random()*50,10)] + " " + words[2][parseInt(Math.random()*50,10)];
    	box.style.color = "#00FF00";
    });
    
};
