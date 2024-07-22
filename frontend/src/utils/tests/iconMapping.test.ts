import { MdOutlineCleaningServices, MdPlumbing, MdElectricBolt } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";
import { iconMapping } from "../iconMapping";

describe("iconMapping", () => {
  it("should contain MdOutlineCleaningServices", () => {
    expect(iconMapping.MdOutlineCleaningServices).toBe(MdOutlineCleaningServices);
  });

  it("should contain MdPlumbing", () => {
    expect(iconMapping.MdPlumbing).toBe(MdPlumbing);
  });

  it("should contain MdElectricBolt", () => {
    expect(iconMapping.MdElectricBolt).toBe(MdElectricBolt);
  });

  it("should contain GiAutoRepair", () => {
    expect(iconMapping.GiAutoRepair).toBe(GiAutoRepair);
  });

  it("should contain PiPaintBrushHouseholdBold", () => {
    expect(iconMapping.PiPaintBrushHouseholdBold).toBe(PiPaintBrushHouseholdBold);
  });

  it("should contain FaTruckMoving", () => {
    expect(iconMapping.FaTruckMoving).toBe(FaTruckMoving);
  });
});
