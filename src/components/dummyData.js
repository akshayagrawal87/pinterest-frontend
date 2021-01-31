<form onSubmit={submitHandler}>
	<div className='form-inner'>
		<h2>Welcome to Pinterest</h2>
		{/*Error!*/}
		<div className='form-group'>
			<label htmlFor='name'>Name</label>
			<input
				type='text'
				name='name'
				id='name'
				placeholder='Name'
				value={details.name}
				onChange={(e) => setDetails({ ...details, name: e.target.value })}
			/>
		</div>

		<div className='form-group'>
			<label htmlFor='email'>Email</label>
			<input
				type='email'
				name='email'
				id='email'
				placeholder='abc@xyux.com'
				value={details.email}
				onChange={(e) => setDetails({ ...details, email: e.target.value })}
			/>
		</div>

		<div className='form-group'>
			<label htmlFor='password'>Password</label>
			<input
				type='password'
				name='password'
				id='password'
				value={details.password}
				onChange={(e) => setDetails({ ...details, password: e.target.value })}
			/>
		</div>
		<input type='submit' value='Login' />
	</div>
</form>;
