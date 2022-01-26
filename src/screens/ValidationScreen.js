import { Button } from '../components/Button';
export function ValidationScreen() {
	return (
		<div className='container'>
			<form>
				<div className='form-group'>
					<div className='row'>
						<div className='col-md-6'>
							<label>Nom</label>
							<input
								id='nom'
								className='form-control'
								type='text'
								name=''
								placeholder='Entrer votre nom'
							/>
						</div>
						<div className='col-md-6'>
							<label>Prénom</label>
							<input
								id='prenom'
								className='form-control'
								type='text'
								name=''
								placeholder='Entrer votre prénom'
							/>
						</div>

						<div className='form-check center'>
							<input className='form-check-input' type='checkbox' />
							<label className='form-check-label'>Peut-on partager ?</label>
						</div>
					</div>
				</div>
			</form>

			<Button text='ENVOYER' callback={() => {}} />
		</div>
	);
}
