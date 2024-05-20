import React from 'react'
import { TitleImagesB } from './componentsB/TitleImagesB'
import { TitleImagesModal } from './componentsB/TitleImagesModal'
import { HeaderDetails } from './detailBcomponents/HeaderDetails'
import { useLocation, useParams } from 'react-router-dom'
import { useTrophyData } from '../../hooks/detailHooks'
import { mapPlayImages } from '../../helpers/helpers'
import { HeaderDetailsVersion } from '../UserSite/components/Header'
import { Trophies } from './componentsB/Trophies'
import { ModalStickyTop } from './componentsB/ModalStickyTop'
import { SeriesGames } from './detailBcomponents/SeriesGames'

export const DetailsB = () => {
  const location = useLocation()
  const platform = location.pathname.split('/')[1]
  const params = useParams()
  const { isLoading, trophyData } = useTrophyData(params, location.pathname)
  return (
    !trophyData || isLoading
      ? <div className="lds-dual-ring"></div>
      : (
        <>
        <div className="detail-view-container">
          <HeaderDetailsVersion/>
           <div className="general-detail-view-container">
            <div style={{ color: 'white' }} className="detail-header-section">
                  <section className="first-details-header-section">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <TitleImagesB images={
                            platform === 'psn'
                              ? mapPlayImages(trophyData.gi.background_image, trophyData.gi.screen_shots)
                              : trophyData?.ti?.imgs
                        }/>
                        <SeriesGames/>
                      </div>
                      <HeaderDetails gameInfo={trophyData}/>
                  </section>
              </div>
              {/* CONTENIDO VA AQUÍ 😻😻😻 */}
              <Trophies trophieList={trophyData.tr ?? trophyData.ti} name={trophyData?.gi?.name}/>
           </div>
        </div>
        <div className="linear-gradient-details-section"
        style={{
          backgroundImage: `url("${trophyData.gi.background_image}")`,
          minHeight: '100vh',
          position: 'fixed'
        }}>

        </div>
          <ModalStickyTop/>
          <TitleImagesModal/>
        </>
        )
  )
}
