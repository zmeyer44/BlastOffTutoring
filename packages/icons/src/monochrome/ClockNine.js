import React from 'react';

export default function ClockNine(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M12,6a.99974.99974,0,0,0-1,1v4H9a1,1,0,0,0,0,2h3a.99974.99974,0,0,0,1-1V7A.99974.99974,0,0,0,12,6Z" />
      <path className="uim-tertiary" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a.99974.99974,0,0,1-1,1H9a1,1,0,0,1,0-2h2V7a1,1,0,0,1,2,0Z" />
    </svg>
  );
}
