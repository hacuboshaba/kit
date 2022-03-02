import colors from 'kleur';
import { logger } from '../utils.js';
import { create_builder } from './builder.js';

/**
 * @param {import('types').ValidatedConfig} config
 * @param {import('types').BuildData} build_data
 * @param {{ verbose: boolean }} opts
 */
export async function adapt(config, build_data, { verbose }) {
	const { name, adapt } = config.kit.adapter;

	console.log(colors.bold().cyan(`\n> Using ${name}`));

	const log = logger({ verbose });
	const builder = create_builder({ config, build_data, log });
	await adapt(builder);

	log.success('done');
}
