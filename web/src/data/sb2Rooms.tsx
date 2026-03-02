export interface RoomData {
  name: string;
  type: string;
  floor: number;
  building: string;
}

export const sb2Rooms: RoomData[] = [
  { name: "ALS Office", type: "Academic Program Office", floor: 1, building: "SB2" },
  { name: "DRRM Office", type: "Safety and Emergency Office", floor: 1, building: "SB2" },
  { name: "Registrar's Office", type: "Administrative Office", floor: 1, building: "SB2" },
  { name: "SB2 201", type: "Classroom", floor: 2, building: "SB2" },
  { name: "SB2 202", type: "Classroom", floor: 2, building: "SB2" },
  { name: "SB2 203", type: "Classroom", floor: 2, building: "SB2" },
  { name: "SB2 204", type: "Classroom", floor: 2, building: "SB2" },
  { name: "SB2 301", type: "Classroom", floor: 3, building: "SB2" },
  { name: "SB2 302", type: "Classroom", floor: 3, building: "SB2" },
  { name: "SB2 303", type: "Classroom", floor: 3, building: "SB2" },
  { name: "SB2 304", type: "Classroom", floor: 3, building: "SB2" },
  { name: "SB2 401", type: "Classroom", floor: 4, building: "SB2" },
  { name: "SB2 402", type: "Classroom", floor: 4, building: "SB2" },
  { name: "SB2 403", type: "Classroom", floor: 4, building: "SB2" },
  { name: "SB2 404", type: "Classroom", floor: 4, building: "SB2" }
];

export default sb2Rooms;
