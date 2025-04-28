import React from 'react';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div style={{ fontSize: '1.5rem' }}>
      {greeting}
    </div>
  );
};

export default ItemListContainer;
