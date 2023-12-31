// expressモジュール読み込み
const express = require('express') 
// dotenvモジュール読み込み
const router = express.Router() 
// ./models/itemを読み込む
const item = require('./models/item')

// Controllerモジュール読み込み
const HomeController = require('./controllers/HomeController')
const ItemController = require('./controllers/ItemController')
const LoginController = require('./controllers/LoginController')
const UserController = require('./controllers/UserController')

// GETリクエストの処理 req=リクエスト　res=レスポンス
// トップページ
router.get ('/', HomeController.index)

// プロフィールページ
router.get ('/profile', HomeController.profile)

// 商品一覧ページ
router.get('/item/', ItemController.index)

// 商品詳細ページ
router.get('/item/:id', ItemController.detail)

// Login
router.get('/login', LoginController.index)
router.post('/auth', LoginController.auth)

// User
router.get('/user', UserController.index)
router.get('/user/logout', UserController.logout)


// モジュール化
module.exports = router

// ------------↓　ホームコントローラーに書き写した----------
// router.get('/', (req, res) => {
    //     console.log(req.body)
    //     console.log(req.url)
    //     console.log(req.query)
    
    //     // レスポンスの処理
    //     // res.send('Hello!!!!!!')
    
    //     // テンプレートを表示（レンダリング）
    //     // views/index.ejsを表示
    //     res.render('index')
    // })
    




// router.get('/profile', (reg, res) => {
//     // res.send('Profile Page')

//     var user = {
//         id: 1,
//         name: 'YSE',
//         birthplace: '横浜',
//         hobby: ['旅行', 'グルメ', 'スポーツ'],
//     }

//     var data = {
    //         title: 'プロフィール',
    //         user: user,
    //     }
    
    //     // views/profile.ejs に data を渡して表示
    //     res.render('profile', data)
    // })  
    
    // ------------↑　ホームコントローラーに書き写した----------
    // ------------↓　アイテムコントローラーに書き写した----------
    // router.get('/item/', (req, res) => {
        //     var data = {
            //         title: '商品一覧',
            //         items: item.get(),
            //     }
            //     // views/item/index.ejs にデータを渡して表示
            //     res.render('item/index', data)
            // })
            
// 商品詳細ページ
// /itme/xxx　のルーティング　（パラメータで何かをとってくる処理のをパスパラメーターという）
// router.get('/item/:id', (req, res) => {
    //     const id = req.params.id
    //     // TODO: case1 RDBMS を利用する
    //     // TODO: case2 APIサーバを利用する
    //     // itemモデルを使って、IDで商品データを取得
    //     var selectItem = item.find(id)
    //     var data = {
        //         title: "商品詳細",
        //         item: selectItem,
        //     }
        //     // views/item/detail.ejs にデータを渡して表示
        //     res.render('item/detail',data)
        // })
        
        // ------------↑　アイテムコントローラーに書き写した----------
        // ------------↓　ログインコントローラーに書き写した----------
        
        
        // // postリクエスト
        // router.post('/auth', (req, res) => {
            //     // POSTデータ取得
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
                    
                    
    // ------------↑　ログインコントローラーに書き写した----------
                                
                                
                                
                                
                                // ルーティングは受付のようなもの　この中にプログラムはあんまり書かない