import axios from "axios";

const router = axios.create({
	baseURL: "https://pokeapi.co/api/v2",
});

const API = {
	findPokemon: () => {
		return router.get("/pokemon");
	},
	handlePagination: (nextOrPrevURL) => {
		return axios.get(nextOrPrevURL);
	},
	findPokemonById: (id) => {
		return router.get(`/pokemon/${id}`);
	},
	findSpeciesDataById: (id) => {
		return router.get(`/pokemon-species/${id}`);
	},
	findPokemonByType: (type) => {
		return router.get(`/type/${type}`);
	},
	findGenOnePokemon: () => {
		return router.get("/pokemon/?limit=151");
	},
	findGenTwoPokemon: () => {
		return router.get("/pokemon/?offset=151&limit=100");
	},
	findGenThreePokemon: () => {
		return router.get("/pokemon/?offset=251&limit=135");
	},
	findGenFourPokemon: () => {
		return router.get("/pokemon/?offset=386&limit=107");
	},
	findGenFivePokemon: () => {
		return router.get("/pokemon/?offset=493&limit=156");
	},
	findGenSixPokemon: () => {
		return router.get("/pokemon/?offset=649&limit=72");
	},
	findGenSevenPokemon: () => {
		return router.get("/pokemon/?offset=721&limit=88");
	},
	findGenEightPokemon: () => {
		return router.get("/pokemon/?offset=809&limit=89");
	},
};

export default API;
