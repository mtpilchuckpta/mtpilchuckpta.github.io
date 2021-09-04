// find all the active categories: allActiveCategories
const allActiveCategories = codeGenerationData.filter(category => category.isActive)

// make a list of all that are highlights:  highlightCategories
const highlightCategories = allActiveCategories.filter(category => category.isHighlight)

// make a list of all that have details: detailCategories
const detailCategories = allActiveCategories.filter(category => !category.linkIsExternal)

// build menu links from allActiveCat
allActiveCategories.forEach(category => {
    const newMenuItem = `<li><a href="${category.link}" ${category.linkIsExternal? 'target="_blank"': ''}}>${category.displayName}</a></l>`
	document.querySelector('#quickLinks').innerHTML += newMenuItem; 
});

// build highlights from highlightCategories and insert into page



// build details from detailCatgories and save in javascript object: activeContent



