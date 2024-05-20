import React, { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'
import { useBodyState } from '../hooks/useBodyState'
import { applyBodyFilters } from '../../../helpers/helpers'
import GameBodyItem from './sub-components/GameBodyItem'

export const GamesBody = () => {
  const { filterState } = useContext(filterContext)
  const { bodyState } = useBodyState()

  const filteredTableBody = applyBodyFilters(bodyState, filterState)

  return (
    <ul className="games-body">
        {
          filteredTableBody
            .map((game, index) => (
              <GameBodyItem key={index} gameInfo={game}></GameBodyItem>
            ))
        }
      </ul>
  )
}
