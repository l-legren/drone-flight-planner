import React from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
export const PathDrawer = () => {
  const onEditPath = () => {
    console.log("editing");
  };
  const onCreate = () => {
    console.log("on create");
  };

  const onDelete = () => {
    console.log("on delete");
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
          polygon: false
        }}
      />
    </FeatureGroup>
  );
};
