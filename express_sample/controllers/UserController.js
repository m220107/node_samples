exports.index =(req, res) => {
    // ユーザのセッションを取得
    const user = req.session.authUser

    // ログインユーザがいなければ、ログインページにリダイレクト
    if (user) {
        // views/user/index.ejs を表示
        res.render('user/index', {user: user})       
    } else {
        // ログインユーザがいなければ、ログインページにリダイレクト
        res.redirect('/login')       
    }
}

// logout
exports.logout =(req, res) => {
    // ユーザのセッションを削除
    delete (req.session.authUser)
    // ログインページにリダイレクト
    res.redirect('/login')       
}