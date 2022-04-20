import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ image, visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={image}
    />
  );
}

export default ActivityIndicator;
