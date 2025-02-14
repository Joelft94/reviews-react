import { useState } from 'react';
import people from './data'
import { FaChevronLeft,FaChevronRight,FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index,setIndex] = useState(0);
  const {name, job, image, text } = people[index];

  const nextPerson = () => {
    if(index<people.length-1){
      setIndex((currentIndex)=> {
        return(currentIndex + 1);
      });
    } else {
      setIndex((currentIndex)=> {
        return(0);
      });
    }
  };

    const prevPerson = () => {
      if(index==0){
        setIndex(people.length - 1);
      } else {
        setIndex((currentIndex) => {
          return (currentIndex - 1);
        });
      }
    };


    const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length)
      if (randomNumber === index){
        randomNumber = index + 1;
        if (randomNumber > people.length - 1){
          randomNumber = 0
        }
      }
      setIndex(randomNumber)
    };


  console.log(name);
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
          <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>surprise me!</button>
      </article>
    </main>
  )
};
export default App;
