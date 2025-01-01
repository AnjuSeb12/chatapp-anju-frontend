import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Validater= () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = async () => {
      try {
        const response = await axios.get('/auth/validate', { withCredentials: true });
        if (response.data.valid) {
          setUser(response.data.user);
        } else {
          navigate('/login');
        }
      } catch (error) {
        navigate('/login');
      }
    };
    validateUser();
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return <h1>Welcome to your Dashboard, {user.name}!</h1>;
};

export default Validater;
