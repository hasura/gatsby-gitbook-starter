import React from 'react';
import './styles.scss';

const MaintainedAdmonition = () => {
  return (
    <div className="outdated-notice">
      <p>
        This course is no longer maintained and may be out-of-date. While it remains available for
        reference, its content may not reflect the latest updates, best practices, or supported
        features.
      </p>
    </div>
  );
};

export default MaintainedAdmonition;
