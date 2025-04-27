'use server'

import { getPayload } from "payload";
import config from "@payload-config"; 
import PlacementsClient from "./PlacementClient";

async function fetchPlacements() {
  try {
    const payload = await getPayload({ config });
    const placements = await payload.find({
      collection: 'placements',
    });
    
    return placements.docs;
  } catch (error) {
    console.error("Error fetching placements data:", error);
    return [];
  }
}

export default async function Placements() {
  const placements = await fetchPlacements();
  
  // Get unique years for filtering
  const years = [...new Set(placements.map(placement => placement.year))].sort((a, b) => b - a);
  
  return <PlacementsClient placements={placements} years={years} />;
}