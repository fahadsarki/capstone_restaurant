import React from 'react'
import './About.css';
const About = () => {

  const details = [
    {code:'Commitment to Quality', info:"We're dedicated to improving the way we prepare our quality food and the ingredients that go into it."},
    {code:"What's in Your Food", info:"Find out what makes our ingredients special."},
    {code:"Our Food Philosophy", info:"We're passionate about our food. That's why we're committed to always evolving what matters to you."},
    {code:"Nutrition Calculator", info:"Our nutrition calculator has the McDonald's menu nutrition information you're seeking. Learn more about your favorite meals."},
    {code:"Our Food Experts", info:"From our chefs, to our dieticians and suppliers, McDonald's food experts care deeply about the food you eat."},
    {code:"Fresh Beef", info:"Our Quarter Pounder* patty is made with 100% fresh beef and cooked right when you order. It's hot and deliciously juicy and full of flavor."},
    {code:"Happy Meal Nutrition", info:"When your kids enjoy a meal that's delicious and balanced, you'll enjoy it too."},
    {code:"Variety of Choices", info:"When it comes to quality options, we've got you covered."},
  ]

  return (
    <>
    <div className='app__about'>
      <h1>About Our Food</h1>
        <h3>We're Passionate About Our Food </h3>
        <p>From adding more balanced options to our Happy Meal, to serving up fresh beef Quarter Pounder burgers that are cooked when you order, we're always finding ways to show our commitment to our customers and our food.</p>
        <div className='container'>
        {details && details.map((detail) =>(
          <div className='card card-box'>
          <h3> {detail.code} </h3>
          <p> {detail.info} </p>  
        </div>  
      ))}
        </div>
    </div>
    </>
  )
}

export default About