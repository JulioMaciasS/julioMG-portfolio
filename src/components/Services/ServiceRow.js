import React from 'react';
import Link from '../LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { servicePath } from '../../data/services';
import { SERVICE_ICONS } from './serviceIcons';

// Compact linked row for one service, used under "Other services".
function ServiceRow({ service, category }) {
  const Icon = SERVICE_ICONS[service.key];
  return (
    <Link to={servicePath(service)} className="service-row">
      <span className="service-row-icon">
        <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <div className="service-row-text">
        <h3>{category.title}</h3>
        <p>{category.pitch}</p>
      </div>
      <ArrowRight size={18} className="service-row-arrow" aria-hidden="true" />
    </Link>
  );
}

export default ServiceRow;
