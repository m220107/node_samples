
// 入力画面（TOP)
exports.index = (req, res) => {
    // views/loign/index.ejs を表示
    res.render('login/index')
}


exports.auth = (req, res) => {
    // POSTデータ取得
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
}