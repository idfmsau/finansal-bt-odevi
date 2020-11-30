import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const IconHandler = (focused, color, size, icon) => (
    <MaterialCommunityIcons name={icon} size={24} color={color} />
  );

  export default IconHandler;