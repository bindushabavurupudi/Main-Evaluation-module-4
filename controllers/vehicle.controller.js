import { supabase } from "../config/supabase.js";

export const addVehicle = async (req, res)=>{
    const {name, registration_number, allowed_passengers, rate_per_km, owner_id } = req.body;

    const {data, error} = await supabase.from("vehicles").insert([ {name, registration_number, allowed_passengers, rate_per_km, owner_id }]);

    if(error) return res.status(400).json({error});

    res.status(201).json({message: "Vehicle added"});
};

    export const assignDriver = async (req, res)=>{
        const {driver_id} = req.body;
        const {vehicleId} = req.params;

        const {error} = await supabase.from("vehicles")
        .update({driver_id}).eq("id", vehicleId);
         if(error) return res.status(400).json({error});

    res.status(201).json({message: "Driver assigned"});

    }
