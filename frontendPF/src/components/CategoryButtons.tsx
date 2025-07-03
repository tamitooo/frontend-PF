import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

interface CategoryButtonsProps {
  icon: React.ReactNode;
  to: string;
  label: string;
}

const CategoryButtons: FC<CategoryButtonsProps> = ({ icon, to, label }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black hover:scale-105 transition transform duration-200 shadow-md"
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default CategoryButtons;
