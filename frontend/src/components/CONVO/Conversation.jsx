import React from 'react'

const Conversation = () => {
   return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer online "bg-sky-500" : null}`}
			>
				
				<div className={`avatar `}>
					<div className='w-12 rounded-full'>
						<img
							src="data:image/jpeg;base64,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"
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>NAME
						
						
						</p>
						
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
		</>
   )
}

export default Conversation