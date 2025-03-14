function Header(){
	return(
	<nav class="fixed inset-0 z-10 h-10 bg-gray-900 overflow-auto">
		<div class="mx-10 flex justify-between items-center">
			<a href="/" class="text-gray-200 text-2xl font-bold">
				<img 
					href="/"
					src='/src/assets/logo.png'
					className="mt-1 h-8"
				/>
		  	</a>

			<div class="space-x-5">
				<button class="text-gray-400 hover:text-gray-200">
					загрузить
				</button>

				<button class="text-gray-400 hover:text-gray-200">сохранить</button>

				<button class="text-gray-400 hover:text-gray-200">новый проект</button>
			</div>
		</div>
	</nav>
	)
}
export default Header