var sprouts = {
	
	pid: 2,
	shareType: 0,
	shareTypes: ['driving force','community roots','cross the divide','bold thinking','pay it forward'],
	
	names: [null,'Marie Curie','Jane Smith','Michelle Obama','Beyonce Knowles','Aun San Suu Kyi'],
	titles: [null,'Chemist','Citizen','First Lady','Singer','Politician'],
	places: [null,'Paris, France','San Francisco, CA','Washington, DC','Los Angeles, CA','Naypyidaw, Myanmar'],
	
	init: function(){
		
		$('#sproutLaunch').click(sprouts.myProfile);
		
		$('#search1').click(function(){sprouts.openProfile(1,false,0)});
		$('#search2').click(function(){sprouts.openProfile(2,false,0)});
		$('#search3').click(function(){sprouts.openProfile(3,false,0)});
		$('#search4').click(function(){sprouts.openProfile(4,false,0)});
		$('#search5').click(function(){sprouts.openProfile(5,false,0)});
	
	},
	
	hideAll: function(){
		
		$('#sproutLaunch').addClass('hidden');
		$('#sproutProfile').addClass('hidden');
		$('#sproutFeed').addClass('hidden');
		$('#sproutShare').addClass('hidden');
		$('#sproutPost').addClass('hidden');
		$('#sproutSearch').addClass('hidden');
		
	},
	
	openPage: function(pg){
		
		$(pg).removeClass('hidden');
		
	},
	
	buildTopBar: function(p){

		$('.topbar').remove();
		
		var bar=document.createElement('div');
		$(bar).addClass('topbar');
		
		var myfeed = document.createElement('div');
		$(myfeed).html("HOME");
		
		var myprofile = document.createElement('div');
		$(myprofile).html("ME");
		
		var search = document.createElement('div');
		$(search).html("SEARCH");
		
		$(bar).append(myfeed);
		$(bar).append(myprofile);
		$(bar).append(search);
		
		$(myfeed).click(sprouts.myFeed);
		$(myprofile).click(sprouts.myProfile);
		$(search).click(sprouts.mySearch);
		
		p.prepend(bar);
		
	},
	
	mySearch: function(){
		
		sprouts.hideAll();
		sprouts.openPage('#sproutSearch');
		
		sprouts.buildTopBar($('#sproutSearch'));
		
		
	},
	
	clearProfile: function(){
		
		
		$('#profileContainer .profileImg').removeClass('profile'+1);
		$('#profileContainer .profileImg').removeClass('profile'+2);
		$('#profileContainer .profileImg').removeClass('profile'+3);
		$('#profileContainer .profileImg').removeClass('profile'+4);
		$('#profileContainer .profileImg').removeClass('profile'+5);
		
		
	},
	
	myProfile: function(){
		
		sprouts.openProfile(sprouts.pid,false,0);
	},
	
	openProfile: function(pid,impact,gid){
		
		sprouts.hideAll();
		sprouts.openPage('#sproutProfile');
		sprouts.buildTopBar($('#profileContainer'));
		
		sprouts.clearProfile();
		
		$('#profileContainer .profileImg').addClass('profile'+pid);
		$('#profileName').html(sprouts.names[pid]);
		$('#profileDesc').html(sprouts.titles[pid]);
		$('#profileCity').html(sprouts.places[pid]);
		
		if(pid == sprouts.pid){
			$('#shareStoryAction').html('share my story');
			$('#postStoryAction').html('share my story');
		}else{
			$('#shareStoryAction').html('share her story');
			$('#postStoryAction').html('share her story');
		}
	
		$('#garden0').click(function(){sprouts.openGarden(0,pid);});
		$('#garden1').click(function(){sprouts.openGarden(1,pid);});
		$('#garden2').click(function(){sprouts.openGarden(2,pid);});
		$('#garden3').click(function(){sprouts.openGarden(3,pid);});
		$('#garden4').click(function(){sprouts.openGarden(4,pid);});
		
		
		$('#shareStoryAction').click(function(){sprouts.shareAction(pid);});
		
		switch(pid){
		case 1:
			sprouts.populateLeaves(0,[3,2,2,3,3]);
			sprouts.populateLeaves(1,[2,1]);
			sprouts.populateLeaves(2,[3,3,2]);
			sprouts.populateLeaves(3,[2,2,1,2,2]);
			sprouts.populateLeaves(4,[2,2]);
			break;
		case 2:
			sprouts.populateLeaves(0,[2]);
			sprouts.populateLeaves(1,[0,2,1]);
			sprouts.populateLeaves(2,[1,1,2]);
			sprouts.populateLeaves(3,[]);
			sprouts.populateLeaves(4,[2,2]);
			break;
		case 3:
			sprouts.populateLeaves(0,[2,3,1,2,3]);
			sprouts.populateLeaves(1,[2,3,1,3,2]);
			sprouts.populateLeaves(2,[2,3,2,1,3]);
			sprouts.populateLeaves(3,[2,3,1,2,3]);
			sprouts.populateLeaves(4,[2,2,1,1,2]);
			break;
		case 4:
			sprouts.populateLeaves(0,[2,3,1]);
			sprouts.populateLeaves(1,[3,3,0,2,3]);
			sprouts.populateLeaves(2,[2,3,2,1,3]);
			sprouts.populateLeaves(3,[2,2,1,1,2]);
			sprouts.populateLeaves(4,[0,0,2,2]);
			break;
		case 5:
			sprouts.populateLeaves(0,[2,0,1,0,3]);
			sprouts.populateLeaves(1,[2,3,0,2]);
			sprouts.populateLeaves(2,[2,2,1]);
			sprouts.populateLeaves(3,[3,2,0,2,3]);
			sprouts.populateLeaves(4,[2,2,0,2]);
			break;	
		}
		
		if(impact){
			sprouts.showImpact(gid);
		}
		
	},
	
	myFeed: function(){
		
		sprouts.hideAll();
		sprouts.openPage('#sproutFeed');
		
		var p = $('#sproutFeed');
		p.empty();
		
		sprouts.buildTopBar(p);
		
		// create feed
		var textstr = "Rosie is amazing at investing in the next generation of women."
		sprouts.appendFeedElement(3,4,1,sprouts.names[3]+" promotes community farming.",false,true,p);
		
		var title = document.createElement('div');
		$(title).addClass('sproutFeedTitle sproutFeedTitle1');
		$(title).html('SPROUTS');
		p.append(title);
		
		sprouts.appendFeedElement(1,5,0,sprouts.names[1]+" was a pioneer on the cutting edge of her research.",true,false,p);
		sprouts.appendFeedElement(4,1,2,sprouts.names[4]+" fights for LGBT rights.",true,false,p);
		sprouts.appendFeedElement(2,3,4,sprouts.names[2]+" is family-oriented.",false,false,p);
		sprouts.appendFeedElement(2,5,3,sprouts.names[2]+" is one of the most driven people I know.",false,false,p);
		
	},
		
	openGarden: function(gid,pid){
		
		sprouts.hideAll();
		sprouts.openPage('#sproutFeed');
		
		var p = $('#sproutFeed');
		p.empty();
		
		sprouts.buildTopBar(p);
		
		var title = document.createElement('div');
		$(title).addClass('sproutFeedTitle sproutFeedTitle'+gid);
		$(title).html(sprouts.shareTypes[gid]);
		p.append(title);
		
		// create feed
		switch(pid){
		case 1: // MARIE CURIE
			switch(gid){
			case 0:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 1:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",false,false,p);
				break;
			case 2:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",false,false,p);
				break;
			case 3:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",false,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 4:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",false,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",false,false,p);
				break;
			}
			break;
		case 2: // JANE SMITH
			switch(gid){
			case 0:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" is the strongest woman I know.",true,false,p);
				break;
			case 1:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" always puts others before herself.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",false,false,p);
				break;
			case 2:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" bridges gaps in difficult situations.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" fights for LGBT rights.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" fights for what she believes in.",false,false,p);
				break;
			case 3:
				break;
			case 4:
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" spreads good word about everyone.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is incredibly generous.",false,false,p);
				break;
			}			
			break;
		case 3: // MICHELLE OBAMA
			sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
			sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
			sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
			sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
			sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
			break;
		case 4:	// BEYONCE
		switch(gid){
			case 0:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",false,false,p);
				break;
			case 1:	
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",false,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				break;
			case 2:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 3:
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",true,false,p);
				sprouts.appendFeedElement(pid,5,gid,sprouts.names[pid]+" serves as a role model for women everywhere.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 4:
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" spreads good word about everyone.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is incredibly generous.",false,false,p);
				break;
			}	
			break;
		case 5: // AUN SANG SUU KYI
			switch(gid){
			case 0:
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 1:
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 2:
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				break;
			case 3:
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" appeals to a global community to spread her message.",true,false,p);
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" fights for LGBT rights.",false,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is one of the most driven people I know.",false,false,p);
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",false,false,p);

				break;
			case 4:
				sprouts.appendFeedElement(pid,1,gid,sprouts.names[pid]+" spreads good word about everyone.",true,false,p);
				sprouts.appendFeedElement(pid,3,gid,sprouts.names[pid]+" is incredibly generous.",false,false,p);
				sprouts.appendFeedElement(pid,4,gid,sprouts.names[pid]+" promotes community farming.",false,false,p);
				break;
			}
			break;			
		}

	},
	
	// POPULATE LEAVES!
	// DO A THING FOR NEW LEAVES
	populateLeaves: function(gid,leaves){
		

		$('#gardenLeafContainer'+gid).empty();
		
		var leafPos = {
			'leaves0':[[100,30],[140,60],[180,50],[60,60],[80,80]],
			'leaves1':[[110,80],[180,120],[150,150],[210,40],[180,80]],
			'leaves2':[[75,95],[80,20],[120,120],[160,120],[0,50]],
			'leaves3':[[110,80],[160,140],[140,120],[160,20],[170,50]],
			'leaves4':[[110,120],[140,0],[220,120],[50,140],[120,80]]
		}
		
		for(var i = 0; i < leaves.length; i++){
			var leaf = document.createElement('div');
			$(leaf).addClass('gardenLeaf leafType'+gid+' leafSize'+leaves[i]);
			$(leaf).css('marginLeft',leafPos['leaves'+gid][i][0]+'px');
			$(leaf).css('marginTop',leafPos['leaves'+gid][i][1]+'px');
			$('#gardenLeafContainer'+gid).prepend(leaf);
		}
		
	},
	
	showImpact:function(gid){

		var leafPos = {
			'leaves0':[200,200],
			'leaves1':[120,180],
			'leaves2':[220,130],
			'leaves3':[80,30],
			'leaves4':[240,80]
		}
		
		var leaf = document.createElement('div');
		$(leaf).addClass('gardenLeaf leafType'+gid+' newLeaf leafSize1');
		$(leaf).css('marginLeft',leafPos['leaves'+gid][0]+'px');
		$(leaf).css('marginTop',leafPos['leaves'+gid][1]+'px');
		
		$('#garden'+gid).prepend(leaf);
		
	},
	
	appendFeedElement: function(subjid,authid,gid,text,sprouted,growing,p){
		
		var el = document.createElement('div');
		$(el).addClass('feedDiv');
		
		if(sprouted){
			$(el).addClass('sprouted'+gid);
		}
		
		var headline = document.createElement('div');
		$(headline).addClass('myHeadline');
		
		var harrow = document.createElement('div');
		$(harrow).addClass('harrow');
		
		var subjectImg = document.createElement('div');
		$(subjectImg).addClass('profileImg profile'+subjid);
		
		var authorImg = document.createElement('div');
		$(authorImg).addClass('profileImg profile'+authid);
		
		var typeImg = document.createElement('div');
		$(typeImg).addClass('leaflg leaflg'+gid);
		
		// COUNT!
		var count = Math.floor(98*Math.random())+1;
		var countDiv = document.createElement('div');
		$(countDiv).addClass('leafCount leafCount'+gid);
		$(countDiv).html(count);
		$(typeImg).append(countDiv);
		
		if(!sprouted){
			var sprout = document.createElement('span');
			$(sprout).html('sprout');
			$(sprout).attr('id',gid);
			$(sprout).addClass('sprout'+gid);
			$(typeImg).append(sprout);
			
			$(sprout).click(sprouts.fakeSprout);
		}
		
		if(growing){
			var growing = document.createElement('span');
			$(growing).html('growing');
			$(growing).addClass('growing');
			$(typeImg).append(growing);
			
		}
		
		$(headline).append(subjectImg);
		$(headline).append(harrow);
		$(headline).append(authorImg);
		$(headline).append(typeImg);
		
		$(el).append(headline);
		
		var div = document.createElement('div');
		$(div).addClass('clearing');
		$(el).append(div);
		
		var feedText = document.createElement('div');
		$(feedText).addClass('feedText');
		$(feedText).html(text);
		
		$(el).append(feedText);
		
		p.append(el);
	},
	
	shareAction: function(pid){
		
		sprouts.hideAll();
		sprouts.openPage('#sproutShare');
		
		sprouts.buildTopBar($('#sproutShare'));
				
		
		$('#sproutShare .profileImg').removeClass('profile'+1);
		$('#sproutShare .profileImg').removeClass('profile'+2);
		$('#sproutShare .profileImg').removeClass('profile'+3);
		$('#sproutShare .profileImg').removeClass('profile'+4);
		$('#sproutShare .profileImg').removeClass('profile'+5);
		
		$('#sproutShare .profileImg').addClass('profile'+pid);
		$('#shareName').html(sprouts.names[pid]);
		
		$('#shareTypeMenu').click(sprouts.changeShareType);
		$('#shareTypeMenu').addClass('postleaftype'+sprouts.shareType);
		$('#postStoryAction').click(function(){sprouts.postAction(pid);});
		
	},
	
	changeShareType: function(){
		sprouts.shareType++;
		sprouts.shareType %= 5;
		
		$('#shareTypeMenu').html(sprouts.shareTypes[sprouts.shareType]);

		$('#shareTypeMenu').removeClass('postleaftype0');
		$('#shareTypeMenu').removeClass('postleaftype1');
		$('#shareTypeMenu').removeClass('postleaftype2');
		$('#shareTypeMenu').removeClass('postleaftype3');
		$('#shareTypeMenu').removeClass('postleaftype4');
		
		$('#shareTypeMenu').addClass('postleaftype'+sprouts.shareType);
	},
	
	postAction: function(pid){
		
		sprouts.hideAll();
		sprouts.openPage('#sproutPost');
		
		sprouts.buildTopBar($('#sproutPost'));
		
		
		$('#postLeaf').addClass('postleaf'+sprouts.shareType);
		$('#postLeafType').html(sprouts.shareTypes[sprouts.shareType]);
		$('#postLeafType').addClass('postleaftype'+sprouts.shareType);
		
		$('#seeImpactAction').click(function(){
			sprouts.openProfile(pid,true,sprouts.shareType);
		});

	},
	
	fakeSprout: function(e){
		var p = e.target;
		$(p).empty();
		
		var pp = $(p).parent().parent().parent();
		pp.addClass('sprouted'+e.target.id);
		$('.growing').remove();
	}
}