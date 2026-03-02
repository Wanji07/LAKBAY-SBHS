export interface RoomData {
  name: string;
  type: string;
  floor: number;
  building: string;
}

export const sb1Rooms: RoomData[] = [
  { name: "Girl's Restroom", type: "Restroom", floor: 1, building: "SB1" },
  { name: "Boy's Restroom", type: "Restroom", floor: 1, building: "SB1" },
  { name: "SHS Computer Laboratory", type: "Laboratory", floor: 1, building: "SB1" },
  { name: "Audio Visual Room", type: "Miscellaneous", floor: 1, building: "SB1" },
  { name: "TLE Department", type: "Faculty", floor: 1, building: "SB1" },
  { name: "SB301", type: "Classroom", floor: 2, building: "SB1" },
  { name: "SB302", type: "Classroom", floor: 2, building: "SB1" },
  { name: "SB303", type: "Classroom", floor: 2, building: "SB1" },
  { name: "SB304", type: "Classroom", floor: 2, building: "SB1" },
  { name: "Araling Panlipunan Department 1", type: "Faculty", floor: 2, building: "SB1" },
  { name: "Araling Panlipunan Department 2", type: "Faculty", floor: 2, building: "SB1" },
  { name: "ESP Department", type: "Faculty", floor: 2, building: "SB1" },
  { name: "Clinic", type: "Medical Facility", floor: 3, building: "SB1" },
  { name: "English Department", type: "Faculty Room", floor: 3, building: "SB1" },
  { name: "English Department (Annex)", type: "Faculty Room", floor: 3, building: "SB1" },
  { name: "ESP Department", type: "Faculty Room", floor: 3, building: "SB1" },
  { name: "Journalism Office", type: "Club Office", floor: 3, building: "SB1" },
  { name: "Property Custodian", type: "Administrative Office", floor: 3, building: "SB1" },
  { name: "Staff Room", type: "Faculty Room", floor: 3, building: "SB1" },
  { name: "Guidance Office", type: "Student Services", floor: 3, building: "SB1" }
];

export default sb1Rooms;
