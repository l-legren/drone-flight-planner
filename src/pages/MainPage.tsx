import { LatLng } from 'leaflet'
import React, {useState} from 'react'
import { MapFrame } from '../components/MapFrame/MapFrame'
import { SideBar } from '../components/SideBar/SideBar'
import { PageLayout } from '../containers/PageLayout'

export const MainPage = () => {
  const [ routes, setRoutes ] = useState<LatLng[]>([])

  return (
    <PageLayout>
        <SideBar routes={routes} />
        <MapFrame addNewRoute={setRoutes}/>
    </PageLayout>
  )
}
