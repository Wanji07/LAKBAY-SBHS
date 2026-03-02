
export interface RoomData {
  name: string;
  type: string;
  floor: number;
  building: string;
}

export const mathayRooms: RoomData[] = [
  { name: "Girl's Restroom", type: "Restroom", floor: 1, building: "Mathay" },
  { name: "Boy's Restroom", type: "Restroom", floor: 1, building: "Mathay" },
  { name: "Cooperative", type: "Administrative Building", floor: 1, building: "Mathay" },
  { name: "Ehemplo Headquarters", type: "Club Building", floor: 1, building: "Mathay" },
  { name: "Finance Office", type: "Administrative Building", floor: 1, building: "Mathay" },
  { name: "Paragon Headquarters", type: "Club Building", floor: 1, building: "Mathay" },
  { name: "Principal's Office", type: "Administrative Building", floor: 1, building: "Mathay" },
  { name: "MAPEH Faculty", type: "Faculty", floor: 1, building: "Mathay" },
  { name: "Library", type: "Room", floor: 2, building: "Mathay" },
  { name: "MT201", type: "Classroom", floor: 2, building: "Mathay" },
  { name: "Math Faculty", type: "Faculty", floor: 2, building: "Mathay" },
  { name: "MT202", type: "Classroom", floor: 2, building: "Mathay" },
  { name: "MT203", type: "Classroom", floor: 2, building: "Mathay" },
  { name: "SHS Faculty", type: "Faculty", floor: 2, building: "Mathay" },
  { name: "MT301", type: "Classroom", floor: 3, building: "Mathay" },
  { name: "MT302", type: "Classroom", floor: 3, building: "Mathay" },
  { name: "MT303", type: "Classroom", floor: 3, building: "Mathay" },
  { name: "MT304", type: "Classroom", floor: 3, building: "Mathay" },
  { name: "SHS Faculty 1", type: "Faculty", floor: 3, building: "Mathay" },
  { name: "SHS Faculty 2", type: "Faculty", floor: 3, building: "Mathay" },
  { name: "TLE Faculty", type: "Faculty", floor: 3, building: "Mathay" }
];

export default mathayRooms;
