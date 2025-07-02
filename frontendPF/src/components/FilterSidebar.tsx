import React, { useState } from 'react';

interface FilterSidebarProps {
  onCategoryChange: (categories: string[]) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  selectedCategories: string[];
  priceRange: { min: number; max: number };
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onCategoryChange,
  onPriceRangeChange,
  selectedCategories,
  priceRange
}) => {
  const categories = [
    'All',
    'Gaming Gear',
    'Smartphones',
    'Laptops & PCs',
    'Audio & Headphones',
    'Accessories',
    'TV & Monitors'
  ];

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      onCategoryChange([]);
      return;
    }

    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    onCategoryChange(updatedCategories);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = parseInt(value);
    
    if (name === 'min') {
      onPriceRangeChange(newValue, priceRange.max);
    } else {
      onPriceRangeChange(priceRange.min, newValue);
    }
  };

  return (
    <div className="w-64  p-6  h-full">
      <h2 className="text-xl font-bold mb-6 text-gray-800">FILTER OPTIONS</h2>
      
      {/* Categories Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">By Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                checked={category === 'All' ? selectedCategories.length === 0 : selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="ml-3 text-gray-600 hover:text-gray-800">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Price</h3>
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-gray-600">S/.</span>
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              min="0"
            />
            <span className="text-gray-500">-</span>
            <span className="text-sm text-gray-600">S/.</span>
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              min="0"
            />
          </div>
          
          {/* Price Range Slider */}
          <div className="relative">
            <input
              type="range"
              min="100"
              max="4000"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange(priceRange.min, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>S/. 100.00</span>
              <span>S/. 4000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;