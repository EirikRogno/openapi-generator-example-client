'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useState } from 'react';
import userApi from '@/lib/apiClient';


export default function CreateUserCard() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = async () => {
		await userApi.createUsers({ createUserRequest: { name, email } });
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Create user</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input
								value={name}
								onChange={(e) => setName(e.target.value)}
								id="name"
								placeholder="Name of the user"
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="email"
								placeholder="Email of the user"
							/>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button onClick={onSubmit}>Create</Button>
			</CardFooter>
		</Card>
	);
}
