import React from 'react';
import Theme1Editorial from './Theme1Editorial.jsx';
import Theme2HighTech from './Theme2HighTech.jsx';
import Theme3Kinetic from './Theme3Kinetic.jsx';
import Theme4MinimalLuxe from './Theme4MinimalLuxe.jsx';
import Theme5WarmCraft from './Theme5WarmCraft.jsx';

export default function ThemeRenderer({ themeId, industry }) {
  const numericId = parseInt(themeId, 10) || 1;

  const renderActiveTheme = () => {
    switch (numericId) {
      case 1:
        return <Theme1Editorial industry={industry} />;
      case 2:
        return <Theme2HighTech industry={industry} />;
      case 3:
        return <Theme3Kinetic industry={industry} />;
      case 4:
        return <Theme4MinimalLuxe industry={industry} />;
      case 5:
        return <Theme5WarmCraft industry={industry} />;
      default:
        return <Theme1Editorial industry={industry} />;
    }
  };

  return (
    <div 
      key={`${industry?.id}-${numericId}`} 
      className="w-full transition-opacity duration-200 animate-in fade-in"
    >
      {renderActiveTheme()}
    </div>
  );
}
