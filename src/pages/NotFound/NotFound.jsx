import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './NotFound.css'

const NotFound = () => (
  <>
    <Helmet>
      <title>找不到此頁面 | 怡睿國際法律事務所</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <section className="notfound">
      <div className="notfound__inner">
        <span className="notfound__code" lang="en">404</span>
        <h1 className="notfound__title">很抱歉，找不到此頁面</h1>
        <p className="notfound__msg">您所瀏覽的頁面可能已被移除或不存在。</p>
        <Link to="/" className="btn btn-primary">回到首頁</Link>
      </div>
    </section>
  </>
)

export default NotFound
