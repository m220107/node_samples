// モジュール化
exports.index = (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンスの処理
    // res.send('Hello!!!!!!')

    // テンプレートを表示（レンダリング）
    // views/index.ejsを表示
    res.render('index')
}

exports.profile = (reg, res) => {
    // res.send('Profile Page')

    var user = {
        id: 1,
        name: 'YSE',
        birthplace: '横浜',
        hobby: ['旅行', 'グルメ', 'スポーツ'],
    }

    var data = {
        title: 'プロフィール',
        user: user,
    }

    // views/profile.ejs に data を渡して表示
    res.render('profile', data)
}