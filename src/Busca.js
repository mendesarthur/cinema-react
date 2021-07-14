import React from 'react'
import './Busca.css'

function Busca() {
    return(
    <div className='root'>
    <nav>
        <a href="index.html" className="brand">Cinema</a>
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
				<img className="poster" src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg" alt="Poster" />
				<span className="title">Matrix</span>
				<span className="year">1993</span>
			</li>
			
			<li>
				<img className="poster" src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg" alt="Poster" />
				<span className="title">Matrix</span>
				<span className="year">1993</span>
			</li>
			<li>
				<img className="poster" src="https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg" alt="Poster" />
				<span className="title">Matrix</span>
				<span className="year">1993</span>
			</li>
			
			<li>
			<img className="poster" src="https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg" alt="Poster" />
			<span className="title"></span>
			<span className="year"></span>
			</li>

			<li>
			<img className="poster" src="https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg" alt="Poster" />
			<span className="title"></span>
			<span className="year"></span>
			</li>

			<li>
			<img className="poster" src="https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg" alt="Poster" />
			<span className="title"></span>
			<span className="year"></span>
			</li>

		</ul>
	</main>
    </div>
    )

}

export default Busca