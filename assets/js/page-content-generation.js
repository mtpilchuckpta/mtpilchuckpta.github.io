const insertWelcomeText = () => {
	fetchHtmlFromFile(`/assets/content/page-content/welcome-text.html`).then(html => {
		document.querySelector('#welcome-text') .innerHTML = html;
	});
}

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
			return fetchHtmlFromFile(`/assets/content/category-highlights/${highlightCategory.name}-highlight.html`)
			  .then(html => generateHighlight(highlightCategory, html))
		})
	return promises;	
}

const generateHighlight = (data, highlightHtml) => {
	const missingMessage = `<!-- Expected but did not find well-formed ${data.name}-highlight.html file in assets/content. 
		If ${data.name} should be in a highlight square, add or check /assets/content/${data.name}-highlight.html -->`
	
	const isExternalLink = Boolean(data.externalLink)
	const link = isExternalLink ? data.externalLink: `javascript:loadDetails('${data.name}');`

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
	${highlightHtml? highlightHtml: missingMessage}
	</p>
  </div>
</section>
` }


const loadDetails = (categoryName) => {
	const detailsBlock = document.querySelector('#detailsBlock') 

	if (!Boolean(categoryName)) {
		return noDetails();
	}
	fetchHtmlFromFile(`/assets/content/category-details/${categoryName}-details.html`).then(htmlFromFile => {
		if (htmlFromFile === '') {
			return noDetails();
		}

		detailsBlock.innerHTML = makeDetailsHtml(htmlFromFile);
		detailsBlock.style.display = 'block';
		detailsBlock.scrollIntoView();
	});
}

async function fetchHtmlFromFile(filename) {
	console.log(`fetching ${filename}`)
	const response = await fetch(localSiteLocation + filename);
	if (response.status === 200) {
		return response.text();
	}
	else {
		return ``
	}
}

const makeDetailsHtml = (htmlFromFile) => `
<section class="wrapper">
	<div class="inner">
		<header class="special">
		${htmlFromFile}
		</header>
	</div>
</section>				
`


const noDetails = () => {
	detailsBlock.style.display = 'none'
	document.documentElement.scrollTop = 0;
	detailsBlock.innerHTML = '';
	return;
}
