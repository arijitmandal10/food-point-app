import { shimmer_card_unit, shimmer_menu_card_unit } from '../config';
function ShimmerCard() {
	return (
		<div className='shimmerCard'>
			<img style={{ height: '7.5em' }} src='' alt='' />
			<div>
				<p></p>
				<p></p>
			</div>

			<div>
				<p></p>
			</div>
		</div>
	);
}

export const Shimmer = () => {
	const shimmerCards = Array(15).fill(null);
	const shimmerCardComponents = shimmerCards.map((_, index) => <ShimmerCard key={index} />);

	return (
		<>
			<div className='searchBar'>
				<input type='text' placeholder='search restaurants/food' value='' />
			</div>

			<hr />
			<div className='restaurants'>{shimmerCardComponents}</div>
		</>
	);
};

export const MenuShimmer = () => {
	return (
		<div className='restaurant-menu'>
			<div className='restaurant-summary stroke-color animate'>
				<img className='shimmer-img stroke animate' />
				<div className='restaurant-summary-details'>
					<h2 className='shimmer-w40  stroke animate'></h2>
					<p className='shimmer-w20 stroke animate'></p>
					<div className='shimmer-w60  stroke animate'></div>
				</div>
			</div>

			<div className='restaurant-menu-content'>
				<div className='menu-items-container'>
					<div className='menu-title-wrap '>
						<h3 className='shimmer-w40 stroke animate'></h3>
						<p className='shimmer-w20 stroke animate'></p>
					</div>
					<div className='menu-items-list'>
						{Array(shimmer_menu_card_unit)
							.fill('')
							.map((element, index) => (
								<div className='shimmer-menu-card' key={index}>
									<div className='shimmer-item-details'>
										<h3 className='shimmer-w40  stroke animate'></h3>
										<p className='shimmer-w20  stroke animate'> </p>
										<p className='shimmer-w60  stroke animate'></p>
									</div>
									<div className='shimmer-img-wrapper'>
										<img className='shimmer-img stroke animate' />
										<div className='shimmer-btn stroke animate'> </div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};
