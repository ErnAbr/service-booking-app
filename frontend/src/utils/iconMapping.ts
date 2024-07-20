import { MdOutlineCleaningServices, MdPlumbing, MdElectricBolt } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";
import { IconType } from "react-icons";

export const iconMapping = {
  MdOutlineCleaningServices: MdOutlineCleaningServices,
  MdPlumbing: MdPlumbing,
  MdElectricBolt: MdElectricBolt,
  GiAutoRepair: GiAutoRepair,
  PiPaintBrushHouseholdBold: PiPaintBrushHouseholdBold,
  FaTruckMoving: FaTruckMoving,
} as Record<string, IconType>;
