/**
 * @author cherry
 * @description 2023/7/28
 */

import React from 'react';

interface Props {
  visible?: boolean;
  children: React.ReactNode;
}

export const Whether: React.FC<Props> = ({ visible = true, children }) =>
  visible ? <>{children}</> : null;
