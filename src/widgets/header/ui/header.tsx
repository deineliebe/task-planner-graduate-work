import './header.css';
import styles from '../../../shared/ui/styles.module.css';

import { FC } from 'react';
import { TProject } from '@/shared/model/types';

export type HeaderProps = {
	projects: TProject[];
};

const Header: FC<HeaderProps> = () => (
	<div className='header'>
		<div className='header-block'>
			<select
				className={`header-select ${styles.select} ${styles.isClicked}`}
				name='project-group'
				id='projectGroup'
			>
				<option>Test group</option>
			</select>
		</div>
		<div className='header-block'>
			<p>Settings</p>
			<p>Sign in</p>
		</div>
	</div>
);

export default Header;
