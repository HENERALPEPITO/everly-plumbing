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
  {
    id: 'undergrounds',
    title: 'UNDERGROUNDS',
    subtitle: 'Learn more',
    route: '/new-home/undergrounds'
  },
  {
    id: 'rough-in',
    title: 'ROUGH-IN PLUMBING',
    subtitle: 'View process',
    route: '/new-home/rough-in-plumbing'
  },
  {
    id: 'camera',
    title: 'CAMERA INSPECTION',
    subtitle: 'See how it works',
    route: '/new-home/camera-inspection'
  },
  {
    id: 'top-out',
    title: 'TOP OUT PLUMBING',
    subtitle: 'Explore stage two',
    route: '/new-home/top-out-plumbing'
  },
  {
    id: 'gas',
    title: 'GAS LINE INSTALLATION',
    subtitle: 'Learn more',
    route: '/new-home/gas-line-installation'
  },
  {
    id: 'water-heater',
    title: 'WATER HEATER INSTALLATION',
    subtitle: 'Compare options',
    route: '/new-home/water-heater-installation'
  },
  {
    id: 'fixtures',
    title: 'FIXTURE INSTALLATION',
    subtitle: 'See our process',
    route: '/new-home/fixture-installation'
  },
  {
    id: 'warranty',
    title: 'WARRANTY',
    subtitle: 'Explore our promise',
    route: '/new-home/warranty'
  }
];

interface NewHomeConstructionMegaMenuProps {
  onClose?: () => void;
}

const NewHomeConstructionMegaMenu: React.FC<NewHomeConstructionMegaMenuProps> = ({ onClose }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEGA_MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              onClick={onClose}
              className="group flex flex-col p-4 rounded-lg hover:bg-neutral-50 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-2">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-neutral-700 group-hover:text-black transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewHomeConstructionMegaMenu;
