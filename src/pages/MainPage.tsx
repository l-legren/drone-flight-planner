import { LatLng } from 'leaflet'
import React, { useState} from 'react'
import { MapFrame } from '../components/MapFrame/MapFrame'
import { SideBar } from '../components/SideBar/SideBar'
import { PageLayout } from '../containers/PageLayout'

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
