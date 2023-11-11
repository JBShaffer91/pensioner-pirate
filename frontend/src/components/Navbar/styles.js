const styles = {
  navbar: {
    backgroundImage: 'url(/images/NassauShip.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    backgroundColor: '#ffa34d',
    borderBottom: '5px solid #d27c2c',
    padding: '0.5rem 0',
  },
  navDropdown: {
    color: '#ffffff', // White color for the text
    textShadow: '2px 2px 4px #000000', // Black text shadow for readability
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    borderRadius: '5px', // Rounded corners
    margin: '5px', // Space between links
    textDecoration: 'none', // Remove underline
    padding: '8px 16px', // Consistent padding with other links
    fontSize: '1.1rem', // Consistent font size with other links
    fontFamily: "'Old English Text MT', serif", // Consistent font family with other links
  },
  navDropdownItem: {
    color: '#ffffff', // White color for dropdown items
    // Additional styles for dropdown items, if needed
  },
  navbarBrand: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    order: 2, // Logo below the links
  },
  navbarLogo: {
    maxHeight: '120px',
  },
  navLinks: {
    display: 'flex',
    color: '#ffffff', // White color for the text
    justifyContent: 'space-around',
    width: '100%',
    padding: '0.5rem 0',
    order: 1, // Links above the logo
  },
  navLink: {
    color: '#ffffff', // White color for the text
    padding: '8px 16px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontFamily: "'Old English Text MT', serif",
    textShadow: '2px 2px 4px #000000', // Black text shadow for readability
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    borderRadius: '5px', // Optional, for rounded corners
    margin: '5px', // Space between links
  },
  navbarToggler: {
    marginLeft: 'auto',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff', // White color for the text
  },
  // Responsive styles for smaller screens
  navbarMobile: {
    navLinks: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    navLink: {
      textAlign: 'center',
      width: '100%',
      padding: '12px 20px',
      color: '#ffffff', // White color for the text
    },
    navbarToggler: {
      marginLeft: 'auto',
    },
  },
};

export default styles;
