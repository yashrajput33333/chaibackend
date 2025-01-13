require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000
const gitHubData = {
    "login": "yashrajput33333",
    "id": 174587780,
    "node_id": "U_kgDOCmf_hA",
    "avatar_url": "https://avatars.githubusercontent.com/u/174587780?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yashrajput33333",
    "html_url": "https://github.com/yashrajput33333",
    "followers_url": "https://api.github.com/users/yashrajput33333/followers",
    "following_url": "https://api.github.com/users/yashrajput33333/following{/other_user}",
    "gists_url": "https://api.github.com/users/yashrajput33333/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yashrajput33333/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yashrajput33333/subscriptions",
    "organizations_url": "https://api.github.com/users/yashrajput33333/orgs",
    "repos_url": "https://api.github.com/users/yashrajput33333/repos",
    "events_url": "https://api.github.com/users/yashrajput33333/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yashrajput33333/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-03T07:04:52Z",
    "updated_at": "2024-07-03T07:05:06Z"
  }

app.get('/github', (req,res) =>{
    res.json(gitHubData)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('yashdotcom')
})

app.get('/login', (req,res)=>{
    res.send('<h1>hello</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>hello World</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})