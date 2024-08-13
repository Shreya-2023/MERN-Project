import React, { useState, useEffect } from 'react';
import axiosInstance from './server'; // Import your Axios instance

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile data when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axiosInstance.get('/checkAuth'); // Assuming this endpoint returns user profile data
        setProfileData(response.data);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render profile data if available
  return (
    <div>
      <h2>User Profile</h2>
      {profileData ? (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          {/* Add more profile details here */}
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
};

export default Profile;
