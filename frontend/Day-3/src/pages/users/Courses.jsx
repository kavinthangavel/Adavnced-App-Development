import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../assets/css/Courses.css'; // Import the CSS file for Courses page


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulated data for demonstration
    const sampleCourses = [
      { id: 1, title: 'Course 1', description: 'Short description for Course 1', duration: '48 months', price: '$99', image: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Course 2', description: 'Short description for Course 2', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Course 3', description: 'Short description for Course 3', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 4, title: 'Course 4', description: 'Short description for Course 4', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 5, title: 'Course 5', description: 'Short description for Course 5', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 6, title: 'Course 6', description: 'Short description for Course 6', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 7, title: 'Course 7', description: 'Short description for Course 7', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 8, title: 'Course 8', description: 'Short description for Course 8', duration: '48 months', price: '$79', image: 'https://via.placeholder.com/150' },
      { id: 9, title: 'Course 9', description: 'Short description for Course 9', duration: '2 months', price: '$79', image: 'https://via.placeholder.com/150' },
      // Add more sample courses as needed
    ];

    // Set the courses state with the sample data
    setCourses(sampleCourses);
  }, []);

  const handleCardClick = (courseId, event) => {
    setSelectedCourse(courseId === selectedCourse ? null : courseId);
    
    // Calculate the position to center the popup on the screen
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    
    setPopupPosition({ x, y });
  };


  const handleClosePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses-container">
 
      {courses.map(course => (
        <div key={course.id}>
          <div className="course-card" onClick={(event) => handleCardClick(course.id, event)}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
            </div>
          </div>
          {selectedCourse === course.id && <div className="popup-overlay" onClick={handleClosePopup}></div>}
          {selectedCourse === course.id && (
            <div className="popup-card" style={{ top: popupPosition.y, left: popupPosition.x }}>
              <span className="popup-close" onClick={handleClosePopup}><CloseIcon /></span>
              <h2 className="popup-title">{course.title}</h2>
              <p className="popup-description">{course.description}</p>
              <div className="popup-meta">
                <p className="popup-duration">Duration: {course.duration}</p>
                <p className="popup-price">Price: {course.price}</p>
              </div>
            </div>
          )}
        </div>
      ))}
   
    </div>
  );
};

export default Courses;
