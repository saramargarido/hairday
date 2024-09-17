import { schedulesDay } from "../scheludes/load"
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()