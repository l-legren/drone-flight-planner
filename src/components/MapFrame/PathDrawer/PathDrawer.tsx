import { LatLng } from "leaflet";
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
  addNewFlightPlan: Dispatch<SetStateAction<LatLng[][]>>;
}

export const PathDrawer = ({ addNewFlightPlan }: PathDrawerProps) => {
  const [storedRoutes, setStoredRoutes] = useState<Array<LatLng[]>>([]);
  const [actualRoute, setActualRoute] = useState<LatLng[] | undefined>(
    undefined
  );
  const { map } = useLeafletContext();
  const drawRef = useRef();

  const onEditPath = () => {
    return null;
  };

  const onCreate = (e: any) => {
    drawRef.current = e.layer;
    const newRoute = e.layer.editing.latlngs;
    setActualRoute(newRoute);

    // In order to manage the plans from the flight plan sidebar I remove the layer
    if (drawRef.current) {
      map.removeLayer(drawRef.current);
    }
  };

  const onDelete = () => {
    return null;
  };

  useEffect(() => {
    if (actualRoute) {
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
        onEdited={onEditPath}
        onCreated={onCreate}
        onDeleted={onDelete}
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
