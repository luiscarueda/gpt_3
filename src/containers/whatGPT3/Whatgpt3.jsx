import React from 'react'
import './whatgpt3.css'
import Feature from '../../components/feature/Feature'

const whatgpt3Data = [
  {
    title: 'Chatbots',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
  },
  {
  title: 'Knowledgebase' ,
   text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance',

  },
  {
    title: 'Education' ,
    text: "We so opinion friends me message as delight. Who ",
  },

]



const Whatgpt3 = () => {
  return (
    <section className='whatgpt3'>
      <div className='whatgpt3__feature'>
        <Feature title="What is GPT-3" text='We so opinion friends'/>
      </div>
      <div className='whatgpt3__heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>  
      </div>
      <div className="whatgpt3__container">
        {whatgpt3Data.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
       
      </div>
    </section>
  )
}

export default Whatgpt3