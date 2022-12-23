import type { Config } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { LaunchIcon, RobotIcon } from '@sanity/icons';
import { schemaTypes } from './schemas';

const projectId = 'omwsdwsk';

export default [
	{
		projectId,
		dataset: 'staging',

		name: 'staging',
		icon: RobotIcon,
		title: 'Jakob Bouchard',
		subtitle: 'Staging',
		basePath: '/studio/staging',

		plugins: [deskTool(), visionTool()],

		schema: { types: schemaTypes }
	},
	{
		projectId,
		dataset: 'production',

		name: 'production',
		icon: LaunchIcon,
		title: 'Jakob Bouchard',
		subtitle: 'Live',
		basePath: '/studio/live',

		plugins: [deskTool()],

		schema: { types: schemaTypes }
	}
] satisfies Config;
