import * as React from 'react';

import * as styles from './Highlight.less';

export interface Props {
  pos: ClientRect;
  root: React.ReactElement<any>;
  backgroundColor?: string;
}

export const Highlight: React.StatelessComponent<Props> = (props: Props) => {
  const {pos, root, backgroundColor} = props;
  const computedStyles: React.CSSProperties = {
    borderColor: backgroundColor,
    borderTopWidth: pos.top,
    borderLeftWidth: pos.left,
    borderRightWidth: document.documentElement.offsetWidth - pos.right,
    borderBottomWidth: document.documentElement.offsetHeight - pos.bottom,
    width: pos.width,
    height: pos.height,
  };

  return (
    <div className={styles.wrapper} style={computedStyles}>
      {root}
    </div>
  );
};
