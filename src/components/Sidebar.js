import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FcIcons from 'react-icons/fc';
import { ofertas } from '../js/operaciones';

 const Sidebar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-inner'>
        <header className='sidebar-header'>
          <button
            type='button'
            className='sidebar-burger'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              {isOpen ? (
                <FcIcons.FcUndo size={30} className='sidebar-menu' />
              ) : (
                <FcIcons.FcTodoList size={30} className='sidebar-menu' />
              )}
            </span>
          </button>
          
          <h2 style={{ fontFamily: 'Arial', color: 'white' }}>Jobs</h2>
        </header>
        
        <nav className='sidebar-menu'>
          {isAdmin ? (
            <>
              <button>
                <NavLink to='/Dashboard' className='sidebar-button'>
                  <FcIcons.FcAcceptDatabase size={30} className='me-3' />Dashboard
                </NavLink>
              </button>

              <button>
                <NavLink to='/Ofertas' className='sidebar-button'>
                  <FcIcons.FcOpenedFolder size={30} className='me-3' />Ofertas
                </NavLink>
              </button>
            </>
          ) : (
            <>
              <button>
                <NavLink to='/Home' className='sidebar-button'>
                  <FcIcons.FcHome size={30} className='me-3' onClick={ofertas} />Inicio
                </NavLink>
              </button>

              <button>
                <NavLink to='/Perfil' className='sidebar-button'>
                  <FcIcons.FcBusinessman size={30} className='me-3' />Perfil
                </NavLink>
              </button>
            </>
          )}
          <button>
            <NavLink to='/Salir' className='sidebar-button'>
              <FcIcons.FcImport size={30} className='me-3' />Salir
            </NavLink>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
