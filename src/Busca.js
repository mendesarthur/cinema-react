import React from 'react'
import './Busca.css'

function Busca() {
    return(
    <div class='root'>
    <nav>
        <a href="index.html" class="brand">Cinema</a>
        <a href="busca.html">Busca</a>
        <a href="perfil.html">Perfil</a>
        <a href="contato.html">Contato</a>
    </nav>
	<main>
		<form action="">
			<input type="text" />
			<button>Buscar</button>
		</form>
		<ul>
			<li>
				<img class="poster" src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg" alt="Poster" />
				<span class="title">Matrix</span>
				<span class="year">1993</span>
			</li>
			<li>
				<img class="poster" src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg" alt="Poster" />
				<span class="title">Matrix</span>
				<span class="year">1993</span>
			</li>
			<li>
				<img class="poster" src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg" alt="Poster" />
				<span class="title">Matrix</span>
				<span class="year">1993</span>
			</li>
		</ul>
	</main>
    </div>
    )

}

export default Busca