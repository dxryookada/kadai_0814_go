// 東京都の天気予報データを取得するためのURL APIキーを削除しています。
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&units=metric&appid=';
// イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

// ボタンのクリック時にイベント処理を実行する
button.addEventListener('click', () => {
    // 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
    fetch(url)
      // サーバーからAjaxレスポンスを受け取ったときの処理
      .then((response) => response.json()) // JSON形式のデータに変換
      .then((data) => {
        // JSONデータから「東京の明日の天気」を抽出して表示
            const weathers = data['weather'][0]['description'];
            const weathers2 = data['main']['temp'];
            const weathers3 = data['wind']['speed'];
            const weathers4 = data.weather[0].icon;
            // weathers[0].icon 
            // weather = data['weather'][0]['description']
            // temperature = data['main']['temp']
            $('#hogeId').text(weathers);
            $('#hogeId2').text(Math.round(weathers2) + '℃');
            $('#hogeId3').text(weathers3 + '( m/s )');
            $('#hogeId4').text(weathers4);
            // const weathers2 = $('#hogeId').text(weathers);
            // console.log(p);
            // console.log('東京の明日の天気：' + weathers);
        });
});