import type { Property } from "../../type/type/property/property";

import propertyimg1 from "../../assets/images/Properties/property-box-img-1.png";
import propertyimg2 from "../../assets/images/Properties/property-box-img-2.png";
import propertyimg3 from "../../assets/images/Properties/property-box-img-3.png";
import propertyimg4 from "../../assets/images/Properties/property-box-img-4.png";
import propertyimg5 from "../../assets/images/Properties/property-box-img-5.png";
import propertyimg6 from "../../assets/images/Properties/property-box-img-6.png";

const properties: Property[] = [
  {
    id:1,
     title: "Duplex House",
      img: propertyimg1,
      price: "45L",
      location: "Barasat, Chapadali More",
      status: "Ready To Move",
      sqft: "800",
      bhk: "2BHK",
     
  },
   {id:2,
      title: "Apartments",
      img: propertyimg2,
      price: "50L",
      location: "Barasat, Colony More",
      status: "Under Construction",
      sqft: "1200",
      bhk: "2BHK",
      
    },
    {id:3,
      title: "Housing Complex",
      img: propertyimg3,
      price: "52L",
      location: "Barasat, Hatkhola",
      status: "Ready To Move",
      sqft: "1000",
      bhk: "2BHK",
    },
    {id:4,
      title: "Bunglows",
      img: propertyimg4,
      price: "55L",
      location: "Barasat, Station Road",
      status: "Ready To Move",
      sqft: "2200",
      bhk: "2BHK",
    },
    {id:5,
      title: "Single Flats",
      img: propertyimg5,
      price: "52L",
      location: "Barasat, Noapara",
      status: "Ready To Move",
      sqft: "1100",
      bhk: "2BHK",
    },
    {id:6,
      title: "Duplex House",
      img: propertyimg6,
      price: "60L",
      location: "Barasat, Pioneer Park",
      status: "Ready To Move",
      sqft: "2000",
      bhk: "2BHK",
    },

];

export default properties;