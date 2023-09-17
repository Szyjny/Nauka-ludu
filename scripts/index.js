// Importuje sobie rzeczy z innego pliku, jako iż w pliku z którego 
// importuję napisałem "export default", to tutaj domyślnie przesyłam 
// se tą funkcję, tutaj mogę se byle jak nazwać, nawet "pterodaktyl", 
// a i tak to samo się wykona
import TicTacToe from "./TicTacToe.js";

// Najpierw zawsze musisz importować w js, bo inaczej nic ci nie zadziała
console.log("✅ Connection index.js file");
TicTacToe();
