let ad = App.loadSpritesheet("728.png");
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
    Map.putObject(13, 13, )

});

App.addOnTileTouched(10, 10, function (player) {
    player.spawnAtMap("65jeBA", "2YvXMJ");
});