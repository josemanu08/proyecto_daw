/* eslint-disable react/prop-types */
import React from 'react'
import { HeartBroken } from '../../../../components/Heart'

export const Description = ({ gameInfo }) => {
  const { platforms, developers, tags, metacritic, genres, date, description } = gameInfo.gi
  return (
        <div className="description">
            <div className="data-raining">
                <ul>
                    <li className='data-rain-item'>
                        <span className='data-rain-span'>Platforms</span>
                        <p>
                            {
                                platforms.map(platform => (
                                  platform.platform.name
                                )).join(' , ')
                            }
                        </p>
                    </li>
                    <li className='data-rain-item'>
                        <span className='data-rain-span'>Creators</span>
                        <p>
                            {
                                developers.join(' , ')
                            }
                        </p>
                    </li>
                    <li className='data-rain-item'>
                        <span className='data-rain-span'>Metacritic</span>
                        <p>
                            {metacritic || <HeartBroken width={30} height={30}/>}
                        </p>
                    </li>
                    <li className='data-rain-item'>
                        <span className='data-rain-span'>Release Date</span>
                        <p>
                            {
                                new Date(date).toLocaleDateString()
                            }
                        </p>
                    </li>
                    <li className='data-rain-item'>
                        <span className='data-rain-span'>Genre</span>
                        <p>
                            {
                                genres.join(' , ')
                            }
                        </p>
                    </li>
                    <li className='data-rain-item'>
                        <span className='data-rain-span'>Tags</span>
                        <p>
                            {
                                tags.map((tag) => (
                                  tag.name
                                )).slice(0, 11).join(' - ')
                            }
                        </p>
                    </li>
                </ul>
            </div>
            <div className="title-description">
                <span className='data-rain-span'>Description</span>
                <input type="checkbox" id="desc-check" className='desc-check' hidden/>
                <p className='desc-text' dangerouslySetInnerHTML={{ __html: description }}></p>
                <label style={{
                  backgroundColor: 'white',
                  color: 'black',
                  width: 'min-content',
                  textWrap: 'nowrap',
                  padding: '.1rem',
                  cursor: 'pointer',
                  borderRadius: '10px'
                }} className='desc-check-label' htmlFor="desc-check">Show More</label>
            </div>
        </div>
  )
}
