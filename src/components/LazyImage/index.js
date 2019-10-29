import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {Small, Original} from './style';
import {Animated} from 'react-native';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}) {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    if (shouldLoad) {
      //   setTimeout(() => {
      setLoaded(true);
      //   }, 1000);
    }
  }, [shouldLoad]);

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={1}>
      {loaded && (
        <OriginalAnimated
          style={{opacity}}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}
