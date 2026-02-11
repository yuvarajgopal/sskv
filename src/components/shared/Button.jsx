import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary-700 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl',
  gold: 'bg-accent-400 text-primary-900 hover:bg-accent-300 shadow-lg hover:shadow-xl font-semibold',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-700',
  'outline-dark': 'border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', href, onClick, children, icon: Icon, className = '' }) {
  const classes = `inline-flex items-center gap-2 rounded-lg font-body transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {Icon && <Icon className="text-lg" />}
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {Icon && <Icon className="text-lg" />}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {Icon && <Icon className="text-lg" />}
      {children}
    </button>
  );
}
