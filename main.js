let ad = App.loadSpritesheet("hellozep.png");
let ad2 = App.loadSpritesheet("loas.png");
let ad3 = App.loadSpritesheet("vocla.png");
let button = App.loadSpritesheet("fixed.png");

App.onJoinPlayer.Add(function(player){
    Map.putObject(10, 10, ad, {overlap : true});
    Map.putObject(40, 40, ad2, {overlap : true});
    Map.putObject(50, 50, ad3, {overlap : true});
    Map.putObject(10, 14, button, {overlap : true});
    player.tag = {widget: null};
    App.httpGet(
        "https://blackvod.blackwind.tech/temp",
        null,
        function (res) {
            // 응답 결과를 JSON 오브젝트로 변경
            response = JSON.parse(res);
            App.sayToAll(`result : ${response.result}`,0xffffff);
            App.sayToAll(`name : ${response.name}`,0xffffff);
            App.sayToAll(`SpaceHashID : ${response.SpaceHashID}`,0xffffff);
            App.sayToAll(`MapHashID: ${response.MapHashID}`, 0xffffff);
            App.sayToAll(`textMessage: ${response.textMessage}`, 0xffffff);
            App.sayToAll(`ad_len: ${response.ad_len}`, 0xffffff);
            App.sayToAll(`ad_num: ${response.ad_num}`, 0xffffff);
            App.sayToAll(`img: ${response.image}`, 0xffffff);
        });
});

App.addOnTileTouched(10, 10, function (player) {
    player.spawnAtMap(response.SpaceHashID, response.MapHashID); //-- spacehash first, maphash second --//
});

App.addOnTileTouched(40, 40, function (player) {
    player.spawnAtMap(response.SpaceHashID, response.MapHashID); //-- spacehash first, maphash second --//
});

App.addOnTileTouched(10, 14, function (player) {
    player.tag.widget = player.showWidget("ad.html", "top", 600, 300);
	player.tag.widget.onMessage.Add(function (player, msg) {
        if (msg.type == "close") {
            player.tag.widget.destroy();
			player.tag.widget = null;
		}
	});
    player.tag.widget.sendMessage({
        text: response.textMessage,
        author: response.name,
    });
});


