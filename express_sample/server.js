// expressモジュール読み込み require -> python でいうところのinport
const express = require('express') 
// dotenvモジュール読み込み
const dotenv = require('dotenv')
// routerモジュール読み込み 
const routes = require('./routes')

// dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

// サーバ作成
const app = express()

// ミドルウェアの設定
app.use(express.static(__dirname + '/public'));
// URLエンコード
app.use(express.urlencoded({ extended: true }));

// express-ejs-layoutsモジュール読み込み
const layouts = require('express-ejs-layouts')
// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs')
// views/layouts/default.ejs をレイアウトとして利用
app.set('layout', 'layouts/default')
// ミドルウェアとして利用
app.use(layouts)

//Express Sessionのミドルウェア追加
const session = require('express-session')
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitalized: false,
}))


// ルーティングを有効
app.use(routes)


// ---------------↓routesモジュールに移動したもの↓---------------------------------
// // GETリクエストの処理 req=リクエスト　res=レスポンス
// app.get('/', (req, res) => {
//     console.log(req.body)
//     console.log(req.url)
//     console.log(req.query)

//     // レスポンスの処理
//     res.send('Hello!!!!!!')
// })

// app.get('/profile', (reg, res) => {
//     res.send('Profile Page')
// })

// // postリクエスト
// app.post('/auth', (req, res) => {
//     var loginName = req.body.login_name
//     var password = req.body.password
//     console.log(loginName, password)

//     message = "ログイン失敗"
//     // .env で設定した値で、ログインチェック
//     // TODO:データベースに接続してユーザ取得
//     // TODO:パスワードはハッシュ値でチェック
//     if (loginName == process.env.LOGIN_NAME
//         && password == process.env.PASSWORD){
//             message = "ログイン成功"
//         // TODO:ログインが成功したらユーザの状態を保持
//         // TODO:ログイン後のページの転送
//     }else{
//         // TODO:ログイン画面に戻す
//     }
//     res.send(message)

//     res.send('認証処理')
// })
// -----------↑routesモジュールに移動したもの↑-------------------------------------

// サーバ（待機（Listen））
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})

// 基本的にこの中のプログラムを更新したらサーバを再起動しないと反映されない