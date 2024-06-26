import {UserList} from './UserList';

export const HW1 = () => {

	const users = [
		{id: 1, name: 'John', age: 25, address: {street: '123 Main St', city: 'New York'}},
		{id: 2, name: 'Alice', age: 30, address: {street: '456 Elm St', city: 'San Francisco'}},
		{id: 3, name: 'Bob', age: 35, address: {street: '789 Oak St', city: 'Seattle'}},
		{id: 4, name: 'John', age: 44, address: {street: '123 Maple Ave', city: 'Dallas'}},
		{id: 5, name: 'Mary', age: 13, address: {street: '456 Elm St', city: 'Los Angeles'}},
		{id: 6, name: 'James', age: 18, address: {street: '987 Pine Rd', city: 'Dallas'}},
		{id: 7, name: 'Jennifer', age: 21, address: {street: '654 Birch Ct', city: 'Seattle'}},
		{id: 8, name: 'Robert', age: 4, address: {street: '876 Spruce Way', city: 'San Francisco'}},
		{
			id: 9,
			name: 'Jessica',
			age: 12,
			address: {street: '543 Willow Dr', city: 'San Francisco'},
		},
		{id: 10, name: 'Emily', age: 55, address: {street: '765 Aspen Blvd', city: 'Los Angeles'}},
	];

	return (
		<div id={'hw01'}>
			<UserList users={users} />
		</div>
	);
};
