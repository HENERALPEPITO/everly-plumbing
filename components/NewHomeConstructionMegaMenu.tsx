import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MegaMenuItem {
  id: string;
  title: string;
  subtitle: string;
  route: string;
}

const MEGA_MENU_ITEMS: MegaMenuItem[] = [
  { id: 'undergrounds', title: 'Undergrounds', subtitle: 'Learn more', route: '/new-home/undergrounds' },
  { id: 'rough-in', title: 'Rough-In Plumbing', subtitle: 'View process', route: '/new-home/rough-in-plumbing' },
  { id: 'camera', title: 'Camera Inspection', subtitle: 'See how it works', route: '/new-home/camera-inspection' },
  { id: 'top-out', title: 'Top Out Plumbing', subtitle: 'Explore stage two', route: '/new-home/top-out-plumbing' },
  { id: 'gas', title: 'Gas Line Installation', subtitle: 'Learn more', route: '/new-home/gas-line-installation' },
  { id: 'water-heater', title: 'Water Heater Installation', subtitle: 'Compare options', route: '/new-home/water-heater-installation' },
  { id: 'fixtures', title: 'Fixture Installation', subtitle: 'See our process', route: '/new-home/fixture-installation' },
  { id: 'warranty', title: 'Warranty', subtitle: 'Explore our promise', route: '/new-home/warranty' }
];

interface NewHomeConstructionMegaMenuProps {
  onClose?: () => void;
}

const NewHomeConstructionMegaMenu: React.FC<NewHomeConstructionMegaMenuProps> = ({ onClose }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEGA_MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              onClick={onClose}
              className="group flex flex-col p-5 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition duration-200 border border-transparent hover:border-neutral-200"
            >
              <div className="flex-1">
                <h3 className="text-base font-semibold text-neutral-900 group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-3 text-sm font-medium text-neutral-700 group-hover:text-black transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewHomeConstructionMegaMenu;