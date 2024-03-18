import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../assets/css/Institutes.css'; // Import the CSS file for Institutes page

const Institutes = () => {
  const [institutes, setInstitutes] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulated data for demonstration
    const sampleInstitutes = [
      { id: 1, name: 'Institute 1', description: 'Short description for Institute 1', location: 'New York', rating: 4.5 ,image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Institute 2', description: 'Short description for Institute 2', location: 'Los Angeles', rating: 4.2 , image: 'https://via.placeholder.com/150'},
      { id: 3, name: 'Institute 3', description: 'Short description for Institute 3', location: 'Chicago', rating: 4.8 , image: 'https://via.placeholder.com/150'},
      { id: 4, name: 'Institute 4', description: 'Short description for Institute 4', location: 'Houston', rating: 4.0 , image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Institute 5', description: 'Short description for Institute 5', location: 'Philadelphia', rating: 4.7 , image: 'https://via.placeholder.com/150'},
      { id: 6, name: 'Institute 6', description: 'Short description for Institute 6', location: 'Phoenix', rating: 4.3 , image: 'https://via.placeholder.com/150'},
      // Add more sample institutes as needed
    ];

    // Set the institutes state with the sample data
    setInstitutes(sampleInstitutes);
  }, []);

  const handleCardClick = (instituteId, event) => {
    setSelectedInstitute(instituteId === selectedInstitute ? null : instituteId);
    
    // Calculate the position to center the popup on the screen
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    
    setPopupPosition({ x, y });
  };

  const handleClosePopup = () => {
    setSelectedInstitute(null);
  };

  return (
    <div className="institutes-container">
      {institutes.map(institute => (
        <div key={institute.id}>
          <div className="institute-card" onClick={(event) => handleCardClick(institute.id, event)}>
            <div className="institute-details">
              <h2 className="institute-name">{institute.name}</h2>
              <p className="institute-location">Location: {institute.location}</p>
              <img src={institute.image} alt={institute.name} className="institute-image" />
            </div>
          </div>
          {selectedInstitute === institute.id && <div className="popup-overlay" onClick={handleClosePopup}></div>}
          {selectedInstitute === institute.id && (
            <div className="popup-card" style={{ top: popupPosition.y, left: popupPosition.x }}>
              <span className="popup-close" onClick={handleClosePopup}><CloseIcon /></span>
              <h2 className="popup-title">{institute.name}</h2>
              <p className="popup-description">{institute.description}</p>
              <div className="popup-meta">
                <p className="popup-location">Location: {institute.location}</p>
                <p className="popup-rating">Rating: {institute.rating}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Institutes;
