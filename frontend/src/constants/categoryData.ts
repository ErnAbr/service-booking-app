import { MdOutlineCleaningServices, MdPlumbing, MdElectricBolt } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";

export const categories = [
  { imageUrl: MdOutlineCleaningServices, backgroundColor: "#BA1FED", categoryName: "Cleaning" },
  { imageUrl: GiAutoRepair, backgroundColor: "#EEB625", categoryName: "Repair" },
  { imageUrl: PiPaintBrushHouseholdBold, backgroundColor: "#049B9D", categoryName: "Painting" },
  { imageUrl: FaTruckMoving, backgroundColor: "#E53E3E", categoryName: "Shifting" },
  { imageUrl: MdPlumbing, backgroundColor: "#E99114", categoryName: "Plumbing" },
  { imageUrl: MdElectricBolt, backgroundColor: "#0064C2", categoryName: "Electric" },
];
