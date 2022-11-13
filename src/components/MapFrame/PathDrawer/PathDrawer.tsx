import { LatLng } from "leaflet";
import React, {useState, Dispatch, SetStateAction} from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

interface PathDrawerProps {
    addNewRoute: Dispatch<SetStateAction<LatLng[]>>
}

export const PathDrawer = ({addNewRoute}: PathDrawerProps) => {
  const [ storedRoutes, setStoredRoutes ] = useState<LatLng[]>([])

  const onEditPath = (e: any) => {
    console.log("editing", e.layer.editings);
  };
  const onCreate = (e: any) => {
    const newRoute = e.layer.editing.latlngs;
    setStoredRoutes([...storedRoutes, newRoute])
    addNewRoute(newRoute)
  };

  const onDelete = (e: any) => {
    console.log("on delete", e);
  };



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
