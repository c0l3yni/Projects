import calcPriceAndQuantity from "./calcPriceAndQuantity";

const configurePokeObject = (poke) => {
	const { stats } = poke;
	const statsOrganized = {
		hp: { name: "HP", value: stats[0].base_stat },
		atk: { name: "Attack", value: stats[1].base_stat },
		def: { name: "Defense", value: stats[2].base_stat },
		sp_atk: { name: "Special Attack", value: stats[3].base_stat },
		sp_def: { name: "Special Defense", value: stats[4].base_stat },
		speed: { name: "Speed", value: stats[5].base_stat },
	};
	const statTotal =
		statsOrganized.hp.value +
		statsOrganized.atk.value +
		statsOrganized.def.value +
		statsOrganized.sp_atk.value +
		statsOrganized.sp_def.value +
		statsOrganized.speed.value;

	const PQ = calcPriceAndQuantity(statTotal);
	const { price, quantity } = PQ;

	return { ...poke, price, quantity, statTotal, statsOrganized };
};

export default configurePokeObject;
