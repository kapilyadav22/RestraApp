import React from 'react'

export default function Header() {
  return (
    <div className='Navigation'>
      <div>
        <img className='logo'
          src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"
          alt="Food image" />
      </div>

      <div className='HeaderList'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>

  )
}
