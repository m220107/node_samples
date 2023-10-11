// expressモジュール読み込み
const express = require('express') 
// dotenvモジュール読み込み
const router = express.Router() 

// GETリクエストの処理 req=リクエスト　res=レスポンス
router.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンスの処理
    res.send('Hello!!!!!!')
})

router.get('/profile', (reg, res) => {
    res.send('Profile Page')
})

// postリクエスト
router.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password
    console.log(loginName, password)

    message = "ログイン失敗"
    // .env で設定した値で、ログインチェック
    // TODO:データベースに接続してユーザ取得
    // TODO:パスワードはハッシュ値でチェック
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD){
            message = "ログイン成功"
        // TODO:ログインが成功したらユーザの状態を保持
        // TODO:ログイン後のページの転送
    }else{
        // TODO:ログイン画面に戻す
    }
    res.send(message)

    res.send('認証処理')
})



// モジュール化
module.exports = router
