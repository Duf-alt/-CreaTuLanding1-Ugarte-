import React from 'react';

const CartWidget: React.FC = () => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      🛒
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '0.8rem'
      }}>
        3
      </span>
    </div>
  );
};

export default CartWidget;
