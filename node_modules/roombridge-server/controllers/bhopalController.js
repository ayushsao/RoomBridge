import { BHOPAL_CONFIG, BhopalUtils } from '../config/bhopal-config.js';

// Bhopal Area Controller - Get information about Bhopal areas
export const getBhopalAreas = async (req, res, next) => {
  try {
    const areas = Object.entries(BHOPAL_CONFIG.AREAS).map(([key, area]) => ({
      id: key,
      ...area
    }));
    
    res.status(200).json({
      success: true,
      message: "Bhopal areas retrieved successfully",
      data: areas,
      total: areas.length
    });
  } catch (error) {
    next(error);
  }
};

// Get rooms by Bhopal area
export const getRoomsByBhopalArea = async (req, res, next) => {
  try {
    const { area } = req.params;
    const areaConfig = BHOPAL_CONFIG.AREAS[area.toUpperCase()];
    
    if (!areaConfig) {
      return res.status(404).json({
        success: false,
        message: "Area not found in Bhopal"
      });
    }

    // Here you would query your database for rooms in this area
    // For now, returning sample data
    const sampleRooms = {
      area: areaConfig.name,
      averageRent: areaConfig.averageRent,
      features: areaConfig.features,
      coordinates: areaConfig.coordinates,
      availableRooms: [
        {
          id: 1,
          title: `Cozy Room in ${areaConfig.name}`,
          rent: areaConfig.averageRent.single,
          type: "Single",
          amenities: ["WiFi", "AC", "Parking"]
        },
        {
          id: 2,
          title: `Shared Accommodation in ${areaConfig.name}`,
          rent: areaConfig.averageRent.double,
          type: "Shared",
          amenities: ["WiFi", "Kitchen", "Laundry"]
        }
      ]
    };

    res.status(200).json({
      success: true,
      data: sampleRooms
    });
  } catch (error) {
    next(error);
  }
};

// Get student housing near educational institutions
export const getStudentHousing = async (req, res, next) => {
  try {
    const { institution } = req.params;
    const institutionConfig = BHOPAL_CONFIG.INSTITUTIONS[institution.toUpperCase()];
    
    if (!institutionConfig) {
      return res.status(404).json({
        success: false,
        message: "Institution not found in Bhopal"
      });
    }

    // Get nearby areas for this institution
    const nearbyAreas = institutionConfig.nearbyAreas.map(areaName => {
      const areaKey = Object.keys(BHOPAL_CONFIG.AREAS).find(key => 
        BHOPAL_CONFIG.AREAS[key].name === areaName
      );
      return BHOPAL_CONFIG.AREAS[areaKey];
    }).filter(Boolean);

    res.status(200).json({
      success: true,
      data: {
        institution: institutionConfig,
        nearbyAreas: nearbyAreas,
        recommendations: nearbyAreas.map(area => ({
          area: area.name,
          distance: BhopalUtils.calculateDistance(
            institutionConfig.coordinates.lat,
            institutionConfig.coordinates.lng,
            area.coordinates.lat,
            area.coordinates.lng
          ).toFixed(2) + " km",
          averageRent: area.averageRent,
          autoFare: "₹" + BhopalUtils.calculateAutoFare(
            BhopalUtils.calculateDistance(
              institutionConfig.coordinates.lat,
              institutionConfig.coordinates.lng,
              area.coordinates.lat,
              area.coordinates.lng
            )
          ).toFixed(0)
        }))
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get Bhopal weather information
export const getBhopalWeather = async (req, res, next) => {
  try {
    // Sample weather data - in production, integrate with weather API
    const weatherData = {
      city: "Bhopal",
      state: "Madhya Pradesh",
      temperature: "28°C",
      condition: "Partly Cloudy",
      humidity: "65%",
      windSpeed: "12 km/h",
      monsoonAlert: false,
      floodWarning: false,
      airQualityIndex: 95,
      recommendations: [
        "Good day for house hunting",
        "Moderate air quality - consider areas with good ventilation",
        "No monsoon alerts for the next 24 hours"
      ]
    };

    res.status(200).json({
      success: true,
      data: weatherData
    });
  } catch (error) {
    next(error);
  }
};

// Get Bhopal transport information
export const getBhopalTransport = async (req, res, next) => {
  try {
    const { from, to } = req.query;
    
    const transportInfo = {
      brtsStations: BHOPAL_CONFIG.TRANSPORT.BRTS_STATIONS,
      autoRates: BHOPAL_CONFIG.TRANSPORT.AUTO_RATES,
      busRoutes: BHOPAL_CONFIG.TRANSPORT.BUS_ROUTES,
      recommendations: [
        "BRTS is the most economical for daily commute",
        "Auto rickshaws are convenient for short distances",
        "Consider proximity to BRTS stations for accommodation"
      ]
    };

    if (from && to) {
      // Calculate route information
      const fromArea = Object.values(BHOPAL_CONFIG.AREAS).find(area => 
        area.name.toLowerCase().includes(from.toLowerCase())
      );
      const toArea = Object.values(BHOPAL_CONFIG.AREAS).find(area => 
        area.name.toLowerCase().includes(to.toLowerCase())
      );

      if (fromArea && toArea) {
        const distance = BhopalUtils.calculateDistance(
          fromArea.coordinates.lat,
          fromArea.coordinates.lng,
          toArea.coordinates.lat,
          toArea.coordinates.lng
        );
        
        transportInfo.routeInfo = {
          from: fromArea.name,
          to: toArea.name,
          distance: distance.toFixed(2) + " km",
          estimatedAutoFare: "₹" + BhopalUtils.calculateAutoFare(distance).toFixed(0),
          estimatedTime: Math.ceil(distance * 3) + " minutes"
        };
      }
    }

    res.status(200).json({
      success: true,
      data: transportInfo
    });
  } catch (error) {
    next(error);
  }
};

// Get emergency services information
export const getEmergencyServices = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        emergency: BHOPAL_CONFIG.EMERGENCY,
        message: "Keep these numbers handy for emergencies in Bhopal",
        importantTips: [
          "Save these numbers in your phone",
          "For medical emergencies, AIIMS Bhopal is available 24/7",
          "Women's helpline 1091 is available round the clock"
        ]
      }
    });
  } catch (error) {
    next(error);
  }
};
