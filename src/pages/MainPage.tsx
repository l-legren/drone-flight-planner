import { LatLng } from 'leaflet'
import React, { useState} from 'react'
import { MapFrame } from '../components/MapFrame/MapFrame'
import { PageLayout } from '../containers/PageLayout'
import { SideBar } from '../components/SideBar/SideBar'

export const MainPage = () => {
  const [ flightPlans, setFlightPlans ] = useState<LatLng[][]>([])
  const [ selectedPlan, setSelectedPlan ] = useState<LatLng[] | undefined>(undefined)

  return (
    <PageLayout>
        <SideBar flightPlans={flightPlans} selectPlan={setSelectedPlan} />
        <MapFrame addNewFlightPlan={setFlightPlans} selectedPlan={selectedPlan} />
    </PageLayout>
  )
}
