import React from 'react'
import {BookmarkIcon} from 'lucide-react';

const Card = (props) => {
    
  return (
    <div className='card'>
        <div>
            <div className='top'>
                <img src={props.logo} alt="img" />
                <button>Save <BookmarkIcon size={10} /> </button>
            </div>
            <div className="center">
                <h3> {props.company} <span> {props.date}</span></h3>
                <h2> {props.tag2} </h2>
                <div className='ctag'>
                    <h4> {props.tag1} </h4>
                    <h4> {props.post} </h4>
                </div>
            </div>
		</div>
        <div className="bottom">
            <div>
                <h3> {props.pay} </h3>
                <p> {props.location} </p>
            </div>
                <button> Apply Now </button>
        </div>
      </div>
  )
}

export default Card;
