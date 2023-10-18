// fs モジュールのインストール　npm i fs
// fs モジュールを読み込み
const fs = require('fs')

// data/items.json　のパス設定
exports.filePath = "./data/items.json"

// すべてのデータを取得するメソッド
exports.get = () => {
    //外部ファイルの読み込み
    var json = fs.readFileSync(this.filePath)
    // JSONデータをパース（オブジェクトに変換）
    var values = JSON.parse(json); //JSON -> json データをJSファイルにする

    return values;
}

// IDを指定してデータを取得するメソッド
exports.find = (id) => {
    var values = this.get();
    // データを繰り返して、idが一致したら返す
    return values.find((value) => value.id == id);
}