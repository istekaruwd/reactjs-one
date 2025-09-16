import { useState, useRef, useEffect } from 'react';

export default function MenuItem({ item, depth = 1 }) {
  const hasChildren = item.subMenu && Array.isArray(item.subMenu) && item.subMenu.length > 0;
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (btnRef.current && !btnRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <li className={`nav_nav-item ${hasChildren ? 'has-children' : ''} depth-${depth}`}>
      <a
        href={item.link || '#'}
        className="nav_nav-link"
        onClick={(e) => {
          if (hasChildren) e.preventDefault();
        }}
      >
        {item.title}
      </a>

      {hasChildren && (
        <>
          <button
            ref={btnRef}
            className={`nav_sub-toggle ${open ? 'open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Collapse submenu' : 'Expand submenu'}
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>

          <ul className={`nav_submenu ${open ? 'open' : ''}`}>
            {item.subMenu.map((child, idx) => (
              <MenuItem
                key={child.id || child.title + idx}
                item={child}
                depth={Math.min(depth + 1, 3)}
              />
            ))}
          </ul>
        </>
      )}
    </li>
  );
}
