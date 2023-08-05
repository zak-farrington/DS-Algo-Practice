const axios = require("axios")

const apiRootUrl = "https://challenges.hackajob.co/swapi/api";

// Given film name and a character, produce two lists:
// 1. All the names of characters who appeared in the given film alphabetically sorted.
// 2. All the names of the films the character appeared in in alphabetically sorted. Return none if character appears in no films.
// This API has very poor design with how it handles it's relationships.
async function run(film, character) {
	let allChars = []
	let allFilms = [];

	const filmSearchResponse = await getFilm(film);
	const charSearchResponse = await getCharacter(character);
	
	allChars = await getCharacterNamesFromEndpoints(filmSearchResponse?.characters);
	allFilms = await getFilmNamesFromEndpoints(charSearchResponse?.films);

	const sortedChars = allChars.sort((a, b) => a.localeCompare(b));
	const sortedFilms = allFilms.sort((a, b) => a.localeCompare(b));

	const filmsAndCharacters = getFilmsAndCharactersString(film, character, sortedChars, sortedFilms);

	return filmsAndCharacters;
}

/**
 * Gets all character names based on list of endpoints.
 */
async function getCharacterNamesFromEndpoints (endpoints) {
	const allChars = [];
		if(Array.isArray(endpoints) && endpoints.length > 0) {
		for(const url of endpoints) {
			const characterResponse = await getApiResponseRaw(url);
			const characterNameToAdd = characterResponse?.name;

			if(characterNameToAdd?.length > 0) {
				allChars.push(characterNameToAdd);
			}
		}
	}

	return allChars;
}

/**
 * Gets all film names based on list of endpoints.
 */
async function getFilmNamesFromEndpoints (endpoints) {
	const allFilms = [];
		if(Array.isArray(endpoints) && endpoints.length > 0) {
		for(const url of endpoints) {
			const filmResponse = await getApiResponseRaw(url);
			const filmNametoAdd = filmResponse?.title;

			if(filmNametoAdd?.length > 0) {
				allFilms.push(filmNametoAdd);
			}
		}
	}

	return allFilms;
}

/** Get Films and Characters String */
function getFilmsAndCharactersString (film, character, filmCharacters, characterFilms) {
	let filmsAndCharacters = ""; 
	
	filmsAndCharacters += `${film}: `;
	filmsAndCharacters += filmCharacters.sort((a, b) => b - a).join(", ");
	filmsAndCharacters += "; ";
	filmsAndCharacters += `${character}: `;
	filmsAndCharacters += characterFilms?.length > 0 ? characterFilms.join(", ") : "none";

	return filmsAndCharacters;
}

/**
 * Returns top character that matches character name.
 */
async function getCharacter (characterName) {
	let response = null;
	const endpoint = `${apiRootUrl}/people/?search=${encodeURIComponent(characterName)}`;
	
	response = await getApiResponseRaw(endpoint);

	return response?.results?.[0];
}

/**
 * Returns top film that matches title.
 */
async function getFilm (filmTitle) {
	let response = null;
	const endpoint = `${apiRootUrl}/films/?search=${encodeURIComponent(filmTitle)}`;
	
	response = await getApiResponseRaw(endpoint);

	return response?.results?.[0];
}

/** 
 * Handle raw API request given URL 
 */
async function getApiResponseRaw (fullyQualifiedEndpoint) {
	return new Promise(async (resolve, reject) => {
		await axios.get(fullyQualifiedEndpoint)
		.then((res) => {
			if(res.status === 200) {
				response = res?.data;
				resolve(response);
			}
			else {
				// Non 200 status
				throw "Non 200 status code";
			}
		})
		.catch((err) => reject(err));	
	});
}

module.exports = {
	run,
	getCharacter,
}