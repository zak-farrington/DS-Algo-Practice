describe("Solution", function () {
  	it('Character Search', async () => {
		const charResponse = await getCharacter("R2-D2");

		expect(charResponse?.name).toBe("R2-D2");
    });

	it('Film Search', async () => {
		const filmResponse = await getFilm("A New Hope");

		expect(filmResponse?.title).toBe("A New Hope");
    });
	
	it('getCharacterNamesFromEndpoints retrieves name from endpoint', async () => {
		const response = await getCharacterNamesFromEndpoints([
			"https://challenges.hackajob.co/swapi/api/people/1/"
		]);
		expect(response.indexOf("Luke Skywalker")).toBe(0);
    });

	it('getFilmNamesFromEndpoints retrieves title from endpoint', async () => {
		const response = await getFilmNamesFromEndpoints([
			"https://challenges.hackajob.co/swapi/api/films/1/"
		]);
		expect(response.indexOf("A New Hope")).toBe(0);
    });

});
