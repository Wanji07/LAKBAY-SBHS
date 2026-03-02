export interface RoomData {
  name: string;
  type: string;
  floor: number;
  building: string;
}

export const nbRooms: RoomData[] = [
  { name: "New Building 1F Restroom", type: "Restroom", floor: 1, building: "New Building" },
  { name: "NB101", type: "Classroom", floor: 1, building: "New Building" },
  { name: "NB102", type: "Classroom", floor: 1, building: "New Building" },
  { name: "NB103", type: "Classroom", floor: 1, building: "New Building" },
  { name: "NB104", type: "Classroom", floor: 1, building: "New Building" },
  { name: "NB105", type: "Classroom", floor: 1, building: "New Building" },
  { name: "NB106", type: "Classroom", floor: 1, building: "New Building" },
  { name: "New Building 2F Restroom", type: "Restroom", floor: 2, building: "New Building" },
  { name: "NB201", type: "Classroom", floor: 2, building: "New Building" },
  { name: "NB202", type: "Classroom", floor: 2, building: "New Building" },
  { name: "NB203", type: "Classroom", floor: 2, building: "New Building" },
  { name: "NB204", type: "Classroom", floor: 2, building: "New Building" },
  { name: "NB205", type: "Classroom", floor: 2, building: "New Building" },
  { name: "NB206", type: "Classroom", floor: 2, building: "New Building" },
  { name: "New Building 3F Restroom", type: "Restroom", floor: 3, building: "New Building" },
  { name: "NB301", type: "Classroom", floor: 3, building: "New Building" },
  { name: "NB302", type: "Classroom", floor: 3, building: "New Building" },
  { name: "NB303", type: "Classroom", floor: 3, building: "New Building" },
  { name: "NB304", type: "Classroom", floor: 3, building: "New Building" },
  { name: "NB305", type: "Classroom", floor: 3, building: "New Building" },
  { name: "NB306", type: "Classroom", floor: 3, building: "New Building" },
  { name: "New Building 4F Restroom", type: "Restroom", floor: 4, building: "New Building" },
  { name: "New Building Filipino Department", type: "Faculty", floor: 4, building: "New Building" },
  { name: "NB401", type: "Classroom", floor: 4, building: "New Building" },
  { name: "NB402", type: "Classroom", floor: 4, building: "New Building" },
  { name: "NB403", type: "Classroom", floor: 4, building: "New Building" },
  { name: "NB404", type: "Classroom", floor: 4, building: "New Building" },
  { name: "NB405", type: "Classroom", floor: 4, building: "New Building" },
  { name: "NB406", type: "Classroom", floor: 4, building: "New Building" }
];

export default nbRooms;
