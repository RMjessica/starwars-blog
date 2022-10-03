const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			results: {
				people: [],
				planets: [],
				starships: [],
				vehicles: [],
			},
			favorites: {
				people: [],
				planets: [],
				starships: [],
				vehicles: [],
			},
		},
		actions: {
			getData: async (data_type) => {
				console.log(`Loading ${data_type}...`)

				const local_results = JSON.parse(localStorage.getItem("results"));

				if (local_results !== null && local_results[data_type].length > 0) {
					console.log(`The data type ${data_type} is already in local storage`)
					
					let result = {}
					result[data_type] = [...local_results[data_type]]
					setStore({
						results: {
							...getStore().results,
							...result
						}
					})
					return;
				} 

				const baseURL = `https://swapi.dev/api/${data_type}/`;
				try {						
          const response_1 = await fetch(`${baseURL}`);
          const data_1 = await response_1.json();

					const response_2 = await fetch(`${data_1.next}`);
					const data_2 = await response_2.json();
					
					let result = {}
					result[data_type] = [...data_1.results, ...data_2.results]

					setStore({
						results: {
							...getStore().results,
							...result
						}
					})
					localStorage.setItem("results", JSON.stringify(getStore().results));
	
				} catch (error) {
          console.log(`Error loading message from https://swapi.dev/api/${data_type}/`, error);
        }

			},
			handleFavorites:(data_type, index) => {
					let favorite = {...getStore().favorites}

				if (favorite[data_type].includes(index)) {
					favorite[data_type] = favorite[data_type].filter((e) => e !== index)
				} else {
					favorite[data_type] = [...favorite[data_type], index]
				}
				setStore({favorites: favorite})	
			}
		}
	}
}
export default getState;
