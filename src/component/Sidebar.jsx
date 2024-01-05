import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="app">
    <aside className="sidebar">
      <h3>menu</h3>

      <nav className="menu">
        <Link to="" className="item active">Home</Link>
        <Link to="" className="item">Dashboard</Link>
        <Link to="" className="item">Settings</Link>
      </nav>
    </aside>
    <main className="content">
      <h1>Main page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate, dolores <br /> accusamus dolore quae atque nam neque magni odit, harum inventore temporibus tempora consequatur in incidunt nihil eum illo labore.</p>
    </main>
  </div>
    </>
  )
}

export default Sidebar


































































































































































































 