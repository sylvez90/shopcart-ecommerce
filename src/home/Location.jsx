import React from 'react'
import { Link } from 'react-router-dom';

const title = "More Then 60,000 Customers";

const desc = "Buy products on any device with our app & enjoy your time as you want. Just download & install & start shopping";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Sylvester',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]


const Location = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className="container">
        <div className="section-header text-center">
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>
        {/** Main Content */}
        <div className="section-wrapper">
          <div className="clients">
            {
              clientsList.map((val, i) => ( 
                <div key={i} className='client-list'>
                  <Link to="/sign-up" className='client-content'>
                  <span>{val.text}</span>
                  </Link>
                  <div className="client-thumb">
                    <img src={val.imgUrl} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Location