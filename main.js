let ad = App.loadSpritesheet("700.png");
let button = App.loadSpritesheet("fixed.png");
let _widget = null;
var response;

App.onJoinPlayer.Add(function(){
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
        }
    );

    Map.putObject(10, 10, ad, {overlap : true});
    Map.putObject(10, 14, button, {overlap : true});

});

App.addOnTileTouched(10, 10, function (player) {
    player.spawnAtMap("65jeBA", "2YvXMJ");
});

App.addOnTileTouched(10, 14, function (player) {
    _widget = player.showWidget("widget.html","top",300,300);
	
});

// --------------------------------------------------------- //

// 플레이어가 입장할 때 동작하는 함수
App.onJoinPlayer.Add(function (player) {
	player.tag = {
		widget: null,
	};

	player.tag.widget = player.showWidget("widget.html", "top", 600, 500);
	player.tag.widget.onMessage.Add(function (player, msg) {
		// 위젯에서 App으로 'type: close'라는 메시지를 보내면 위젯을 파괴함
		if (msg.type == "close") {
			player.showCenterLabel("위젯이 닫혔습니다.");
			player.tag.widget.destroy();
			player.tag.widget = null;
		}
	});
});


