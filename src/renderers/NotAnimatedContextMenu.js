import React from 'react';
import { View } from 'react-native';

import ContextMenu, { styles } from './ContextMenu';

/**
Simplified version of ContextMenu without animation.
*/
export default class NotAnimatedContextMenu extends React.Component {

  computePosition(layouts) {
    return ContextMenu.computePosition(layouts);
  }

  render() {
    const { style, children, layouts, ...other } = this.props;
    const position = this.computePosition(layouts);
    return (
      <View {...other} style={[styles.options, style, position]}>
        {children}
      </View>
    );
  }

}
