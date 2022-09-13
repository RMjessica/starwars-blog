const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			results: {
				planets: [],
				people: [],
				starships: [],
				vehicles: [],
			},
			favorites: [],
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
					return
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
          console.log("Error loading message from /api/people", error);
        }

			},
			addFavorite:(element) => {
				const store = getStore();
				const response = store.favorites.filter((favoriteName) => {
					return favoriteName.name === element.name;
				});

				if(response.length <= 0 ){
					const newState = store;
					newState.favorites.push(element);
					
					setStore(
						newState
					);
	
					localStorage.setItem('store', JSON.stringify(store));
				}

			},
			deleteFavorite:(element) => {
				const store = getStore();
				const elementIndex = store.favorites.indexOf(element.name);
				store.favorites.splice(elementIndex, 1);

				setStore(
					store
				);
				
				localStorage.setItem('store', JSON.stringify(store));
			}
		}
	}
}
export default getState;
