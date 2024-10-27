// const foodBtn=document.querySelectorAll('.food-menu button')
// const foodList=document.querySelectorAll('.food-item')
// foodBtn.forEach((btn)=>{
// 	btn.addEventListener('click', (e)=>{
// 		const type = e.target.getAttribute('type-food')
// 		document
// 		.querySelector('.food-menu button.active')
// 		.classList.remove('active')
// 		e.target.classList.add('active')
// 	foodList.forEach((item)=>{
// 		if(type=='all'||item.getAttribute('type-food')==type)
// 			item.classList.remove('hide')
// 		else
// 			item.classList.add('hide')
// 	})
// 	})
// })
const foodBtn=document.querySelectorAll('.food-menu button')
const foodList=document.querySelectorAll('.food-item')
foodBtn.forEach((btn)=>{
	btn.addEventListener('click', (e)=>{
		const type = e.target.getAttribute('type-food')
		document
			.querySelector('.food-menu button.active')
			.classList.remove('active')
		e.target.classList.add('active')
		foodList.forEach((item)=>{
			if(type=='all'||item.getAttribute('type-food')==type)
				item.classList.remove('hide')
			else
				item.classList.add('hide')
		})
	})
})
