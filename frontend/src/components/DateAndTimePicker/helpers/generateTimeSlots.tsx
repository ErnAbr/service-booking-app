export const generateTimeSlots = () => {
  const slots = [];
  for (let i = 8; i <= 22; i++) {
    const time = i < 10 ? `0${i}:00` : `${i}:00`;
    slots.push(time);
  }
  return slots;
};
