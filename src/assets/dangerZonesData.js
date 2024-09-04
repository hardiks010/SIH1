// const dangerZonesData=[
//     {
//       "id": 1,
//       "center": [28.4595, 77.0266],
//       "radius": 300,
//       "startTime": "18:00",
//       "endTime": "02:00",
//       "activeMonths": [1, 2, 3, 10, 11, 12],
//       "zoneName": "Sector 29 Market"
//     },
//     {
//       "id": 2,
//       "center": [28.4679, 77.0512],
//       "radius": 300,
//       "startTime": "19:00",
//       "endTime": "04:00",
//       "activeMonths": [1, 2, 6, 7, 8, 12],
//       "zoneName": "Cyber City"
//     },
//     {
//       "id": 3,
//       "center": [28.4793, 77.0735],
//       "radius": 300,
//       "startTime": "20:00",
//       "endTime": "03:00",
//       "activeMonths": [1, 5, 6, 7, 11, 12],
//       "zoneName": "MG Road Metro Station"
//     },
//     {
//       "id": 4,
//       "center": [28.4212, 77.0632],
//       "radius": 300,
//       "startTime": "17:00",
//       "endTime": "23:00",
//       "activeMonths": [3, 4, 5, 10, 11, 12],
//       "zoneName": "Sohna Road"
//     },
//     {
//       "id": 5,
//       "center": [28.4599, 77.0586],
//       "radius": 300,
//       "startTime": "19:00",
//       "endTime": "01:00",
//       "activeMonths": [2, 3, 6, 7, 8, 12],
//       "zoneName": "Huda City Center"
//     },
//     {
//       "id": 6,
//       "center": [28.4696, 77.0694],
//       "radius": 300,
//       "startTime": "21:00",
//       "endTime": "03:00",
//       "activeMonths": [1, 2, 6, 7, 8, 12],
//       "zoneName": "DLF Phase 3"
//     },
//     {
//       "id": 7,
//       "center": [28.4545, 77.0508],
//       "radius": 300,
//       "startTime": "18:00",
//       "endTime": "00:00",
//       "activeMonths": [3, 4, 5, 10, 11, 12],
//       "zoneName": "Sector 14"
//     },
//     {
//       "id": 8,
//       "center": [28.4527, 77.0534],
//       "radius": 300,
//       "startTime": "20:00",
//       "endTime": "04:00",
//       "activeMonths": [2, 3, 6, 7, 8, 11],
//       "zoneName": "IFFCO Chowk"
//     },
//     {
//       "id": 9,
//       "center": [28.4825, 77.0575],
//       "radius": 300,
//       "startTime": "19:00",
//       "endTime": "03:00",
//       "activeMonths": [1, 2, 3, 7, 8, 11],
//       "zoneName": "Udyog Vihar"
//     },
//     {
//       "id": 10,
//       "center": [28.4695, 77.0914],
//       "radius": 300,
//       "startTime": "18:00",
//       "endTime": "02:00",
//       "activeMonths": [3, 4, 5, 6, 10, 12],
//       "zoneName": "Sushant Lok"
//     }
//   ]
  
//   export default dangerZonesData;


const dangerZonesData = [
    {
      id: 1,
      zoneName: "MG Road Metro Station",
      center: [28.479799, 77.072626],
      radius: 500, // radius in meters
      startTime: "00:00", // Start time (24-hour format)
      endTime: "23:59", // End time (24-hour format)
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // All months
    },
    {
      id: 2,
      zoneName: "IFFCO Chowk",
      center: [28.469348, 77.067522],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 3,
      zoneName: "Sikanderpur Metro Station",
      center: [28.481615, 77.084981],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 4,
      zoneName: "Huda City Centre",
      center: [28.459497, 77.072663],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 5,
      zoneName: "Cyber City",
      center: [28.494610, 77.088108],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 6,
      zoneName: "Gurgaon Railway Station",
      center: [28.456257, 77.028959],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 7,
      zoneName: "Sector 29 Market",
      center: [28.466114, 77.068343],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 8,
      zoneName: "Sohna Road",
      center: [28.411055, 77.046203],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 9,
      zoneName: "DLF Phase 3",
      center: [28.495295, 77.090155],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 10,
      zoneName: "Sector 44",
      center: [28.459502, 77.073122],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 10,
      zoneName: "New Delhi",
      center: [28.611149, 77.204926],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      
    },
  
    
        {
          "id": 1,
          "zoneName": "India Gate, New Delhi",
          "center": [28.6139, 77.2290],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Popular tourist spot with reported incidents of harassment and petty crime, especially during evenings."
        },
        {
          "id": 2,
          "zoneName": "Hauz Khas Village, New Delhi",
          "center": [28.5535, 77.2004],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Known for its nightlife, which has seen reports of harassment and assault in late hours."
        },
        {
          "id": 3,
          "zoneName": "Khan Market, New Delhi",
          "center": [28.6054, 77.2250],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Crowded market area with occasional reports of harassment and theft."
        },
        {
          "id": 4,
          "zoneName": "Paharganj, New Delhi",
          "center": [28.6448, 77.2167],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Busy area with many tourists, known for incidents of harassment and petty crime."
        },
        {
          "id": 5,
          "zoneName": "Saket, New Delhi",
          "center": [28.5270, 77.2175],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Shopping and entertainment hub with reported cases of street harassment and assaults."
        },
        {
            id: 11,
            zoneName: "Dwarka Sec 21",
            center: [28.552234840518505, 77.0583573325443],
            radius: 500,
            startTime: "00:17",
            endTime: "00:18",
            activeMonths: [9],
        },
        {
          "id": 7,
          "zoneName": "MG Road, Gurgaon",
          "center": [28.4854, 77.0920],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Major commercial area with high foot traffic, known for incidents of harassment and theft."
        },
        {
          "id": 8,
          "zoneName": "Sector 44, Gurgaon",
          "center": [28.4595, 77.0731],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Busy area with reports of harassment, especially around markets and bus stops."
        },
        {
          "id": 9,
          "zoneName": "Sohna Road, Gurgaon",
          "center": [28.4111, 77.0462],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Known for both residential and commercial activities, with occasional harassment incidents reported."
        },
        {
          "id": 10,
          "zoneName": "Cyber Hub, Gurgaon",
          "center": [28.4882, 77.0846],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "IT hub with high footfall, known for harassment cases during late hours."
        },
        {
          "id": 11,
          "zoneName": "Udyog Vihar, Gurgaon",
          "center": [28.4856, 77.0972],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Industrial area with reports of harassment and petty crime, particularly around work hours."
        },
        {
          "id": 12,
          "zoneName": "Galleria Market, Gurgaon",
          "center": [28.4910, 77.0830],
          "radius": 500,
          "startTime": "18:00",
          "endTime": "23:59",
          "activeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "description": "Popular market area with known incidents of harassment and theft."
        }
      
      

  ];
  
  export default dangerZonesData;