import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import {
  FaTree,
  FaCar,
  FaUtensils,
  FaBolt,
  FaTrashAlt,
  FaShoppingBasket,
} from 'react-icons/fa';

const icons = {
  personal: FaTree,
  travel: FaCar,
  food: FaUtensils,
  energy: FaBolt,
  waste: FaTrashAlt,
  consumption: FaShoppingBasket,
};

const UserProfileDashboard = () => {
  const [carbonFootprint, setCarbonFootprint] = useState({
    personal: 10,
    travel: 20,
    food: 15,
    energy: 25,
    waste: 5,
    consumption: 30,
  });

  const [overallFootprintLevel, setOverallFootprintLevel] = useState('Low');

  useEffect(() => {
    const calculateOverallFootprintLevel = () => {
      const totalCarbonFootprint = Object.values(carbonFootprint).reduce(
        (acc, curr) => acc + curr,
        0
      );
      if (totalCarbonFootprint < 100) {
        setOverallFootprintLevel('Low');
      } else if (totalCarbonFootprint >= 100 && totalCarbonFootprint <= 200) {
        setOverallFootprintLevel('Medium');
      } else {
        setOverallFootprintLevel('High');
      }
    };

    calculateOverallFootprintLevel();
  }, [carbonFootprint]);

  useEffect(() => {
    // Update pie chart whenever carbonFootprint changes
    updatePieChart();
  }, [carbonFootprint]);

  const updatePieChart = () => {
    const ctx = document.getElementById('carbonPieChart');

    // Check if canvas context exists
    if (ctx) {
      // Check if there's an existing chart instance associated with the canvas
      const existingChartInstance = Chart.getChart(ctx);

      // If there's an existing chart instance, destroy it
      if (existingChartInstance) {
        existingChartInstance.destroy();
      }

      ctx.width = 400; // Set the width of the canvas
      ctx.height = 400;
      // Create new chart instance
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(carbonFootprint),
          datasets: [
            {
              label: 'Carbon Footprint',
              data: Object.values(carbonFootprint),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
              ],
            },
          ],
        },
        options: {
          responsive: false, // Disable responsiveness
          maintainAspectRatio: false, // Disable aspect ratio
          // You can also adjust other options here, like title, legend, etc.
        },
      });
    }
  };
  

  

  const [pledges, setPledges] = useState([
    { id: 1, category: 'Personal', description: 'Use reusable water bottles', completed: false, color: '#DEB887' },
    { id: 2, category: 'Travel', description: 'Use public transportation', completed: false, color: '#E9967A' },
    { id: 3, category: 'Food', description: 'Reduce meat consumption', completed: false, color: '#00CED1' },
    { id: 4, category: 'Energy', description: 'Switch to LED light bulbs', completed: false, color: '#FF7F50' },
    { id: 5, category: 'Waste', description: 'Recycle plastic, paper, and glass', completed: false, color: '#00FFFF' },
    { id: 6, category: 'Consumption', description: 'Buy locally produced goods', completed: false, color: '#ADFF2F' },
  ]);
  const handlePledgeCompletion = (id) => {
    const updatedPledges = pledges.map((pledge) =>
      pledge.id === id ? { ...pledge, completed: !pledge.completed } : pledge
    );
    setPledges(updatedPledges);
  };

  const getIcon = (category) => {
    switch (category) {
      case 'personal':
        return <FaTree />;
      case 'travel':
        return <FaCar />;
      case 'food':
        return <FaUtensils />;
      case 'energy':
        return <FaBolt />;
      case 'waste':
        return <FaTrashAlt />;
      case 'consumption':
        return <FaShoppingBasket />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            flex: 1,
            marginRight: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
          }}
        >
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px' }}>
            Carbon Footprint
          </h2>
          <div style={{ display: 'flex', flexDirection: 'row', margin:'3px' }}>
            <div style={{ flex: 1, marginTop:'20px' }}>
              {Object.entries(carbonFootprint).map(([category, value]) => (
                <div key={category} style={styles.category}>
                  <span style={{ marginRight: '5px' }}>
                    {getIcon(category)}
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}:
                  </span>{' '}
                  <span style={{ fontSize: '20px' }}>{value}</span>
                </div>
              ))}
            </div>
            <div style={{ flex: 1 , marginTop:'20px'}}>
              <div style={styles.card}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor:
                      overallFootprintLevel === 'Low'
                        ? '#2ecc71'
                        : overallFootprintLevel === 'Medium'
                        ? '#f1c40f'
                        : '#e74c3c',
                    marginRight: '10px',
                  }}
                />
                <div>
                  <h3 style={{ color: 'green' }}>Overall Footprint Level</h3>
                  <p
                    style={{
                      backgroundColor:
                        overallFootprintLevel === 'High'
                          ? '#e74c3c'
                          : overallFootprintLevel === 'Medium'
                          ? '#f1c40f'
                          : '#2ecc71',
                      color: '#fff',
                      padding: '5px',
                      borderRadius: '3px',
                      display: 'inline-block',
                      marginTop:'20px',
                      marginBottom:'20px'
                    }}
                  >
                    {overallFootprintLevel}
                  </p>
                  <p>
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed viverra ipsum vitae magna vestibulum,
                    eget fringilla massa consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <canvas id="carbonPieChart" width="400" height="400" />
          </div>
          <div style={{ textAlign: 'center', margin: '20px',fontSize:'17px' }}>
            <div style={styles.sustainableProductsBox}>
              <h3>Explore Sustainable Products</h3>
              <p>
                Check out our range of sustainable products that can help reduce
                your carbon footprint.
              </p>
              <a
                href="/sustainable-products"
                style={styles.sustainableProductsLink}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px',marginBottom: '20px' }}>Pledges</h2>
        {pledges.map((pledge) => (
          <div key={pledge.id} style={{ ...styles.pledgeCard, backgroundColor: pledge.color }}>
            <div style={{ flex: 1 }}>
              <h3>{pledge.category}</h3>
              <p>{pledge.description}</p>
            </div>
            <button
              style={{ padding: '10px 10px', backgroundColor: pledge.completed ? '#4CAF50' : '#008CBA', color: 'white', borderRadius: '5px', border: 'none',fontSize:'17px' }}
              onClick={() => handlePledgeCompletion(pledge.id)}
            >
              {pledge.completed ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
    
  );
};

const styles = {
  
  category: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  card: {
    width: '100%',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
  },
  pledgeCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '18px'
    
  },
  sustainableProductsBox: {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    background: 'linear-gradient(to bottom right, #aaf5af, #b8f0bf)',
  },
  sustainableProductsLink: {
    display: 'inline-block',
    backgroundColor: '#fe9e0d', // Dark button color
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
};

export default UserProfileDashboard;
