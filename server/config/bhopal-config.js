// RoomBridge - Housing Platform Configuration
export const HOUSING_CONFIG = {
  // Popular Areas with coordinates
  AREAS: {
    TECH_HUB: {
      name: "Tech Hub",
      zone: "Zone 1",
      pincode: "560001",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      type: "Commercial",
      features: ["Tech Companies", "Restaurants", "Banks", "Offices"],
      averageRent: { single: 15000, double: 25000, family: 35000 }
    },
    RESIDENTIAL_AREA: {
      name: "Residential Area", 
      zone: "Zone 2",
      pincode: "462003",
      coordinates: { lat: 23.2442, lng: 77.4095 },
      type: "Government",
      features: ["Government Offices", "Schools", "Hospitals"],
      averageRent: { single: 7000, double: 10000, family: 15000 }
    },
    KOLAR_ROAD: {
      name: "Kolar Road",
      zone: "Zone 3", 
      pincode: "462042",
      coordinates: { lat: 23.1793, lng: 77.4445 },
      type: "Educational",
      features: ["AIIMS", "Medical Colleges", "Student Housing"],
      averageRent: { single: 6000, double: 9000, family: 14000 }
    },
    ARERA_COLONY: {
      name: "Arera Colony",
      zone: "Zone 4",
      pincode: "462016", 
      coordinates: { lat: 23.2295, lng: 77.4422 },
      type: "Mixed",
      features: ["Residential", "Markets", "Schools"],
      averageRent: { single: 7500, double: 11000, family: 16000 }
    },
    NEW_MARKET: {
      name: "New Market",
      zone: "Zone 5",
      pincode: "462001",
      coordinates: { lat: 23.2685, lng: 77.4030 },
      type: "Commercial",
      features: ["Markets", "Business Centers", "Transport Hub"],
      averageRent: { single: 8500, double: 13000, family: 19000 }
    },
    GOVINDPURA: {
      name: "Govindpura",
      zone: "Zone 6", 
      pincode: "462023",
      coordinates: { lat: 23.2054, lng: 77.4743 },
      type: "Educational",
      features: ["Barkatullah University", "Student Areas"],
      averageRent: { single: 5500, double: 8000, family: 12000 }
    },
    SHYAMLA_HILLS: {
      name: "Shyamla Hills",
      zone: "Zone 7",
      pincode: "462013",
      coordinates: { lat: 23.2394, lng: 77.4056 },
      type: "Premium",
      features: ["VIP Residences", "Government Quarters", "Secretariat"],
      averageRent: { single: 12000, double: 18000, family: 25000 }
    },
    UPPER_LAKE: {
      name: "Upper Lake Area",
      zone: "Zone 8",
      pincode: "462008",
      coordinates: { lat: 23.2661, lng: 77.3910 },
      type: "Scenic",
      features: ["Lakefront", "Boat Club", "Tourism"],
      averageRent: { single: 10000, double: 15000, family: 22000 }
    }
  },

  // Educational Institutions
  INSTITUTIONS: {
    AIIMS_BHOPAL: {
      name: "AIIMS Bhopal",
      coordinates: { lat: 23.1793, lng: 77.4445 },
      area: "Kolar Road",
      type: "Medical College",
      nearbyAreas: ["Kolar Road", "Govindpura", "Ratibad"]
    },
    MANIT: {
      name: "MANIT",
      coordinates: { lat: 23.2156, lng: 77.4735 },
      area: "Link Road",
      type: "Engineering College", 
      nearbyAreas: ["Govindpura", "Link Road", "Misrod"]
    },
    BARKATULLAH_UNIVERSITY: {
      name: "Barkatullah University",
      coordinates: { lat: 23.2054, lng: 77.4743 },
      area: "Govindpura",
      type: "University",
      nearbyAreas: ["Govindpura", "Ratibad", "Misrod"]
    },
    LNCT: {
      name: "LNCT Group",
      coordinates: { lat: 23.1615, lng: 77.4422 },
      area: "Kolar Road",
      type: "Engineering College",
      nearbyAreas: ["Kolar Road", "Ratibad"]
    }
  },

  // Transportation
  TRANSPORT: {
    BRTS_STATIONS: [
      "Hamidia Hospital", "Board Office", "Roshanpura", "Polytechnic Square",
      "ISBT", "Char Imli", "Valley View", "Awadhpuri", "Ashoka Garden"
    ],
    AUTO_RATES: {
      basefare: 25,
      perKm: 12,
      waitingCharges: 5
    },
    BUS_ROUTES: {
      "Route 1": ["MP Nagar", "TT Nagar", "Char Imli"],
      "Route 2": ["New Market", "Hamidia Hospital", "Kolar Road"],
      "Route 3": ["Shyamla Hills", "Board Office", "Govindpura"]
    }
  },

  // Emergency Services
  EMERGENCY: {
    POLICE: {
      control_room: "100",
      traffic_police: "103", 
      women_helpline: "1091"
    },
    MEDICAL: {
      ambulance: "108",
      aiims_emergency: "0755-2672342",
      hamidia_hospital: "0755-2540774"
    },
    FIRE: {
      fire_brigade: "101",
      central_fire_station: "0755-2553285"
    }
  },

  // Local Services
  SERVICES: {
    FOOD_DELIVERY: ["Zomato", "Swiggy", "Dominos"],
    GROCERY: ["BigBazaar", "Reliance Fresh", "More Supermarket"],
    HOSPITALS: ["AIIMS", "Hamidia Hospital", "Bansal Hospital", "Chirayu Medical"],
    BANKS: ["SBI", "HDFC", "ICICI", "PNB", "Axis Bank"]
  },

  // Weather Patterns
  WEATHER: {
    MONSOON_MONTHS: ["June", "July", "August", "September"],
    PEAK_SUMMER: ["April", "May"],
    WINTER: ["December", "January", "February"],
    FLOOD_PRONE_AREAS: ["Lower areas near Kaliasot Dam", "Some parts of Govindpura"]
  },

  // Cultural Events
  FESTIVALS: {
    MAJOR: ["Navratri", "Diwali", "Holi", "Eid", "Dussehra"],
    LOCAL: ["Bhojali", "Hartalika", "Karva Chauth"],
    CULTURAL: ["Lokrang Festival", "Bharat Bhavan Programs"]
  }
};

// Utility functions for Bhopal
export const BhopalUtils = {
  // Calculate distance between two points in Bhopal
  calculateDistance: (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  // Get nearest areas to a given coordinate
  getNearestAreas: (lat, lng, maxDistance = 5) => {
    const nearbyAreas = [];
    Object.entries(BHOPAL_CONFIG.AREAS).forEach(([key, area]) => {
      const distance = BhopalUtils.calculateDistance(lat, lng, area.coordinates.lat, area.coordinates.lng);
      if (distance <= maxDistance) {
        nearbyAreas.push({ ...area, distance, key });
      }
    });
    return nearbyAreas.sort((a, b) => a.distance - b.distance);
  },

  // Get area by pincode
  getAreaByPincode: (pincode) => {
    return Object.values(BHOPAL_CONFIG.AREAS).find(area => area.pincode === pincode);
  },

  // Calculate auto fare
  calculateAutoFare: (distance) => {
    const { basefare, perKm } = BHOPAL_CONFIG.TRANSPORT.AUTO_RATES;
    return basefare + (distance * perKm);
  }
};
