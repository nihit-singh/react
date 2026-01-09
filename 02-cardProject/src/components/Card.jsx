import React from 'react'
import { Bookmark } from 'lucide-react'

function Card(props) {
    return (
        <div className='card'>
            <div className='top'>
                <div className='fill'>
                    <img src={`${props.brandLogo}`} alt={`${props.companyName} logo`} />
                </div>

                <button>Save <Bookmark size={13} /></button>
            </div>

            <div className='center'>
                <h3>{props.companyName} <span> {props.datePosted}</span></h3>
                <h2>{props.post}</h2>
                <div className='tags'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card
