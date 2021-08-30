const generateMenuItems = (data) => {
	data.forEach(category => {
		const newMenuItem = `<li><a href="${category.link}" ${category.linkIsExternal? 'target="_blank"': ''}}>${category.displayName}</a></l>`
    	document.querySelector('#quickLinks').innerHTML += newMenuItem; 
	})
}

const getHighlightsHtml = (data) => {
	const promises = data
		.filter(category => category.isActive && category.isHighlight)
		.map(highlightCategory => {
			return fetchHtmlFromFile(`/assets/content/${highlightCategory.name}-overview.html`)
			  .then(html => generateHighlight(highlightCategory, html))
		})
	return promises;	
}

const generateHighlight = (data, overviewHtml) => {
	const missingMessage = `<!-- Expected but did not find well-formed ${data.name}-overview.html file in assets/content. 
		If ${data.name} should be in a highlight square, add or check /assets/content/${data.name}-overview.html -->`
	
	const isExternalLink = Boolean(data.externalLink)
	const link = isExternalLink ? data.externalLink: `javascript:displaySection(${data.name}Section);`

	return `<section id="${data.name}">
  <div class="content">
    <header>
	  <a  href="${link}"
	      ${Boolean(data.icon) ? 'class="icon ' + data.icon + '" ': ''}
		  target="${isExternalLink? '_blank': '_self'}">
		<h3>${data.displayName}</h3>
      </a>
    </header>
	<p>
	${overviewHtml? overviewHtml: missingMessage}
	</p>
  </div>
</section>
` }

const loadDetails = (categoryName) => {
	const detailsBlock = document.querySelector('#detailsBlock') 

	if (!Boolean(categoryName)) {
		detailsBlock.style.display = 'none'
		document.documentElement.scrollTop = 0;
		detailsBlock.innerHTML = '';
		return;
	}

	// const detailsFilename = `/assets/content/${categoryName}-details.html`
	const detailsFilename = `http://kloz4kidz.org/contact.html`	
	fetchHtmlFromFile(detailsFilename).then(html => {
		detailsBlock.innerHTML = html;
		detailsBlock.style.display = 'block';
		detailsBlock.scrollIntoView();
	});
}

async function fetchHtmlFromFile(filename) {
	if (window.location.href.startsWith('file')) {
		return yearbookContent;
	}
	const response = await fetch(filename);
	if (response.status === 200) {
		return response.text();
	}
	else {
		console.log(`Unable to load ${filename}`)
		return `<!-- Missing or malformed ${filename} file -->`
	}
}

