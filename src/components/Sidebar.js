import { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* import * s FaIcons from 'react-icons/fa';*/
import * as FcIcons from 'react-icons/fc';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='sidebar-inner'>
                <header className='sidebar-header'>
                    <button
                        type='button'
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}>
                        <span>
                            {isOpen ? <FcIcons.FcUndo size={30} className='sidebar-menu' /> : <FcIcons.FcTodoList size={30} className='sidebar-menu' />}
                        </span>
                    </button>
                   <h2 style={{fontFamily: 'Arial', color:'white'}}>
                    Jobs
                   </h2>
                </header>
                <nav className='sidebar-menu'>
                    <button >
                        <NavLink to='/Home' className='sidebar-button'  > <FcIcons.FcHome size={30} className='me-3' />Inicio</NavLink>
                    </button>
                    <button >
                        <NavLink to="/Perfil" className='sidebar-button'   ><FcIcons.FcBusinessman size={30} className='me-3' />Perfil</NavLink>
                    </button>
                    <button >
                        <NavLink to="/Salir" className='sidebar-button'  >  <FcIcons.FcImport size={30} className='me-3' />Salir</NavLink>
                    </button>

                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;