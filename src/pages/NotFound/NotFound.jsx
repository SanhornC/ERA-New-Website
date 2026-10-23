import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => (
  <>
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
