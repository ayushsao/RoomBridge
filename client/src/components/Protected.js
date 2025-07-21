import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({ Component, ...props }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkToken = async () => {
          let token = localStorage.getItem('token');
          if (!token) {
            navigate('/login');
          }
        };
    
        checkToken();
      }, [navigate]);

    return (
        <div>
            <Component {...props} />
        </div>
    )
}

export default Protected
