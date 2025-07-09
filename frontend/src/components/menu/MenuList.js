import React, { useEffect, useState } from 'react';
import { useMenu } from '../../hooks/useMenu';
import MenuItemCard from './MenuItemCard';
import LoadingSpinner from '../common/LoadingSpinner';

const MenuList = () => {
  const { menuItems, loading, error } = useMenu();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;