import PropTypes from 'prop-types';
import { DiGithubBadge } from 'react-icons/di';

import './cardproject.css';

const CardProject = ({ title, progress, icon, status, url }) => {
	const handleClick = (event, url) => {
		event.preventDefault();
		if (!url) return;
		window.open(url, '_blank');
	};

	return (
		<div className='cardproject' onClick={(event) => handleClick(event, url)}>
			<div className='headercard'>
				<p>{title}</p>
				<img src={icon} alt='icon' />
			</div>
			<div className='statuscard'>
				<div
					className={`statuscarddot ${
						status === 'Completed' ? 'dotcomplete' : 'dotinprogress'
					}`}
				></div>
				<p className={status === 'Completed' ? 'completed' : 'inprogress'}>
					{status}
				</p>
			</div>
			<div className='progress'>
				<div
					className={`progress-bar ${
						status === 'Completed' ? 'dotcomplete' : 'dotinprogress'
					}`}
					style={{ width: `${progress}%` }}
				></div>
			</div>
			<div className='progresspercentage' style={{ display: url && 'flex' }}>
				{url && (
					<div className='repository'>
						<p>
							<span>
								<DiGithubBadge />
							</span>
							Ver en Github
						</p>
					</div>
				)}
				{progress}%
			</div>
		</div>
	);
};

CardProject.propTypes = {
	title: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired,
	icon: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default CardProject;
