import { useState } from 'react';

export default () => {
  const [sideCollapsed, setSideCollapsed] = useState<boolean>(false);

  return {
    sideCollapsed,
    setSideCollapsed,
  };
};
