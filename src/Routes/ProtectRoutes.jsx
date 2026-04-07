import React,{useState,useEffect} from 'react'
import jwtDecoded from 'jwt-decode';
import { Outlet, Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ProtectRoutesAdmin = ({ children }) => {
    const [admin, setAdmin] = useState();
    const [usuarioCargado, setUsuarioCargado] = useState(false);
  
    const tokenAprendiz = localStorage.getItem("Token-Aprendiz");
    const tokenAdministrador = localStorage.getItem("Token-Administrador");
  
    useEffect(() => {
      if (tokenAdministrador) {
        try {
          const { id } = jwtDecoded(tokenAdministrador);
          const traerUsuario = async () => {
            const { data } = await axios.get(`/usuario/${id}`);
            setAdmin(data);
            setUsuarioCargado(false);
          };
          if (!usuarioCargado) {
            traerUsuario();
          }
        } catch (error) {
          return <Navigate to="/" />;

        }
      }
    }, [usuarioCargado]);
  

  
    if (!tokenAdministrador) {
      return <Navigate to="/" />;
    }
  
    if (usuarioCargado) {
      const isAdministrador = admin.rol.some((r) => r.nombre === "administrador");
      if (!isAdministrador) {
        return <Navigate to="/" />;
      } else if (isAdministrador) {
        return <Navigate to="/admin" />;
      }
    }
  
    return children ? children : <Outlet />;
  };



  export const ProtectRoutesProfesional = ({ children }) => {
    const [admin, setAdmin] = useState();
    const [usuarioCargado, setUsuarioCargado] = useState(false);
  
    const tokenProfesional = localStorage.getItem("Token-Profesional");
  
    useEffect(() => {
      if (tokenProfesional) {
        try {
          const { id } = jwtDecoded(tokenProfesional);
          const traerUsuario = async () => {
            const { data } = await axios.get(`/usuario/${id}`);
            setAdmin(data);
            setUsuarioCargado(false);
          };
          if (!usuarioCargado) {
            traerUsuario();
          }
        } catch (error) {
          return <Navigate to="/" />;

        }
      }
    }, [usuarioCargado]);
  

  
    if (!tokenProfesional) {
      return <Navigate to="/" />;
    }
  
    if (usuarioCargado) {
      const isProfesional = admin.rol.some((r) => r.nombre === "profesional");
      if (!isProfesional) {
        return <Navigate to="/" />;
      } else if (isProfesional) {
        return <Navigate to="/profesional" />;
      }
    }
  
    return children ? children : <Outlet />;
  };
  