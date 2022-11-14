import * as L from "leaflet";
import React, {
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useLeafletContext } from "@react-leaflet/core";

interface PathDrawerProps {
  addNewFlightPlan: Dispatch<SetStateAction<L.LatLng[][]>>;
}

export const PathDrawer = ({ addNewFlightPlan }: PathDrawerProps) => {
  const [storedRoutes, setStoredRoutes] = useState<Array<L.LatLng[]>>([]);
  const [actualRoute, setActualRoute] = useState<L.LatLng[] | undefined>(
    undefined
  );
  const { map } = useLeafletContext();
  const drawRef = useRef();
  
  const onCreate = (e: any) => {
    drawRef.current = e.layer;
    const newRoute = e.layer.editing.latlngs;
    setActualRoute(newRoute);

    // In order to manage the plans from the flight plan sidebar I remove the layer
    if (drawRef.current) {
      map.removeLayer(drawRef.current);
    }
  };

  useEffect(() => {
    if (actualRoute && storedRoutes.length < 10) {
      setStoredRoutes([...storedRoutes, actualRoute]);
    }
  }, [actualRoute]);

  useEffect(() => {
    addNewFlightPlan(storedRoutes);
  }, [storedRoutes]);

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onEdited={undefined}
        onCreated={onCreate}
        onDeleted={undefined}
        draw={{
          rectangle: false,
          circle: false,
          polygon: false,
          marker: false,
          circlemarker: false,
        }}
      />
    </FeatureGroup>
  );
};
