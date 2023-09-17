console.log("✅ Connection TicTacToe.js file");

export default function () {
	const GAME_CONTAINER = document.getElementById("TicTacToe_game");
	let score = GAME_CONTAINER.querySelector("#TicTacToe_score");
	let blocks = GAME_CONTAINER.querySelectorAll(".TicTacToe_block");
	// Dla obu elementów przypisuje wartości odpowiednie im index-u
	let [x_wins, o_wins] = [0, 0];
	// Tworzy tablicę 9 elementową, w każdym elemencie wartość jest uzupełniana "?"
	let fields = Array(9).fill("?");
	let turn = "X";

	// Ten "for" przeczesuje całą tablicę, nie ma 
	// iterator-a obrotu, element na którym jest, jest przechowywany w zmiennej block
	for (let block of blocks) {
		// "element" to informacje o kliknięciu, a nie kliknięty element
		block.addEventListener("click", (element) => {
			console.clear();
			console.log("clicked");

			let clicked_block = element.target; // Wyciągnięcie klikniętego elementu
			let clicked_block_value = clicked_block.querySelector("p").title;
			let clicked_block_index = parseInt(
				// "charAt({index znaku})" -> wyciąga znak z danego text-u
				clicked_block.id.charAt(clicked_block.id.length - 1)
			);

			if (checkClicked()) {
				console.log(
					`fields[${clicked_block_index}] => ${fields[clicked_block_index]}\nclicked_block_value => ${clicked_block_value}`
				);

				block.classList.remove("unselected");
				block.classList.add(`selected_by_${turn}`);

				fields[clicked_block_index] = turn;
				checkScore();

				if (turn === "X") turn = "O";
				else turn = "X";
			}

			// Pls, używajcie tego do wypisywania tablic
			console.table(fields);

			function checkClicked() {
				if (fields[clicked_block_index] === "?") {
					console.log("✅ possible change");
					return true;
				} else {
					console.log("⛔ unpossible change");
					return false;
				}
			}

			function gameRestart() {
				for (let block of blocks) {
					block.classList.remove("selected_by_X");
					block.classList.remove("selected_by_O");
					block.classList.add("unselected");
				}

				// Każdą danę w tablicy podmienia na "?"
				fields.fill("?");
				score.innerText = `${x_wins} : ${o_wins}`;

				// Tworzymy nowy obiekt "Audio", w jego "()" podajemy 
				// ścieżkę do dzwieku, no i od razu odpalamy ten dźwięk funkcją "play()" 
				new Audio("../sound/game_restart_sound.wav").play();
			}

			function checkScore() {
				//Poziome linie
				for (let i = 0; i < 3; i++) {
					if (
						fields[i * 3] === turn &&
						fields[i * 3 + 1] === turn &&
						fields[i * 3 + 2] === turn
					) {
						whoseWin();
					}
				}
				//Pionowe linie
				for (let j = 0; j < 3; j++) {
					if (
						fields[j] === turn &&
						fields[j + 3] === turn &&
						fields[j + 6] === turn
					) {
						whoseWin();
					}
				}
				//Przekątne
				if (
					fields[0] === turn &&
					fields[4] === turn &&
					fields[8] === turn
				) {
					whoseWin();
				}
				if (
					fields[2] === turn &&
					fields[4] === turn &&
					fields[6] === turn
				) {
					whoseWin();
				}

				let selected_positions = 0;
				for (let position of fields) {
					if (position !== "?") selected_positions++;
				}

				if (selected_positions === 9) return gameRestart();

				function whoseWin() {
					if (turn === "X") x_wins++;
					else o_wins++;

					gameRestart();
				}
			}
		});

		block.querySelector("p").addEventListener("click", (event) => {
			// To sprawia że jak kliknę w napis zamiast normalnie w div-a, to nam się nie wykona kod wyżej, a ma się nie wykonywać bo to wszystko rozdupczy 
			event.stopPropagation();
		});
	}
}
