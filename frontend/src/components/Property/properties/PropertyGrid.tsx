import { useEffect } from "react";
import { useAppDispatch, useAppSeletor } from "../../../services/helper/reduxstore";
import { getProperties } from "../../../store/slices/property.slice";
import type { Property } from "../../../type/type/property/property";
import PropertyCard from "./PropertyCard";


const PropertyGrid = () => {
      const dispatch = useAppDispatch();
      const { items, loading, error } = useAppSeletor((state) => state.property);

      useEffect(() => {
        dispatch(getProperties());
      }, [dispatch]);

      const properties: Property[] = items.map((item) => ({
        id: item._id,
        title: item.title,
        img: item.image ?? "https://placehold.co/600x400?text=Property",
        price: `₹${item.price.toLocaleString("en-IN")}`,
        location: item.address,
        status: "Available",
        sqft: "--",
        bhk: "--",
        likesCount: item.likesCount
      }));

      if (loading) {
        return <p className="mb-10">Loading properties...</p>;
      }

      if (error) {
        return <p className="mb-10 text-red-600">{error}</p>;
      }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {properties.map((data)=>(
<PropertyCard  key={data.id} data={data}/>
        ))}

    </div>
  )
}

export default PropertyGrid
