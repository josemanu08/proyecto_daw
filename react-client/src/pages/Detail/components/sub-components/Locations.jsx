import React from 'react'
export const Locations = () => {
  return (
      <li className='locations'>
          {/* <input hidden type="radio" name='additional-info' id='location-check'/> */}
          <section className="location-icon">
              {/* <label htmlFor="location-check"> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-map-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
                  </svg>
              {/* </label> */}
          </section>
      </li>
  )
}
